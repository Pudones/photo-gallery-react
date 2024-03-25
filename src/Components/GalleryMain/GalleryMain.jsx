import GalleryCard from "./GalleryCard";

import GalleryCategoryData from "../../Data/Gallery_Categories.json";

export function GalleryMain() {
  return (
    <div
      className="bg-pgBlue p-8 
      border-2 border-black border-t-0 
      rounded-bl-[1.25rem] rounded-br-[1.25rem] md:rounded-tr-[1.25rem]
    ">
      <div
        className="bg-pgLightPurple 
        border-2 border-black rounded-[0.75rem]
        p-5 md:p-[1.875rem]
        grid 
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-5 md:gap-[1.875rem]
      ">
        {
          GalleryCategoryData.map((el, index) => (
            <GalleryCard key={index} {...el}/>
          ))
        }
      </div>
    </div>
  );
}
