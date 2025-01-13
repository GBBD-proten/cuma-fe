import Link from "next/link";
import SeparateLine from "./SeparateLine";

const Nav = () => {
    return (
        <div className="w-1/6 max-w-44">
            <nav className="m-4 p-4 border-black border-2">
                <h2>글목록</h2>
                <SeparateLine />
                <ul>
                    <li>
                        <Link href="/recent">최신글</Link>
                    </li>
                    <li>
                        <Link href="/trend">인기글</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Nav;