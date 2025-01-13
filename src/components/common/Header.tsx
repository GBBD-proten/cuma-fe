import Link from "next/link";

const HeaderMenu = ({ title, href }: { title: string, href?: string }) => {
    return <Link href={href ? (href) : "#"} className="text-lg">{title}</Link>;
}

const LoginButton = () => {
    return <div className="text-lg">로그인</div>;
}

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 flex justify-between">
            {/* 메뉴 */}
            <div className="flex space-x-4">
                <HeaderMenu title="홈" href="/" />
                <HeaderMenu title="검색" href="/search" />
                <HeaderMenu title="분석" />
                <HeaderMenu title="고객센터" />
            </div>
            {/* 로그인 */}
            <div>
                <LoginButton />
            </div>
        </header>
    );
}

export default Header;