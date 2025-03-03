import apiConfig from "@/config/config";
import { Board } from "@/type/type";

type FetchBoard = {
    category: string;
}

const fetchBoard = async ({ category }: FetchBoard): Promise<Board[]> => {

    const response = await fetch(`${apiConfig.API_URL}/${category}`);

    if (!response.ok) {
        throw new Error("API Error");
    }
    const result = await response.json();

    const boardList = result.data as Board[];

    return boardList;
}

export { fetchBoard };