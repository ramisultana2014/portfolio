"use client";

import { useState } from "react";

function TextAboutMe({ text, sliceEnd }) {
  const [showText, setShowText] = useState(false);
  return (
    <p onClick={() => setShowText((s) => !s)}>
      {showText ? (
        <>
          <span className="text-balance leading-loose">{text}</span>
          <span className="text-blue-500 cursor-pointer"> Hide</span>
        </>
      ) : (
        <>
          <span className="text-balance leading-relaxed">
            {text.slice(0, sliceEnd)}
          </span>
          <span className="text-blue-500 cursor-pointer"> ...Show More</span>
        </>
      )}
    </p>
  );
}

export default TextAboutMe;
