import Link from "next/link"
import SeparateLine from "../common/SeparateLine"

const TrendSearchWordNav = () => {
    return (
        <div className="m-4 p-4 border-black border-2">
            <h2>인기검색어</h2>
            <SeparateLine />
            <ul>
                <li>
                    <Link href="#">인기검색어1</Link>
                </li>
                <li>
                    <Link href="#">인기검색어2</Link>
                </li>
            </ul>
        </div>
    )
}

export default TrendSearchWordNav;