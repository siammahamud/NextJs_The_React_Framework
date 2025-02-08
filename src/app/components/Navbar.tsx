"use client";
import Link from "next/link"
import { usePathname } from "next/navigation"



const Navbar = () => {
    const pathname = usePathname();
    if(pathname.includes("dashboard")|| pathname.includes("auth")){
        return null;
    }else
      return (
    <div>
         <nav className="flex justify-evenly w-full mx-auto bg-green-600 font-bold text-xl">
              <Link className="p-2" href={"/home"}>Homepage</Link>
              <Link className="p-2" href={"/about"}>About</Link>
              <Link className="p-2" href={"/home"}>Contact</Link>
              <Link className="p-2" href={"/dashboard"}>Dashboard</Link>
              <Link className="p-2" href={"/auth/signup"}>SignIn</Link>
              <Link className="p-2" href={"/auth/signip"}>SignUp</Link>
            </nav>
    </div>
  )
}

export default Navbar;