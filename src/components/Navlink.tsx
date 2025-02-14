"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, children }: { href: string; children: string }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (pathname.includes("dashboard") || pathname.includes("auth")) {
    return null;
  } else {
    return (
      <Link
        href={href}
        className={`px-4 py-2 rounded-md transition ${
          isActive
            ? "bg-blue-500 text-white"
            : "text-gray-700 hover:bg-gray-200"
        }`}
      >
        {children}
      </Link>
    );
  }
};

export default Navlink;
