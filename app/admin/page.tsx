"use client";

import { useState } from "react";
import CustomInput from "../{components}/CustomInput/CustomInput";
import RichTextEditor from "../{components}/RichText/Rischtext";
import CreateBuild from "../{components}/createBuild/CreateBuild";
import { password } from "../{utils}/adminToken";
import { Button } from "../{components}/Button/Button";
import { PickSpells } from "../{components}/PickSpellsComponent/PickSpells";
import { buidItems, Item } from "../{types}/buildTypes";
import CustomSelect from "../{components}/CustomSelect/CustomSelect";
import { createBuild } from "../{utils}/api";

export default function Admin() {
  const [richtextValue, setRichtextValue] = useState<string>("");
  const [adminToken, setAdminToken] = useState<string>("");
  const [auth, setAuth] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const [selectedBuildItems, setSelectedBuildItems] = useState<buidItems>({
    head: "",
    cape: "",
    armor: "",
    weapon: "",
    potions: "",
    off: "",
    meal: "",
    shoes: "",
  });

  const [selectedSpells, setSelectedSpells] = useState({
    q: "",
    w: "",
    e: "",
    r: "",
    d: "",
    f: "",
  });

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleBuildItem = (item: Item) => {
    if (item.category === "head") {
      setSelectedBuildItems({ ...selectedBuildItems, head: item });
    }
    if (item.category === "cape") {
      setSelectedBuildItems({ ...selectedBuildItems, cape: item });
    }
    if (item.category === "armor") {
      setSelectedBuildItems({ ...selectedBuildItems, armor: item });
    }
    if (item.category === "weapon") {
      setSelectedBuildItems({ ...selectedBuildItems, weapon: item });
    }
    if (item.category === "potions") {
      setSelectedBuildItems({ ...selectedBuildItems, potions: item });
    }
    if (item.category === "off") {
      setSelectedBuildItems({ ...selectedBuildItems, off: item });
    }
    if (item.category === "meal") {
      setSelectedBuildItems({ ...selectedBuildItems, meal: item });
    }
    if (item.category === "shoes") {
      setSelectedBuildItems({ ...selectedBuildItems, shoes: item });
    }
  };

  const handleSpells = (spell: string | undefined, id: string) => {
    if (spell === "Q") {
      setSelectedSpells({ ...selectedSpells, q: id });
    }
    if (spell === "W") {
      setSelectedSpells({ ...selectedSpells, w: id });
    }
    if (spell === "E") {
      setSelectedSpells({ ...selectedSpells, e: id });
    }
    if (spell === "R") {
      setSelectedSpells({ ...selectedSpells, r: id });
    }
    if (spell === "D") {
      setSelectedSpells({ ...selectedSpells, d: id });
    }
    if (spell === "F") {
      setSelectedSpells({ ...selectedSpells, f: id });
    }
  };

  const handleChange = (value: string) => {
    setRichtextValue(value);
  };
  const handleAdminToken = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setAdminToken(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (adminToken !== password) {
      setError("Wrong Token");
    }
    if (adminToken.length === 0) {
      setError("Token can't be empty");
    }
    if (adminToken === password) {
      setAuth(true);
    }
  };

  async function handleCreateBuild() {
    const data = {
      title: inputValue,
      category: selectedCategory,
      description: richtextValue,
      mainHandSlot: {
        item: (selectedBuildItems.weapon as Item)._id,
        active_skill_one: selectedSpells.q,
        active_skill_two: selectedSpells.w,
        active_skill_three: selectedSpells.e,
      },
      capeSlot: {
        item: (selectedBuildItems.cape as Item)._id,
      },
      headSlot: {
        item: (selectedBuildItems.head as Item)._id,
        active_skill: selectedSpells.d,
      },
      bootsSlot: {
        item: (selectedBuildItems.shoes as Item)._id,
        active_skill: selectedSpells.f,
      },
      chestSlot: {
        item: (selectedBuildItems.armor as Item)._id,
        active_skill: selectedSpells.r,
      },
      offHandSlot: {
        item: (selectedBuildItems.off as Item)._id,
      },
      potionSlot: {
        item: (selectedBuildItems.potions as Item)._id
      },
      mealSlot: {
        item: (selectedBuildItems.meal as Item)._id
      }
    };
    const res = await createBuild(data);
  }

  return auth === true ? (
    <main className="lg:grid grid-cols-2 self-center h-full items-start gap-5">
      <section className="flex-col bg-gray-transparent justify-center items-center p-5 gap-5">
        <div className="flex gap-3">
          <CustomSelect setSelectedCategory={setSelectedCategory} />
          <CustomInput
            lgMargin="lg:mr-0"
            mdMargin="md:mr-0"
            inputWidth="md:w-full"
            placeholder="Enter build title"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <RichTextEditor value={richtextValue} onChange={handleChange} />
        <div className="mt-5">
          <Button
            text="Create Build"
            type="submit"
            onClick={handleCreateBuild}
          />
        </div>
      </section>
      <div className="flex flex-row justify-center items-center gap-5 lg:flex-col">
        <CreateBuild handleBuildItem={handleBuildItem} />
        <div className="flex-col text-white">
          <div className="mb-2"> Select Active Spells:</div>
          <PickSpells text="Q" handleSpells={handleSpells} />
          <PickSpells text="W" handleSpells={handleSpells} />
          <PickSpells text="E" handleSpells={handleSpells} />
          <PickSpells text="R" handleSpells={handleSpells} />
          <PickSpells text="D" handleSpells={handleSpells} />
          <PickSpells text="F" handleSpells={handleSpells} />
        </div>
      </div>
    </main>
  ) : (
    <form
      className="h-[80vh] w-full flex justify-center items-center gap-2 flex-col"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-row gap-2">
        <CustomInput
          placeholder="Enter admin token"
          value={adminToken}
          onChange={handleAdminToken}
          mdMargin="0"
          lgMargin="0"
          mb={"mb-0"}
        />
        <Button text="Submit" type="submit" />
      </div>

      <div className="text-red-500  flex h-10 justify-start items-center w-96 ">
        {error && error}
      </div>
    </form>
  );
}
