"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/homePage",
  },
  {
    name: "Live Demo",
    href: "/homePage/myProjects",
  },
];
export default function Navigations({ children }) {
  const pathname = usePathname();

  return (
    <nav className=" flex  h-12  justify-between px-3 py-3   max-[600px]:flex-col   max-[600px]:gap-5">
      <p className="max-[600px]:border-b max-[600px]:border-blue-500">
        Rami Sultana
      </p>
      <ul className=" flex  justify-between gap-7   max-[600px]:flex-col ">
        {navLinks.map((li) => (
          <li
            key={li.name}
            className={`hover:text-blue-500 transition-colors ${
              li.href === pathname ? "text-blue-500" : ""
            }`}
          >
            <Link href={li.href}>{li.name}</Link>
          </li>
        ))}
      </ul>
      {children}
    </nav>
  );
}
