"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/">
          <h1 className="font-semibold text-lg text-gray-700 " >
            Clare Rani Augustine
          </h1>
        </Link>
        <div className="flex gap-6 text-gray-700 font-medium">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <a
            href="/Clare_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Clare Rani Augustine Resume (opens in new tab)"  
            className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}