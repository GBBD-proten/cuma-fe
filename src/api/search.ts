import { Board } from "@/type/type";

export type ComunityList = {
    siteId: string;
    siteName: string;
}

export const communityList = async (): Promise<ComunityList[]> => {
    const response = await fetch('http://175.194.96.88:5000/indexList/');

    if (!response.ok) {
        throw new Error('네트워크에 문제가 발생하였습니다.');
    }

    const result = await response.json();

    const resultList = result.result.map((site: { indexName: string; korIndexName: string; }) => {
        return {
            siteId: site.indexName,
            siteName: site.korIndexName
        }
    })

    return resultList;
}

export type searchCommunityParams = {
    query?: string;
    siteId: string;
    size?: number;
    page?: number;
    dateRage?: string;
}

type searchCommunityResponse = {
    total: number;
    results: Board[];
}

export const searchCommunity = async ({ query, siteId, size, page, dateRage }: searchCommunityParams): Promise<searchCommunityResponse> => {

    const params = new URLSearchParams({
        query: query || "",
        index: siteId,
        size: size?.toString() || "",
        page: page?.toString() || "",
        dateRange: dateRage || ""
    })

    const response = await fetch(`http://175.194.96.88:5000/search/?${params}`);

    if (!response.ok) {
        throw new Error('네트워크에 문제가 발생하였습니다.');
    }

    const result = await response.json() as searchCommunityResponse;

    console.log("searchCommunity : ", result);

    return result;
}