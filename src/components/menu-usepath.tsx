"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menu = ({ href, icon, children }: { href: string; icon?: React.ReactNode; children: React.ReactNode }) => {
  const pathname = usePathname();

  const getLinkClassName = (path: string) => {
    const base = "flex items-center gap-2 rounded-md px-3 py-2 transition-all";
    const active = "bg-gray-300 text-black";
    const inactive = "text-gray-500 hover:bg-gray-100 hover:text-black";

    const isActive = pathname.startsWith(path);

    return `${base} ${isActive ? active : inactive}`;
  };
  return (
    <Link href={href} className={getLinkClassName(href)}>
      {icon}
      <span>{children}</span>
    </Link>
  );
};
