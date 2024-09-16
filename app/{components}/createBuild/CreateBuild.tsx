import CreateBuildAddItem from "./CreateBuildAddItem";

export default function CreateBuild() {
  return (
    <div className="w-80 h-96 flex justify-center items-center mt-6  bg-dark-blue opacity-200 rounded-lg shadow-lg">
      <div className=" flex w-[94%] h-full bg-center bg-no-repeat bg-contain relative gap-2 flex-col align-center justify-center">
        <div className="flex justify-center  flex-row gap-2 w-full">
          <CreateBuildAddItem image="bg-head" />
        </div>
        <div className="flex flex-row gap-2 w-full justify-center">
          <CreateBuildAddItem image="bg-left" />
          <CreateBuildAddItem image="bg-body" />
          <CreateBuildAddItem image="bg-right" />
        </div>
        <div className="flex flex-row gap-2 w-full justify-center">
          <CreateBuildAddItem image="bg-potion" />
          <CreateBuildAddItem image="bg-shoes" />
          <CreateBuildAddItem image="bg-food" />
        </div>
      </div>
    </div>
  );
}
