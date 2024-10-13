"use client";
import { Item } from "@/app/{types}/buildTypes";
import { useState, useRef, useEffect } from "react";
import CustomInput from "../CustomInput/CustomInput";
import { filterItems } from "@/app/{utils}/filterItems";
import React from "react";

type Props = {
  image?: string;
  items: Item[];
  itemImage?: string;
  handleBuildItem: (item: Item) => void;
};

export default function CreateBuildAddItem({
  image,
  items,
  handleBuildItem,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemsFilter, setItemsFilter] = useState("");
  const [albionItems, setAlbionItems] = useState<Item[] | undefined>(undefined);
  const [selectedItem, setSelectedItem] = useState<Item | undefined>();

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setItemsFilter(event.target.value);
    setAlbionItems(filterItems(items, event.target.value));
  };

  const handleSelectedItem = (item: Item) => {
    setSelectedItem(item);
    handleBuildItem(item);
    setIsOpen(false);
  };

  useEffect(() => {
    if (items.length > 0 && albionItems === undefined) {
      setAlbionItems(items);
    }
  }, [albionItems, items]);

  return (
    <React.Fragment>
      <div
        onClick={handleClick}
        className={`w-[85px] h-[85px] ${
          !selectedItem && image
        } bg-center bg-no-repeat bg-contain cursor-pointer hover:shadow-lg transition-all duration-300 hover:opacity-70
       } `}
      >
        {selectedItem && (
          <img
            className="scale-110"
            src={selectedItem.url}
            alt={selectedItem.name.EN}
            width={"100%"}
            height={"100%"}
          />
        )}
      </div>
      {isOpen && (
        <div
          ref={containerRef}
          className="absolute w-[100%] overflow-y-auto h-[100%] bg-slate-900 z-10 top-0 gap-2"
        >
          <div className="sticky top-0">
            <CustomInput
              bg="bg-slate-900"
              lgMargin="lg:mr-0"
              mdMargin="md:mr-0"
              inputWidth="md:w=[100%]"
              value={itemsFilter}
              onChange={handleChange}
              placeholder="SEARCH"
            />
          </div>

          {albionItems?.map((item: Item) => (
            <div
              key={item._id}
              className="text-xs flex items-center justify-center a w-[100%] h-[15%] bg-center bg-no-repeat bg-contain cursor-pointer transition-all duration-300 border-b-2 border-dark-blue border-opacity-95"
            >
              <div
                onClick={() => handleSelectedItem(item)}
                className="flex justify-between items-center w-[100%] h-[100%] bg-gradient-to-r from-slate-950 to-slate-800 text-white p-5 "
              >
                <div className="flex w=[40px] h=[40px] text-left">
                  <img
                    src={item.url}
                    alt={item.name.EN}
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex w=[60%] text-right">{item.name.RU}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}
