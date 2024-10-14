"use client";

import { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const category = [
  { value: null, label: "All Content" },
  { value: "gank", label: "Gank" },
  { value: "solo_pvp", label: "Solo PVP" },
  { value: "solo_pve", label: "Solo PVE" },
  { value: "avalonian_roads", label: "Avalonian Roads" },
  { value: "corrupted", label: "Corrupted Dungeons" },
  { value: "mists", label: "Mists" },
  { value: "zvz", label: "ZVZ" },
  { value: "hellgates", label: "Hellgates" },
  { value: "small_scale", label: "Small Scale" },
  { value: "hce", label: "HCE" },
  { value: "crystal_arena", label: "Crystal Arena" },
  { value: "avalonian_dungeon", label: "Ava Dungeons" },
  { value: "tracking", label: "Tracking" },
  { value: "gathering", label: "Gathering" },
];

// ! Remove one of those functions as they do the same thing!!! (Shame on you)
type Props = {
  setSelectedCategory?: (value: string) => void;
  handleCategory?: (value: string) => void;
};

export default function CustomSelect({
  setSelectedCategory = () => {},
  handleCategory = () => {},
}: Props) {
  const [selected, setSelected] = useState(category[0]);

  const handleChangeCategory = (value: any) => {
    setSelectedCategory(value.value);
    setSelected(value);
    handleCategory(value.value);
  };

  return (
    <Listbox value={selected} onChange={handleChangeCategory}>
      <div className="relative ">
        <ListboxButton className=" cursor-pointer relative min-w-48 w-full  rounded-md bg-transparent py-1.5 pl-3 pr-10 text-left text-gray-200 shadow-sm ring-1 ring-inset ring-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
          <span className="block truncate px-2"> {selected.label}</span>
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              aria-hidden="true"
              className="h-5 w-5 text-gray-400"
            />
          </span>
        </ListboxButton>

        <ListboxOptions
          transition
          className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-dark-blue py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
        >
          {category.map((categoryItem) => (
            <ListboxOption
              key={categoryItem.value}
              value={categoryItem}
              className="group relative cursor-pointer select-none py-2 pl-8 pr-4 text-white data-[focus]:bg-indigo-900 data-[focus]:text-white"
            >
              <span className="block truncate font-normal group-data-[selected]:font-semibold">
                {categoryItem.label}
              </span>

              <span className="absolute inset-y-0 left-0 flex items-center pl-1.5 text-indigo-600 group-data-[focus]:text-white [.group:not([data-selected])_&]:hidden">
                <CheckIcon aria-hidden="true" className="h-5 w-5" />
              </span>
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}
