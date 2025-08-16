"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getUserByEmail, createUser } from "@/server/users";

export default function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    if (!email || !password) {
      setError("Enter all fields!");
      return;
    }

    let userByEmail = await getUserByEmail(email);
    const user = Array.isArray(userByEmail) ? userByEmail[0] : userByEmail;

    if(user) {
        setError("User already exists!");
        return;
    }

    try {
      const res = await createUser({ email, password });

      if(!res || res.error) {
        setError("Error occured during signup!");
        return;
      }

      const form = e.target;
      form.reset();

      alert("Account created successfully! Please signin.")
      router.replace("/signin");
    } catch (error) {
      setError("Error during signup.");
      console.log("Error during signup: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col gap-4 h-screen bg-gray-100 text-zinc-800">
      <div className="bg-white text-cyan-950 shadow-xl rounded-2xl p-12">
        <h2 className="text-2xl font-extrabold text-center">Signup for free</h2>
        <form
            onSubmit={handleSubmit}
            className="p-5 mt-2"
        >
            <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email"
                id="email"
                type="email"
                required
                name="email"
            />
            </div>
            <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="password" className="font-semibold">Password</label>
            <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                placeholder="Password"
                id="password"
                type="password"
                required
                name="password"
            />
            </div>
            <div className="flex justify-center items-center mb-4">
            <button
                type="submit"
                className="hover:shadow-xl hover:bg-cyan-500 hover:text-gray-900 bg-cyan-700 cursor-pointer text-white rounded-md shadow-lg px-8 py-2 font-semibold my-5"
            >
                Signup
            </button>
            </div>

            <div>
            {error && <p className="text-sm text-red-500 capitalize">{error}</p>}
            </div>

            <div className="text-right">
            <Link href="/signin">
                Already have an account? <span className="underline">Signin</span>
            </Link>
            </div>
        </form>
      </div>
    </div>
  );
}
