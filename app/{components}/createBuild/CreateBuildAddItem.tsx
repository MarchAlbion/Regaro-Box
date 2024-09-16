"use client";

import { useState, useRef, useEffect } from "react";
import { getItem } from "@/app/{utils}/api";

type Props = {
  image?: string;
};

export default function CreateBuildAddItem({ image }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const containerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const fetchData = async () => {
      const data = await getItem("head");
      setItems(data);
    };
    fetchData();
  }, []);

  const handleClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsOpen(true);
  };
  console.log(items);

  return (
    <>
      <div
        onClick={handleClick}
        className={`w-[85px] h-[85px] ${image} bg-center bg-no-repeat bg-contain cursor-pointer hover:shadow-lg transition-all duration-300 hover:opacity-70`}
      ></div>
      {isOpen && (
        <div
          ref={containerRef}
          className="absolute w-[100%] h-[100%] bg-slate-600 z-10 top-0 opacity-35"
        ></div>
      )}
    </>
  );
}
