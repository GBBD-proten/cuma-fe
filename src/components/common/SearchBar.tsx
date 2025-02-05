"use client";

import { Button } from '@headlessui/react';
import { useState } from 'react';
import SearchDetailModal from '../modal/SearchDetailModal';
import SearchInput from './Search';

const SearchBar = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => {
        console.log("handleOpen");
        setIsOpen(true);
    }

    const handleClose = () => {
        console.log("handleClose");
        setIsOpen(false);
    }

    const handleSearch = (searchInput: string) => {
        console.log(searchInput);
    }

    return (
        <>
            <div className="flex justify-center items-center max-w-[800px] mx-auto w-full">
                <Button className="text-lg rounded-md bg-slate-200 w-28 py-2 text-slate-800 ml-4 my-4 text-center leading-[24px]"
                    onClick={handleOpen}>
                    상세검색
                </Button>
                <SearchInput onChange={handleSearch} />
                <SearchDetailModal isOpen={isOpen} closeModal={handleClose} />
            </div>
        </>
    );
};

export default SearchBar;