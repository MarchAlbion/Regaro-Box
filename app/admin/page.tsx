"use client";

import { act, useState } from "react";
import CustomInput from "../{components}/CustomInput/CustomInput";
import RichTextEditor from "../{components}/RichText/Rischtext";
import CreateBuild from "../{components}/createBuild/CreateBuild";
import { password } from "../{utils}/adminToken";
import { Button } from "../{components}/Button/Button";
import { buidItems, Item } from "../{types}/buildTypes";
import CustomSelect from "../{components}/CustomSelect/CustomSelect";
import { createBuild } from "../{utils}/api";
import {
  armorOption,
  armorSpells,
  Skill,
  SkillWithCategory,
  weaponOption,
  weaponSpells,
} from "../{utils}/spells";
import SelectSpell from "../{components}/CustomSelect/SelectSpell";
import ToggleCategory from "../{components}/Toggle/ToggleCategory";
import SelectItemType from "../{components}/CustomSelect/SelectWeaponType";

export default function Admin() {
  const [richtextValue, setRichtextValue] = useState<string>("");
  const [adminToken, setAdminToken] = useState<string>("");
  const [auth, setAuth] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [selectedItemCategory, setSelectedItemCategory] =
    useState<string>("sword");
  console.log(selectedItemCategory);

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

  const [spells, setSpells] = useState<SkillWithCategory[] | Skill[]>([]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleWeaponType = (value: string) => {
    setSelectedItemCategory(value);
  };

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

  const [enabled, setEnabled] = useState(false);
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
        

      },
      capeSlot: {
        item: (selectedBuildItems.cape as Item)._id,
      },
      headSlot: {
        item: (selectedBuildItems.head as Item)._id,
      },
      bootsSlot: {
        item: (selectedBuildItems.shoes as Item)._id,
      },
      chestSlot: {
        item: (selectedBuildItems.armor as Item)._id,
      },
      offHandSlot: {
        item: (selectedBuildItems.off as Item)._id,
      },
      potionSlot: {
        item: (selectedBuildItems.potions as Item)._id,
      },
      mealSlot: {
        item: (selectedBuildItems.meal as Item)._id,
      },
      spells: spells,
    };
    const res = await createBuild(data);
    console.log("response", res);
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
          <div className="flex flex-row  items-center gap-2">
            <span
              className={`text-xs ${
                !enabled ? "text-green-600" : "text-gray-500"
              }`}
            >
              Weapon
            </span>
            <ToggleCategory
              enabled={enabled}
              setEnabled={setEnabled}
              setSelectedItemCategory={setSelectedItemCategory}
            />
            <span
              className={`text-xs ${
                enabled ? "text-green-600" : "text-gray-500"
              }`}
            >
              Armor
            </span>
          </div>

          <SelectItemType
            options={enabled ? armorOption : weaponOption}
            value={selectedItemCategory}
            onChange={handleWeaponType}
          />
          <SelectSpell
            allSpells={enabled ? armorSpells : weaponSpells}
            category={selectedItemCategory}
            setSpells={setSpells}
            spells={spells}
          />
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
