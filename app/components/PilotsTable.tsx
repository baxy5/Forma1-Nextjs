import React, { useEffect, useState } from "react";
import Pilot from "../interfaces/Pilot";

const PilotsTable = ({ data }: { data: Pilot[] }) => {
  const [filteredData, setFilteredData] = useState<Pilot[]>([]);
  const [query, setQuery] = useState<string>("");
  const [natQuery, setNatQuery] = useState<string>("");
  const [fromPage, setFromPage] = useState<number>(0);
  const [toPage, setToPage] = useState<number>(10);
  const [disabled, setDisabled] = useState<boolean>(true);

  const onNameSearch = (query: string) => {
    setQuery(query);
    const filtered = data.filter((d) =>
      d.nev.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered);
  };

  const onNatSearch = (query: string) => {
    setNatQuery(query);
    const filtered = data.filter((d) =>
      d.nemzet.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredData(filtered);
  };

  function nextPage() {
    setFromPage((prev) => prev + 10);
    setToPage((prev) => prev + 10);
  }

  function prevPage() {
    if (fromPage > 0) {
      setFromPage((prev) => prev - 10);
      setToPage((prev) => prev - 10);
    }
  }

  useEffect(() => {
    if (fromPage > 0) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [fromPage]);

  return (
    <div className="py-24">
      <section className="p-6 max-w-2xl mx-auto rounded-lg border border-gray-200">
        <h1 className="text-3xl font-semibold text-center pb-2">Pilóták</h1>
        <div className="mb-6 grid grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Keresés név szerint..."
            className="px-2 py-2 text-sm rounded-lg border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            value={query}
            onChange={(e) => onNameSearch(e.target.value)}
          />
          <select
            className="px-2 py-2 text-sm shadow-md rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
            value={natQuery}
            onChange={(e) => onNatSearch(e.target.value)}
          >
            <option value="">Nemzetiség</option>
            {[...new Set(data.map((pilot) => pilot.nemzet))].map((nemzet) => (
              <option key={nemzet} value={nemzet}>
                {nemzet}
              </option>
            ))}
          </select>
          <select className="px-2 py-2 text-sm shadow-md rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200">
            <option value="">Születés</option>
            <option value="asc">Növekvő sorrend</option>
            <option value="desc">Csökkenő sorrend</option>
          </select>
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-4 text-left text-sm font-medium text-gray-600">
                Név
              </th>
              <th className="py-4 text-left text-sm font-medium text-gray-600">
                Nem
              </th>
              <th className="py-4 text-left text-sm font-medium text-gray-600">
                Születés
              </th>
              <th className="py-4 text-left text-sm font-medium text-gray-600">
                Nemzetiség
              </th>
            </tr>
          </thead>
          <tbody>
            {(filteredData.length > 0 ? filteredData : data)
              .slice(query ? 0 : fromPage, query ? undefined : toPage)
              .map((pilot, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 text-sm text-gray-800">{pilot.nev}</td>
                  <td className="py-3 text-sm text-gray-800">{pilot.nem}</td>
                  <td className="py-3 text-sm text-gray-800">
                    {new Date(pilot.szuldat).toLocaleDateString()}
                  </td>
                  <td className="py-3 text-sm text-gray-800">{pilot.nemzet}</td>
                </tr>
              ))}
          </tbody>
        </table>

        {query ? null : (
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-600">
              <span className="font-medium">{fromPage + 1}</span> -{" "}
              <span className="font-medium">{toPage}</span>{" "}
              <span className="font-medium">({data.length}</span> összesen)
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1 text-sm border rounded-md hover:bg-gray-50 disabled:opacity-50"
                disabled={disabled}
                onClick={() => prevPage()}
              >
                Előző
              </button>
              <button
                className="px-3 py-1 text-sm border rounded-md hover:bg-gray-50"
                onClick={() => nextPage()}
              >
                Következő
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default PilotsTable;
