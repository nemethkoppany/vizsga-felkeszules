namespace Liget_Napok_Nemeth_Koppany
{
    internal class Program
    {
        static void Main(string[] args)
        {
            string[] lines = File.ReadAllLines("liget_napok.txt");
            List<LigetNapok> ligetek = new List<LigetNapok>();
            foreach (string line in lines.Skip(1))
            {
                LigetNapok liget = new LigetNapok(line);
                ligetek.Add(liget);
            }
            {
                Console.WriteLine("2. feladat: Az adatok feldolgozása megtörtént.");

                Console.WriteLine($"3. feladat: A forrásfájlban található programok száma: {ligetek.Count}");  

                Dictionary<string, int> programKategoriankent = new Dictionary<string, int>();

                foreach(var liget in ligetek)
                {
                    if (programKategoriankent.ContainsKey(liget.Kategoria))
                    {
                        programKategoriankent[liget.Kategoria]++;
                    }
                    else
                    {
                        programKategoriankent.Add(liget.Kategoria, 1);
                    }
                }

                foreach(var (k,v) in programKategoriankent.OrderBy(x => x.Key))
                {
                    Console.WriteLine($"{k}: {v} db");
                }

                var atlag = ligetek.Where(k => k.Helyszin == "Liget Színpad").Average(x => x.Resztvevok);
                Console.WriteLine($"5. feladat: A Liget Színpadon tartott programok átlagos résztvevőszáma: {atlag:F2}");

                Console.WriteLine("6. feladat: Kérek egy kategóriát: ");
                var bekert = Console.ReadLine();
                List<string> kimenetLista = new List<string>();
                kimenetLista.Add("azon\tcim\thelyszin\tdatum\tkategoria\tresztvevok\t");

                foreach(var li in ligetek)
                {
                    if(li.Kategoria.ToLower() == bekert.ToLower())
                    {
                        kimenetLista.Add($"{li.Azon}\t{li.Cim}\t{li.Helyszin}\t{li.Datum}\t{li.Kategoria}\t{li.Resztvevok}");
                    }
                    
                }
                if(kimenetLista.Count == 1)
                {
                    Console.WriteLine("A megadott kategóriához nem tartozik egyetlen program sem!");
                }
                else
                {
                    File.WriteAllLines("kimenet.txt", kimenetLista);
                }

                    


            }
        }
    }
}
