import SearchBar from "@/components/common/SearchBar";
import SearchBoard from "@/components/SearchList/SearchBoard";

export default function Home() {
  return (
    <article>
      <SearchBar />
      <SearchBoard title="인기글" searchList={null} />
    </article>
  );
}
