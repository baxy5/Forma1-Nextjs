"use client";
import React, { useEffect, useState } from "react";
import { getJwtToken } from "../utils/auth";

const Messages = () => {
  const [messages, setMessages] = useState<
    Array<{ kuldo: string; uzenet: string; datum: string }>
  >([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const token = getJwtToken();

      try {
        const response = await fetch(
          "http://localhost:8080/api/messages/messages",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const sortedMessages = data.sort((a: any, b: any) => {
          return new Date(b.datum).getTime() - new Date(a.datum).getTime();
        });

        setMessages(sortedMessages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white pt-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob top-0 -left-4"></div>
        <div className="absolute w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 top-0 -right-4"></div>
        <div className="absolute w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 bottom-0 left-1/2"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-4xl font-light mb-8 text-gray-800 text-center animate-fade-in-down">
          Üzenetek
        </h1>
        <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-xl border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-2xl">
          <table className="min-w-full">
            <thead>
              <tr className="border-b border-gray-200/50 bg-white/50">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">
                  Küldő
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">
                  Üzenet
                </th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-700">
                  Dátum
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.map((message, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-100/50 last:border-b-0 hover:bg-white/50 transition-all duration-200 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <td className="py-4 px-6 text-sm font-medium text-gray-800">
                    {message.kuldo}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-700">
                    {message.uzenet}
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600">
                    {new Date(message.datum).toLocaleDateString("hu-HU")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Messages;
