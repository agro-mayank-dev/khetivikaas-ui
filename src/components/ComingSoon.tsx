'use client';

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  const launchDate = new Date("2025-11-01T00:00:00");
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-100 via-indigo-50 to-purple-100">
      <div className="text-center p-8 max-w-xl rounded-3xl bg-white/80 backdrop-blur-md shadow-lg border border-green-200">
        <h1 className="text-5xl font-bold text-green-700 mb-4">
          🚜 KhetiVikaas
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Our platform is growing! Something amazing for farmers and
          agribusinesses is on the way.
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center gap-4 mb-6 text-green-700 font-mono text-xl">
          <div>
            <span className="block text-3xl">{timeLeft.days}</span>
            Days
          </div>
          <div>
            <span className="block text-3xl">{timeLeft.hours}</span>
            Hours
          </div>
          <div>
            <span className="block text-3xl">{timeLeft.minutes}</span>
            Minutes
          </div>
          <div>
            <span className="block text-3xl">{timeLeft.seconds}</span>
            Seconds
          </div>
        </div>

        {/* Subscription Form */}
        <form className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 flex-1"
          />
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            Notify Me
          </button>
        </form>

        {/* Social Media Placeholder */}
        <div className="flex justify-center gap-6 text-green-600 text-2xl">
          <a href="#" aria-label="Facebook" className="hover:text-green-800">
            📘
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-green-800">
            🐦
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-green-800">
            📸
          </a>
        </div>

        <p className="text-gray-500 mt-6 text-sm">
          &copy; 2025 KhetiVikaas Pty Limited. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 text-green-700 text-sm">
          <Link to="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <span>|</span>
          <Link to="/terms-of-use" className="hover:underline">
            Terms of Use
          </Link>
        </div>
      </div>
    </div>
  );
}
