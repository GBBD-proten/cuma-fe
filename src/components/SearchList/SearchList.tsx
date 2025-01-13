"use client";

import { useState } from "react";
import SearchBoard from "./SearchBoard";
import SearchCardList from "./SearchCardList";

const SearchList = () => {

    const [isCard, setIsCard] = useState<"Card" | "List">("Card");

    const handleToggle = () => {
        setIsCard(isCard === "Card" ? "List" : "Card");
    };

    return (
        <>
            <div className="flex justify-end">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-end mr-5"
                    onClick={handleToggle}>리스트/카드 전환</button>
            </div>
            {isCard === "Card" ? <SearchCardList /> : <SearchBoard title="디시" />}
        </>
    );
};

export default SearchList;