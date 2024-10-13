"use client";
import { getAll } from "@/app/{utils}/api";
import CreateBuildAddItem from "./CreateBuildAddItem";
import { useEffect, useState } from "react";
import { Item } from "@/app/{types}/buildTypes";
type Props = {
  handleBuildItem: (item: Item) => void;
};

export default function CreateBuild({handleBuildItem}: Props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getAll("items").then((data) => {
      setItems(data);
    });
  }, []);

  const head = items.filter((item: Item) => item.category === "head");
  const cape = items.filter((item: Item) => item.category === "cape");
  const armor = items.filter((item: Item) => item.category === "armor");
  const weapon = items.filter((item: Item) => item.category === "weapon");
  const potion = items.filter((item: Item) => item.category === "potions");
  const offhand = items.filter((item: Item) => item.category === "off");
  const food = items.filter((item: Item) => item.category === "meal");
  const shoes = items.filter((item: Item) => item.category === "shoes");

  return (
    <div className="w-80 h-96 flex justify-center items-center mt-6  bg-dark-blue opacity-200 rounded-lg shadow-lg flex-col">
      <div className=" flex w-[94%] h-full bg-center bg-no-repeat bg-contain relative gap-2 flex-col align-center justify-center">
        <div className="flex justify-center flex-row w=[100%] gap-2">
          <div className="w-[85px] h-[85px"></div>
          <CreateBuildAddItem image="bg-head" items={head} handleBuildItem={handleBuildItem} />
          <CreateBuildAddItem image="bg-cape" items={cape} handleBuildItem={handleBuildItem} />
        </div>
        <div className="flex flex-row gap-2 w-full justify-center">
          <CreateBuildAddItem image="bg-left" items={weapon} handleBuildItem={handleBuildItem} />
          <CreateBuildAddItem image="bg-body" items={armor} handleBuildItem={handleBuildItem} />
          <CreateBuildAddItem image="bg-right" items={offhand} handleBuildItem={handleBuildItem} />
        </div>
        <div className="flex flex-row gap-2 w-full justify-center">
          <CreateBuildAddItem image="bg-potion" items={potion} handleBuildItem={handleBuildItem} />
          <CreateBuildAddItem image="bg-shoes" items={shoes} handleBuildItem={handleBuildItem} />
          <CreateBuildAddItem image="bg-food" items={food} handleBuildItem={handleBuildItem} />
        </div>
      </div>
    </div>
  );
}
