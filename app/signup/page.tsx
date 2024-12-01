"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function signUp(e: any) {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/users/signup", {
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
        throw new Error(errorMessage || "Signup failed");
      }

      const data = await response.json();
      console.log("Signup successful:", data);
      router.push("/login");
    } catch (err) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setError("User already exists.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8">
        <h1 className="text-3xl font-light text-gray-900 text-center mb-8">
          Regisztráció
        </h1>
        <form className="space-y-6" method="POST" onSubmit={signUp}>
          <div>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all text-gray-800 placeholder-gray-400"
              type="text"
              placeholder="Felhasználónév"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all text-gray-800 placeholder-gray-400"
              type="password"
              placeholder="Jelszó"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-light"
          >
            Regisztrál
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
