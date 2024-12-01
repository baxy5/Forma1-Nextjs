"use client";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const SendMessage = () => {
  const [message, setMessage] = useState<string>("");
  const { user } = useContext(AuthContext);
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async function sendMessage(e: any) {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/api/messages/messages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            kuldo: user?.sub ? user.sub : "Vendég",
            uzenet: message,
          }),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage);
      }

      const data = await response.json();
      console.log(data);
      if (data.message) {
        alert("Üzenet sikeresen elküldve!");
      }

      setTimeout(() => {
        if (user?.role === "ROLE_ADMIN") {
          router.push("/messages");
        } else {
          router.push("/");
        }
      }, 100);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      console.error("Error:", error);
      alert(`Hiba történt: ${error.message}`);
    }
  }

  return (
    <div className="max-w-md mx-auto mt-20 p-6">
      <h1 className="text-2xl font-light mb-8 text-gray-900">Üzenet küldése</h1>
      <form className="space-y-6" method="POST" onSubmit={sendMessage}>
        <div>
          <label
            htmlFor="uzenet"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Üzenet
          </label>
          <textarea
            id="uzenet"
            name="uzenet"
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
            placeholder="Írd be az üzeneted"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200"
        >
          Küldés
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
