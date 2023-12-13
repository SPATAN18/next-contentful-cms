import FullScreenSection from "@/componenets/FullScreenSection";
import NavTiles from "@/componenets/NavTiles";
import { useRef } from "react";

/* eslint-disable react/no-unescaped-entities */
export default function Home() {
  const mainRef = useRef(null);

  const onScrollClick = () => {
    mainRef.current.scrollIntoView();
  };

  return (
    <div className="h-screen w-screen overflow-y-auto prose max-w-none snap-y scroll-smooth">
      <FullScreenSection className="flex justify-center items-center flex-col relative">
        <div className="flex justify-center items-center flex-row gap-3">
          <div>
            <h1>Hi, I'm</h1>
          </div>
          <div className="typewrite">
            <h1 className="text-orange-700">Saurabh</h1>
          </div>
        </div>
        <div>
          <p className="font-semibold font-mono">
            Passionate builder, mountaineer and learner
          </p>
        </div>
        <div className="absolute bottom-0 m-12">
          <button onClick={onScrollClick}>scroll</button>
        </div>
      </FullScreenSection>
      <FullScreenSection
        ref={mainRef}
        className="grid grid-rows-2 grid-cols-2 mainbg"
      >
        <NavTiles bgImage={"/dev.jpg"}>
          <div>
            <p>About me</p>
          </div>
        </NavTiles>
        <NavTiles bgImage={"/blog.jpg"}>
          <p>Resume</p>
        </NavTiles>
        <NavTiles bgImage={"/blog.jpg"}>
          <p>Portfolio</p>
        </NavTiles>
        <NavTiles bgImage={"/dev.jpg"}>
          <p>Blog</p>
        </NavTiles>
      </FullScreenSection>
    </div>
  );
}
