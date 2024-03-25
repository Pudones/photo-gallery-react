export function GalleryWrapper({footerMargin, children}) {
  return (
    <div className="px-[1.25rem] py-[2.75rem]"
    style={{marginBottom: `${footerMargin}rem`}}
    >
      {children}
    </div>
  )
}