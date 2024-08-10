import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex p-5 gap-5 bg-amber-300 text-black font-bold">
      <Link href={"homepage"}>Home Page</Link>
      <Link href={"namepage"}>Name Page</Link>
    </div>
  );
}