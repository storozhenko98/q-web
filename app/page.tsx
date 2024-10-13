'use server'
import Script from "next/script";
import Link from "next/link";
export default async function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-4 sm:p-8 font-mono">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 text-green-600">Q<span className="blink">_</span></h1>
        <p className="text-sm italic">(not the weird kind...)</p>
        <p className="text-xl mb-1">A Golang-based CLI tool for GPT interactions</p>

      </header>
      <main className="flex flex-col gap-8 items-center text-center max-w-2xl">
        <div className="terminal-window w-full">
          <p className="text-lg mb-4">
            Q is an open-source project that puts an LLM in your terminal. It calls GPT to answer your questions directly from the command line.
          </p>

        </div>
        <div className="flex flex-col gap-4 w-full">
          <a
            className="rounded-md border border-solid border-[var(--border-color)] transition-colors flex items-center justify-center bg-accent gap-2 hover:bg-opacity-80 text-base h-12 px-5"
            href="https://github.com/storozhenko98/Q"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
          <button
            id="copyButton"
            className="rounded-md border border-solid border-[var(--border-color)] transition-colors flex items-center justify-center hover:bg-accent text-base h-12 px-5"
          >
            Copy Install Command
          </button>
        </div>
        <p className="text-sm mt-4">
          Anyone is welcome to contribute to this project. Check out the GitHub repository for more information.
        </p>
        <p className="text-sm mt-4">
          - storozhenko98, 2024 | <Link className="text-accent hover:underline" href="https://github.com/storozhenko98/Q">GitHub</Link>
        </p>
      </main>
      <footer className="text-center text-sm mt-8">
      <nav className="mt-2">
          <a href="/about" className="text-accent hover:underline">About</a>
          {" | "}
          <a href="/author" className="text-accent hover:underline">Author</a>
          {" | "}
          <a href="/contact" className="text-accent hover:underline">Contact</a>
        </nav>
        <p>&copy; 2024 Q CLI. All rights reserved.</p>
      </footer>
      <Script id="copy-command" strategy="afterInteractive">
        {`
          const copyButton = document.getElementById('copyButton');
          if (copyButton) {
            copyButton.addEventListener('click', () => {
              const command = "curl -sSL https://qcli.dev/Q.sh | bash";
              navigator.clipboard.writeText(command);
              copyButton.textContent = 'Copied!';
              setTimeout(() => {
                copyButton.textContent = 'Copy Install Command';
              }, 2000);
            });
          }
        `}
      </Script>
    </div>
  );
}
