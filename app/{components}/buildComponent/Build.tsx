import Image from "next/image";

type Props = {
  weaponUrl: string;
  buildTitle: string;
  category: string;
};

export default function Build({ weaponUrl, buildTitle, category }: Props) {
  console.log(category);
  const backgroundClass = `bg-[url('/${category}.png')]`;
  console.log(backgroundClass);
  return (
    <div
      style={{
        backgroundImage: `url('/${category}.png')`,
      }}
      className={`bg-cover bg-center bg-no-repeat flex rounded-lg cursor-pointer  w-full md:w-[80%] l:w-[70%] lg:w-[70%]  text-sm mt-5 hover:scale-[1.010]  hover:shadow-lg  transition-all duration-300`}
    >
      <div className="max-w-20 border-r-2 border-dark-blue border-opacity-95 flex justify-center items-center">
        <Image src={weaponUrl} alt={buildTitle} width={200} height={200} />
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="w-[90%] md:w-[50%] flex justify-center items-center bg-gradient-to-r from-slate-950 to-slate-500 text-white p-5 rounded-lg">
          {buildTitle}
        </div>
      </div>

      <div className="flex justify-center items-center px-5 bg-gradient-to-r from-slate-700 to-slate-500 text-white rounded-r-lg text-[10px]    ">
        {category.toUpperCase()}
      </div>
    </div>
  );
}
