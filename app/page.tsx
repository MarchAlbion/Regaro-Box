

import Build from "./{components}/buildComponent/Build";
import { BuildType } from "./{types}/buildTypes";
import { getAll } from "./{utils}/api";
import { filterBuilds } from "./{utils}/filterBuilds";


export default async function Home({searchParams}: any) {


  const allbuilds = await getAll("builds");
  const allItems = await getAll("items");
  const builds = filterBuilds(allbuilds, searchParams.build, searchParams.category);

  console.log(searchParams.build);


 

  return (
    
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 max-w-[100vw]">
      {builds.map((build: BuildType) => (
        <Build
          key={build._id}
          weaponUrl={allItems.find((item: any) => item._id === build.mainHandSlot.item)?.url}
          buildTitle={build.title}
          category={build.category}
        />
      ))}
    </main>
  );
}
