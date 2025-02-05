import React from "react";

type SelectBoxProps = {
    children?: React.ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox = ({ children, onChange }: SelectBoxProps) => {

    return (
        <select className="w-48 h-10 border border-gray-300 rounded-md" onChange={onChange}>
            {children}
        </select>
    )
}

export default SelectBox;