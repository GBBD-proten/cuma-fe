"use client";

import SearchBar from "@/components/common/SearchBar";
import SearchBoard from "@/components/SearchList/SearchBoard";
import { useCummunityList, useSearchCommunityList } from "@/hooks/useSearchHooks";
import { useSearchParams } from "next/navigation";

export default function Home() {

  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const siteId = searchParams.get("siteId");
  const page = searchParams.get("page");
  const size = searchParams.get("size");
  const { data: searchList } = useSearchCommunityList({
    query: query || "",
    siteId: siteId || "",
    page: page ? Number(page) : 1,
    size: size ? Number(size) : 10,
  });

  const { data: siteList } = useCummunityList();
  const site = siteList?.find((site) => site.siteId === siteId)?.siteName || "";

  console.log("searchList : ", searchList);

  return (
    <article>
      <SearchBar />
      <SearchBoard title={site} searchList={searchList?.results || null} />
      {/* <SearchCardList /> */}
      {/* <SearchList /> */}
    </article>
  );
}
