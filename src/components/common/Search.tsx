import { RiSearch2Line } from "@remixicon/react";

type SearchInputProps = {
    onChange: (arg0: string) => void;
};

const SearchInput = ({ onChange }: SearchInputProps) => {

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    }

    return (
        <div className="flex items-center relative w-full">
            <input type="text"
                className="rounded-md bg-slate-200 py-2 text-slate-800 ml-4 my-4 pl-6 w-full"
                placeholder="검색어를 입력해주세요"
                onChange={handleSearch}
            />
            <RiSearch2Line className="text-slate-800 text-2xl relative left-[-40px]" />
        </div>
    );
}

export default SearchInput;