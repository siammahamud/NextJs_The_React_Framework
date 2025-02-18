"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import Link from "next/link";
import { images } from "@/app/photo-feed/page";

export default function PhotoDetails() {
  const { id } = useParams();
  const image = images.find((img) => img.id === id);

  if (!image) {
    return <p className="text-center text-red-500 text-lg">Image not found</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Link
        href="/photo-feed"
        className="mb-4 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
      >
        Back to Feed
      </Link>
      <Image
        width={800}
        height={800}
        src={image.url}
        alt={image.title}
        className="rounded-lg shadow-lg"
      />
      <h2 className="mt-4 text-2xl font-semibold">{image.title}</h2>
    </div>
  );
}
