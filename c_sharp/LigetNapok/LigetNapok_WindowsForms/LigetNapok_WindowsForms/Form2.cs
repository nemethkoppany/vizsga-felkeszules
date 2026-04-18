using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace LigetNapok_WindowsForms
{
    public partial class Form2 : Form
    {
        public Form2()
        {
            InitializeComponent();
            LoadKategoriak();
        }
        private void LoadKategoriak()
        {
            MySqlConnection conn = DataController.CreateConnection();
            string query = "SELECT nev FROM kategoriak";
            MySqlCommand cmd = new MySqlCommand(query, conn);
            MySqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                comboBox1.Items.Add(reader["nev"]);
            }
            DataController.CloseConnection(conn);
            comboBox1.SelectedIndex = 0;
        }

        private void button1_Click(object sender, EventArgs e)
        {
            MySqlConnection conn = DataController.CreateConnection();

            if (string.IsNullOrWhiteSpace(nevTextBox.Text))
            {
                MessageBox.Show("A név nem lehet üres!");
                return;
            }
            if (string.IsNullOrWhiteSpace(helyszinTextBox.Text))
            {
                MessageBox.Show("A helyszín nem lehet üres!");
                return;
            }
            if (numericUpDown1.Value <= 0)
            {
                MessageBox.Show("A résztvevők száma pozitív szám kell legyen!");
                return;
            }



            // Először beszúrja a helyszínt ha még nincs benne
            string helyszinQuery = "INSERT IGNORE INTO helyszinek (nev) VALUES (@nev)";
            MySqlCommand helyszinCmd = new MySqlCommand(helyszinQuery, conn);
            helyszinCmd.Parameters.AddWithValue("@nev", helyszinTextBox.Text);
            helyszinCmd.ExecuteNonQuery();

            // Majd beszúrja a programot
            string query = "INSERT INTO programok (cim, datum, helyszin_id, kategoria_id, resztvevok) " +
                           "VALUES (@cim, @datum, " +
                           "(SELECT helyszin_id FROM helyszinek WHERE nev = @helyszin), " +
                           "(SELECT kategoria_id FROM kategoriak WHERE nev = @kategoria), " +
                           "@resztvevok)";
            MySqlCommand cmd = new MySqlCommand(query, conn);
            cmd.Parameters.AddWithValue("@cim", nevTextBox.Text);
            cmd.Parameters.AddWithValue("@datum", dateTimePicker1.Value.ToString("yyyy-MM-dd"));
            cmd.Parameters.AddWithValue("@helyszin", helyszinTextBox.Text);
            cmd.Parameters.AddWithValue("@kategoria", comboBox1.SelectedItem.ToString());
            cmd.Parameters.AddWithValue("@resztvevok", (int)numericUpDown1.Value);
            cmd.ExecuteNonQuery();

            DataController.CloseConnection(conn);
            this.Close();
        }
    }
}
