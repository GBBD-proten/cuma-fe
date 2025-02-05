"use client";

import { Button } from '@headlessui/react';
import FillButton from '../common/FillButton';
import SearchInput from '../common/Search';
import SelectBox from '../common/SelectBox';
import BaseModal from './BaseModal';
import { useState } from 'react';
import { produce } from 'immer';

type BaseModalProps = {
    isOpen: boolean;
    children?: React.ReactNode;
    closeModal: () => void;
};

type SiteSelect = {
    siteName: string;
    select: boolean;
}

const siteList = ["디시", "뽐뿌", "클래시", "카메라 갤러리", " 클리앙", "보배드림", "인벤", "루리웹"];

const SearchDetailModal = ({ isOpen, children, closeModal }: BaseModalProps) => {

    const [searchInput, setSearchInput] = useState<string>('');
    const [siteSelect, setSiteSelect] = useState<SiteSelect[]>(siteList.map((site) => ({ siteName: site, select: false })));
    const [periodSelect, setPeriodSelect] = useState<string>('1일');
    const [searchRange, setSearchRange] = useState<string>('제목');

    // 사이트 선택 핸들러
    const handleSiteSelect = (selectedSite: string) => {
        const newSiteSelect = produce(siteSelect, (draft) => {
            draft.forEach((site) => {
                if (site.siteName === selectedSite) {
                    site.select = !site.select;
                }
            })
        });

        setSiteSelect(newSiteSelect);
    }

    console.log(siteSelect, searchInput, periodSelect, searchRange);

    return (
        <>
            {children}
            <BaseModal isOpen={isOpen} title="상세검색" closeModal={closeModal}>
                {/* 검색 필드 
                검색어 입력창
                */}
                <SearchInput onChange={setSearchInput} />
                {/* 사이트 선택 
                    사이트 다중 선택 가능
                    Pill 형태 UI
                */}
                사이트 선택
                <div className='grid grid-cols-4 gap-2'>
                    {

                        siteSelect.map((site, index) => (
                            <FillButton key={index} text={site.siteName}
                                select={site.select} onClick={() => handleSiteSelect(site.siteName)} />
                        ))
                    }
                </div>
                {/* 기간 선택 */}
                기간 선택 및 검색 범위
                <div className='grid grid-cols-2'>
                    <span>
                        <span className='mr-3'>기간 선택</span>
                        <SelectBox onChange={(e) => setPeriodSelect(e.target.value)}>
                            <option>1일</option>
                            <option>1주</option>
                            <option>1개월</option>
                            <option>3개월</option>
                            <option>6개월</option>
                            <option>1년</option>
                        </SelectBox>
                    </span>
                    <span>
                        <span className='mr-3'>검색 범위</span>
                        <SelectBox onChange={(e) => setSearchRange(e.target.value)}>
                            <option>제목</option>
                            <option>본문</option>
                            <option>제목+본문</option>
                        </SelectBox>
                    </span>

                </div>
                <div className='flex justify-end mt-10'>
                    <Button className="text-lg rounded-md bg-slate-800 text-white w-28 py-2 ml-4 my-4 text-center leading-[24px]">
                        검색
                    </Button>
                    <Button
                        className="text-lg rounded-md bg-slate-200 w-28 py-2 text-slate-800 ml-4 my-4 text-center leading-[24px]"
                        onClick={closeModal}
                    >
                        닫기
                    </Button>
                </div>

            </BaseModal>
        </>
    );
};


export default SearchDetailModal;