export default function BuildItemsList({ build }: any) {
  console.log(build);
  return (
    <div className="flex-col h-[80%] w-full mt-10 p-10 ">
      <BuildItem
        name={build.headSlot.item.name.EN.split(" ").slice(1).join(" ")}
        image={build.headSlot.item.url}
      />
      <BuildItem
        name={build.chestSlot.item.name.EN.split(" ").slice(1).join(" ")}
        image={build.chestSlot.item.url}
      />
      <BuildItem
        name={build.bootsSlot.item.name.EN.split(" ").slice(1).join(" ")}
        image={build.bootsSlot.item.url}
      />
      <BuildItem
        name={build.mainHandSlot.item.name.EN.split(" ").slice(1).join(" ")}
        image={build.mainHandSlot.item.url}
      />
      {build.offHandSlot.hasOwnProperty("item") && (
        <BuildItem
          name={build.offHandSlot.item.name.EN.split(" ").slice(1).join(" ")}
          image={build.offHandSlot.item.url}
        />
      )}
      <BuildItem
        name={build.capeSlot.item.name.EN.split(" ").slice(1).join(" ")}
        image={build.capeSlot.item.url}
      />
      <BuildItem
        name={build.mealSlot.item.name.EN}
        image={build.mealSlot.item.url}
      />
      <BuildItem
        name={build.potionSlot.item.name.EN}
        image={build.potionSlot.item.url}
      />
    </div>
  );
}

export const BuildItem = ({ name, image }: any) => {
  return (
    <div className="flex gap-2">
      <div className="w-12 h-12 ">
        <img src={image} className="rounded-xl" alt="weapon" />
      </div>
      <div className="flex items-center text-gray-300">{name}</div>
    </div>
  );
};
