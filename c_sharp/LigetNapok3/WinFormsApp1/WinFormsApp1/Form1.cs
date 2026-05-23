using MySql.Data.MySqlClient;

namespace WinFormsApp1
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            LoadDataGridView();
            LoadKategoraik();
        }

        public void LoadDataGridView()
        {
            MySqlConnection conn = DataController.createConnection();
            string query = "SELECT programok.cim, programok.datum, helyszinek.nev as helyszin, kategoriak.nev AS kategoria, programok.resztvevok " +
                "FROM programok " +
                "INNER JOIN helyszinek ON programok.helyszin_id = helyszinek.helyszin_id " +
                "INNER JOIN kategoriak ON programok.kategoria_id = kategoriak.kategoria_id";

            MySqlCommand cmd = new MySqlCommand(query, conn);
            MySqlDataReader read = cmd.ExecuteReader();

            while (read.Read())
            {
                dataGridView1.Rows.Add(
                    read["cim"],
                    read["datum"],
                    read["helyszin"],
                    read["kategoria"],
                    read["resztvevok"]
                    );
            }
            ;
            DataController.CloseConnection(conn);
        }

        public void LoadKategoraik()
        {
            comboBox1.Items.Add("Összes");
            MySqlConnection conn = DataController.createConnection();

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

        private void osszesButton_Click(object sender, EventArgs e)
        {
            dataGridView1.Rows.Clear();
            LoadDataGridView();
            comboBox1.SelectedIndex = 0;
        }

        private void szuresButton_Click(object sender, EventArgs e)
        {
            dataGridView1.Rows.Clear();
            MySqlConnection conn = DataController.createConnection();
            string query = "SELECT programok.cim, programok.datum, helyszinek.nev AS helyszin, kategoriak.nev AS kategoria, programok.resztvevok " +
                           "FROM programok " +
                           "INNER JOIN helyszinek ON programok.helyszin_id = helyszinek.helyszin_id " +
                           "INNER JOIN kategoriak ON programok.kategoria_id = kategoriak.kategoria_id ";

            if(comboBox1.SelectedItem != "Összes")
            {
                query += "WHERE kategoriak.nev = @kategoria";
            }

            MySqlCommand cmd = new MySqlCommand( query, conn);

            cmd.Parameters.AddWithValue("@kategoria",comboBox1.SelectedItem.ToString());
            MySqlDataReader reader = cmd.ExecuteReader();
            while(reader.Read())
            {
                dataGridView1.Rows.Add(reader["cim"], reader["datum"], reader["helyszin"], reader["kategoria"], reader["resztvevok"]);
            }
            DataController.CloseConnection(conn);
        
        }

        private void kilépésToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
