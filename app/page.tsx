import Build from "./{components}/buildComponent/Build";
import { BuildType } from "./{types}/buildTypes";
import { getAll } from "./{utils}/api";

export default async function Home() {
  const allbuilds = await getAll("builds");
  const allItems = await getAll("items");
  console.log(allbuilds);
  console.log(allItems);

  return (
    <main className="flex flex-col items-center justify-center">
      {allbuilds.map((build: BuildType) => (
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
