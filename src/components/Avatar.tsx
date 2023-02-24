import React from "react";
import avatarUrl from "../assets/images/profile/avatar.webp";

const Avatar = () => {
  return (
    <img
      className="w-52 h-52 p-1 rounded-full ring-2 ring-blue-700 dark:ring-blue-700"
      src={avatarUrl}
      alt="My photo"
    ></img>
  );
};

export default Avatar;
