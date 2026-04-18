using MySql.Data.MySqlClient;

namespace LigetNapok_WindowsForms
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            LoadDataGridView();
            loadKategoriak();
        }

        public void LoadDataGridView()
        {
            MySqlConnection conn = DataController.CreateConnection();
            string query = "SELECT programok.cim, programok.datum, helyszinek.nev AS helyszin, kategoriak.nev AS kategoria, programok.resztvevok " +
                           "FROM programok " +
                           "INNER JOIN helyszinek ON programok.helyszin_id = helyszinek.helyszin_id " +
                           "INNER JOIN kategoriak ON programok.kategoria_id = kategoriak.kategoria_id";
            MySqlCommand cmd = new MySqlCommand(query, conn);
            MySqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                dataGridView1.Rows.Add(
                    reader["cim"],
                    reader["datum"],
                    reader["helyszin"],
                    reader["kategoria"],
                    reader["resztvevok"]
                );
            }

            DataController.CloseConnection(conn);
        }

        private void SzuresButton_Click(object sender, EventArgs e)
        {
            dataGridView1.Rows.Clear();
            MySqlConnection conn = DataController.CreateConnection();
            string query = "SELECT programok.cim, programok.datum, helyszinek.nev AS helyszin, kategoriak.nev AS kategoria, programok.resztvevok " +
                           "FROM programok " +
                           "INNER JOIN helyszinek ON programok.helyszin_id = helyszinek.helyszin_id " +
                           "INNER JOIN kategoriak ON programok.kategoria_id = kategoriak.kategoria_id " +
                           "WHERE kategoriak.nev = @kategoria";
            MySqlCommand cmd = new MySqlCommand(query, conn);
            cmd.Parameters.AddWithValue("@kategoria", comboBox1.SelectedItem.ToString());
            MySqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                dataGridView1.Rows.Add(reader["cim"], reader["datum"], reader["helyszin"], reader["kategoria"], reader["resztvevok"]);
            }
            DataController.CloseConnection(conn);
        }

        private void ÖsszesButton_Click(object sender, EventArgs e)
        {
            dataGridView1.Rows.Clear();
            LoadDataGridView();
            comboBox1.SelectedIndex = 0;
        }

        private void loadKategoriak()
        {
            comboBox1.Items.Add("Összes");
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

        private void újEseményToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Form2 form2 = new Form2();
            form2.ShowDialog();
            dataGridView1.Rows.Clear();
            LoadDataGridView();
        }

        private void kilépésToolStripMenuItem_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
