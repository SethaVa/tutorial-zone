"use client";

import { NavbarRoutes } from "@/components/navbarRoutes";
import { MobileSidebar } from "./mobile-sidebar";

export const Navbar = () => {
  return (
    <div className="p-4 flex items-center h-full border-b shadow-sm bg-white">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
