"use client";
import React, { useEffect, useState } from "react";
import PilotsTable from "../components/PilotsTable";
import Pilot from "../interfaces/Pilot";
import fetchData from "../utils/fetch-api";
import ResultsTable from "../components/ResultsTable";
import Result from "../interfaces/Result";

const Home = () => {
  const [pilots, setPilots] = useState<Pilot[]>([]);
  const [results, setResults] = useState<Result[]>([]);

  const fetchAllData = async () => {
    const pilots = await fetchData("http://localhost:8080/api/pilots/pilots");
    setPilots(pilots);
    const results = await fetchData(
      "http://localhost:8080/api/results/results"
    );
    setResults(results);
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  return (
    <div>
      <PilotsTable data={pilots} />
      <ResultsTable data={results} />
    </div>
  );
};

export default Home;
