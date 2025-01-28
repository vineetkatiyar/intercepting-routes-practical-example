import Modal from "@/components/modal";
import players, { Players } from "../../players";
import Image from "next/image";

export default async function InterceptPhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: Players = players.find((p) => p.id === id)!;
  return (
    <Modal>
      <Image
        src={photo.src}
        alt={photo.name}
        className="w-full object-cover aspect-square"
      />
      <div className="bg-white p-4">
        <h2 className="text-xl font-semibold">{photo.name}</h2>
        <h3>{photo.field}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
