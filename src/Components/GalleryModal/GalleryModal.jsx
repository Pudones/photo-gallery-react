import { useState, useEffect, useRef } from "react";
import { handleClickAudio } from "../Audio";
import { PuffLoader } from "react-spinners";

import "./GalleryModal.css";

const accessKey = "client_id=YWorz_N-hk4XibS081Hwo6CZYHx4yRHekTJa0f4kVlw";

export function GalleryModal({
  category,
  categoryInternal,
  modalOpenState,
  handleModalOpen,
}) {

  const [imageLoading, setImageLoading] = useState(true);
  const [photoObject, setPhotoObject] = useState({});

  const downloadRef = useRef(null);

  const getPhoto = async () => {
    const res = await fetch(
      `https://api.unsplash.com/photos/random/?query=${categoryInternal}&orientation=landscape&${accessKey}`,
    );
    const data = await res.json();

    // console.log(data);

    setPhotoObject({
      imgSrc: data["urls"]["regular"],
      imgAlt: data["alt_description"],
      imgAuthorProfilePic: data["user"]["profile_image"]["medium"],
      imgAuthorName: data["user"]["name"],
      imgAuthorProfileUrl: data["user"]["links"]["html"],
      imgLocation: data["location"]["name"],
      imgDownloadLink: `${data["links"]["download_location"]}&${accessKey}`
    });
  };

  const getDownloadLink = async () => {
    const fetchDownloadLink = await fetch(photoObject.imgDownloadLink);
    const downloadLink = await fetchDownloadLink.json();
    const imageUrl = await downloadLink.url;

    const res = await fetch(imageUrl);
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    downloadRef.current.href = blobUrl;

    // URL.revokeObjectURL(blobUrl);
  };

  useEffect(() => {
    getDownloadLink();
  }, [photoObject])

  // This works, because it will run when the component is mounted, but NOT when the component closes.
  useEffect(() => {
    getPhoto();
  }, [modalOpenState]);

  return (
    <div className={`gallery-modal-overlay fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-70 p-5 ${imageLoading ? "modal-overlay--loading" : ""}`}>
      {
        imageLoading && <PuffLoader speedMultiplier="0.8" size="15rem" color="#374375" />
      }

      <div
        onClick={(e) => e.stopPropagation()}
        className={`gallery-modal-window ${imageLoading ? "modal-window--loading" : ""} red-shadow overflow-y-auto rounded-[1.25rem] border-2 border-black bg-pgBlue md:mx-auto md:max-w-5xl`}>

        <div className="gallery-modal-header flex justify-between border-b-2 border-black px-8 py-4 text-3xl">

          <h2 className="text-white">{category}</h2>

          <button
            className="h-10 w-10 rounded-full border-2 border-black bg-pgRose flex items-center justify-center"
            onClick={() => {
              handleModalOpen();
              handleClickAudio();
            }}
          >
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>

        <div className="gallery-modal-main-outer p-5">

          <div
            className="gallery-modal-main-inner rounded-xl border-2 border-black bg-pgLightPurple p-5">

            <img
              className={`h-80 w-full rounded-xl border-2 border-black object-cover md:h-full`}
              src={photoObject.imgSrc}
              alt={photoObject.imgAlt}
              onLoad={() => setImageLoading(false)}
            />

            <div className="info-container mt-5 flex flex-col gap-7 md:flex-row md:justify-between">

              <a
                onClick={handleClickAudio}
                href={photoObject.imgAuthorProfileUrl}
                target="_blank"
                className="flex flex-col items-center gap-3 md:flex-row
                  ">
                <img
                  className="h-20 w-20 rounded-xl border-2 border-black"
                  src={photoObject.imgAuthorProfilePic}
                  alt={`Photo of the artist ${photoObject.imgAuthorName}`}
                />

                <div className="flex flex-col items-center md:items-start">
                  <h2 className="mb-1 text-lg md:text-3xl">
                    {photoObject.imgAuthorName}
                  </h2>

                  {
                    photoObject.imgLocation !== null && (
                      <p className="flex items-center gap-2 text-xl">
                        <span className="material-symbols-outlined">
                          location_on
                        </span>
                        {photoObject.imgLocation}
                      </p>
                    )
                  }
                </div>
              </a>

              <a
                ref={downloadRef}
                download
                className="download-button red-shadow flex items-center justify-center gap-3 rounded-xl border-2 border-black bg-pgRose p-5 text-2xl font-bold cursor-pointer md:text-3xl"
                onClick={handleClickAudio}
              >
                <span className="material-symbols-outlined text-2xl md:text-3xl">
                  download
                </span>
                DOWNLOAD
              </a>
            </div>

          </div>

        </div>
      </div>


    </div>
  );
}
