import { useState } from "react";

interface ImageModalProps {
  imageUrl: string;
  title: string;
  description: string;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Image Thumbnail */}
      <div
        className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform"
        onClick={() => setIsOpen(true)}
      >
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-xl max-w-lg w-full relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-gray-300"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* Image */}
            <img src={imageUrl} alt={title} className="w-full rounded-lg" />

            {/* Details */}
            <div className="mt-3">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
