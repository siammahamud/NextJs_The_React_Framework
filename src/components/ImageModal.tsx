"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { images } from "@/app/photo-feed/page";

export default function ImageModal({ id }: { id: string }) {
  const router = useRouter();
  const image = images.find((img) => img.id === id);

  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-black  bg-opacity-60 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg relative">
        <button
          onClick={() => router.back()}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>
        <Image
          width={300}
          height={400}
          src={image.url}
          alt={image.title}
          className="rounded-lg"
        />
        <h2 className="text-xl font-semibold text-center mt-4">{image.title}</h2>
      </div>
    </div>
  );
}
