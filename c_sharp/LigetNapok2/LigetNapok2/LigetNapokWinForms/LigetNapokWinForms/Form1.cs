using MySql.Data.MySqlClient;

namespace LigetNapokWinForms
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            loadMenu();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }

        private void újEseméToolStripMenuItem_Click(object sender, EventArgs e)
        {

        }

        public void loadMenu()
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

        }

        public static void loadDataGrid()
        {

        }
    }
}
