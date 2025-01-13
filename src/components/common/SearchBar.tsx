import { RiSearch2Line } from '@remixicon/react'

const SearchBar = () => {

    return (
        <div className="flex justify-center items-center max-w-[800px] mx-auto w-full">
            <div className="text-lg rounded-md bg-slate-200
         w-20 py-2 text-slate-800 ml-4 my-4 text-center leading-[24px]">
                제목
            </div>
            <input type="text"
                className="rounded-md bg-slate-200 py-2 text-slate-800 ml-4 my-4 pl-6 w-full"
                placeholder="검색어를 입력해주세요"
            />
            <RiSearch2Line className="text-slate-800 text-2xl relative left-[-40px]" />
        </div>
    );
};

export default SearchBar;