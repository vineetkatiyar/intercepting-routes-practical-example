import Link from "next/link";
export default function Home() {
  return (
    <main className=" flex justify-center container h-full w-full">
      <div className="">
        <h1 className="text-center font-bold text-3xl mt-10">
          This is home page
        </h1>
        <button className="text-center m-3 bg-green-400 p-2 rounded-md text-white">
          <Link href="/photo-feed" className="text-center">
            click here to check the intercepting route photo gallery
          </Link>
        </button>
      </div>
    </main>
  );
}
