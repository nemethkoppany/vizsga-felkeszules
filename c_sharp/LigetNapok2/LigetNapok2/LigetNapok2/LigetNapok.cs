using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LigetNapok2
{
    internal class LigetNapok
    {
        public int Azon {  get; set; }
        public string Cim {  get; set; }
        public string Helyszin { get; set; }
        public DateTime Datum { get; set; }
        public string Kategoria { get; set; }
        public int Resztveveok {  get; set; }

        public LigetNapok(int azon, string cim, string helyszin, DateTime datum, string kategoria, int resztvevok)
        {
            Azon = azon;
            Cim = cim;
            Helyszin = helyszin;
            Datum = datum;
            Kategoria = kategoria;
            Resztveveok = resztvevok;
        }
    }
}
