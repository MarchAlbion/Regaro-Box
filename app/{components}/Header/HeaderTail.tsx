"use client";

import CustomInput from "../CustomInput/CustomInput";
import { Logo } from "../Logo/Logo";

import CustomSelect from "../CustomSelect/CustomSelect";
import { usePathname } from "next/navigation";

export default function HeaderTail() {
  const path = usePathname();
  console.log(path);
  return (
    <header className="bg-dark-blue  ">
      <div
        aria-label="Global"
        className="flex  items-center  p-1 lg:px-8 justify-between"
      >
        <div className=" lg:flex-1 ">
          <Logo />
        </div>

        <div className="md:flex w-full items-cente justify-center">
          {path === "/admin" ? (
            <div>ADMIN PAGE</div>
          ) : (
            <>
              <CustomInput />
              <CustomSelect />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
