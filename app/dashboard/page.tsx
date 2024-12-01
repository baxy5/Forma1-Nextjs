"use client";
import React, { useContext, useEffect, useState } from "react";
import PilotsTable from "../components/PilotsTable";
import Pilot from "../interfaces/Pilot";
import fetchData from "../utils/fetch-api";
import ResultsTable from "../components/ResultsTable";
import Result from "../interfaces/Result";
import Gp from "../interfaces/Gp";
import { GpTable } from "../components/GpTable";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const [pilots, setPilots] = useState<Pilot[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [gp, setGp] = useState<Gp[]>([]);

  const { user, loading } = useContext(AuthContext);

  const fetchAllData = async () => {
    try {
      const pilotsData = await fetchData(
        "http://localhost:8080/api/pilots/pilots"
      );
      setPilots(pilotsData);

      const gpData = await fetchData("http://localhost:8080/api/gp/allgp");
      setGp(gpData);

      if (user && (user.role === "ADMIN" || user.role === "USER")) {
        const resultsData = await fetchData(
          "http://localhost:8080/api/results/results"
        );
        setResults(resultsData);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (!loading) {
      fetchAllData();
    }
  }, [loading, user]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <PilotsTable data={pilots} />
      {/* <ResultsTable data={results} /> */}
      <GpTable data={gp} />
    </div>
  );
};

export default Dashboard;
