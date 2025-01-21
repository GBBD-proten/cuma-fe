import { Board } from "@/type/type";

type SearchCardProps = {
    items: Board[],
    community: string
};

const SearchCard = ({ items, community }: SearchCardProps) => {

    console.log(items);

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
                        <th className="py-2 px-4">작성일</th>
                        <th className="py-2 px-4">좋아요</th>
                        <th className="py-2 px-4">조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr
                            key={item.url}
                            className="text-center hover:bg-gray-50"
                        >
                            <td className="py-2 px-4 text-left truncate max-w-xs">
                                {item.subject}
                            </td>
                            <td className="py-2 px-4">{item.date}</td>
                            <td className="py-2 px-4">{item.like}</td>
                            <td className="py-2 px-4">{item.view}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SearchCard;