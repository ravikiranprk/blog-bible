export default function Hero({ blogTitle, blogShortDescription, blogCreatedAt }) {
    return (
        <header className="flex flex-col justify-center items-center p-12 bg-gray-800 shadow-lg rounded-md">
            <h1 className="text-4xl lg:text-5xl font-bold capitalize mt-3 mb-6 bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-800 text-transparent bg-clip-text">{blogTitle}</h1>
            <p className="text-xl font-medium">{blogShortDescription}</p>
            <p className="text-sm font-semibold uppercase">{blogCreatedAt.toLocaleDateString()}</p>
        </header>
    )
}