import Link from "next/link"
import SeparateLine from "../common/SeparateLine"

const PostNav = () => {
    return (
        <div className="m-4 p-4 border-black border-2">
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
        </div>
    )
}

export default PostNav;