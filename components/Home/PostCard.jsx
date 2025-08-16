import Link from "next/link"

export default function PostCard({ id, title, shortDescription, createdAt }) {
    return (
        <section className="bg-gradient-to-r from-white via-zinc-100 to-zinc-300 text-gray-900 p-5 flex flex-col justify-between rounded-lg min-h-80 gap-4">
            <div className="flex flex-col gap-2">
                <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-zinc-800 to-zinc-950 text-3xl font-bold capitalize mb-3">{title}</h2>
                <p className="text-xl">{shortDescription}</p>
            </div>
            <div className="flex justify-between">
                <p className="text-sm"><span className="font-bold text-cyan-950">Created on: </span>{createdAt.toLocaleDateString()}</p>
                <p className="text-cyan-800 cursor-pointer font-semibold hover:underline hover:underline-offset-2"><Link href={`blog/${id}`}>See more</Link></p>
            </div>
        </section>
    )
}