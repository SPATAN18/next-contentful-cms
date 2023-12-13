import { forwardRef } from "react";

const FullScreenSection = forwardRef(function FullScreenSection(
  { ...props },
  ref
) {
  console.log(ref);
  return (
    <section
      ref={ref}
      className={`w-screen h-screen snap-start ${props.className}`}
    >
      {props.children}
    </section>
  );
});

export default FullScreenSection;
