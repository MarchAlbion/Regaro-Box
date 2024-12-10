import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { motion } from "framer-motion";
import { getAll } from "@/app/{utils}/api";
import { BuildType, Item } from "@/app/{types}/buildTypes";
import { deleteBuild } from "@/app/{utils}/api";

export const DeleteBuild = () => {
  const [toggleDelete, setToggleDelete] = useState(false);
  const [builds, setBuilds] = useState<BuildType[]>([]);
  const [allItems, setAllItems] = useState<Item[]>([]);

  useEffect(() => {
    getAll("builds").then((data) => {
      setBuilds(data);
    });
    getAll("items").then((data) => {
      setAllItems(data);
    });
  }, []);

  const handleDelete = async (buildID: string) => {
    await deleteBuild(buildID);
    setBuilds(builds.filter((build) => build._id !== buildID));
  };

  return (
    <div className="relative">
      <Button
        text="Delete Builds"
        type="button"
        bgColor="bg-red-500"
        bgHoverColor="hover:bg-red-700"
        onClick={() => setToggleDelete(!toggleDelete)}
      />
      {toggleDelete && (
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute top-0 left-36 flex flex-col   w-60  bg-slate-900 h-96 z-20 rounded-md  overflow-y-auto"
        >
          {builds.map((build: BuildType) => (
            <div className="flex flex-row  w-full   border-b-2 border-indigo-950 pl-2 pr-2">
              <div className="flex flex-row items-center gap-2 w-28">
                <img
                  src={
                    allItems.find(
                      (item: any) => item._id === build.mainHandSlot.item
                    )?.url
                  }
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="flex items-center w-full text-xs text-white overflow-hidden text-ellipsis whitespace-nowrap">
                {build.title}
              </div>
              <div
                onClick={() => handleDelete(build._id)}
                className="flex items-center w-9 hover:scale-110 hover:shadow-lg hover:transition-all duration-300 cursor-pointer"
              >
                <img src="/delete.svg" />
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};
