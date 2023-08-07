"use client";

import { BookmarkIcon, HomeIcon, PlusIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Button, useToast } from "ui";
import { Profile } from "./Profile";

export function Sidebar() {
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    
  };

  return (
    <>
      <aside className="w-full max-w-[280px] max-xl:hidden flex flex-col gap-8 px-6 py-4 bg-zinc-800">
        <div className="z-0 relative w-full pb-4 after:absolute after:left-[-1.5rem] after:top-[-1.5rem] after:w-[calc(100%+3rem)] after:h-[calc(100%+1.5rem)] after:bg-zinc-900/40 after:-z-10">
          <Link href="/dashboard" className="flex gap-4 items-center">
            <div className="rounded-full bg-zinc-900/70 w-fit h-fit p-2">✅</div>
            <h2 className="font-bold">AllDone</h2>
          </Link>
        </div>
        <div>
          <Profile />
          <div className="flex flex-col gap-4 mt-6">
            
          </div>
        </div>
      </aside>
      <aside className="hidden max-xl:flex max-sm:hidden flex-col gap-6 items-center w-24 bg-zinc-800 py-6">
        <Link href="/dashboard">
          <div className="rounded-full bg-zinc-900/70 w-fit h-fit p-2 mb-8">✅</div>
        </Link>
        
        <Link href="/dashboard">
          <Button variant="icon" className="w-fit h-fit p-2 rounded-xl">
            <HomeIcon size={20} />
          </Button>
        </Link>
        <Link href="/dashboard/profile">
          <Button variant="icon" className="w-fit h-fit p-2 rounded-xl">
            <UserIcon size={20} />
          </Button>
        </Link>
      </aside>
      <aside className="z-10 hidden max-sm:flex gap-10 justify-center p-4 w-full  fixed left-[50%] translate-x-[-50%] bottom-0 mx-auto bg-zinc-800/70 backdrop-blur-md">
        <Link href="/dashboard">
          <Button variant="icon" className="w-fit h-fit p-2 rounded-xl">
            <HomeIcon />
          </Button>
        </Link>
        <Link href="/dashboard/profile">
          <Button variant="icon" className="w-fit h-fit p-2 rounded-xl">
            <UserIcon />
          </Button>
        </Link>
      </aside>
    </>
  );
}
