"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function Menu() {
  const { data: session } = useSession();

  const LoggedOut = () => {
    return (
      <section className="flex gap-4 items-center">
        <Link href="/signin" className="bg-cyan-700 text-zinc-50 px-3 py-1 rounded-md">Signin</Link>
        <Link href="/signup" className="bg-gray-900 text-zinc-50 px-3 py-1 rounded-md">Signup</Link>
      </section>
    )
  }

  const LoggedIn = () => {
    return (
      <section className="flex gap-4 items-center">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-600 hidden md:block">{session?.user.email}</p>
        <button onClick={async () => {
          await signOut({
            redirect: true,
            callbackUrl: "/"    
          });
        }}
          className="bg-red-200 cursor-pointer rounded-md text-gray-800 px-4 py-2 mr-4"
        >
          Signout
        </button>
      </section>
    )
  }

  return (
    <menu className="flex justify-between items-center p-3 bg-gradient-to-l from-gray-500 via-gray-700 to-gray-900">
      <section className="flex gap-4 items-center">
        <Link href="/">
          <Image src="/logo.png" alt="BlogBible" width={50} height={50} className="rounded-full" />
        </Link>
        <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-700 bg-clip-text text-transparent">BlogBible</h2>
      </section>
      {session ? <LoggedIn /> : <LoggedOut />}
    </menu>
  );
}
