import Image from "next/image";
import Regaro from "../../../public/KVADRAT.png";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link
      className="group flex flex-row text-white-500 
hover:text-white items-center justify-center
gap-2 text-xl transition-all duration-300 ease-in-out mr-5 "
      href="/"
    >
      <div
        className="w-16 flex
  items-center justify-center
  cursor-pointer"
      >
        <Image
          src={Regaro}
          alt="Regaro"
          className="object-cover"
          quality={100}
          priority
        />
      </div>
    </Link>
  );
};
