import React, { useEffect, useState } from "react";
import Result from "../interfaces/Result";

const ResultsTable = ({ data }: { data: Result[] }) => {
  const [filteredData, setFilteredData] = useState<Result[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [fromPage, setFromPage] = useState<number>(0);
  const [toPage, setToPage] = useState<number>(10);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  function onSearch(input: string) {
    setSearchQuery(input);
    const filtered = data.filter(
      (d) =>
        d.csapat?.toLowerCase().includes(input.toLowerCase()) ||
        d.motor.toLowerCase().includes(input.toLowerCase()) ||
        d.tipus.toLowerCase().includes(input.toLowerCase())
    );

    setFilteredData(filtered);
  }

  function sortByDate(direction: "asc" | "desc") {
    setSortDirection(direction);
    const sorted = [...(filteredData.length > 0 ? filteredData : data)].sort(
      (a, b) => {
        const dateA = new Date(a.datum).getTime();
        const dateB = new Date(b.datum).getTime();
        return direction === "asc" ? dateA - dateB : dateB - dateA;
      }
    );
    setFilteredData(sorted);
  }

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
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [fromPage]);

  return (
    <div className="py-24">
      <section className="p-6 max-w-2xl mx-auto rounded-lg border border-gray-200">
        <h1 className="text-3xl font-semibold text-center pb-2">Eredmények</h1>

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
                <span>Dátum</span>
                <button
                  onClick={() =>
                    sortByDate(sortDirection === "asc" ? "desc" : "asc")
                  }
                  className="hover:bg-gray-100 p-1 rounded"
                >
                  {sortDirection === "asc" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
              </th>
              <th className="py-4 text-left text-sm font-medium text-gray-600">
                Csapat
              </th>
              <th className="py-4 text-left text-sm font-medium text-gray-600">
                Helyezés
              </th>
              <th className="py-4 text-left text-sm font-medium text-gray-600">
                Típus
              </th>
              <th className="py-4 text-left text-sm font-medium text-gray-600">
                Motor
              </th>
            </tr>
          </thead>
          <tbody>
            {(filteredData.length > 0 ? filteredData : data)
              .slice(fromPage, toPage)
              .map((result, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors"
                >
                  <td className="py-3 text-sm text-gray-800">
                    {new Date(result.datum).toLocaleDateString()}
                  </td>
                  <td className="py-3 text-sm text-gray-800">
                    {result.csapat}
                  </td>
                  <td className="py-3 text-sm text-gray-800">
                    {result.helyezes}
                  </td>
                  <td className="py-3 text-sm text-gray-800">{result.tipus}</td>
                  <td className="py-3 text-sm text-gray-800">{result.motor}</td>
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

export default ResultsTable;
