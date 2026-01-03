"use client";

import { useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import { MdNotifications, MdArrowDropDown } from "react-icons/md";

export default function Header() {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const user = useAppSelector((state) => state.auth.user);

  return (
    <header className="bg-white shadow-md h-20 fixed top-0 left-0 right-0 flex items-center px-6 z-50">
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">IM</span>
          </div>
          <h1 className="text-xl font-bold text-gray-800">Inventory Manager</h1>
        </div>

        {/* Right side - Notifications and User */}
        <div className="flex items-center gap-6">
          {/* Notifications */}
          <button className="relative text-gray-600 hover:text-gray-900">
            <MdNotifications className="w-6 h-6" />
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="relative">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="flex items-center gap-3 hover:bg-gray-100 px-3 py-2 rounded-lg transition-all"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                {user?.name?.charAt(0) || "U"}
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-sm font-medium text-gray-900">
                  {user?.name || "User"}
                </p>
                <p className="text-xs text-gray-500">{user?.role || "Admin"}</p>
              </div>
              <MdArrowDropDown className="w-5 h-5 text-gray-600" />
            </button>

            {/* User Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <p className="text-sm font-semibold text-gray-900">
                    {user?.email}
                  </p>
                </div>
                <div className="p-2">
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                    Profile
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded">
                    Settings
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded">
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
