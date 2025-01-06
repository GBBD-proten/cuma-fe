import comminityData from "./data";
import SearchCard from "./SearchCard";

const SearchCardList = () => {

    const communityList = new Set(comminityData.map((item) => item.community));
    const searchResults = comminityData.slice(0, 10);

    return (
        <div className="mx-4">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl mx-auto">
                {Array.from(communityList).map((community) => {
                    const filteredData = searchResults.filter((items) => items.community === community);

                    return <SearchCard key={community} community={community} items={filteredData} />
                })
                }
            </div>
        </div>
    );
};

export default SearchCardList;