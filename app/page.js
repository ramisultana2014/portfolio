import snoopy from "@/public/snoopy.jpg";
import Image from "next/image";
import Link from "next/link";
function page() {
  return (
    <div className="grid grid-cols-2 items-center min-h-svh px-8  ">
      <div className=" relative  min-h-svh">
        <Image
          fill
          className="object-contain invert w-full  "
          placeholder="blur"
          quality={80}
          src={snoopy}
          alt="snoopy"
        />
      </div>
      <div className="text-7xl max-[750px]:text-xl  flex flex-col gap-y-5 items-center  max-[750px]:gap-y-2">
        <h1 className="font-thin">Rami Sultana </h1>
        <p>Portfolio</p>
        <Link
          href="/homePage"
          className="bg-accent-50 px-2 py-1 transition ease-in-out delay-250 text-black text-lg font-semibold hover:bg-black hover:text-accent-50 rounded-md max-[750px]:text-sm "
        >
          Expolre Now
        </Link>
      </div>
    </div>
  );
}

export default page;
