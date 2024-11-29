import React from "react";
import Result from "../interfaces/Result";

const ResultsTable = ({ data }: { data: Result[] }) => {
  return (
    <div className="py-24">
      <section className="p-6 max-w-2xl mx-auto rounded-lg border border-gray-200">
        <h1 className="text-3xl font-semibold text-center pb-2">Eredmények</h1>

        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="py-4 text-left text-sm font-medium text-gray-600">
                Dátum
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
          <tbody></tbody>
        </table>
      </section>
    </div>
  );
};

export default ResultsTable;
