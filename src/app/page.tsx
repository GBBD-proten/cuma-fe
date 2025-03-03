import { fetchBoard } from "@/api/board";
import SearchBar from "@/components/common/SearchBar";
import Board from "@/components/main/Board";
import MainTitle from "@/components/main/MainTitle";

// 서버 렌더링
export default async function Main() {

    const recent = await fetchBoard({ category: 'recent' });
    const trend = await fetchBoard({ category: 'recent' });

    return (
        <div className="flex flex-col justify-center items-center h-[calc(100vh-60px)] w-full">
            <MainTitle className="-translate-y-20" />
            <SearchBar />

            <div className="grid grid-cols-2 gap-16 translate-y-10">
                <Board title="인기글" board={trend} href="trend" />
                <Board title="최신글" board={recent} href="recent" />
            </div>
        </div>

    )
}