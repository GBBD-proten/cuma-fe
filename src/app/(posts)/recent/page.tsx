import SearchBar from "@/components/common/SearchBar";
import SearchBoard from "@/components/SearchList/SearchBoard";
import SearchCardList from "@/components/SearchList/SearchCardList";
import SearchList from "@/components/SearchList/SearchList";

export default function Home() {
  return (
    <article>
      <SearchBar />
      <SearchBoard title="최신글" />
    </article>
  );
}
