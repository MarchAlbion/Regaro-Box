export interface Skill {
  url: string;
  name: string;
}

export interface SkillWithCategory {
  url: string;
  name: string;
  category: string;
}

export interface WeaponSkills {
  passive: Skill[];
  active: Skill[];
  unique: Skill[];
}
export const weaponOption = [
  "sword",
  "bow",
  "fire",
  "crossbow",
  "shapeshifter",
  "cursed",
  "frost",
  "arcane",
  "holy",
  "nature",
  "dagger",
  "spear",
  "axe",
  "quarterstaff",
  "mace",
  "hammer",
  "gloves",
];
export interface Weapon {
  sword: WeaponSkills;
  bow: WeaponSkills;
  fire: WeaponSkills;
  crossbow: WeaponSkills;
  shapeshifter: WeaponSkills;
  cursed: WeaponSkills;
  frost: WeaponSkills;
  arcane: WeaponSkills;
  holy: WeaponSkills;
  nature: WeaponSkills;
  dagger: WeaponSkills;
  spear: WeaponSkills;
  axe: WeaponSkills;
  quarterstaff: WeaponSkills;
  mace: WeaponSkills;
  hammer: WeaponSkills;
  gloves: WeaponSkills;
}

export const armorOption = [
  "shoes",
  "boots",
  "sandals",
  "hood",
  "helmet",
  "cowl",
  "robe",
  "jacket",
  "armor",
  "workboots",
  "cap",
  "garb",
];

export const armorSpells = {
  shoes: {
    passive: [
      {
        name: "Max Load Shoes",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_MAXLOAD_SHOES",
      },
      {
        name: "Balance",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_BALANCE",
      },
      {
        name: "Increased AA Speed",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_INCREASED_AASPEED",
      },
      {
        name: "Cooldown Reduction",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_CD_REDUCTION",
      },
    ],
    active: [
      {
        name: "Dodge",
        url: "https://render.albiononline.com/v1/spell/DODGE",
      },
      {
        name: "Sprint Cooldown Reduction",
        url: "https://render.albiononline.com/v1/spell/SPRINT_CD_REDUCTION",
      },
    ],
    unique: [
      {
        name: "Cleanse Dash",
        url: "https://render.albiononline.com/v1/spell/CLEANSE_DASH",
      },
      {
        name: "Oversprint",
        url: "https://render.albiononline.com/v1/spell/OVERSPRINT",
      },
      {
        name: "Assassin Dash",
        url: "https://render.albiononline.com/v1/spell/ASSASSIN_DASH",
      },
      {
        name: "Damage Blink",
        url: "https://render.albiononline.com/v1/spell/DMG_BLINK",
      },
      {
        name: "Deathmark",
        url: "https://render.albiononline.com/v1/spell/DEATHMARK",
      },
      {
        name: "Invisible Walk",
        url: "https://render.albiononline.com/v1/spell/INVISIBLE_WALK",
      },
      {
        name: "After Image",
        url: "https://render.albiononline.com/v1/spell/AFTER_IMAGE",
      },
      {
        name: "Blindspot",
        url: "https://render.albiononline.com/v1/spell/BLINDSPOT",
      },
      {
        name: "Jump",
        url: "https://render.albiononline.com/v1/spell/JUMP",
      },
    ],
  },
  boots: {
    passive: [
      {
        name: "Max Load Shoes",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_MAXLOAD_SHOES",
      },
      {
        name: "MR AR",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_MR_AR",
      },
      {
        name: "Cooldown Duration",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_CCDURATION",
      },
      {
        name: "Increased CCR",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_INCREASED_CCR",
      },
    ],
    active: [
      {
        name: "Dodge",
        url: "https://render.albiononline.com/v1/spell/DODGE",
      },
      {
        name: "Sprint Hot",
        url: "https://render.albiononline.com/v1/spell/SPRINTHOT",
      },
    ],
    unique: [
      {
        name: "Wanderlust",
        url: "https://render.albiononline.com/v1/spell/WANDERLUST",
      },
      {
        name: "Charge Shield",
        url: "https://render.albiononline.com/v1/spell/CHARGE_SHIELD",
      },
      {
        name: "Max Health Buff",
        url: "https://render.albiononline.com/v1/spell/MAXHEALTHBUFF",
      },
      {
        name: "Battle Frenzy",
        url: "https://render.albiononline.com/v1/spell/BATTLEFRENZY",
      },
      {
        name: "Berserk Sprint",
        url: "https://render.albiononline.com/v1/spell/BERSERK_SPRINT",
      },
      {
        name: "Shoulder Tackle",
        url: "https://render.albiononline.com/v1/spell/SHOULDERTACKLE",
      },
      {
        name: "Charge In",
        url: "https://render.albiononline.com/v1/spell/CHARGE_IN",
      },
      {
        name: "CC Block",
        url: "https://render.albiononline.com/v1/spell/CC_BLOCK",
      },
      {
        name: "Royal March",
        url: "https://render.albiononline.com/v1/spell/ROYAL_MARCH",
      },
    ],
  },
  sandals: {
    passive: [
      {
        name: "Max Load Shoes",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_MAXLOAD_SHOES",
      },
      {
        name: "Increased Damage",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_INCREASED_DAMAGE",
      },
      {
        name: "Cast Speed",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_CASTSPEED",
      },
      {
        name: "Reduced Energy Cost",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_REDUCED_ENERGYCOST",
      },
    ],
    active: [
      {
        name: "Dodge",
        url: "https://render.albiononline.com/v1/spell/DODGE",
      },
      {
        name: "Sprint EOT",
        url: "https://render.albiononline.com/v1/spell/SPRINTEOT",
      },
    ],
    unique: [
      {
        name: "Channeled Run",
        url: "https://render.albiononline.com/v1/spell/CHANNELED_RUN",
      },
      {
        name: "Blink",
        url: "https://render.albiononline.com/v1/spell/BLINK",
      },
      {
        name: "Delayed Teleport",
        url: "https://render.albiononline.com/v1/spell/DELAYED_TELEPORT",
      },
      {
        name: "Frostwalk",
        url: "https://render.albiononline.com/v1/spell/FROSTWALK",
      },
      {
        name: "Swap",
        url: "https://render.albiononline.com/v1/spell/SWAP",
      },
      {
        name: "Demonwalk",
        url: "https://render.albiononline.com/v1/spell/DEMONWALK",
      },
      {
        name: "Translucent",
        url: "https://render.albiononline.com/v1/spell/TRANSLUCENT",
      },
      {
        name: "Hover Sprint",
        url: "https://render.albiononline.com/v1/spell/HOVER_SPRINT",
      },
      {
        name: "Glass Move Speed",
        url: "https://render.albiononline.com/v1/spell/GLASS_MOVESPEED",
      },
    ],
  },
  hood: {
    passive: [
      {
        name: "Balance",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_BALANCE",
      },
      {
        name: "Increased AA Speed",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_INCREASED_AASPEED",
      },
      {
        name: "Cooldown Reduction",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_CD_REDUCTION",
      },
    ],
    active: [
      {
        name: "Energy Burst Channel",
        url: "https://render.albiononline.com/v1/spell/ENERGYBURST_CHANNEL",
      },
      {
        name: "Self Cleanse",
        url: "https://render.albiononline.com/v1/spell/SELF_CLEANSE",
      },
    ],
    unique: [
      {
        name: "Howl",
        url: "https://render.albiononline.com/v1/spell/HOWL",
      },
      {
        name: "Retaliate",
        url: "https://render.albiononline.com/v1/spell/RETALIATE2",
      },
      {
        name: "Summoner Cooldown Reduction",
        url: "https://render.albiononline.com/v1/spell/SUMMONER_CD_REDUCTION",
      },
      {
        name: "Smell of Blood",
        url: "https://render.albiononline.com/v1/spell/SMELLOFBLOOD",
      },
      {
        name: "Smoke Bomb",
        url: "https://render.albiononline.com/v1/spell/SMOKEBOMB",
      },
      {
        name: "Armor Cooldown Reset",
        url: "https://render.albiononline.com/v1/spell/ARMOR_CD_RESET",
      },
      {
        name: "Immortal",
        url: "https://render.albiononline.com/v1/spell/IMMORTAL",
      },
      {
        name: "Nasty Wounds",
        url: "https://render.albiononline.com/v1/spell/NASTY_WOUNDS",
      },
      {
        name: "Growing Rage",
        url: "https://render.albiononline.com/v1/spell/GROWING_RAGE",
      },
    ],
  },
  helmet: {
    passive: [
      {
        name: "MR AR",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_MR_AR",
      },
      {
        name: "Cooldown Duration",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_CCDURATION",
      },
      {
        name: "Increased CCR",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_INCREASED_CCR",
      },
    ],
    active: [
      {
        name: "Energy Burst Channel",
        url: "https://render.albiononline.com/v1/spell/ENERGYBURST_CHANNEL",
      },
      {
        name: "Stone Skin",
        url: "https://render.albiononline.com/v1/spell/STONESKIN",
      },
    ],
    unique: [
      {
        name: "Block",
        url: "https://render.albiononline.com/v1/spell/BLOCK",
      },
      {
        name: "Disruption Immunity",
        url: "https://render.albiononline.com/v1/spell/DISRUPTIONIMMUNITY",
      },
      {
        name: "Emergency Shield",
        url: "https://render.albiononline.com/v1/spell/EMERGENCY_SHIELD",
      },
      {
        name: "Sacrifice Heal",
        url: "https://render.albiononline.com/v1/spell/SACRIFICE_HEAL",
      },
      {
        name: "Weapon Silence",
        url: "https://render.albiononline.com/v1/spell/WEAPON_SILENCE",
      },
      {
        name: "Electric Shock",
        url: "https://render.albiononline.com/v1/spell/ELECTRICSHOCK",
      },
      {
        name: "Spider Thread",
        url: "https://render.albiononline.com/v1/spell/SPIDER_THREAD",
      },
      {
        name: "Purifying Smoke",
        url: "https://render.albiononline.com/v1/spell/PURIFYING_SMOKE",
      },
      {
        name: "Artillery Command",
        url: "https://render.albiononline.com/v1/spell/ARTILLERY_COMMAND",
      },
    ],
  },
  cowl: {
    passive: [
      {
        name: "Increased Damage",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_INCREASED_DAMAGE",
      },
      {
        name: "Cast Speed",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_CASTSPEED",
      },
      {
        name: "Reduced Energy Cost",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_REDUCED_ENERGYCOST",
      },
    ],
    active: [
      {
        name: "Energy Burst Channel",
        url: "https://render.albiononline.com/v1/spell/ENERGYBURST_CHANNEL",
      },
      {
        name: "PBAOE Knockback",
        url: "https://render.albiononline.com/v1/spell/PBAOE_KNOCKBACK",
      },
    ],
    unique: [
      {
        name: "Energy Shield",
        url: "https://render.albiononline.com/v1/spell/ENERGYSHIELD2",
      },
      {
        name: "Ice Block",
        url: "https://render.albiononline.com/v1/spell/ICEBLOCK2",
      },
      {
        name: "Fire Breath",
        url: "https://render.albiononline.com/v1/spell/HELMET_FIREBREATH",
      },
      {
        name: "Energy Field",
        url: "https://render.albiononline.com/v1/spell/ENERGYFIELD",
      },
      {
        name: "Purge Helmet",
        url: "https://render.albiononline.com/v1/spell/PURGE_HELMET",
      },
      {
        name: "Inner Corruption",
        url: "https://render.albiononline.com/v1/spell/INNER_CORRUPTION",
      },
      {
        name: "Hyper Focus",
        url: "https://render.albiononline.com/v1/spell/HYPER_FOCUS",
      },
      {
        name: "Avalon Beam",
        url: "https://render.albiononline.com/v1/spell/AVALON_BEAM",
      },
      {
        name: "Perpetual Energy",
        url: "https://render.albiononline.com/v1/spell/PERPETUALENERGY",
      },
    ],
  },
  jacket: {
    passive: [
      {
        name: "Armor Balance",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ARMOR_BALANCE",
      },
      {
        name: "Increased AA Speed",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ARMOR_INCREASED_AASPEED",
      },
      {
        name: "Cooldown Reduction",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ARMOR_CD_REDUCTION",
      },
    ],
    active: [
      {
        name: "Out of Combat Heal",
        url: "https://render.albiononline.com/v1/spell/OUTOFCOMBATHEAL",
      },
      {
        name: "Flame Shield",
        url: "https://render.albiononline.com/v1/spell/FLAMESHIELD",
      },
    ],
    unique: [
      {
        name: "Bloodlust",
        url: "https://render.albiononline.com/v1/spell/BLOODLUST",
      },
      {
        name: "Haste",
        url: "https://render.albiononline.com/v1/spell/HASTE",
      },
      {
        name: "Ambush",
        url: "https://render.albiononline.com/v1/spell/AMBUSH",
      },
      {
        name: "Storm Shield",
        url: "https://render.albiononline.com/v1/spell/STORMSHIELD",
      },
      {
        name: "Lifesteal Aura",
        url: "https://render.albiononline.com/v1/spell/LIFESTEALAURA",
      },
      {
        name: "Burn Aura",
        url: "https://render.albiononline.com/v1/spell/BURNAURA",
      },
      {
        name: "Mist Walker",
        url: "https://render.albiononline.com/v1/spell/MIST_WALKER",
      },
      {
        name: "Dynamic Defense",
        url: "https://render.albiononline.com/v1/spell/DYNAMIC_DEFENSE",
      },
      {
        name: "Royal Banner",
        url: "https://render.albiononline.com/v1/spell/ROYAL_BANNER",
      },
    ],
  },
  armor: {
    passive: [
      {
        name: "MR AR",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ARMOR_MR_AR",
      },
      {
        name: "Cooldown Duration",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ARMOR_CCDURATION",
      },
      {
        name: "Increased CCR",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ARMOR_INCREASED_CCR",
      },
      {
        name: "Health Reduction",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_PLATEARMOR_HEALTH_REDUCTION",
      },
      {
        name: "Threat Generation",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_PLATEARMOR_THREATGENERATION",
      },
    ],
    active: [
      {
        name: "Out of Combat Heal",
        url: "https://render.albiononline.com/v1/spell/OUTOFCOMBATHEAL",
      },
      {
        name: "Taunt",
        url: "https://render.albiononline.com/v1/spell/TAUNT",
      },
    ],
    unique: [
      {
        name: "Enrage",
        url: "https://render.albiononline.com/v1/spell/ENRAGE",
      },
      {
        name: "Wind Wall",
        url: "https://render.albiononline.com/v1/spell/WINDWALL",
      },
      {
        name: "Enfeeble Aura",
        url: "https://render.albiononline.com/v1/spell/ENFEEBLEAURA",
      },
      {
        name: "Armor Chain",
        url: "https://render.albiononline.com/v1/spell/ARMORCHAIN",
      },
      {
        name: "Reflect Area",
        url: "https://render.albiononline.com/v1/spell/REFLECTAREA",
      },
      {
        name: "Force Shield",
        url: "https://render.albiononline.com/v1/spell/FORCESHIELD",
      },
      {
        name: "Armor Web",
        url: "https://render.albiononline.com/v1/spell/ARMOR_WEB",
      },
      {
        name: "Reflect Channel",
        url: "https://render.albiononline.com/v1/spell/REFLECT_CHANNEL",
      },
      {
        name: "Mana Drain",
        url: "https://render.albiononline.com/v1/spell/MANADRAIN",
      },
    ],
  },
  robe: {
    passive: [
      {
        name: "Increased Damage",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ARMOR_INCREASED_DAMAGE",
      },
      {
        name: "Cast Speed",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ARMOR_INCREASED_CASTSPEED",
      },
      {
        name: "Reduced Energy Cost",
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ARMOR_REDUCED_ENERGYCOST",
      },
    ],
    active: [
      {
        name: "Out of Combat Heal",
        url: "https://render.albiononline.com/v1/spell/OUTOFCOMBATHEAL",
      },
      {
        name: "Frost Shield",
        url: "https://render.albiononline.com/v1/spell/FROSTSHIELD",
      },
    ],
    unique: [
      {
        name: "Speed Caster",
        url: "https://render.albiononline.com/v1/spell/SPEEDCASTER",
      },
      {
        name: "Life Savior",
        url: "https://render.albiononline.com/v1/spell/LIFESAVIOR",
      },
      {
        name: "Purging Shield",
        url: "https://render.albiononline.com/v1/spell/PURGINGSHIELD2",
      },
      {
        name: "Spell Rush",
        url: "https://render.albiononline.com/v1/spell/SPELLRUSH",
      },
      {
        name: "Fear Aura",
        url: "https://render.albiononline.com/v1/spell/FEAR_AURA",
      },
      {
        name: "Levitate",
        url: "https://render.albiononline.com/v1/spell/LEVITATE",
      },
      {
        name: "Wild Magic",
        url: "https://render.albiononline.com/v1/spell/WILD_MAGIC",
      },
      {
        name: "Cast Bubble",
        url: "https://render.albiononline.com/v1/spell/CASTBUBBLE",
      },
      {
        name: "Magic Circle",
        url: "https://render.albiononline.com/v1/spell/MAGICCIRCLE",
      },
    ],
  },
  workboots: {
    active: [
      {
        name: "Dodge",
        url: "https://render.albiononline.com/v1/spell/DODGE",
      },
      {
        name: "Sprint Hot",
        url: "https://render.albiononline.com/v1/spell/SPRINTHOT",
      },
      {
        name: "Wanderlust",
        url: "https://render.albiononline.com/v1/spell/WANDERLUST",
      },
    ],
    unique: [
      {
        name: "Etherial Path",
        url: "https://render.albiononline.com/v1/spell/ETHERIAL_PATH",
      },
      {
        name: "Flee Mob",
        url: "https://render.albiononline.com/v1/spell/FLEE_MOB",
      },
      {
        name: "Flee",
        url: "https://render.albiononline.com/v1/spell/FLEE",
      },
      {
        name: "Pain Sprint",
        url: "https://render.albiononline.com/v1/spell/PAINSPRINT",
      },
      {
        name: "Movement Shield",
        url: "https://render.albiononline.com/v1/spell/MOVEMENTSHIELD",
      },
      {
        name: "Splash Wave",
        url: "https://render.albiononline.com/v1/spell/SPLASHWAVE",
      },
    ],
  },
  cap: {
    active: [
      {
        name: "Block",
        url: "https://render.albiononline.com/v1/spell/BLOCK",
      },
      {
        name: "Self Cleanse",
        url: "https://render.albiononline.com/v1/spell/SELF_CLEANSE",
      },
    ],
    unique: [
      {
        name: "Magic Mushroom",
        url: "https://render.albiononline.com/v1/spell/MAGICMUSHROOM",
      },
      {
        name: "Bear Trap",
        url: "https://render.albiononline.com/v1/spell/BEARTRAP",
      },
      {
        name: "CC Immunity",
        url: "https://render.albiononline.com/v1/spell/CC_IMMUNITY",
      },
      {
        name: "Slow Shield",
        url: "https://render.albiononline.com/v1/spell/SLOWSHIELD",
      },
      {
        name: "Tree Trunks",
        url: "https://render.albiononline.com/v1/spell/TREETRUNKS",
      },
      {
        name: "Throwing Fish",
        url: "https://render.albiononline.com/v1/spell/THROWINGFISH",
      },
    ],
  },
  garb: {
    active: [
      {
        name: "Out of Combat Heal",
        url: "https://render.albiononline.com/v1/spell/OUTOFCOMBATHEAL",
      },
      {
        name: "Ambush",
        url: "https://render.albiononline.com/v1/spell/AMBUSH",
      },
      {
        name: "Wind Wall",
        url: "https://render.albiononline.com/v1/spell/WINDWALL",
      },
    ],
    unique: [
      {
        name: "Root Shield",
        url: "https://render.albiononline.com/v1/spell/ROOTSHIELD",
      },
      {
        name: "Hot Shield",
        url: "https://render.albiononline.com/v1/spell/HOTSHIELD",
      },
      {
        name: "Wind Shield",
        url: "https://render.albiononline.com/v1/spell/WINDSHIELD",
      },
      {
        name: "Flow Shield",
        url: "https://render.albiononline.com/v1/spell/FLOWSHIELD",
      },
      {
        name: "Purging Shield",
        url: "https://render.albiononline.com/v1/spell/PURGINGSHIELD",
      },
      {
        name: "Water Shield",
        url: "https://render.albiononline.com/v1/spell/WATERSHIELD",
      },
    ],
  },
};

export const weaponSpells: Weapon = {
  sword: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_BLEEDCHANCE",
        name: "Bleed Chance Passive",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_REDUCE_DMG_SWORD",
        name: "Damage Reduction Passive",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_HEROICSTACK",
        name: "Heroic Stack Passive",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ARMORCHANCE_SWORD",
        name: "Armor Chance Passive",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/HEROICSTRIKE2",
        name: "Heroic Strike",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CLEAVE",
        name: "Cleave",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SWORD_SPIN",
        name: "Sword Spin",
      },
      {
        url: "https://render.albiononline.com/v1/spell/MIGHTYBLOW",
        name: "Mighty Blow",
      },
      {
        url: "https://render.albiononline.com/v1/spell/INTERRUPT2",
        name: "Interrupt",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SPLITTINGSLASH",
        name: "Splitting Slash",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HAMSTRINGSWORD",
        name: "Hamstring Sword",
      },
      { url: "https://render.albiononline.com/v1/spell/PARRY", name: "Parry" },
      {
        url: "https://render.albiononline.com/v1/spell/DEFENSERUN",
        name: "Defensive Run",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/CLAYMORECHARGE",
        name: "Claymore Charge",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SPINATTACK",
        name: "Spin Attack",
      },
      {
        url: "https://render.albiononline.com/v1/spell/MIGHTYSWING",
        name: "Mighty Swing",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CLAYMORESLASH",
        name: "Claymore Slash",
      },
      {
        url: "https://render.albiononline.com/v1/spell/BLADE_AREA",
        name: "Blade Area",
      },
      {
        url: "https://render.albiononline.com/v1/spell/MAJESTIC_SMASH",
        name: "Majestic Smash",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SWORD_BERSERK_RUN_RE",
        name: "Berserk Run",
      },
    ],
  },
  bow: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_SLOWPOISON",
        name: "Slow Poison Passive",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ENERGYCHANCE_BOW",
        name: "Energy Chance Passive",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ARMOR_PIERCE_STACK",
        name: "Armor Pierce Stack",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_AASPEEDCHANCE_BOW",
        name: "AA Speed Chance",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/MULTISHOT2",
        name: "Multishot",
      },
      {
        url: "https://render.albiononline.com/v1/spell/DEADLYSHOT",
        name: "Deadly Shot",
      },
      {
        url: "https://render.albiononline.com/v1/spell/GROUNDARROW",
        name: "Ground Arrow",
      },
      {
        url: "https://render.albiononline.com/v1/spell/JUMPSHOT2",
        name: "Jump Shot",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SPEEDSHOT2",
        name: "Speed Shot",
      },
      {
        url: "https://render.albiononline.com/v1/spell/BURNINGARROWS",
        name: "Burning Arrows",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/SPEEDARCHER_KITE",
        name: "Speed Archer Kite",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SKILLSHOT_STUN",
        name: "Skillshot Stun",
      },
      {
        url: "https://render.albiononline.com/v1/spell/ARROWRAIN",
        name: "Arrow Rain",
      },
      {
        url: "https://render.albiononline.com/v1/spell/UNDEADARROWS",
        name: "Undead Arrows",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HELL_ARROW",
        name: "Hell Arrow",
      },
      {
        url: "https://render.albiononline.com/v1/spell/LIGHTNING_ARROW",
        name: "Lightning Arrow",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HAWK_SHOT_MULTI1",
        name: "Hawk Shot",
      },
    ],
  },
  fire: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_BURN",
        name: "Burn",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ENERGYCHANCE_FIRESTAFF",
        name: "Energy Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_CASTINGSPEED_CHANCE_FIRESTAFF",
        name: "Casting Speed Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_SPELLPOWER_CASTER_FIRESTAFF",
        name: "Spell Power Caster",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/FIRESTAFFBOLT2",
        name: "Fire Staff Bolt",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FIRESTAFFBOLT_AOE",
        name: "Fire Bolt AOE",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SEARING_FLAME",
        name: "Searing Flame",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FIRESTAFFIGNITE2_SPREAD",
        name: "Fire Ignite Spread",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FIREWALL",
        name: "Firewall",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SKILLSHOT_FIREBALL",
        name: "Skillshot Fireball",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FIRECONE",
        name: "Fire Cone",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FIREARTILLERY",
        name: "Fire Artillery",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/PYROBLAST_SKILLSHOT",
        name: "Pyroblast",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FLAMEPILLAR",
        name: "Flame Pillar",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HUMAN_TORCH",
        name: "Human Torch",
      },
      {
        url: "https://render.albiononline.com/v1/spell/MAGMASPHERE",
        name: "Magma Sphere",
      },
      {
        url: "https://render.albiononline.com/v1/spell/METEOR",
        name: "Meteor",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FLAMETORNADO",
        name: "Flame Tornado",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FIREPHOENIX",
        name: "Fire Phoenix",
      },
    ],
  },
  shapeshifter: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_SHAPESHIFT_ATTACK_BUFF",
        name: "Attack Buff",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_SHAPESHIFT_Q_CAST_DAMAGE_REDUCE",
        name: "Cast Damage Reduction",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_SHAPESHIFT_GATHER_CHARGES",
        name: "Gather Charges",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_SHAPESHIFT_W_CAST_SPEED_BUFF",
        name: "Cast Speed Buff",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/SHAPE_Q_CAST",
        name: "Cast",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHAPE_Q_SKILLSHOT",
        name: "Skillshot",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHAPE_Q_DAMAGE_AND_SHIELD",
        name: "Damage and Shield",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHAPE_Q_CONE_MELEE",
        name: "Cone Melee",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHAPE_W_DAMAGE_AOE",
        name: "AOE Damage",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHAPE_W_AREA_PULL",
        name: "Area Pull",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHAPE_W_TETHERBEAM",
        name: "Tether Beam",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHAPE_W_POLYMORPH",
        name: "Polymorph",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/SHAPESHIFT_ENT",
        name: "Ent",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHAPESHIFT_BEAR",
        name: "Bear",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHAPESHIFT_WEREWOLF",
        name: "Werewolf",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHAPESHIFT_IMP",
        name: "Imp",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHAPESHIFT_ROCK_ELEMENTAL",
        name: "Rock Elemental",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHAPESHIFT_AVALONIAN_EAGLE",
        name: "Avalonian Eagle",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHAPESHIFT_PANTHER",
        name: "Panther",
      },
    ],
  },
  crossbow: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_KNOCKBACKCHANCE",
        name: "Knockback Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_CD_RESET_Q",
        name: "Cooldown Reset Q",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ENERGYCHANCE_CROSSBOW",
        name: "Energy Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_SPELLPOWER_CASTER_CROSSBOW",
        name: "Spell Power Caster",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/AUTOFIRE2",
        name: "Autofire",
      },
      {
        url: "https://render.albiononline.com/v1/spell/BOLTSHOT",
        name: "Bolt Shot",
      },
      {
        url: "https://render.albiononline.com/v1/spell/KNOCKBACKSHOT2",
        name: "Knockback Shot",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SUNDERSHOT",
        name: "Sunder Shot",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CALTROPS",
        name: "Caltrops",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SILENCINGBOLT",
        name: "Silencing Bolt",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/SNIPESHOT_CROSSBOW",
        name: "Snipe Shot",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CROSSBOW_ARMORPIERCER",
        name: "Armor Piercer",
      },
      {
        url: "https://render.albiononline.com/v1/spell/EXPLODING_SHOT",
        name: "Exploding Shot",
      },
      {
        url: "https://render.albiononline.com/v1/spell/GROUNDMINE",
        name: "Ground Mine",
      },
      {
        url: "https://render.albiononline.com/v1/spell/DUAL_RAPIDFIRE",
        name: "Dual Rapid Fire",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CROSSBOW_CONE_ULTIMATE",
        name: "Cone Ultimate",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CROSSBOW_DIVINE_SHOT",
        name: "Divine Shot",
      },
    ],
  },
  cursed: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_CURSE",
        name: "Curse",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ENERGYCHANCE_CURSEDSTAFF",
        name: "Energy Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_SPELLPOWER_CASTER_CURSEDSTAFF",
        name: "Spell Power Caster",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_MOVESPEED_CHANCE_CURSEDSTAFF",
        name: "Move Speed Chance",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/CURSEDOT",
        name: "Curse DOT",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CURSEBLADE",
        name: "Curse Blade",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CURSED_SPLAT",
        name: "Cursed Splat",
      },
      {
        url: "https://render.albiononline.com/v1/spell/ARMORPIERCER",
        name: "Armor Piercer",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CURSENOVA",
        name: "Curse Nova",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CURSEDHANDS_STACKUP",
        name: "Cursed Hands Stack Up",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CURSEDBEAM",
        name: "Cursed Beam",
      },
      {
        url: "https://render.albiononline.com/v1/spell/DARKMATTER",
        name: "Dark Matter",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/DEATHCURSE2",
        name: "Death Curse",
      },
      {
        url: "https://render.albiononline.com/v1/spell/AREAOFDECAY",
        name: "Area of Decay",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CURSED_WALL",
        name: "Cursed Wall",
      },
      {
        url: "https://render.albiononline.com/v1/spell/ENFEEBLEBLADES",
        name: "Enfeeble Blades",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SKULLCURSE",
        name: "Skull Curse",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CURSEULTIMATE",
        name: "Curse Ultimate",
      },
      {
        url: "https://render.albiononline.com/v1/spell/DYNAMIC_CURSE",
        name: "Dynamic Curse",
      },
    ],
  },
  frost: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_FROST",
        name: "Frost Passive",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ENERGYCHANCE_FROSTSTAFF",
        name: "Energy Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_CASTINGSPEED_CHANCE_FROSTSTAFF",
        name: "Casting Speed Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_SPELLPOWER_CASTER_FROSTSTAFF",
        name: "Spell Power Caster",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/FROST_BITE",
        name: "Frost Bite",
      },
      {
        url: "https://render.albiononline.com/v1/spell/ICESHARD",
        name: "Ice Shard",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHATTER_Q",
        name: "Shatter",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FROSTBOMB_CASTSLOW",
        name: "Frost Bomb",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FROSTBEAM",
        name: "Frost Beam",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FROSTNOVA",
        name: "Frost Nova",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FROST_LANCE",
        name: "Frost Lance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/ICE_SCULPTURE",
        name: "Ice Sculpture",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/FREEZINGWIND",
        name: "Freezing Wind",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HAIL_MULTI_1",
        name: "Hail",
      },
      {
        url: "https://render.albiononline.com/v1/spell/ICESTORM2",
        name: "Ice Storm",
      },
      {
        url: "https://render.albiononline.com/v1/spell/ICEROCK_EXPLODE",
        name: "Ice Rock",
      },
      {
        url: "https://render.albiononline.com/v1/spell/GLACIALFIELD",
        name: "Glacial Field",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FROST_ULTIMATE",
        name: "Frost Ultimate",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FROZEN_CRYSTAL",
        name: "Frozen Crystal",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FROST_TARGETED_CHANNEL",
        name: "Frost Targeted Channel",
      },
    ],
  },
  arcane: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ATTACKBUFF_ARCANESTAFF",
        name: "Attack Buff",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ENERGYCHANCE_ARCANESTAFF",
        name: "Energy Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ARMOR_CASTER_ARCANESTAFF",
        name: "Armor Caster",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_SILENCECHANCE",
        name: "Silence Chance",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/ARCANE_CHAIN_MISSILE",
        name: "Arcane Chain Missile",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHIELDFRIENDLY",
        name: "Shield Friendly",
      },
      {
        url: "https://render.albiononline.com/v1/spell/MAGICSHOCK",
        name: "Magic Shock",
      },
      {
        url: "https://render.albiononline.com/v1/spell/ENIGMA_BLADE",
        name: "Enigma Blade",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CLEANSESPEED2",
        name: "Cleanse Speed",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FRAZZLE2",
        name: "Frazzle",
      },
      {
        url: "https://render.albiononline.com/v1/spell/EMPOWERBEAM",
        name: "Empower Beam",
      },
      { url: "https://render.albiononline.com/v1/spell/MIMIC", name: "Mimic" },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/ARCANEORB2",
        name: "Arcane Orb",
      },
      {
        url: "https://render.albiononline.com/v1/spell/TIME_FREEZE",
        name: "Time Freeze",
      },
      {
        url: "https://render.albiononline.com/v1/spell/INVULNERABILITY",
        name: "Invulnerability",
      },
      {
        url: "https://render.albiononline.com/v1/spell/BLACKHOLE",
        name: "Black Hole",
      },
      {
        url: "https://render.albiononline.com/v1/spell/ARCANECORRIDOR",
        name: "Arcane Corridor",
      },
      { url: "https://render.albiononline.com/v1/spell/VOID", name: "Void" },
      {
        url: "https://render.albiononline.com/v1/spell/ARCANE_METEOR",
        name: "Arcane Meteor",
      },
      {
        url: "https://render.albiononline.com/v1/spell/STARFALL_DOT",
        name: "Starfall",
      },
    ],
  },
  holy: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_HEALPOWERCHANCE",
        name: "Heal Power Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ENERGYCHANCE_HOLYSTAFF",
        name: "Energy Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_KNOCKBACK_CASTER_HOLYSTAFF",
        name: "Knockback Caster",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_HOLY_ASCENDED",
        name: "Holy Ascended",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/GENEROUSHEAL",
        name: "Generous Heal",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SMITE_AOE",
        name: "Smite AoE",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HOLYFLASH",
        name: "Holy Flash",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PULSINGHEAL",
        name: "Pulsing Heal",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HEALINGBEAM",
        name: "Healing Beam",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HOLYHOT",
        name: "Holy HoT",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HOLYORB",
        name: "Holy Orb",
      },
      {
        url: "https://render.albiononline.com/v1/spell/RESURRECTION",
        name: "Resurrection",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/HOLYDESPERATEPRAYER2",
        name: "Desperate Prayer",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HOLYEXPLOSION",
        name: "Holy Explosion",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HOLYSHIELD",
        name: "Holy Shield",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HOLYTOUCH",
        name: "Holy Touch",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HOLY_ULTIMATE",
        name: "Holy Ultimate",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CELESTIAL_SPHERE",
        name: "Celestial Sphere",
      },
      {
        url: "https://render.albiononline.com/v1/spell/DIVINE_JUMP",
        name: "Divine Jump",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HOLY_DISPEL",
        name: "Holy Dispel",
      },
    ],
  },
  nature: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_HEALPOWERCHANCE",
        name: "Heal Power Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ENERGYCHANCE_NATURESTAFF",
        name: "Energy Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ARMOR_CASTER_NATURESTAFF",
        name: "Armor Caster",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_MOVESPEED_CHANCE_NATURESTAFF",
        name: "Move Speed Chance",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/REJUVENATION",
        name: "Rejuvenation",
      },
      {
        url: "https://render.albiononline.com/v1/spell/THORNSAREA",
        name: "Thorns Area",
      },
      {
        url: "https://render.albiononline.com/v1/spell/REJUVMUSHROOM_GRENADE",
        name: "Rejuvenation Mushroom",
      },
      {
        url: "https://render.albiononline.com/v1/spell/BRAMBLESEED",
        name: "Bramble Seed",
      },
      {
        url: "https://render.albiononline.com/v1/spell/REANIMATE",
        name: "Reanimate",
      },
      {
        url: "https://render.albiononline.com/v1/spell/NATURERESILIENCE",
        name: "Nature Resilience",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CLEANSEHEAL",
        name: "Cleanse Heal",
      },
      {
        url: "https://render.albiononline.com/v1/spell/REJUVENATING_BREEZE",
        name: "Rejuvenating Breeze",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/CIRCLEOFLIFE",
        name: "Circle of Life",
      },
      {
        url: "https://render.albiononline.com/v1/spell/BRIEROFLIFE",
        name: "Brier of Life",
      },
      {
        url: "https://render.albiononline.com/v1/spell/WELLOFLIFE2",
        name: "Well of Life",
      },
      {
        url: "https://render.albiononline.com/v1/spell/NATURE_ULTIMATE_SINGLE",
        name: "Nature Ultimate",
      },
      {
        url: "https://render.albiononline.com/v1/spell/ROTTENVINES",
        name: "Rotten Vines",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SPIRITANIMAL",
        name: "Spirit Animal",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SOUL_LINK",
        name: "Soul Link",
      },
    ],
  },
  dagger: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_BLEEDCHANCE",
        name: "Bleed Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_HEALTHCHANCE_DAGGER",
        name: "Health Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_AASPEEDCHANCE_DAGGER",
        name: "Attack Speed Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_SPELLPOWER_CHANCE_DAGGER",
        name: "Spell Power Chance",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/SUNDERARMOR2",
        name: "Sunder Armor",
      },
      { url: "https://render.albiononline.com/v1/spell/QDASH", name: "Dash" },
      {
        url: "https://render.albiononline.com/v1/spell/ASSASSINSPIRIT",
        name: "Assassin Spirit",
      },
      {
        url: "https://render.albiononline.com/v1/spell/THROWINGBLADES",
        name: "Throwing Blades",
      },
      {
        url: "https://render.albiononline.com/v1/spell/GROUNDDASH",
        name: "Ground Dash",
      },
      {
        url: "https://render.albiononline.com/v1/spell/DEEPCUTS",
        name: "Deep Cuts",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SKILLSHOT_TELEPORT",
        name: "Skillshot Teleport",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CHAINDASH",
        name: "Chain Dash",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/BLOODTHIRSTYBLADE",
        name: "Bloodthirsty Blade",
      },
      {
        url: "https://render.albiononline.com/v1/spell/EXECUTEDAGGER",
        name: "Execute Dagger",
      },
      {
        url: "https://render.albiononline.com/v1/spell/DISEMBOWEL",
        name: "Disembowel",
      },
      {
        url: "https://render.albiononline.com/v1/spell/RAPIERSTAB",
        name: "Rapier Stab",
      },
      {
        url: "https://render.albiononline.com/v1/spell/BLOOD_BLADE",
        name: "Blood Blade",
      },
      {
        url: "https://render.albiononline.com/v1/spell/GHOSTSTRIKE",
        name: "Ghost Strike",
      },
      {
        url: "https://render.albiononline.com/v1/spell/BACK_SLASH",
        name: "Back Slash",
      },
    ],
  },
  spear: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_SLOWPOISON",
        name: "Slow Poison",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_HEALTHCHANCE_SPEAR",
        name: "Health Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_SPELLPOWER_CHANCE_SPEAR",
        name: "Spell Power Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_AASPEEDCHANCE_SPEAR",
        name: "Attack Speed Chance",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/SPEAR_LUNGE",
        name: "Spear Lunge",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SPIRITSPEAR",
        name: "Spirit Spear",
      },
      {
        url: "https://render.albiononline.com/v1/spell/FORESTOFSPEARS",
        name: "Forest of Spears",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CHARGINGBLADE",
        name: "Charging Blade",
      },
      {
        url: "https://render.albiononline.com/v1/spell/LEGBREAKER",
        name: "Leg Breaker",
      },
      {
        url: "https://render.albiononline.com/v1/spell/DEFLECTINGSTANCE",
        name: "Deflecting Stance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/GROUNDSPEAR",
        name: "Ground Spear",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SKILLSHOT_PULL",
        name: "Skillshot Pull",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/DASHDMG",
        name: "Dash Damage",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HALBERDSMASH",
        name: "Halberd Smash",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHOVEL",
        name: "Shovel",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SPEARTHROW",
        name: "Spear Throw",
      },
      {
        url: "https://render.albiononline.com/v1/spell/TAINTED_STEEL",
        name: "Tainted Steel",
      },
      {
        url: "https://render.albiononline.com/v1/spell/TRIDENTTHROW",
        name: "Trident Throw",
      },
      {
        url: "https://render.albiononline.com/v1/spell/LANCE_CHARGE",
        name: "Lance Charge",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SPEAR_AOE_FINISHER",
        name: "Spear AoE Finisher",
      },
    ],
  },
  axe: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_BLEEDCHANCE",
        name: "Bleed Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_HEALTHCHANCE_AXE",
        name: "Health Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ARMORCHANCE_AXE",
        name: "Armor Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_SPELLPOWER_CHANCE_AXE",
        name: "Spell Power Chance",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/RENDINGSTRIKE",
        name: "Rending Strike",
      },
      {
        url: "https://render.albiononline.com/v1/spell/RENDINGSPIN",
        name: "Rending Spin",
      },
      {
        url: "https://render.albiononline.com/v1/spell/RENDINGCOMBO",
        name: "Rending Combo",
      },
      {
        url: "https://render.albiononline.com/v1/spell/AXESMASH",
        name: "Axe Smash",
      },
      {
        url: "https://render.albiononline.com/v1/spell/AXEBOOST",
        name: "Axe Boost",
      },
      {
        url: "https://render.albiononline.com/v1/spell/AXE_CHARGE",
        name: "Axe Charge",
      },
      {
        url: "https://render.albiononline.com/v1/spell/INNERBLEEDING",
        name: "Inner Bleeding",
      },
      {
        url: "https://render.albiononline.com/v1/spell/BLADE_AURA",
        name: "Blade Aura",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/AXETHROW",
        name: "Axe Throw",
      },
      {
        url: "https://render.albiononline.com/v1/spell/AXEWHIRLWIND2",
        name: "Axe Whirlwind",
      },
      {
        url: "https://render.albiononline.com/v1/spell/RENDINGSWING",
        name: "Rending Swing",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHOCKWAVE",
        name: "Shockwave",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SCYTHESWING",
        name: "Scythe Swing",
      },
      {
        url: "https://render.albiononline.com/v1/spell/DUALAXE_CRAWLER",
        name: "Dual Axe Crawler",
      },
      {
        url: "https://render.albiononline.com/v1/spell/LETHAL_CLEAVER",
        name: "Lethal Cleaver",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CRYSTAL_SCYTHE_DASH_ZONE",
        name: "Crystal Scythe Dash Zone",
      },
    ],
  },
  quarterstaff: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_STUNCHANCE_QUARTERSTAFF",
        name: "Stun Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ENERGYCHANCE_QUARTERSTAFF",
        name: "Energy Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_HEALTHCHANCE_QUARTERSTAFF",
        name: "Health Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_CCDURATION_CHANCE_QUARTERSTAFF",
        name: "CC Duration Chance",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/CONCUSSIVEBLOW_MULTI_1",
        name: "Concussive Blow",
      },
      {
        url: "https://render.albiononline.com/v1/spell/WHIRLING_STAFF",
        name: "Whirling Staff",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CARTWHEEL",
        name: "Cartwheel",
      },
      {
        url: "https://render.albiononline.com/v1/spell/QSTAFF_COMBO",
        name: "Quarterstaff Combo",
      },
      {
        url: "https://render.albiononline.com/v1/spell/STUNRUN",
        name: "Stun Run",
      },
      {
        url: "https://render.albiononline.com/v1/spell/QS_WHIRLWIND2",
        name: "Quarterstaff Whirlwind",
      },
      {
        url: "https://render.albiononline.com/v1/spell/LAUNCHER",
        name: "Launcher",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SEPARATING_SLAM",
        name: "Separating Slam",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/VAULT_ATTACK",
        name: "Vault Attack",
      },
      {
        url: "https://render.albiononline.com/v1/spell/QSWHIRLWIND",
        name: "Quarterstaff Whirlwind",
      },
      {
        url: "https://render.albiononline.com/v1/spell/DASH_KNOCKBACK",
        name: "Dash Knockback",
      },
      {
        url: "https://render.albiononline.com/v1/spell/COMBATSTAFF_SLASH",
        name: "Combat Staff Slash",
      },
      {
        url: "https://render.albiononline.com/v1/spell/TORNADO",
        name: "Tornado",
      },
      {
        url: "https://render.albiononline.com/v1/spell/QS_SLOWROPE",
        name: "Quarterstaff Slowrope",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SOULSHAKER",
        name: "Soulshaker",
      },
      {
        url: "https://render.albiononline.com/v1/spell/QS_CRYSTAL_COMBO",
        name: "Crystal Combo",
      },
    ],
  },
  mace: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_STUNCHANCE",
        name: "Stun Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ENERGYCHANCE_MACE",
        name: "Energy Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_HEALTHCHANCE_MACE",
        name: "Health Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_CCDURATION_CHANCE_MACE",
        name: "CC Duration Chance",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/DEFENSIVESLAM",
        name: "Defensive Slam",
      },
      {
        url: "https://render.albiononline.com/v1/spell/THREATENINGSMASH",
        name: "Threatening Smash",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SACRED_GROUND",
        name: "Sacred Ground",
      },
      {
        url: "https://render.albiononline.com/v1/spell/GROUNDSHAKER",
        name: "Groundshaker",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CHARGE_ROOT",
        name: "Charge Root",
      },
      {
        url: "https://render.albiononline.com/v1/spell/GUARDRUNE",
        name: "Guard Rune",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PBAOE_PULL",
        name: "PBAOE Pull",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/MACELEAP",
        name: "Mace Leap",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHRIEKMACE",
        name: "Shriek Mace",
      },
      {
        url: "https://render.albiononline.com/v1/spell/ROOTFIELD",
        name: "Root Field",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PRIMALSLAM",
        name: "Primal Slam",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHRINKINGSMASH",
        name: "Shrinking Smash",
      },
      {
        url: "https://render.albiononline.com/v1/spell/VACUUMSLASH",
        name: "Vacuum Slash",
      },
      {
        url: "https://render.albiononline.com/v1/spell/BLESSED_MACES",
        name: "Blessed Maces",
      },
      {
        url: "https://render.albiononline.com/v1/spell/MACE_CRYSTAL_FRAGMENT_STORM",
        name: "Crystal Fragment Storm",
      },
    ],
  },
  hammer: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_STUNCHANCE",
        name: "Stun Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_ENERGYCHANCE_HAMMER",
        name: "Energy Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_HEALTHCHANCE_HAMMER",
        name: "Health Chance",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_CCDURATION_CHANCE_HAMMER",
        name: "CC Duration Chance",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/HAMMER_SHOVE",
        name: "Hammer Shove",
      },
      {
        url: "https://render.albiononline.com/v1/spell/THREATENINGSTRIKE_HAMMER",
        name: "Threatening Strike",
      },
      {
        url: "https://render.albiononline.com/v1/spell/IRONBREAKER",
        name: "Ironbreaker",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HAMMER_TREMOR",
        name: "Hammer Tremor",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CHARGESLOWAE",
        name: "Charge Slow AE",
      },
      {
        url: "https://render.albiononline.com/v1/spell/GEYSER",
        name: "Geyser",
      },
      {
        url: "https://render.albiononline.com/v1/spell/KNOCKOUT",
        name: "Knockout",
      },
      {
        url: "https://render.albiononline.com/v1/spell/TAR_RING",
        name: "Tar Ring",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/SPINNING_SMASH",
        name: "Spinning Smash",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HAMMERWHIRLWIND2",
        name: "Hammer Whirlwind",
      },
      {
        url: "https://render.albiononline.com/v1/spell/GROUNDBREAKER2",
        name: "Groundbreaker",
      },
      {
        url: "https://render.albiononline.com/v1/spell/HAMMERTACKLE",
        name: "Hammer Tackle",
      },
      {
        url: "https://render.albiononline.com/v1/spell/UNDEADHAND",
        name: "Undead Hand",
      },
      {
        url: "https://render.albiononline.com/v1/spell/GIANTSTEPS",
        name: "Giant Steps",
      },
      {
        url: "https://render.albiononline.com/v1/spell/RAM_CHARGE",
        name: "Ram Charge",
      },
    ],
  },
  gloves: {
    passive: [
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_KNUCKLE_BRAWLER",
        name: "Knuckle Brawler",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_KNUCKLE_RAGE",
        name: "Knuckle Rage",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_KNUCKLE_RUSHDOWN",
        name: "Knuckle Rushdown",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PASSIVE_KNUCKLE_COMBOBREAKER",
        name: "Knuckle Combo Breaker",
      },
    ],
    active: [
      {
        url: "https://render.albiononline.com/v1/spell/CREATE_OPENING",
        name: "Create Opening",
      },
      {
        url: "https://render.albiononline.com/v1/spell/DASHKICK",
        name: "Dash Kick",
      },
      {
        url: "https://render.albiononline.com/v1/spell/CROSSSTEP_ROUNDHOUSE",
        name: "Cross Step Roundhouse",
      },
      {
        url: "https://render.albiononline.com/v1/spell/SHOCKWAVE_PUNCH",
        name: "Shockwave Punch",
      },
      {
        url: "https://render.albiononline.com/v1/spell/TRIPLE_KICK",
        name: "Triple Kick",
      },
      {
        url: "https://render.albiononline.com/v1/spell/BACKHAND_KNOCKBACK",
        name: "Backhand Knockback",
      },
      {
        url: "https://render.albiononline.com/v1/spell/KNUCKLE_COUNTER",
        name: "Knuckle Counter",
      },
      {
        url: "https://render.albiononline.com/v1/spell/KNUCKLECOMBO",
        name: "Knuckle Combo",
      },
    ],
    unique: [
      {
        url: "https://render.albiononline.com/v1/spell/BLAZING_GEYSER",
        name: "Blazing Geyser",
      },
      {
        url: "https://render.albiononline.com/v1/spell/DIVEPUNCH_RISE",
        name: "Dive Punch Rise",
      },
      {
        url: "https://render.albiononline.com/v1/spell/IMPULSE_PUNCH",
        name: "Impulse Punch",
      },
      {
        url: "https://render.albiononline.com/v1/spell/PUMMELING_STRIKES",
        name: "Pummeling Strikes",
      },
      {
        url: "https://render.albiononline.com/v1/spell/BOULDER_TOSS",
        name: "Boulder Toss",
      },
      {
        url: "https://render.albiononline.com/v1/spell/GROWING_PUNCH",
        name: "Growing Punch",
      },
      {
        url: "https://render.albiononline.com/v1/spell/TRIPLECOMBO_DIVEKICK",
        name: "Triple Combo Divekick",
      },
    ],
  },
};
