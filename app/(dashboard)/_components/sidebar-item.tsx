"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";

interface SidebarParams {
  icon: LucideIcon;
  label: string;
  href: string;
}

export const SidebarItem = ({ icon: Icon, label, href }: SidebarParams) => {
  const router = useRouter();
  const pathname = usePathname();

  const isActive =
    (pathname === "/" && href === "/") ||
    pathname === href ||
    pathname.startsWith(`${href}/`);

  const handleClick = () => {
    router.push(href);
  };
  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
        isActive &&
          "text-sky-700 bg-sky-200/20 hover:bg-sky-200/20 hover:text-sky-700"
      )}
    >
      <div className="flex items-center gap-x-2 py-4">
        <Icon
          size={22}
          className={cn(" text-slate-500", isActive && "text-sky-700")}
        />{" "}
        {label}
      </div>
      <div
        className={cn(
          " opacity-0 border-2 transition-all h-full border-sky-700 ml-auto",
          isActive && "opacity-100"
        )}
      ></div>
    </button>
  );
};
