export default function Content({ blogContent }) {
    return (
        <section className="flex flex-col justify-stretch items-stretch bg-gradient-to-r from-zinc-100 via-zinc-200 to-zinc-400 p-6 sm:p-8 md:p-10 xl:p-12 text-gray-900 my-5 md:my-8 rounded-md">
            {blogContent}
        </section>
    )
}