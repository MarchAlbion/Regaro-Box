export const ShowBuild = ({ build }: any) => {
  return (
    <div className="w-full  flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <div className="w-24 h-24"></div>
        <div className="flex items-center justify-center">
          <img src={build.headSlot.item.url} className=" w-24 h-24" />
        </div>
        <div>
          <img src={build.capeSlot.item.url} className=" w-24 h-24" />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="">
          <img src={build.mainHandSlot.item.url} className=" w-24 h-24" />
        </div>
        <div className="">
          <img src={build.chestSlot.item.url} className=" w-24 h-24" />
        </div>
        <div className="">
          <img
            src={
              build.offHandSlot.hasOwnProperty("item")
                ? build.offHandSlot.item.url
                : build.mainHandSlot.item.url
            }
            className=" w-24 h-24"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="">
          <img src={build.potionSlot.item.url} className=" w-24 h-24" />
        </div>
        <div className="">
          <img src={build.bootsSlot.item.url} className=" w-24 h-24" />
        </div>
        <div className="">
          <img src={build.mealSlot.item.url} className=" w-24 h-24" />
        </div>
      </div>
    </div>
  );
};
