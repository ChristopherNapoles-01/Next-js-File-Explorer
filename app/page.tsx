import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div>
        <Link href="/gdrive">
          <button className="btn btn-md lg:btn-lg">Gdrive</button>
        </Link>
      </div>
      <div className="ml-2">
        <Link href="/">
          <button className="btn btn-md lg:btn-lg">Local</button>
        </Link>
      </div>
    </div>
  );
}
