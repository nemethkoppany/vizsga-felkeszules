using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Liget_Napok_Nemeth_Koppany
{
    internal class LigetNapok
    {
        public int Azon {  get; set; }
        public string Cim {  get; set; }
        public string Helyszin {  get; set; }
        public DateTime Datum { get; set; }
        public string Kategoria { get; set; }
        public int Resztvevok {  get; set; }

        public LigetNapok(string line)
        {
            string[] lineParts = line.Split("\t");
            Azon = int.Parse(lineParts[0]);
            Cim = lineParts[1];
            Helyszin = lineParts[2];
            Datum = DateTime.Parse(lineParts[3]);
            Kategoria = lineParts[4];
            Resztvevok = int.Parse(lineParts[5]);
        }
    }


}
