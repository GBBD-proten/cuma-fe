import { fetchBoard } from "@/api/board";
import { Board } from "@/type/type";
import { useQuery, UseQueryResult } from "@tanstack/react-query";

type UseFetchBoard = {
    category: string;
}

const useFetchBoard = ({ category }: UseFetchBoard): UseQueryResult<Board[]> => {
    return useQuery<Board[]>({
        queryKey: [category],
        queryFn: async () => {
            return fetchBoard({ category });;
        },
        initialData: [],
    });
};

export { useFetchBoard };