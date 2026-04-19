using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LigetNapokWinForms
{
    internal class DataController
    {
        public static MySqlConnection CreateConnection()
        {
            MySqlConnectionStringBuilder buidler = new MySqlConnectionStringBuilder();
            buidler.Server = "localhost";
            buidler.Database = "liget_napok";
            buidler.CharacterSet = "utf8";
            buidler.UserID = "root";

            MySqlConnection conn = new MySqlConnection(buidler.ToString());
            conn.Open();
            return conn;
        }

        public static void CloseConnection(MySqlConnection conn)
        {
            conn.Close();
        }
    }
}
