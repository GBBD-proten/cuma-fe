import SeparateLine from "../common/SeparateLine";

type SearchCardProps = {
    items: SearchItem[],
    community: string
};

type SearchItem = {
    id: number,
    title: string,
    author: string,
    content: string,
    likes: number,
    comments: number,
    createdAt: string
};


const SearchCard = ({ items, community }: SearchCardProps) => {

    return (
        <div className="bg-slate-400">
            <div className="">
                <h2>{community}</h2>
            </div>
            <SeparateLine />
            <table className="w-full">
                <thead>
                    <tr>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>좋아요</th>
                        <th>댓글</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item) => (
                            <tr key={item.id} className="text-center">
                                <td className="text-left">{item.title}</td>
                                <td>{item.author}</td>
                                <td>{item.createdAt}</td>
                                <td>{item.likes}</td>
                                <td>{item.comments}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div >
    );
};

export default SearchCard;