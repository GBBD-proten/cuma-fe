"use client";

import { useFetchBoard } from "@/hooks/useBoard";
import SearchCard from "./SearchCard";
import { useMemo } from "react";
import { Board } from "@/type/type";

type SearchBoardProps = {
    title: string;
    category: string;
}

const SearchBoard = ({ title, category }: SearchBoardProps) => {

    const { data, isSuccess } = useFetchBoard({ category });

    const searchResults = useMemo<Board[]>(() => {
        if (isSuccess) {
            return data.slice(0, 20);
        }
        return [];
    }, [data, isSuccess]);

    return (
        <div className="mx-4">
            <SearchCard items={searchResults} community={title} />
        </div>
    );
};

export default SearchBoard;