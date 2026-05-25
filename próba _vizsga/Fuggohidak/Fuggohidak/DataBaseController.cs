using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Fuggohidak
{
    internal class DataBaseController
    {
        public static MySqlConnection createConnection()
        {
            MySqlConnectionStringBuilder builder = new MySqlConnectionStringBuilder();
            builder.Server = "localhost";
            builder.CharacterSet = "utf8";
            builder.Database = "hidak";
            builder.Password = "";
            builder.UserID = "root";

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
