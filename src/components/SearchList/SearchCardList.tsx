// "use client";

// import { useFetchBoard } from "@/hooks/useBoard";
// import SearchCard from "./SearchCard";
// import { useMemo } from "react";
// import { Board } from "@/type/type";

// const SearchCardList = () => {

//     const { data: comminityData, isSuccess } = useFetchBoard({ category: 'posts' });

//     const communityList = useMemo<Set<string>>(() => {
//         if (isSuccess) {
//             return new Set(comminityData.map((item) => item.category));
//         }
//         return new Set<string>();
//     }, [comminityData, isSuccess]);

//     const searchResults = useMemo<Board[]>(() => {
//         if (isSuccess) {
//             return comminityData.slice(0, 20);
//         }

//         return [];
//     }, [comminityData, isSuccess]);

//     console.log('communityList', communityList);
//     console.log('searchResults', searchResults);

//     return (
//         <div className="mx-4">
//             <div className="grid md:grid-cols-2 grid-cols-1 gap-2 max-w-6xl mx-auto mb-10">
//                 {isSuccess && Array.from(communityList).map((community) => {
//                     const filteredData = searchResults.filter((items) => items.community === community);

//                     return <SearchCard key={community} community={community} items={filteredData} />
//                 })
//                 }
//             </div>
//         </div>
//     );
// };

// export default SearchCardList;