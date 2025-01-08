"use client";

import SeparateLine from "../common/SeparateLine"
import comminityData from "../SearchList/data"
import { motion } from "motion/react"

type BoardProps = {
    title: string;
    commuity: string;
};

const Board = ({ title, commuity }: BoardProps) => {

    const board = comminityData.filter((item) => item.community === commuity).slice(0, 10);

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{
                y: [100, -10, 0], // 키프레임 애니메이션
                opacity: [0, 0.5, 1],
            }}
            transition={{
                duration: 0.7, // 전체 애니메이션 지속 시간
                ease: "easeOut", // 애니메이션 가속 방식
            }}
            className="bg-slate-200 p-6 rounded-md shadow-md"
        >
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
        </motion.div>
    )
}

export default Board;