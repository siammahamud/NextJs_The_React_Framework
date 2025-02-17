"use client";

import Image from "next/image";
import Link from "next/link";
import image1 from "@/assets/images/photo1.png";
import image2 from "@/assets/images/photo2.jpg";
import image3 from "@/assets/images/photo3.jpg";
import image4 from "@/assets/images/photo4.webp";
import image5 from "@/assets/images/photo5.jpg";

export const images = [
  {
    id: "1",
    url: image1,
    title: "Sunset",
  },
  {
    id: "2",
    url: image2,
    title: "Sunset",
  },
  {
    id: "3",
    url: image3,
    title: "Sunset",
  },
  {
    id: "4",
    url: image4,
    title: "Sunset",
  },
  { id: "5", url: image5, title: "Sunset" },
];

export default function PhotoFeed() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {images.map((image) => (
        <Link key={image.id} href={`/photo/${image.id}`} scroll={false}>
          <Image
            width={600}
            height={600}
            src={image.url}
            alt={image.title}
            className="rounded-lg cursor-pointer transition-transform transform hover:scale-105"
          />
        </Link>
      ))}
    </div>
  );
}
