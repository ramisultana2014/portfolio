import TextAboutMe from "@/app/_components/TextAboutMe";
import Link from "next/link";

export const metadata = {
  title: "Projects",
};
function page() {
  return (
    <section className=" px-3 py-3 max-[600px]:h-1/2 max-[600px]:overflow-y-scroll  ">
      <h1 className="border rounded-lg text-center text-blue-200 mb-3 py-2">
        IM using the free tier so Each Application have initial latency up to 1
        minute,after that everything went smoothly
      </h1>
      <div className="max-[600px]:text-xs leading-loose flex flex-col   mb-2 p-3">
        <h2 className=" text-lg font-semibold ">Beloveds</h2>
        <TextAboutMe
          text=" share your moments with friends, search for them by name, send friend request.
          frontend: react.
          backend:express,mongoose
          database:mongodb.
          images:cloudinary.
          email:brevo.
          server protected by : helmet , rateLimit , mongoSanitize authintication: cookies 
          hosted by : render "
          sliceEnd={50}
        />
        <div className="flex gap-4 ">
          <Link
            className="hover:text-blue-500 transition-colors "
            target="_blank"
            href="https://www.linkedin.com/feed/update/urn:li:activity:7287350528181714945/"
          >
            linkedin Demo
          </Link>
          <Link
            className="hover:text-blue-500 transition-colors"
            href="https://beloveds.onrender.com/"
            target="_blank"
          >
            Live Demo
          </Link>
        </div>
      </div>
      <div className="max-[600px]:text-xs leading-loose flex flex-col   mb-2 p-3">
        <h2 className=" text-lg font-semibold ">R-pharmacy</h2>
        <TextAboutMe
          text="Designed and developed a full-stack pharmacy platform using React and
          MongoDB,implemented secure user authentication and integrated email
          notifications for orders."
          sliceEnd={50}
        />
        <div className="flex gap-4 ">
          <Link
            className="hover:text-blue-500 transition-colors "
            target="_blank"
            href="https://www.linkedin.com/posts/rami-sultana-9b01a5208_dark-mode-activity-7272657436300173312-079l?utm_source=share&utm_medium=member_desktop"
          >
            linkedin Demo
          </Link>
          <Link
            className="hover:text-blue-500 transition-colors"
            href="https://r-pharmacy.onrender.com/start"
            target="_blank"
          >
            Live Demo
          </Link>
        </div>
      </div>
      <div className="max-[600px]:text-xs leading-loose flex flex-col   mb-2 p-3">
        <h2 className=" text-lg font-semibold text-nowrap">Online Cinema</h2>
        <TextAboutMe
          text="Built an online cinema platform with React for the frontend and MongoDB for the backend,Integrated features like movie streaming, seat reservation, and Stripe payment gateway."
          sliceEnd={50}
        />
        <div className="flex gap-4 ">
          <Link
            className="hover:text-blue-500 transition-colors"
            href="https://online-cinema-byrami.netlify.app/"
            target="_blank"
          >
            Live Demo
          </Link>
        </div>
      </div>
      <div className="max-[600px]:text-xs leading-loose flex flex-col   mb-2 p-3">
        <h2 className=" text-lg font-semibold ">Admin Panel </h2>
        <TextAboutMe
          text="Developed a secure admin dashboard for an online cinema platform using React, Node.js, and MongoDB ,Implemented role-based access control for efficient content management."
          sliceEnd={50}
        />
        <div className="flex gap-4 ">
          <Link
            className="hover:text-blue-500 transition-colors"
            target="_blank"
            href="https://www.linkedin.com/posts/rami-sultana-9b01a5208_dashboard-created-by-mern-stack-activity-7235960894998876160-8pm-?utm_source=share&utm_medium=member_desktop"
          >
            linkedin Demo
          </Link>
          <Link
            className="hover:text-blue-500 transition-colors"
            href="https://admin-open-cinema-mern-byrami.onrender.com/"
            target="_blank"
          >
            Live Demo
          </Link>
        </div>
      </div>
      <div className="max-[600px]:text-xs leading-loose flex flex-col   mb-2 p-3">
        <h2 className=" text-lg font-semibold ">Sub-c App </h2>
        <TextAboutMe
          text="Full-stack web app for ordering food, built with React and Express.Integrated secure user authentication and payment processing."
          sliceEnd={50}
        />
        <div className="flex gap-4 ">
          <Link
            className="hover:text-blue-500 transition-colors "
            target="_blank"
            href="https://www.linkedin.com/posts/rami-sultana-9b01a5208_created-with-mern-stack-activity-7216339530654584832-tH4a?utm_source=share&utm_medium=member_desktop"
          >
            linkedin Demo
          </Link>
          <Link
            className="hover:text-blue-500 transition-colors"
            href="https://mern-sub-c-byrami.onrender.com/start"
            target="_blank"
          >
            Live Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

export default page;
