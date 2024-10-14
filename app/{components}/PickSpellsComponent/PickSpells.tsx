"use client";

import { useState } from "react";

type Props = {
  onClick?: (event: React.MouseEvent) => void;
  text?: string;
  handleSpells: (spell: string | undefined, id: string) => void;
};

export const PickSpells = ({text, handleSpells }: Props) => {
  const [selectedSpell, setSelectedSpell] = useState<number>();
  const options = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
  ];

  const handleClick = (id: number) => {
    setSelectedSpell(id);
    handleSpells(text,id.toString());
  };
  return (
    <div className="flex flex-row gap-5 items-center justify-center w-full h-11  text-white  rounded-lg">
      <div className="relative w-7 h-7 flex justify-center items-center">
        <img
          className="absolute"
          src={"./Ring.png"}
          alt="ring"
          width={"100%"}
          height={"100%"}
        />
        <div className="text-white">{text}</div>
      </div>
      {options.map((option) => (
        <div
          key={option.id}
          onClick={() => handleClick(option.id)}
          className={`flex h-[10px] w-[10px] items-center justify-center cursor-pointer hover:opacity-55 p-3 radius-md border-2 border-dark-blue hover:border-white transition-all duration-200 ${
            selectedSpell === option.id && "bg-teal-800"
          }`}
        >
          <div
            className={`flex  ${selectedSpell === option.id && "bg-teal-800"} `}
          >
            {" "}
            {option.id}
          </div>
        </div>
      ))}
    </div>
  );
};
