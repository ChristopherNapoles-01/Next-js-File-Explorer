import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        <Link href="/gdrive">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Gdrive</button>
        </Link>
      </div>
    </div>
  );
}
