'use client';

import { useEffect, useState } from 'react';

const MSWComponent = ({ children }: { children: React.ReactNode }) => {
    const [mswReady, setMswReady] = useState(false);

    console.log('MSWComponent rendered');

    useEffect(() => {
        const init = async () => {
            try {
                const { initMsw } = await import('@/mocks/index'); // initMsw를 안전하게 가져옴
                await initMsw();
                setMswReady(true);
            } catch (error) {
                console.error('[MSW] 초기화 중 에러 발생:', error);
            }
        };

        if (!mswReady)
            init(); // 상태가 false일 때만 호출되므로 추가 조건 필요 없음
    }, [mswReady]);

    if (!mswReady) {
        return <div>로딩 중...</div>; // MSW가 준비되지 않았을 때 로딩 화면 표시
    }

    return <>{children}</>;
};

export default MSWComponent;