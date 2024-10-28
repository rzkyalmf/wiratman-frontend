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

import { LogoutButton } from "@/components/auth/logout";
import { Menu } from "@/components/platform/menu-usepath";
import serverAuth from "@/libs/server-auth";

export default async function Layout({ children }: React.PropsWithChildren) {
  const auth = await serverAuth();

  if (!auth) {
    redirect("/login");
  }

  return (
    <div className="flex h-screen flex-col">
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-[220px] flex-col justify-between border-slate-200 bg-white p-6 text-slate-950 md:flex">
          <div className="flex flex-col gap-8">
            <div>
              <p className="pb-2 font-medium">Main Menu</p>
              <Menu href="/dashboard" icon={<Home size={19} />}>
                Homepage
              </Menu>
              <Menu href="/dashboard/about-us" icon={<Users size={19} />}>
                About Us
              </Menu>
              <Menu href="/dashboard/services" icon={<Briefcase size={19} />}>
                Services
              </Menu>
              <Menu href="/dashboard/projects" icon={<FolderKanban size={19} />}>
                Projects
              </Menu>
              <Menu href="/dashboard/insight" icon={<BookOpen size={19} />}>
                Insight
              </Menu>
              <Menu href="/dashboard/career" icon={<PlayCircle size={19} />}>
                Career
              </Menu>
              <Menu href="/dashboard/contact" icon={<Contact size={19} />}>
                Contact
              </Menu>
            </div>
            <div>
              <p className="pb-2 font-medium">Settings</p>
              <Menu href="/dashboard/" icon={<CircleUserRound size={19} />}>
                Profile
              </Menu>
              <Menu href="/dashboard/" icon={<Settings size={19} />}>
                Setting
              </Menu>
            </div>
            <div>
              <p className="pb-2 font-medium">Menu Super Admin</p>
              <Menu href="/dashboard/" icon={<CirclePlus size={19} />}>
                Tambah Admin
              </Menu>
              <Menu href="/dashboard/" icon={<ContactRound size={19} />}>
                Data Admin
              </Menu>
              <Menu href="/dashboard/" icon={<MonitorDown size={19} />}>
                Data Form
              </Menu>
            </div>
          </div>

          <div>
            <LogoutButton />
          </div>
        </aside>

        <main className="flex-1 overflow-y-auto">
          <div className="m-3 mr-8 rounded-xl border p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
