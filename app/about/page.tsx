'use server'
import Link from "next/link";

export default async function About() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-4 sm:p-8 font-mono">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-green-600">About Q<span className="blink">_</span></h1>
        <p className="text-xl mb-1">A fast, open-source CLI tool powered by LLMs</p>
      </header>
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <div className="terminal-window w-full">
          <p className="text-lg mb-4">
            Q is an open-source project that brings LLM capabilities to your terminal. Built with Go for speed and compiled for efficiency, it seamlessly integrates AI assistance into your command-line workflow.
          </p>
          <p className="text-lg mb-4">
            Currently, Q is available for ARM-based Mac systems only. Contributions to make it cross-platform are welcome and encouraged!
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <h2 className="text-2xl font-bold mb-2">Key Features</h2>
          <ul className="list-disc list-inside text-left">
            <li>Lightning-fast performance with Go</li>
            <li>Seamless terminal integration</li>
            <li>Powered by GPT for intelligent responses</li>
            <li>100% open-source and community-driven</li>
          </ul>
        </div>
        <p className="text-sm mt-4">
          We welcome contributions! Visit our GitHub repository to help improve Q, add new features, or extend platform support.
        </p>
        <Link 
          href="/"
          className="rounded-md border border-solid border-[var(--border-color)] transition-colors flex items-center justify-center bg-accent gap-2 hover:bg-opacity-80 text-base h-12 px-5"
        >
          Back to Home
        </Link>
      </main>
      <footer className="text-center text-sm mt-8">
        <nav className="mt-2">
          <a href="https://github.com/storozhenko98/Q/issues" className="text-accent hover:underline">Create an Issue</a>
          {" | "}
          <a href="/" className="text-accent hover:underline">Home</a>
        </nav>
        <p>&copy; 2024 Q CLI. All rights reserved.</p>
      </footer>
    </div>
  );
}
