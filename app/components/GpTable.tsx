import React, { useEffect, useState } from "react";
import Gp from "../interfaces/Gp";

export const GpTable = ({ data }: { data: Gp[] }) => {
  const [filteredData, setFilteredData] = useState<Gp[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [fromPage, setFromPage] = useState<number>(0);
  const [toPage, setToPage] = useState<number>(10);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  function onSearch(input: string) {
    setSearchQuery(input);
    const filtered = data.filter(
      (d) =>
        d.nev.toLowerCase().includes(input.toLowerCase()) ||
        d.helyszin.toLowerCase().includes(input.toLowerCase())
    );

    setFilteredData(filtered);
  }

  function nextPage() {
    if (data.length > toPage) {
      setFromPage((prev) => prev + 10);
      setToPage((prev) => prev + 10);
    }
  }

  function prevPage() {
    if (fromPage > 0) {
      setFromPage((prev) => prev - 10);
      setToPage((prev) => prev - 10);
    }
  }

  useEffect(() => {
    if (fromPage > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [fromPage]);

  return (
    <div className="py-24">
      <section className="p-6 max-w-2xl mx-auto rounded-lg border border-gray-200">
        <h1 className="text-3xl font-semibold text-center pb-2">Grand Prix</h1>

        <div className="mb-6 w-full">
          <input
            type="text"
            placeholder="Keresés..."
            className="w-full px-2 py-2 text-sm rounded-lg border border-gray-200 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-4 text-left text-sm font-medium text-gray-600 flex items-center gap-2">
                Dátum
              </th>
              <th className="py-4 text-left text-sm font-medium text-gray-600">
                Név
              </th>
              <th className="py-4 text-left text-sm font-medium text-gray-600">
                Helyszin
              </th>
            </tr>
          </thead>
          <tbody>
            {(filteredData.length > 0 ? filteredData : data)
              .slice(fromPage, toPage)
              .map((gp, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 text-sm text-gray-800">
                    {new Date(gp.date).toLocaleDateString()}
                  </td>
                  <td className="py-3 text-sm text-gray-800">{gp.nev}</td>
                  <td className="py-3 text-sm text-gray-800">{gp.helyszin}</td>
                </tr>
              ))}
          </tbody>
        </table>

        {searchQuery ? null : (
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-600">
              <span className="font-medium">{fromPage + 1}</span> -{" "}
              <span className="font-medium">{toPage}</span>{" "}
              <span className="font-medium">({data.length}</span> összesen)
            </div>
            <div className="flex items-center space-x-2">
              <button
                className="px-3 py-1 text-sm border rounded-md hover:bg-gray-50 disabled:opacity-50"
                disabled={isDisabled}
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
