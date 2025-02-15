import Link from "next/link";

const settingPage = () => {
  return (
    <div className="space-x-2">
      <h1>settingPage</h1>
      <Link href={"/dashboard/profile"} className="underline">
        Profile Page
      </Link>
      <Link className="block underline italic" href={"/dashboard/profile/details"}>
        Profiledetails
      </Link>
    </div>
  );
};

export default settingPage;
