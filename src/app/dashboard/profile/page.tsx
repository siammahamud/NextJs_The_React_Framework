

import Link from 'next/link';
import React from 'react';

interface UserProfile {
  name: string;
  email: string;
  profilePicture: string;
  bio: string;
}

const Profile: React.FC<UserProfile> = ({ name, email, bio }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg p-6">
      <div className="flex justify-center mb-4">
        <h1>Profile Page </h1>
      
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-sm text-gray-600">{email}</p>
        <p className="mt-2 text-gray-700 text-sm">{bio}</p>
      </div>
      <div className="mt-4 flex justify-center gap-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-600 focus:outline-none">
        <Link href={"/dashboard/profile/details"}>Profile------------details</Link>
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-red-600 focus:outline-none">
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Profile;
