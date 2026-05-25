using MySql.Data.MySqlClient;

namespace Fuggohidak
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            LoadDataGridview();
        }

        public void LoadDataGridview()
        {
            MySqlConnection conn = DataBaseController.createConnection();
            string query = "SELECT * FROM fuggohidak";
            MySqlCommand cmd = new MySqlCommand(query, conn);
            MySqlDataReader reader = cmd.ExecuteReader();

            while (reader.Read())
            {
                dataGridView1.Rows.Add(reader["Helyezés"], reader["Híd"], reader["Hely"], reader["Ország"], reader["Év"], reader["Hossz"]);
            }
            DataBaseController.CloseConnection(conn);
        }

        private void keresesButton_Click(object sender, EventArgs e)
        {
            dataGridView1.Rows.Clear();
            MySqlConnection conn = DataBaseController.createConnection();
            string query = "SELECT * FROM fuggohidak WHERE `Év` > @tol AND `Év` < @ig";
            MySqlCommand cmd = new MySqlCommand(query,conn);
            cmd.Parameters.AddWithValue("@tol", numericUpDownTOL.Value);
            cmd.Parameters.AddWithValue("@ig",numericUpDownIG.Value);
            MySqlDataReader reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                dataGridView1.Rows.Add(reader["Helyezés"], reader["Híd"], reader["Hely"], reader["Ország"], reader["Év"], reader["Hossz"]);
            }
            DataBaseController.CloseConnection(conn);
        }
    }
}
