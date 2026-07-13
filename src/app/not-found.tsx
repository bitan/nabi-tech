import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-[#080808] min-h-screen flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <p className="text-white/20 text-8xl font-bold mb-6 select-none">404</p>
        <h1 className="text-white text-2xl font-bold mb-3">Page not found</h1>
        <p className="text-white/40 text-sm mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-white text-black text-sm font-semibold px-6 py-3 rounded-xl hover:bg-white/90 transition-all"
        >
          Back to home <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
