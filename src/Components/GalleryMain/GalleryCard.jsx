import { useState } from "react";
import { createPortal } from "react-dom";
import { GalleryModal } from "../GalleryModal";
import { handleClickAudio } from "../Audio";


import "./GalleryCard.css";

export default function GalleryCard({
  category,
  categoryInternal,
  categoryAlt,
  categorySrc,
}) {
  const [cardModalOpen, setCardModalOpen] = useState(false);
  const handleCardModalVisibility = () => setCardModalOpen(!cardModalOpen);
  return (
    <div
      className="cursor-pointer"
      onClick={() => {
        handleClickAudio();
        handleCardModalVisibility();
      }}
    >
      {
        cardModalOpen && (
          createPortal(
            <GalleryModal
              category={category}
              categoryInternal={categoryInternal}
              modalOpenState={cardModalOpen}
              handleModalOpen={handleCardModalVisibility}
            />
            , document.body)
        )
      }

      <div className="gallery-card-image relative h-60 overflow-hidden rounded-[0.5rem] border-2 border-black">
        <img
          className="absolute h-full w-full object-cover"
          src={categorySrc}
          alt={categoryAlt}
        />
      </div>

      <p className="text-center text-[1.75rem]">{category}</p>
    </div>
  );
}
