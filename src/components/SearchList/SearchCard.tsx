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
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow w-full">
            {/* 작은 게시판 제목 */}
            <div className="mb-4 border-b pb-2">
                <h2 className="text-lg font-semibold text-gray-700">{community}</h2>
            </div>

            {/* 게시판 내용 */}
            <table className="text-sm w-full">
                <thead>
                    <tr className="bg-slate-100">
                        <th className="py-2 px-4 text-left">제목</th>
                        <th className="py-2 px-4">작성자</th>
                        <th className="py-2 px-4">작성일</th>
                        <th className="py-2 px-4">좋아요</th>
                        <th className="py-2 px-4">댓글</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr
                            key={item.id}
                            className="text-center hover:bg-gray-50"
                        >
                            <td className="py-2 px-4 text-left truncate max-w-xs">
                                {item.title}
                            </td>
                            <td className="py-2 px-4">{item.author}</td>
                            <td className="py-2 px-4">{item.createdAt}</td>
                            <td className="py-2 px-4">{item.likes}</td>
                            <td className="py-2 px-4">{item.comments}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchCard;