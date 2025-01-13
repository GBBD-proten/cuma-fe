import Nav from "@/components/common/Nav";
import { PropsWithChildren } from "react";

const SearchLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="flex justify-center">
            <Nav />
            {children}
        </div>
    );
};

export default SearchLayout;