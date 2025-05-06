import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import "./index.css";

Chart.register(LineElement, CategoryScale, LinearScale, PointElement);

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      setAuthenticated(true);
    } else {
      alert("Invalid login");
    }
  };

  if (!authenticated) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <form
          onSubmit={handleLogin}
          className="bg-gray-800 p-8 rounded shadow-lg w-96"
        >
          <h2 className="text-2xl text-white mb-6 text-center">TrueNAS Clone</h2>
          <input
            className="w-full p-2 mb-4 rounded bg-gray-700 text-white"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            className="w-full p-2 mb-6 rounded bg-gray-700 text-white"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="w-full bg-blue-600 hover:bg-blue-500 text-white p-2 rounded transition">
            Login
          </button>
        </form>
      </div>
    );
  }

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr"],
    datasets: [
      {
        label: "CPU Usage",
        data: [30, 50, 70, 40],
        fill: false,
        borderColor: "#3b82f6",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="flex bg-gray-900 min-h-screen text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 h-screen p-4">
        <h2 className="text-xl mb-4">TrueNAS Clone</h2>
        <nav>
          <ul>
            <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Dashboard</li>
            <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Storage</li>
            <li className="p-2 hover:bg-gray-700 rounded cursor-pointer">Network</li>
          </ul>
        </nav>
      </div>

      {/* Dashboard */}
      <div className="p-6 w-full">
        <h1 className="text-2xl mb-4">Dashboard</h1>
        <div className="bg-gray-800 p-4 rounded shadow">
          <Line data={chartData} />
        </div>
      </div>
    </div>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
