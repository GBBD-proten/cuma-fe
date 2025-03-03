"use client";

import { Board } from "@/type/type";
import SearchCard from "./SearchCard";

type SearchBoardProps = {
    title: string;
    searchList: Board[] | null;
}

const SearchBoard = ({ title, searchList }: SearchBoardProps) => {

    return (
        <div className="mx-4">
            <SearchCard items={searchList} community={title} />
        </div>
    );
};

export default SearchBoard;