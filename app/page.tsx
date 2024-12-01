export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 pt-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob top-0 left-0"></div>
        <div className="absolute w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000 top-0 right-0"></div>
        <div className="absolute w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000 bottom-0 left-1/2"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
        <h1 className="text-7xl font-bold text-white mb-6 tracking-tight animate-fade-in-down">
          BlueBull
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up">
          Merülj el a Forma-1 izgalmaiban a platformunkon! Böngéssz a
          futamgyőztesek, legendás pilóták és részletes eredmények között egy
          helyen. Vedd fel a kapcsolatot az adminnal, és oszd meg velünk
          véleményed!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl hover:transform hover:scale-105 transition-all duration-300 border border-white/20">
            <div className="text-blue-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Nagydíj áttekintés
            </h3>
            <p className="text-gray-300">
              Tekintsd meg a Nagydíj győzteseinek részletes listáját, beleértve
              a futamok dátumait és ikonikus helyszíneit.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl hover:transform hover:scale-105 transition-all duration-300 border border-white/20">
            <div className="text-blue-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Pilóta adatbázis
            </h3>
            <p className="text-gray-300">
              Érd el az összes Forma-1-es pilóta listáját, a legendáktól kezdve
              az újoncokig, gyors hozzáféréssel az eredményeikhez.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl hover:transform hover:scale-105 transition-all duration-300 border border-white/20">
            <div className="text-blue-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Versenyeredmények
            </h3>
            <p className="text-gray-300">
              Kövesd nyomon a legfrissebb futamok kimenetelét és a történelmi
              eredményeket, világosan és áttekinthetően bemutatva.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl hover:transform hover:scale-105 transition-all duration-300 border border-white/20">
            <div className="text-blue-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Üzenet az adminnak
            </h3>
            <p className="text-gray-300">
              Kérdésed vagy javaslatod van? Használd az üzenetküldő funkciót,
              hogy közvetlenül kapcsolatba léphess az adminnal.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-xl hover:transform hover:scale-105 transition-all duration-300 border border-white/20">
            <div className="text-blue-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 mx-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">
              Dinamikus keresés és szűrés
            </h3>
            <p className="text-gray-300">
              Találd meg gyorsan, amit keresel, a pilótákra, versenyekre és
              eredményekre kiterjedő hatékony keresési és szűrési opciókkal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
