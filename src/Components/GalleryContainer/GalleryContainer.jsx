import "./GalleryContainer.css";

export function GalleryContainer({ children }) {
  return <div className="gallery-container rounded-[1.25rem] max-w-7xl mx-auto">{children}</div>;
}
