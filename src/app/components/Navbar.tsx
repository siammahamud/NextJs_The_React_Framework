import Navlink from "./Navlink";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-evenly w-full mx-auto  font-bold text-xl mb-10">
        <Navlink href={"/home"}>Homepage</Navlink>
        <Navlink href={"/about"}>About</Navlink>
        <Navlink href={"/contact"}>Contact</Navlink>
        <Navlink href={"/dashboard"}>Dashboard</Navlink>
        <Navlink href={"/auth/signup"}>SignIn</Navlink>
        <Navlink href={"/auth/signip"}>SignUp</Navlink>
      </nav>
    </div>
  );
};

export default Navbar;
