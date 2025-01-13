export async function initMsw() {
    if (typeof window === 'undefined') {
        const { server } = await import('@/mocks/server');
        server.listen();
        console.log('[MSW] 서버 시작');
        // server.events.on("request:start", (req) => {
        //     console.log(`[MSW] 요청: ${req.request.method} ${req.request.url}`);
        // });
    } else {
        const { worker } = await import('@/mocks/browser');
        await worker.start();
        console.log('[MSW] 워커 시작');
        // worker.events.on("request:start", (req) => {
        //     console.log(`[MSW] 요청: ${req.request.method} ${req.request.url}`);
        // });
    }
}