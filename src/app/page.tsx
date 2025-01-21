"use client";

import SearchBar from "@/components/common/SearchBar";
import Board from "@/components/main/Board";
import MainTitle from "@/components/main/MainTitle";
import { useFetchBoard } from "@/hooks/useBoard";

const Main = () => {

    const { data: recent, isSuccess: recentIsSuccess } = useFetchBoard({ category: 'recent' });
    const { data: trend, isSuccess: trendIsSuccess } = useFetchBoard({ category: 'trend' });

    return (
        <div className="flex flex-col justify-center items-center h-[calc(100vh-60px)] w-full">
            <MainTitle className="-translate-y-20" />
            <SearchBar />

            <div className="grid grid-cols-2 gap-16 translate-y-10">
                {trendIsSuccess && <Board title="인기글" board={trend} href="trend" />}
                {recentIsSuccess && <Board title="최신글" board={recent} href="recent" />}
            </div>
        </div>

    )
}

export default Main;