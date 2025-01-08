import SearchBar from "@/components/common/SearchBar";
import Board from "@/components/main/Board";
import Image from "next/image";

const MainTitle = ({ className }: { className?: string }) => {
    return (
        <div className={`${className}`}>
            <div className={`flex items-center space-x-4`}>
                <Image src="/logo.svg" alt="logo" width={150} height={150} />
                <h1 className={`transform text-center text-[4rem] font-bold`}>{"커마"}</h1>
            </div>
            <h1 className={`transform text-center mt-4`}>커마에서는 누구나 커뮤니티 마스터</h1>
        </div>
    )
}

const Main = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[calc(100vh-60px)] w-full">
            <MainTitle className="-translate-y-20" />
            <SearchBar />

            <div className="grid grid-cols-2 gap-16 translate-y-10">
                <Board title="인기글" commuity="디시" />
                <Board title="최신글" commuity="오유" />
            </div>
        </div>

    )
}

export default Main;