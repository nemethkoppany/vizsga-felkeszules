using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LigetNapok_WindowsForms
{
    internal class DataController
    {
        public static MySqlConnection CreateConnection()
        {
            MySqlConnectionStringBuilder builder = new MySqlConnectionStringBuilder();
            builder.CharacterSet = "utf8";
            builder.Database = "liget_napok";
            builder.UserID = "root";
            builder.Server = "localhost";

            MySqlConnection conn = new MySqlConnection(builder.ToString());
            conn.Open();
            return conn;
        }

        public static void CloseConnection(MySqlConnection conn)
        {
            conn.Close();
        }
    }
}
