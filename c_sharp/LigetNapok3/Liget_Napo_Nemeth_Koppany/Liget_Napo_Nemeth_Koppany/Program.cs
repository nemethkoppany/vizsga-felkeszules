namespace Liget_Napo_Nemeth_Koppany
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] lines = File.ReadAllLines("liget_napok.txt");
            List<LigetNap> ligetnapok = new List<LigetNap>();

            foreach (string line in lines.Skip(1))
            {
                string[] lineparts = line.Split("\t");
                LigetNap ligetnap = new LigetNap(
                    azon: int.Parse(lineparts[0]),
                    cim: lineparts[1],
                    helyszin: lineparts[2],
                    datum: DateTime.Parse(lineparts[3]),
                    kategoria: lineparts[4],
                    resztvevok: int.Parse(lineparts[5])
                    );
                ligetnapok.Add( ligetnap );
            }

            Console.WriteLine("2. feladat: Az adatok feldolgozása megtörtént.");
            Console.WriteLine($"3. feladat: A forrásfájlban található programok száma: {ligetnapok.Count}");

            Console.WriteLine("4. feladat");
            //ligetnapok.GroupBy(x => x.Kategoria).OrderBy(x=>x.Key).ToList().ForEach(X=> Console.WriteLine($"{X.Key}: {X.Count()} db"));

            // VAGY 

            Dictionary<string, int> keyValuePairs = new Dictionary<string, int>();

            foreach(var s in ligetnapok)
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
                Console.WriteLine($"{k}: {v} db");
            }


            Console.WriteLine("5. feladat");
            var atlag = ligetnapok.Where(x => x.Helyszin == "Liget Színpad").Average(x => x.Resztvevok);

            Console.WriteLine($"5. feladat: A Liget Színpadon tartott programok átlagos résztvevőszáma: {atlag:F2}");

            Console.Write("6. feladat: Kérek egy kategóriát ");
            var bekert = Console.ReadLine();

            List<string> kategoriak = new List<string>();
            kategoriak.Add("azon\tcim\thelyszin\tdatum\tkategoria\tresztvevok");
            foreach(var s in ligetnapok)
            {
                if(s.Kategoria == bekert)
                {
                    kategoriak.Add($"{s.Azon}\t{s.Cim}\t{s.Helyszin}\t{s.Datum}\t{s.Kategoria}\t{s.Resztvevok}");
                }
            }
            if( kategoriak.Count == 1)
            {
                Console.WriteLine("A megadott kategóriához nem tartozik egyetlen program sem!");
            }
            else
            {
                File.WriteAllLines("kimenet.txt", kategoriak);
                
            }

        }
    }
}
