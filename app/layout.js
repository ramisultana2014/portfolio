import "@/app/_styles/globals.css";
import { Tsukimi_Rounded } from "next/font/google";

const dmSerif = Tsukimi_Rounded({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});
export const metadata = {
  title: {
    template: "Rami/ %s",
    default: "Rami Sultana Portfolio",
  },
  description:
    "passionate full-stack developer. Successfully built and deploy web applications using Mern stack ,Next.js",
};
export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body
        className={`${dmSerif.className}  bg-black text-white min-h-screen relative`}
      >
        <div>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
