export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 pt-24">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-6">BlueBull</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
          Merülj el a Forma-1 izgalmaiban a platformunkon! Böngéssz a
          futamgyőztesek, legendás pilóták és részletes eredmények között egy
          helyen. Vedd fel a kapcsolatot az adminnal, és oszd meg velünk
          véleményed!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Nagydíj áttekintés
            </h3>
            <p className="text-gray-600">
              Tekintsd meg a Nagydíj győzteseinek részletes listáját, beleértve
              a futamok dátumait és ikonikus helyszíneit.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Pilóta adatbázis
            </h3>
            <p className="text-gray-600">
              Érd el az összes Forma-1-es pilóta listáját, a legendáktól kezdve
              az újoncokig, gyors hozzáféréssel az eredményeikhez.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Versenyeredmények
            </h3>
            <p className="text-gray-600">
              Kövesd nyomon a legfrissebb futamok kimenetelét és a történelmi
              eredményeket, világosan és áttekinthetően bemutatva.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Üzenet az adminnak
            </h3>
            <p className="text-gray-600">
              Kérdésed vagy javaslatod van? Használd az üzenetküldő funkciót,
              hogy közvetlenül kapcsolatba léphess az adminnal.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Dinamikus keresés és szűrés
            </h3>
            <p className="text-gray-600">
              Találd meg gyorsan, amit keresel, a pilótákra, versenyekre és
              eredményekre kiterjedő hatékony keresési és szűrési opciókkal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
