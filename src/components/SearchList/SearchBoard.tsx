import comminityData from "./data";
import SearchCard from "./SearchCard";

type SearchBoardProps = {
    title: string;
}

const SearchBoard = ({ title }: SearchBoardProps) => {
    const searchResults = comminityData.slice(0, 10);

    return (
        <div className="mx-4">
            <SearchCard items={searchResults} community={title} />
        </div>
    );
};

export default SearchBoard;