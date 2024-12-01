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
    <div className="max-w-5xl mx-auto mt-24 px-4">
      <h1 className="text-2xl font-light mb-8">Üzenetek</h1>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                Küldő
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                Üzenet
              </th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">
                Dátum
              </th>
            </tr>
          </thead>
          <tbody>
            {messages.map((message, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-6 text-sm text-gray-800">
                  {message.kuldo}
                </td>
                <td className="py-4 px-6 text-sm text-gray-800">
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
  );
};

export default Messages;
