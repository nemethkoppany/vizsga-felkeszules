namespace LigetNapok
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] lines = File.ReadAllLines("liget_napok.txt");
            List<LigetNap> ligetNaps = new List<LigetNap>();

            foreach (string line in lines.Skip(1))
            {
                string[] lineparts = line.Split("\t");
                LigetNap LigetNapok = new LigetNap(
                    azon: int.Parse(lineparts[0]),
                    cim: lineparts[1],
                    helyszin: lineparts[2],
                    datum: DateTime.Parse(lineparts[3]),
                    kategoria: lineparts[4],
                    resztvevok: int.Parse(lineparts[5])
                    );
                ligetNaps.Add( LigetNapok );
            }

            Console.WriteLine(ligetNaps.Count);
            Dictionary<string, int> keyValuePairs = new Dictionary<string, int>();

            foreach (var s in ligetNaps)
            {
                if (!keyValuePairs.ContainsKey(s.Kategoria))
                {
                    keyValuePairs.Add(s.Kategoria, 1);
                }
                else
                {
                    keyValuePairs[s.Kategoria]++;
                }
            }

            foreach(var (k,v) in keyValuePairs.OrderBy(x => x.Key))
            {
                Console.WriteLine($"{k}:{v} db");
            }

            var legtobb_resztvevo = ligetNaps.Max(x=>x.Resztvevok);
            Console.WriteLine(legtobb_resztvevo);

            var atlag = ligetNaps.Where(x => x.Helyszin == "Liget Színpad").Average(x => x.Resztvevok);
            Console.WriteLine($"{atlag:F2}");
        }
    }
}
