import Link from "next/link";
import players from "./players";
import Image from "next/image";

export default function PhotoFeed() {
  return (
    <>
      <main className="container max-auto">
        <h1 className="text-center font-bold my-4 text-3xl">
          Most Famous Players
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {players.map(({ id, name, src }) => (
            <Link key={id} href={`/photo-feed/${id}`}>
              <Image
                src={src}
                alt={name}
                className="w-full object-cover aspect-square"
              />
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
