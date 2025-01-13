"use client";

import Image from "next/image";
import { motion } from "motion/react"

const MainTitle = ({ className }: { className?: string }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }} // 시작 시 투명
            animate={{ opacity: 1 }} // 애니메이션으로 점차 불투명
            transition={{
                duration: 1.5, // 애니메이션 지속 시간
                ease: "easeOut", // 부드러운 애니메이션
            }}
            className={`${className}`}>
            <div className={`flex items-center space-x-4`}>
                <Image src="/logo.svg" alt="logo" width={150} height={150} />
                <h1 className={`transform text-center text-[4rem] font-bold`}>{"커마"}</h1>
            </div>
            <h1 className={`transform text-center mt-4`}>커마에서는 누구나 커뮤니티 마스터</h1>
        </motion.div>
    )
}

export default MainTitle;