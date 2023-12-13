import Image from "next/image";

/* eslint-disable @next/next/no-img-element */
const NavTiles = ({ bgImage, className, ...props }) => {
  return (
    <div className="grid shadow-x bg-slate-300">
      <div className="flex justify-center items-center">{props.children}</div>
    </div>
  );
};

export default NavTiles;
