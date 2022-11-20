import React from "react";

export default function Sidebar({ elements, user }) {
  return (
    <div className="flex flex-col w-64 h-screen bg-gray-800">
      <div className="flex flex-col flex-1 p-4">
        <div className="flex items-center flex-shrink-0 px-4">
          <span className="text-xl font-semibold text-white">UnMask</span>
        </div>
        <nav className="flex-1 mt-5">
          <ul className="flex flex-col">
            {elements.map((element) => (
              <a
                className="flex items-center px-2 py-2 mt-2 text-sm font-medium leading-5 text-gray-300 transition-colors duration-150 rounded-lg group hover:text-gray-200 hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                href="/"
              >
                {element.name}
              </a>
            ))}
          </ul>
        </nav>
      </div>
      <div className="flex-shrink-0 px-4 py-4">
        <a
          className="flex items-center text-sm font-medium text-white transition-colors duration-150 hover:text-gray-200"
          href="/"
        >
          <img
            className="w-10 h-10 mr-4 rounded-full"
            src={user.avatar}
            alt="Avatar"
          />
          <span className="font-semibold">{`${user.firstName} ${user.lastName}`}</span>
        </a>
      </div>
    </div>
  );
}
