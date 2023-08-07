"use client";

import { Button } from "ui";
import NextLink from "next/link";
import NextImage from "next/image";
import { useRouter } from "next/navigation";

export function Profile() {
  const router = useRouter();

  return (
    <div className="flex gap-6 h-fit mt-6 bg-zinc-900/40 p-4 rounded-md">
       (
        <div className="relative aspect-square h-12">
          <img
            className="absolute rounded-full aspect-square object-cover"
          />
        </div>
      <div>
        <p className="leading-none font-semibold text-md">
          {}
        </p>
        <div className="mt-1 flex gap-2 leading-none ">
          <NextLink href="/dashboard/profile">
            <Button variant="link" className="text-zinc-300 font-light p-0 w-fit h-fit">
              Meu perfil
            </Button>
          </NextLink>
          <Button
            variant="link"
            className="text-zinc-300 font-light p-0 w-fit h-fit"
            onClick={() => {
              router.replace("login");
            }}
          >
            Sair
          </Button>
        </div>
      </div>
    </div>
  );
}
