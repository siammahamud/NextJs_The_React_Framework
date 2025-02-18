import ImageModal from "@/components/ImageModal";

export default function ModalPage({ params }: { params: { id: string } }) {
  return <ImageModal id={params.id} />;
}
