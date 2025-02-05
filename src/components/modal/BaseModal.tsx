
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

type BaseModalProps = {
    isOpen: boolean;
    title: string;
    children?: React.ReactNode;
    closeModal: () => void;
};

const BaseModal = ({ isOpen, title, children, closeModal }: BaseModalProps) => {

    return (
        <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={closeModal}>
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                {/* Modal Backdrop */}
                <div className="flex min-h-full items-center justify-center p-4 bg-opacity-35 bg-gray-500">
                    {/* Modal Panel */}
                    <DialogPanel
                        transition
                        className="w-full max-w-3xl rounded-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                    >
                        <DialogTitle as="h3" className="text-base/7 font-medium text-black">
                            {title}
                        </DialogTitle>
                        {children}
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};


export default BaseModal;