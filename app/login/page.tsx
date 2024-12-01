"use client";
import React, { useContext, useState } from "react";
import { setToken } from "../utils/auth";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();
  const { login } = useContext(AuthContext);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fetchLogin = async (e: any) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          felhasznalonev: username,
          jelszo: pass,
        }),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Login failed");
      }

      const data = await response.json();
      const token = data.token;
      setToken(token);
      login(token);
      setTimeout(() => {
        router.push("/");
      }, 100);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8">
        <h1 className="text-3xl font-semibold text-gray-900 text-center mb-8">
          Bejelentkezés
        </h1>
        <form className="space-y-6" method="POST" onSubmit={fetchLogin}>
          <div>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              type="username"
              placeholder="Felhasználónév"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all"
              type="password"
              placeholder="Jelszó"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Bejelentkezés
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
