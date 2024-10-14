"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSingleBuild } from "../{utils}/api";
import Image from "next/image";

export default function Build() {
  const params = useParams();
  const buildId = params.build;
  const [build, setBuild] = useState<any>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const fetchBuild = async () => {
      const build = await getSingleBuild(buildId as string);
      console.log({ build });
      setBuild(build);
    };

    if (params.build) {
      fetchBuild();
    }
  }, [params.build]);

  return (
    <>
      {build && (
        <motion.div
          className="flex flex-col items-center justify-center gap-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full flex-col items-center gap-3">
            <h1 className="text-3xl font-bold text-white w-full mt-3">
              {build.title}
            </h1>
            <p className="w-full text-amber-500 mt-1">
              {build.category
                ? build.category.charAt(0).toUpperCase() +
                  build.category.slice(1)
                : "No category"}
            </p>
          </div>
          <section className="w-full flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-col border-2 border-dark-blue border-opacity-100 rounded-lg w-fit p-1 bg-dark-blue shadow-lg justify-center items-center relative min-w-[312px] min-h-[312px]"
              onMouseEnter={() => setIsActive(true)}
              onMouseLeave={() => setIsActive(false)}
            >
              <div>
                <div className="flex flex-row items-center justify-center">
                  <Image
                    src={build.headSlot.item.url}
                    alt="nevermind"
                    width={100}
                    height={100}
                    className="opacity-0"
                  />
                  <Image
                    src={build.headSlot.item.url}
                    alt="helmet"
                    width={100}
                    height={100}
                  />
                  <Image
                    src={build.capeSlot.item.url}
                    alt="cape"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-row items-center justify-center">
                  <Image
                    src={build.mainHandSlot.item.url}
                    alt="weapon"
                    width={100}
                    height={100}
                  />
                  <Image
                    src={build.chestSlot.item.url}
                    alt="armor"
                    width={100}
                    height={100}
                  />
                  <Image
                    className={`${!build.offHandSlot && "opacity-50"}`}
                    src={
                      build.offHandSlot
                        ? build.offHandSlot.item.url
                        : build.mainHandSlot.item.url
                    }
                    alt="armor"
                    width={100}
                    height={100}
                  />
                </div>
                <div className="flex flex-row items-center justify-center">
                  <Image
                    src={build.headSlot.item.url}
                    alt="nevermind"
                    width={100}
                    height={100}
                    className="opacity-0"
                  />
                  <Image
                    src={build.headSlot.item.url}
                    alt="helmet"
                    width={100}
                    height={100}
                  />
                  <Image
                    src={build.capeSlot.item.url}
                    alt="cape"
                    width={100}
                    height={100}
                  />
                </div>
              </div>
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    className="flex flex-col border-2 border-dark-blue border-opacity-100 rounded-lg w-fit p-1 bg-dark-blue shadow-lg justify-center  absolute min-w-[312px] top-0 left-0 h-full text-white"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex-1">
                      {`Helmet: ${build.headSlot?.item.name.EN}`}
                    </div>
                    <div className="flex-1 text-start">{`Cape: ${build.capeSlot.item.name.EN}`}</div>
                    <div className="flex-1">{`Weapon: ${build.mainHandSlot.item.name.EN}`}</div>
                    <div className="flex-1">{`Armor: ${build.chestSlot.item.name.EN}`}</div>
                    {build.offHandSlot && (
                      <div className="flex-1">{`Offhand: ${build.offHandSlot?.item.name.EN}`}</div>
                    )}
                    <div className="flex-1">{`Meal: ${build.mealSlot?.item.name.EN}`}</div>
                    <div className="flex-1">{`Potion: ${build.potionSlot?.item.name.EN}`}</div>
                    <div className="flex-1">{`Boots: ${build.bootsSlot?.item.name.EN}`}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </section>
        </motion.div>
      )}
    </>
  );
}
