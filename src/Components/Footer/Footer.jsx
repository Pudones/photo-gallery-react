export function Footer({ refProp }) {

  return (
    <footer
      ref={refProp}
      className="bg-pgBlue border-t-2 border-black text-white text-xl px-5 py-[0.625rem] flex flex-col items-center justify-around fixed bottom-0 w-full gap-3 md:flex-row">

      <div className="copy text-center">
        <p>© 2024 Photo Gallery | Powered by <a className="font-bold" target="_blank" href="https://unsplash.com/">Unsplash</a></p>
      </div>

      <div className="credits text-center">
        <p>Code by {" "}
          <a
            className="font-bold"
            href="https://pudones.github.io/"
            target="_blank">Pudones</a> | Design by {" "}
          <a
            className="font-bold"
            href="https://www.linkedin.com/in/thaisdemoura/"
            target="_blank">Moura</a>
        </p>
      </div>

    </footer>
  );
}
