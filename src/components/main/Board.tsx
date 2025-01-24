"use client";

import Link from "next/link";
import SeparateLine from "../common/SeparateLine"
import { motion } from "motion/react"
import { Board as BoardType } from "@/type/type";
import { useRouter } from "next/navigation";

type BoardProps = {
    title: string;
    href: string;
    board: BoardType[];
};

const Board = ({ title, href, board }: BoardProps) => {

    const router = useRouter();

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
                <Link className="text-2xl font-bold text-gray-800" href={href}>{title}</Link>
            </header>
            <SeparateLine />
            <table className="w-full border-collapse mt-4">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="border-gray-300 px-4 py-2 text-left">제목</th>
                        <th className="border-gray-300 px-4 py-2">좋아요</th>
                        <th className="border-gray-300 px-4 py-2">조회수</th>
                    </tr>
                </thead>
                <tbody>
                    {board.map((item) => (
                        <tr
                            key={item.url}
                            className="text-center hover:bg-gray-50 transition duration-200"
                            onClick={() => router.push(`${item.url}`)}
                        >
                            <td className="border-gray-300 px-4 py-2 text-left">
                                {item.subject}
                            </td>
                            <td className="border-gray-300 px-4 py-2">{item.like}</td>
                            <td className="border-gray-300 px-4 py-2">{item.view}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    )
}

export default Board;