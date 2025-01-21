"use client";

import { RiSearch2Line } from '@remixicon/react'
import { useState } from 'react';
import SearchDetailModal from '../modal/SearchDetailModal';
import { Button } from '@headlessui/react';

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

    return (
        <>
            <div className="flex justify-center items-center max-w-[800px] mx-auto w-full">
                <SearchDetailModal isOpen={isOpen} closeModal={handleClose} >
                    <Button className="text-lg rounded-md bg-slate-200
         w-28 py-2 text-slate-800 ml-4 my-4 text-center leading-[24px]"
                        onClick={handleOpen}>
                        상세검색
                    </Button>
                </SearchDetailModal>
                <input type="text"
                    className="rounded-md bg-slate-200 py-2 text-slate-800 ml-4 my-4 pl-6 w-full"
                    placeholder="검색어를 입력해주세요"
                />
                <RiSearch2Line className="text-slate-800 text-2xl relative left-[-40px]" />
            </div>

        </>
    );
};

export default SearchBar;