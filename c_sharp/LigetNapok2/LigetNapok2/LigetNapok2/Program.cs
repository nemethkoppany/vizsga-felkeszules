namespace LigetNapok2
{
    internal class Program
    {
        static void Main(string[] args)
        {
            List<LigetNapok> ligetNap = new List<LigetNapok>();
            var sorok = File.ReadAllLines("liget_napo.txt").Skip(1);
            foreach (var s in sorok)
            {
                var sor = s.Split("\t");
                int azon = int.Parse(sor[0]);
                string cim = sor[1];
                string helyszin = sor[2];
                DateTime datum = DateTime.Parse(sor[3]);
                string kategoria = sor[4];
                int resztvevok = int.Parse(sor[5]);
                ligetNap.Add(new LigetNapok(azon, cim, helyszin, datum, kategoria, resztvevok));
            }

            Console.WriteLine(ligetNap.Count);

            ligetNap.GroupBy(x => x.Kategoria).OrderBy(x=>x.Key).ToList().ForEach(x => Console.WriteLine($"{x.Key}: {x.Count()} db"));

            var atlag = ligetNap.Where(x => x.Helyszin == "Liget Színpad").Average(x => x.Resztveveok);

            Console.WriteLine($"A Liget Színpad helyszín átlagos nézőszáma: {atlag:F2}");

            Console.WriteLine("Kérek egy kategóriát: ");
            var bekert = Console.ReadLine();
            List<string> list = new List<string>();

            list.Add("azon\tcim\thelyszin\tdatum\tkategoria\tresztvevok");
            foreach(var nap in ligetNap)
            {
                if(bekert == nap.Kategoria)
                {
                    list.Add($"{nap.Azon}\t{nap.Cim}\t{nap.Helyszin}\t{nap.Datum}\t{nap.Kategoria}\t{nap.Resztveveok}");
                }
            }
            if(list.Count == 1)
            {
                Console.WriteLine("Nincs ilyen kategória");
            }
            else
            {
                File.WriteAllLines("kimenet.txt", list);
            }
        }
    }
}
