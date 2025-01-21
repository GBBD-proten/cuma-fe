import PostNav from "../nav/PostNav";
import TrendSearchWordNav from "../nav/TrendSearchWord";

const Nav = () => {
    return (
        <div className="w-1/6 max-w-44">
            <nav>
                <PostNav />
                <TrendSearchWordNav />
            </nav>
        </div>
    );
}

export default Nav;