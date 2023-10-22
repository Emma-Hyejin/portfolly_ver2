import LoadingRainbow from '@/assets/loading/loading_rainbow.gif';

export default function Loading () {
    return(
        <main className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-gray-500 opacity-50 z-9">
            <span className="absolute transform">
                <img src={LoadingRainbow} alt=" 404" />
            </span>
        </main>
    )
}

