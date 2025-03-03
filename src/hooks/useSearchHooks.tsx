
import { communityList, searchCommunity, searchCommunityParams } from "@/api/search";
import { useQuery } from "@tanstack/react-query"

export const useCummunityList = () => {
    return useQuery({
        queryKey: ["cummunityList"],
        queryFn: communityList,
        select: (data) => {
            console.log("useCummunityList : ", data);

            return data;
        }
    })
}

export const useSearchCommunityList = ({ query, siteId, dateRage, page, size }: searchCommunityParams) => {
    return useQuery({
        queryKey: ["searchCommunity", page, query, siteId],
        queryFn: async () => {
            return searchCommunity({
                query,
                siteId,
                size,
                page,
                dateRage
            })
        },
        select: (data) => {
            console.log("searchCommunity : ", data);

            return data;
        }
    })
}