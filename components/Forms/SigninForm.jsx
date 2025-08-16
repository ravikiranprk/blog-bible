"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getUserByEmail } from "@/server/users";

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

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("Invalid email or password!");
        return;
      }

      const userData = await getUserByEmail(email);
      if (!userData || userData.error) {
        setError("User not found!");
        return;
      }

      const user = Array.isArray(userData) ? userData[0] : userData;

      if (!user || !user.id) {
        setError("User info incomplete!");
        return;
      }

      router.replace("/");
    } catch (error) {
      setError("Error signing in. Please try again.");
      console.log("Error signing in user: ", error);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col gap-4 h-screen bg-gray-100 text-zinc-800">
      <div className="bg-white text-cyan-950 shadow-xl rounded-2xl p-12">
        <h2 className="text-2xl font-extrabold text-center">Login to BlogBible</h2>
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
                Login
            </button>
            </div>

            <div>
            {error && <p className="text-sm text-red-500 capitalize">{error}</p>}
            </div>

            <div className="text-right">
            <Link href="/signup">
                Don't have an account? <span className="underline">Signup</span>
            </Link>
            </div>
        </form>
      </div>
    </div>
  );
}
