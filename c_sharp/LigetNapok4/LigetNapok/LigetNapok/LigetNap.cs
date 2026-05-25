using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LigetNapok
{
    internal class LigetNap
    {
        public int Azon { get; set; }
        public string Cim {  get; set; }
        public string Helyszin {  get; set; }
        public DateTime Datum { get; set; }
        public string Kategoria { get; set; }
        public int Resztvevok {  get; set; }

        public LigetNap(int azon, string cim, string helyszin, DateTime datum, string kategoria, int resztvevok)
        {
            Azon = azon;
            Cim = cim;
            Helyszin = helyszin;
            Datum = datum;
            Kategoria = kategoria;
            Resztvevok = resztvevok;
        }
    }
}
