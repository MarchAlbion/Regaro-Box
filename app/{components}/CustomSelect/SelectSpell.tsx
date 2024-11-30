"use client";
import { Skill, SkillWithCategory } from "@/app/{utils}/spells";

type Props = {
  category: string;
  setSpells: React.Dispatch<React.SetStateAction<SkillWithCategory[] | Skill[]>>;
  spells: Skill[];
  allSpells: any;
};

export default function SelectSpell({
  category,
  setSpells,
  spells,
  allSpells,
}: Props) {
  const selectedSpellsPassive = allSpells[category]?.passive as
    | Skill[]
    | undefined;
  const selectedSpellsActive = allSpells[category]?.active as
    | Skill[]
    | undefined;
  const uniqueSpells = allSpells[category]?.unique as Skill[] | undefined;

  const onSpellClick = (spell: Skill) => {
    if (spells.includes(spell)) {
      setSpells((prevState) => prevState.filter((s) => s.name !== spell.name));
      console.log("removed");
      return;
    } else {
      setSpells((prevState) => [
        ...prevState,
        { category: category, ...spell },
      ]);
    }
  };

  console.log(spells);
  console.log(category);
  console.log(selectedSpellsPassive, "not");
  return (
    <div className="grid grid-cols-5 gap-1">
      {selectedSpellsPassive?.map((spell) => (
        <div key={spell.name} className=" cursor-pointer">
          <img
            src={spell.url}
            alt={spell.name}
            className={`w-12 h-12 hover:scale-110 transform-transition duration-200 ease-in-out   ${
              spells.includes(spell) ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => onSpellClick(spell)}
          />
        </div>
      ))}
      {selectedSpellsActive?.map((spell) => (
        <div key={spell.name} className="cursor-pointer ">
          <img
            src={spell.url}
            alt={spell.name}
            className={`w-12 h-12 hover:scale-110 transform-transition duration-200 ease-in-out  ${
              spells.includes(spell) ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => onSpellClick(spell)}
          />
        </div>
      ))}
      {uniqueSpells?.map((spell) => (
        <div key={spell.name} className=" cursor-pointer">
          <img
            src={spell.url}
            alt={spell.name}
            className={`w-12 h-12 hover:scale-110 transform-transition duration-200 ease-in-out   ${
              spells.includes(spell) ? "opacity-100" : "opacity-50"
            }`}
            onClick={() => onSpellClick(spell)}
          />
        </div>
      ))}
    </div>
  );
}
