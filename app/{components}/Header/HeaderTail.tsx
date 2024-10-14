"use client";
import React from "react";

import CustomInput from "../CustomInput/CustomInput";
import { Logo } from "../Logo/Logo";

import CustomSelect from "../CustomSelect/CustomSelect";
import { usePathname } from "next/navigation";

type Props = {
  searchBuild: string;
  handleSearchBuild: (value: string) => void;
  handleCategory: (value: string) => void;
};

export default function HeaderTail({ searchBuild, handleSearchBuild, handleCategory }: Props) {
  const path = usePathname();

  return (
    <header className="bg-dark-blue sticky top-0 z-50 w-full">
      <div
        aria-label="Global"
        className="flex  items-center  p-1 lg:px-8 justify-between"
      >
        <div className=" lg:flex-1 ">
          <Logo />
        </div>

        <div className="md:flex w-full items-cente justify-center">
          {path !== "/" ? (
            <div></div>
          ) : (
            <>
              <CustomInput placeholder="Search for build" value={searchBuild} onChange={(e) => handleSearchBuild(e.target.value)} />
              <CustomSelect handleCategory={handleCategory} />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
