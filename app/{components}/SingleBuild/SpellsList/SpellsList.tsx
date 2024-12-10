type Props = {
  spells: any;
};

export default function SpellsList({ build }: any) {
  return (
    <div className="flex-col">
      <div className="flex gap-5 items-center justify-center">
        <div className="w-12 flex items-center justify-center lg:w-12 xl:w-16 2xl:w-18">
          <img src={build.mainHandSlot.item.url} />
        </div>
        <div className="flex">
          {build.mainHandSlot.skills.map((skill: any) => (
            <div className="w-12 h-16 flex items-center justify-center lg:w-12 xl:w-16 2xl:w-18 ">
              <img src={skill.url} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <div className="w-12 flex items-center justify-center lg:w-12 xl:w-16 2xl:w-18">
          <img src={build.headSlot.item.url} />
        </div>
        <div className="flex">
          {build.headSlot.skills.map((skill: any) => (
            <div className="w-12 h-16 flex items-center justify-center lg:w-12 xl:w-16 2xl:w-18 ">
              <img src={skill.url} />
            </div>
          ))}
          <div className="w-12 h-16 flex items-center justify-center lg:w-12 xl:w-16 2xl:w-18 "></div>
          <div className="w-12 h-16 flex items-center justify-center lg:w-12 xl:w-16 2xl:w-18 "></div>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <div className="w-12 flex items-center justify-center lg:w-12 xl:w-16 2xl:w-18">
          <img src={build.chestSlot.item.url} />
        </div>
        <div className="flex">
          {build.chestSlot.skills.map((skill: any) => (
            <div className="w-12 h-16 flex items-center justify-center lg:w-12 xl:w-16 2xl:w-18 ">
              <img src={skill.url} />
            </div>
          ))}
          <div className="w-12 h-16 flex items-center justify-center lg:w-12 xl:w-16 2xl:w-18 "></div>
          <div className="w-12 h-16 flex items-center justify-center lg:w-12 xl:w-16 2xl:w-18 "></div>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <div className="w-12 flex items-center justify-center lg:w-12 xl:w-16 2xl:w-18">
          <img src={build.bootsSlot.item.url} />
        </div>
        <div className="flex">
          {build.bootsSlot.skills.map((skill: any) => (
            <div className="w-12 h-16 flex items-center justify-center lg:w-12 xl:w-16 2xl:w-18 ">
              <img src={skill.url} />
            </div>
          ))}
          <div className="w-12 h-16 flex items-center justify-center lg:w-12 xl:w-16 2xl:w-18 "></div>
          <div className="w-12 h-16 flex items-center justify-center lg:w-12 xl:w-16 2xl:w-18 "></div>
        </div>
      </div>
    </div>
  );
}
