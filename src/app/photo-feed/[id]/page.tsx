import ImageModal from "@/components/ImageModal";
import { notFound } from "next/navigation";
import { images } from "../page";


interface Params {
  id: string;
}



export default function PhotoModal({ params }: { params: Params }) {
  const image = images.find((img) => img.id === params.id);
  
  if (!image) return notFound(); // Show 404 if image not found
  
  return <ImageModal image={image} />;
}
