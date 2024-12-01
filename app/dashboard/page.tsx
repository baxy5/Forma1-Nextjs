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
import { getJwtToken } from "../utils/auth";

const Dashboard = () => {
  const [pilots, setPilots] = useState<Pilot[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [gp, setGp] = useState<Gp[]>([]);

  const { user, loading } = useContext(AuthContext);

  const fetchAllData = async () => {
    try {
      const token = getJwtToken();

      const pilotsData = await fetchData(
        "http://localhost:8080/api/pilots/pilots"
      );
      setPilots(pilotsData);

      const gpData = await fetchData("http://localhost:8080/api/gp/allgp");
      setGp(gpData);

      if (user && (user.role === "ROLE_ADMIN" || user.role === "ROLE_USER")) {
        const resultsData = await fetchData(
          "http://localhost:8080/api/results/results",
          token
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
      <GpTable data={gp} />
      {user?.role === "ROLE_ADMIN" || user?.role === "ROLE_USER" ? (
        <ResultsTable data={results} />
      ) : null}
    </div>
  );
};

export default Dashboard;
