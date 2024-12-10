import { BuildType } from "@/app/{types}/buildTypes";
import { motion } from "framer-motion";
import Build from "../buildComponent/Build";
import BuildItemsList from "../BuildItemsList/BuildItemsList";
import StreamerPage from "../RegaroTwitch/RegaroPage";
import { ShowBuild } from "./ShowBuild/ShowBuild";
import SpellsList from "./SpellsList/SpellsList";
import Socials from "./Socials/Socials";

type Props = {
  build: any;
};

export default function SingleBuild({ build }: Props) {
  console.log(build);
  return (
    <div className="bg-transparent h-full">
      <div className="h-full py-10">
        <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2 h-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative lg:row-span-2"
          >
            <div className="absolute inset-px rounded-lg bg-caerleon bg-cover lg:rounded-l-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                <p className="mt-2 text-xl font-medium tracking-tight text-gray-300 max-lg:text-center">
                  {build.title}
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-orange-500 max-lg:text-center">
                  {build.category}
                </p>
              </div>
              <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-md flex items-center justify-center">
                <div className="w-[90%]  h-full lg:h-[90%] xl:h-[83%] flex-col self-end shadow-9xl rounded-t-lg backdrop-blur-md justify-center items-center  border-dark-blue">
                  <BuildItemsList build={build} />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-l-[2rem]"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative max-lg:row-start-1"
          >
            <div className="absolute inset-px rounded-lg  max-lg:rounded-t-[2rem] bg-gradientBlack  bg-top bg-no-repeat"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] p-5 justify-center">
              <ShowBuild build={build} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
          >
            <div className="absolute inset-px rounded-lg bg-gardientDark bg-cover bg-center"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] p-5 justify-center">
              <SpellsList build={build} />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative lg:row-span-2"
          >
            <div className="absolute inset-px rounded-lg bg-gradientWhite bg-cover bg-center max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]"></div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <StreamerPage />
              <Socials />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/*             <div className="absolute inset-x-10 bottom-0 top-28 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 border-opacity-10 bg-dark-blue shadow-2xl">
                  {/* <div className="flex self-center h-full py-10 px-4 w-full justify-between items-center">
                    <div className="w-10  ">
                      <img src={build.mainHandSlot.item.url} />
                    </div>
                    <div>{build.mainHandSlot.item.name.EN}</div>
                  </div> }
                  <BuildItemsList  build={build} />
                </div> */
