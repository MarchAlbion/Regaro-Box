import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  weaponUrl?: string;
  buildTitle: string;
  category: string;
  buildID: string;
};

export default function Build({
  weaponUrl = "",
  buildTitle,
  category,
  buildID,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <Link
        href={`/${buildID}`}
        style={{
          backgroundImage: `url('/${category}.png')`,
        }}
        className={`group bg-cover bg-center bg-no-repeat flex rounded-lg cursor-pointer  w-full md:w-[100%] l:w-[100%] lg:w-[100%]  text-sm mt-5 hover:scale-[1.010]  hover:shadow-lg  transition-all duration-300`}
      >
        <div className="max-w-20 border-r-2 border-dark-blue border-opacity-95 flex justify-center items-center">
          {weaponUrl ? (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 1 }}
            >
              <Image
                src={weaponUrl}
                alt={buildTitle}
                width={200}
                height={200}
              />
            </motion.div>
          ) : (
            <div className="w-[78px] h-[78px]"></div>
          )}
        </div>
        <div className="w-full flex justify-start items-center ">
          <div className="w-[90%] md:w-[50%] flex justify-center items-center bg-gradient-to-r from-slate-950 to-slate-500 text-white p-2 rounded-lg rounded-tl-none rounded-bl-none group-hover:md:w-[80%] tramsition-all duration-300">
            {buildTitle}
          </div>
        </div>

        <div className="flex justify-center items-center px-5 bg-gradient-to-r from-slate-700 to-slate-500 text-white rounded-r-lg text-[10px] w-[25%] min-w-[25%]">
          {category.toUpperCase()}
        </div>
      </Link>
    </motion.div>
  );
}
