import SearchBar from "@/components/common/SearchBar";
import SearchBoard from "@/components/SearchList/SearchBoard";

export default function Home() {
  return (
    <article>
      <SearchBar />
      <SearchBoard title="최신글" searchList={null} />
    </article>
  );
}
