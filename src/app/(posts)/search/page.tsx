import SearchBar from "@/components/common/SearchBar";
import SearchCardList from "@/components/SearchList/SearchCardList";
import SearchList from "@/components/SearchList/SearchList";

export default function Home() {
  return (
    <article>
      <SearchBar />
      <SearchList />
    </article>
  );
}
