import Images from "../_components/Images";
import TextAboutMe from "../_components/TextAboutMe";

export const metadata = {
  title: "About",
};
function page() {
  return (
    <div className=" max-[600px]:h-60 max-[600px]:overflow-y-scroll  px-3 py-3 ">
      <TextAboutMe
        text="I hold a degree in Electrical Engineering and have 14 years of experience as a seasoned insurance underwriter. Over the past two years, I have transitioned into a passionate full-stack developer, successfully building and deploying dynamic web applications, including e-commerce platforms and online cinema systems with payment integration. Proficient in HTML, CSS, JavaScript, React, Node.js, MongoDB,and Next.js I am now expanding my expertise into AWS cloud technologies. I am eager to leverage my problem-solving abilities and technical skills in challenging web development roles."
        sliceEnd={150}
      />
      <h1 className="text-xl text-center text-blue-500 mt-2 mb-4">
        Certificates
      </h1>
      <Images />
    </div>
  );
}

export default page;
