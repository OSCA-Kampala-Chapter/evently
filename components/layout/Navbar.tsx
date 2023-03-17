import { GitHubIcon } from "@/lib/icons";
import { LOGO, LOGO_ALT } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Image src={LOGO} alt={LOGO_ALT} height={150} width={150} />
          <div className="flex space-x-4 text-gray-900">
            <button className="bg-white text-black px-6 py-1 border rounded-lg flex space-x-2">
              <GitHubIcon /> <span>Star on Github</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
