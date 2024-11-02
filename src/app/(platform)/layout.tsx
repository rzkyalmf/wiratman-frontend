import {
  BookOpen,
  Briefcase,
  CirclePlus,
  CircleUserRound,
  Contact,
  ContactRound,
  FolderKanban,
  Home,
  MonitorDown,
  PlayCircle,
  Settings,
  Users,
} from "lucide-react";
import { redirect } from "next/navigation";

import { Menu } from "@/components/menu-usepath";
import serverAuth from "@/libs/server-auth";

import { LogoutButton } from "../(auth)/(logout)/logout-button";

export default async function Layout({ children }: React.PropsWithChildren) {
  const auth = await serverAuth();

  if (!auth) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-[220px] flex-col justify-between border-r border-slate-200 bg-white p-6 text-slate-950 md:flex">
          <div className="flex flex-col gap-8">
            <div>
              <p className="pb-2 font-medium">Main Menu</p>
              <Menu href="/homepage" icon={<Home size={19} />}>
                Homepage
              </Menu>
              <Menu href="/about-us" icon={<Users size={19} />}>
                About Us
              </Menu>
              <Menu href="/services" icon={<Briefcase size={19} />}>
                Services
              </Menu>
              <Menu href="/projects" icon={<FolderKanban size={19} />}>
                Projects
              </Menu>
              <Menu href="/insight" icon={<BookOpen size={19} />}>
                Insight
              </Menu>
              <Menu href="/career" icon={<PlayCircle size={19} />}>
                Career
              </Menu>
              <Menu href="/contact" icon={<Contact size={19} />}>
                Contact
              </Menu>
            </div>
            <div>
              <p className="pb-2 font-medium">Settings</p>
              <Menu href="#" icon={<CircleUserRound size={19} />}>
                Profile
              </Menu>
              <Menu href="#" icon={<Settings size={19} />}>
                Setting
              </Menu>
            </div>
            <div>
              <p className="pb-2 font-medium">Menu Super Admin</p>
              <Menu href="#" icon={<CirclePlus size={19} />}>
                Tambah Admin
              </Menu>
              <Menu href="#" icon={<ContactRound size={19} />}>
                Data Admin
              </Menu>
              <Menu href="#" icon={<MonitorDown size={19} />}>
                Data Form
              </Menu>
            </div>
          </div>

          <div>
            <LogoutButton />
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto">
          <div className="m-10 mr-8 rounded-xl py-12 px-36">{children}</div>
        </main>
      </div>
    </div>
  );
}
