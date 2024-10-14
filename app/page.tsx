"use client";
import { useCallback, useEffect, useState } from "react";
import Build from "./{components}/buildComponent/Build";
import { BuildType, Item } from "./{types}/buildTypes";
import { getAll } from "./{utils}/api";
import { useSearchParams } from "next/navigation";
import { filterBuilds } from "./{utils}/filterBuilds";
import { BuildCategory, searchBuilds } from "@/api/builds.api";

export default function Home() {
  const [builds, setBuilds] = useState<BuildType[]>([]);
  const [allItems, setAllItems] = useState<Item[]>([]);

  const searchParams = useSearchParams();
  const buildQuery = searchParams.get('build');
  const categoryQuery = searchParams.get('category') as BuildCategory;

  const fetchPageData = useCallback(async () => {
    const serverBuilds = await searchBuilds({ keyword: buildQuery, category: categoryQuery });
    setBuilds(serverBuilds);

    const serverAllItems = await getAll("items");
    setAllItems(serverAllItems);
    // const builds = filterBuilds(
    //   allbuilds,
    //   searchParams.build,
    //   searchParams.category
    // );
  }, [buildQuery, categoryQuery]);

  useEffect(() => {
    fetchPageData();
  }, [fetchPageData]);

  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 max-w-[100vw]">
      {builds.map((build: BuildType) => (
        <Build
          buildID={build._id}
          key={build._id}
          weaponUrl={
            allItems.find((item: any) => item._id === build.mainHandSlot.item)
              ?.url
          }
          buildTitle={build.title}
          category={build.category}
        />
      ))}
    </main>
  );
}
