"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

interface ImageProps {
  id: string;
  url: string;
  title: string;
  description?: string;
}

interface ImageModalProps {
  image: ImageProps;
}

const ImageModal: React.FC<ImageModalProps> = ({ image }) => {
  const router = useRouter();

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        router.back();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [router]);

  // Close modal when clicking outside
  const closeModal = () => router.back();

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-lg p-4 max-w-lg w-full relative"
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-gray-700 hover:text-black text-xl"
        >
          ✕
        </button>

        {/* Image Display */}
        <Image
          src={image.url}
          alt={image.title}
          className="rounded-xl w-full object-cover"
        />

        {/* Image Info */}
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold">{image.title}</h2>
          {image.description && <p className="text-gray-600">{image.description}</p>}
        </div>
      </motion.div>
    </div>
  );
};

export default ImageModal;
