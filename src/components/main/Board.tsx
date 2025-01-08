import SeparateLine from "../common/SeparateLine"
import comminityData from "../SearchList/data"

type BoardProps = {
    title: string;
    commuity: string;
};

const Board = ({ title, commuity }: BoardProps) => {

    const board = comminityData.filter((item) => item.community === commuity).slice(0, 10);

    return (
        <div className="bg-slate-200 p-6 rounded-md shadow-md">
            <header className="mb-4">
                <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
            </header>
            <SeparateLine />
            <table className="w-full border-collapse mt-4">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border-gray-300 px-4 py-2 text-left">제목</th>
                        <th className="border-gray-300 px-4 py-2">좋아요</th>
                        <th className="border-gray-300 px-4 py-2">댓글</th>
                    </tr>
                </thead>
                <tbody>
                    {board.map((item) => (
                        <tr
                            key={item.id}
                            className="text-center hover:bg-gray-50 transition duration-200"
                        >
                            <td className="border-gray-300 px-4 py-2 text-left">
                                {item.title}
                            </td>
                            <td className="border-gray-300 px-4 py-2">{item.likes}</td>
                            <td className="border-gray-300 px-4 py-2">{item.comments}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Board;