
import { Button } from '@headlessui/react'
import BaseModal from './BaseModal';

type BaseModalProps = {
    isOpen: boolean;
    children?: React.ReactNode;
    closeModal: () => void;
};

const SearchDetailModal = ({ isOpen, children, closeModal }: BaseModalProps) => {

    return (
        <>
            {children}
            <BaseModal isOpen={isOpen} title="상세검색" closeModal={closeModal}>
                {/* 입력 필드 */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        앱 아이콘과 이름
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder="앱 이름을 입력하세요"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                </div>

                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                        설명 (선택적)
                    </label>
                    <textarea
                        placeholder="앱 설명을 입력하세요"
                        rows={3}
                        name="description"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    ></textarea>
                </div>

                {/* 하단 버튼 */}
                <div className="mt-6 flex justify-between items-center">
                    <a href="#" className="text-sm text-blue-500 hover:underline">
                        아이디어가 없으신가요? 템플릿을 확인해 보세요
                    </a>
                    <div className="flex space-x-4">
                        <button
                            onClick={close}
                            className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md"
                        >
                            취소
                        </button>
                        <Button
                            className="px-4 py-2 text-white bg-blue-600 rounded-md"
                        >
                            생성하기
                        </Button>
                    </div>
                </div>
            </BaseModal>
        </>
    );
};


export default SearchDetailModal;