import Image from "next/image";
import cloud from "@/public/cloud.png";
import html from "@/public/html-css.png";
import javaScript from "@/public/javaScript.png";
import mern from "@/public/mern-stack.png";
import node from "@/public/node.png";
import react from "@/public/react.png";
function Images() {
  return (
    <div className=" flex flex-col min-[600px]:grid min-[600px]:grid-cols-2 min-[600px]:gap-1 ">
      <div className=" overflow-hidden border-solid border border-orange-500 relative h-48  flex items-center  invert  ">
        <Image
          fill
          sizes="(max-width:1200px) w-2/5"
          src={cloud}
          alt={`${cloud} certificate`}
          className=" w-2/5 hover:scale-110 transition-all "
          placeholder="blur"
          quality={80}
        />
      </div>
      <div className=" overflow-hidden border-solid border border-orange-500 relative h-48  flex items-center  invert ">
        <Image
          fill
          sizes="(max-width:1200px) w-2/5"
          src={html}
          alt={`${html} certificate`}
          className="w-2/5 hover:scale-110 transition-all "
          placeholder="blur"
          quality={80}
        />
      </div>
      <div className=" overflow-hidden border-solid border border-orange-500 relative h-48  flex items-center  invert ">
        <Image
          fill
          sizes="(max-width:1200px) w-2/5"
          src={javaScript}
          alt={`${javaScript} certificate`}
          className="w-2/5 hover:scale-110 transition-all  "
          placeholder="blur"
          quality={80}
        />
      </div>
      <div className=" overflow-hidden border-solid border border-orange-500 relative h-48  flex items-center  invert ">
        <Image
          fill
          src={mern}
          sizes="(max-width:1200px) w-2/5"
          alt={`${mern} certificate`}
          className="w-2/5 hover:scale-110 transition-all  "
          placeholder="blur"
          quality={80}
        />
      </div>
      <div className=" overflow-hidden border-solid border border-orange-500 relative h-48  flex items-center  invert ">
        <Image
          fill
          sizes="(max-width:1200px) w-2/5"
          src={node}
          alt={`${node} certificate`}
          className="w-2/5 hover:scale-110 transition-all  "
          placeholder="blur"
          quality={80}
        />
      </div>
      <div className=" overflow-hidden border-solid border border-orange-500 relative h-48  flex items-center  invert ">
        <Image
          fill
          sizes="(max-width:1200px) w-2/5"
          src={react}
          alt={`${react} certificate`}
          className="w-2/5 hover:scale-110 transition-all  "
          placeholder="blur"
          quality={80}
        />
      </div>
    </div>
  );
}

export default Images;
