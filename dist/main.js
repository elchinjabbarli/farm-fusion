"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };

  // src/data.ts
  function xpForLevel(n) {
    return Math.round(55 * Math.pow(n, 1.45) + 30 * n);
  }
  function energyCap(level) {
    return ENERGY_BASE + Math.min(200, level * 2);
  }
  function soilRect(stage2) {
    const size = Math.min(10, 4 + 2 * stage2);
    return { off: Math.floor((ISLAND - size) / 2), size };
  }
  function chapterName(n) {
    if (n <= 40) return CHAPTERS[n - 1];
    const i = n - 41;
    const a = CH_ADJ[i % CH_ADJ.length], b = CH_NOUN[Math.floor(i / CH_ADJ.length) % CH_NOUN.length];
    return [`${a[0]} ${b[0]}`, `${a[1]} ${b[1]}`];
  }
  function item(id) {
    return ITEMS[id] || { id, name: [id, id], sell: 1, cat: "machine", icon: "q" };
  }
  var ENERGY_REGEN, ENERGY_BASE, JACKPOT_CHANCE, AD_ENERGY, BARN_BASE, BARN_STEP, BARN_GEM_COST, ORDER_REFRESH_MS, ORDER_REROLL_COST, EXPRESS_CHANCE, EXPRESS_MS, GEN_COOLDOWN, FISH_PER_DAY, MUSEUM_MILESTONES, MAX_LEVEL, LETTER_EVERY, CHAPTER_EVERY, CROPS, ANIMALS, ANIMAL_PRODUCTS, MACHINE_PRODUCTS, MACHINES, CHAINS, BOARD_STAGES, BOARD_CELLS, DECOR, ISLAND, EXPANSIONS, PLOT_REF, BLDG, MACHINE_SLOTS, PEN_SLOTS, CHAPTERS, CH_ADJ, CH_NOUN, PLACES, GOODS, NPC_ROSTER, ORDER_NAMES, ORDER_TITLES, LETTER_TPL, ITEMS, DAILY_REWARDS, QUEST_TPLS;
  var init_data = __esm({
    "src/data.ts"() {
      "use strict";
      ENERGY_REGEN = 180;
      ENERGY_BASE = 60;
      JACKPOT_CHANCE = 0.03;
      AD_ENERGY = 30;
      BARN_BASE = 60;
      BARN_STEP = 20;
      BARN_GEM_COST = 15;
      ORDER_REFRESH_MS = 4 * 36e5;
      ORDER_REROLL_COST = 15;
      EXPRESS_CHANCE = 0.12;
      EXPRESS_MS = 15 * 6e4;
      GEN_COOLDOWN = 10;
      FISH_PER_DAY = 5;
      MUSEUM_MILESTONES = [1, 3, 10, 25];
      MAX_LEVEL = 9999;
      LETTER_EVERY = 25;
      CHAPTER_EVERY = 250;
      CROPS = [
        { id: "wheat", name: ["Bu\u011Fday", "Wheat"], lvl: 1, seed: 2, grow: 120, yield: 2, xp: 1, sell: 5, art: { type: "tuft", fruit: "#f0c75e", leaf: "#7fb54a" } },
        { id: "corn", name: ["M\u0131s\u0131r", "Corn"], lvl: 3, seed: 8, grow: 300, yield: 2, xp: 2, sell: 12, art: { type: "stalk", fruit: "#ffd23e", leaf: "#66aa3c" } },
        { id: "carrot", name: ["Havu\xE7", "Carrot"], lvl: 5, seed: 15, grow: 480, yield: 2, xp: 3, sell: 20, art: { type: "root", fruit: "#f08c28", leaf: "#5da83e" } },
        { id: "tomato", name: ["Domates", "Tomato"], lvl: 8, seed: 25, grow: 720, yield: 2, xp: 4, sell: 32, art: { type: "bush", fruit: "#e94f37", leaf: "#57a13e" } },
        { id: "potato", name: ["Patates", "Potato"], lvl: 11, seed: 40, grow: 1200, yield: 3, xp: 5, sell: 45, art: { type: "root", fruit: "#c9a06a", leaf: "#6fae47" } },
        { id: "strawberry", name: ["\xC7ilek", "Strawberry"], lvl: 14, seed: 60, grow: 1800, yield: 3, xp: 7, sell: 70, art: { type: "lowbush", fruit: "#e8402a", leaf: "#4f9e3f" } },
        { id: "pumpkin", name: ["Kabak", "Pumpkin"], lvl: 18, seed: 90, grow: 2700, yield: 3, xp: 9, sell: 105, art: { type: "vine", fruit: "#f28c28", leaf: "#4f9440", big: 1.5 } },
        { id: "oat", name: ["Yulaf", "Oat"], lvl: 22, seed: 120, grow: 3600, yield: 3, xp: 12, sell: 150, art: { type: "tuft", fruit: "#e6d3a3", leaf: "#8cbc58" } },
        { id: "soybean", name: ["Soya", "Soybean"], lvl: 26, seed: 160, grow: 5400, yield: 3, xp: 15, sell: 200, art: { type: "bush", fruit: "#b7cf6e", leaf: "#63a03e" } },
        { id: "pepper", name: ["Biber", "Pepper"], lvl: 31, seed: 210, grow: 7200, yield: 3, xp: 19, sell: 260, art: { type: "bush", fruit: "#e03a2f", leaf: "#3f8f3a" } },
        { id: "eggplant", name: ["Patl\u0131can", "Eggplant"], lvl: 36, seed: 270, grow: 9e3, yield: 3, xp: 24, sell: 330, art: { type: "bush", fruit: "#7b4fb5", leaf: "#54a044" } },
        { id: "watermelon", name: ["Karpuz", "Watermelon"], lvl: 42, seed: 350, grow: 10800, yield: 4, xp: 30, sell: 420, art: { type: "vine", fruit: "#3e9e4f", leaf: "#3a8a42", big: 1.5 } },
        { id: "grape", name: ["\xDCz\xFCm", "Grape"], lvl: 48, seed: 450, grow: 14400, yield: 4, xp: 38, sell: 560, art: { type: "vine", fruit: "#8a4fb5", leaf: "#5aa53f" } },
        { id: "broccoli", name: ["Brokoli", "Broccoli"], lvl: 55, seed: 560, grow: 18e3, yield: 4, xp: 46, sell: 720, art: { type: "bush", fruit: "#5fae4a", leaf: "#459040" } },
        { id: "sweetpotato", name: ["Tatl\u0131 Patates", "Sweet Potato"], lvl: 63, seed: 700, grow: 21600, yield: 4, xp: 58, sell: 900, art: { type: "vine", fruit: "#e07b3a", leaf: "#5da83e" } },
        { id: "lavender", name: ["Lavanta", "Lavender"], lvl: 72, seed: 900, grow: 28800, yield: 5, xp: 75, sell: 1200, art: { type: "flower", fruit: "#9a7ad1", leaf: "#8fae6a" } }
      ];
      ANIMALS = [
        { id: "chicken", name: ["Tavuk", "Chicken"], lvl: 2, cost: 150, feed: 5, cycle: 360, product: "egg", xp: 2, art: "bird", c1: "#ffffff", c2: "#e05a3a" },
        { id: "duck", name: ["\xD6rdek", "Duck"], lvl: 6, cost: 300, feed: 8, cycle: 600, product: "duck_egg", xp: 3, art: "bird", c1: "#f5f0e0", c2: "#e8a13a" },
        { id: "cow", name: ["\u0130nek", "Cow"], lvl: 9, cost: 800, feed: 15, cycle: 900, product: "milk", xp: 5, art: "quad", c1: "#f5efe6", c2: "#4a3a30", scale: 1.25 },
        { id: "goat", name: ["Ke\xE7i", "Goat"], lvl: 13, cost: 1200, feed: 20, cycle: 1200, product: "goat_milk", xp: 6, art: "quad", c1: "#d8c8a8", c2: "#6b5236", scale: 0.95 },
        { id: "sheep", name: ["Koyun", "Sheep"], lvl: 17, cost: 1800, feed: 25, cycle: 1500, product: "wool", xp: 8, art: "quad", c1: "#f2ede2", c2: "#c9a98a", scale: 1.05 },
        { id: "pig", name: ["Domuz", "Pig"], lvl: 21, cost: 2500, feed: 30, cycle: 1800, product: "truffle", xp: 10, art: "quad", c1: "#f4b8c0", c2: "#d98a96", scale: 1.05 },
        { id: "bee", name: ["Ar\u0131", "Bee"], lvl: 25, cost: 1500, feed: 8, cycle: 1200, product: "honey", xp: 6, art: "insect", c1: "#ffd23e", c2: "#3a3226", scale: 0.8 },
        { id: "silkworm", name: ["\u0130pekb\xF6ce\u011Fi", "Silkworm"], lvl: 29, cost: 2e3, feed: 10, cycle: 2400, product: "silk_cocoon", xp: 12, art: "insect", c1: "#e8e0d0", c2: "#c8b890", scale: 0.9 },
        { id: "rabbit", name: ["Tav\u015Fan", "Angora Rabbit"], lvl: 33, cost: 3e3, feed: 12, cycle: 2700, product: "angora_wool", xp: 15, art: "small", c1: "#f5f0e8", c2: "#d8c8b8" },
        { id: "goose", name: ["Kaz", "Goose"], lvl: 37, cost: 3600, feed: 18, cycle: 3e3, product: "goose_feather", xp: 18, art: "bird", c1: "#ffffff", c2: "#d8b86a", scale: 1.15 },
        { id: "llama", name: ["Lama", "Llama"], lvl: 41, cost: 5e3, feed: 35, cycle: 3600, product: "llama_wool", xp: 22, art: "quad", c1: "#e8d8b8", c2: "#a88868", scale: 1.2 },
        { id: "alpaca", name: ["Alpaka", "Alpaca"], lvl: 46, cost: 6500, feed: 40, cycle: 4200, product: "alpaca_wool", xp: 26, art: "quad", c1: "#f0e8e0", c2: "#b8a8c0", scale: 1.15 },
        { id: "ostrich", name: ["Deveku\u015Fu", "Ostrich"], lvl: 52, cost: 8e3, feed: 55, cycle: 4800, product: "ostrich_feather", xp: 30, art: "bird", c1: "#3a3230", c2: "#f0e8e0", scale: 1.45 },
        { id: "buffalo", name: ["Bufalo", "Buffalo"], lvl: 58, cost: 1e4, feed: 65, cycle: 5400, product: "buffalo_milk", xp: 34, art: "quad", c1: "#5a4a40", c2: "#3a3028", scale: 1.35 },
        { id: "squirrel", name: ["Sincap", "Squirrel"], lvl: 65, cost: 9e3, feed: 25, cycle: 6e3, product: "pine_nut", xp: 38, art: "small", c1: "#c8905a", c2: "#e8d0b0" },
        { id: "beaver", name: ["Kunduz", "Beaver"], lvl: 75, cost: 14e3, feed: 30, cycle: 7200, product: "wood_log", xp: 42, art: "quad", c1: "#8a6242", c2: "#5a3a26", scale: 1 }
      ];
      ANIMAL_PRODUCTS = [
        { id: "egg", name: ["Yumurta", "Egg"], sell: 8, cat: "animal", icon: "egg", c1: "#fff4e0" },
        { id: "duck_egg", name: ["\xD6rdek Yumurtas\u0131", "Duck Egg"], sell: 14, cat: "animal", icon: "egg", c1: "#e8f0d8" },
        { id: "milk", name: ["S\xFCt", "Milk"], sell: 25, cat: "animal", icon: "milk", c1: "#ffffff" },
        { id: "goat_milk", name: ["Ke\xE7i S\xFCt\xFC", "Goat Milk"], sell: 40, cat: "animal", icon: "milk", c1: "#f4ecd8" },
        { id: "wool", name: ["Y\xFCn", "Wool"], sell: 55, cat: "animal", icon: "wool", c1: "#f2ede2" },
        { id: "truffle", name: ["Tr\xFCf", "Truffle"], sell: 90, cat: "animal", icon: "truffle", c1: "#4a3a30" },
        { id: "honey", name: ["Bal", "Honey"], sell: 35, cat: "animal", icon: "honey", c1: "#f0a828" },
        { id: "silk_cocoon", name: ["\u0130pek Koza", "Silk Cocoon"], sell: 120, cat: "animal", icon: "cocoon", c1: "#e8e0d0" },
        { id: "angora_wool", name: ["Angora Y\xFCn\xFC", "Angora Wool"], sell: 150, cat: "animal", icon: "wool", c1: "#faf6ee" },
        { id: "goose_feather", name: ["Kaz T\xFCy\xFC", "Goose Feather"], sell: 180, cat: "animal", icon: "feather", c1: "#ffffff" },
        { id: "llama_wool", name: ["Lama Y\xFCn\xFC", "Llama Wool"], sell: 240, cat: "animal", icon: "wool", c1: "#e8d8b8" },
        { id: "alpaca_wool", name: ["Alpaka Y\xFCn\xFC", "Alpaca Wool"], sell: 320, cat: "animal", icon: "wool", c1: "#f0e8e0" },
        { id: "ostrich_feather", name: ["Deveku\u015Fu T\xFCy\xFC", "Ostrich Feather"], sell: 400, cat: "animal", icon: "feather", c1: "#f0e8e0" },
        { id: "buffalo_milk", name: ["Manda S\xFCt\xFC", "Buffalo Milk"], sell: 520, cat: "animal", icon: "milk", c1: "#f8f4ec" },
        { id: "pine_nut", name: ["\xC7am F\u0131st\u0131\u011F\u0131", "Pine Nut"], sell: 650, cat: "animal", icon: "nut", c1: "#c8905a" },
        { id: "wood_log", name: ["Ah\u015Fap Tomar\u0131", "Wood Log"], sell: 800, cat: "animal", icon: "log", c1: "#8a6242" }
      ];
      MACHINE_PRODUCTS = [
        { id: "bread", name: ["Ekmek", "Bread"], sell: 34, cat: "machine", icon: "bread", c1: "#d89858" },
        { id: "cake", name: ["Kek", "Cake"], sell: 23, cat: "machine", icon: "cake", c1: "#f0d8b8" },
        { id: "omelet", name: ["Omlet", "Omelet"], sell: 45, cat: "machine", icon: "omelet", c1: "#f8d848" },
        { id: "flour", name: ["Un", "Flour"], sell: 40, cat: "machine", icon: "flour", c1: "#f0e8d8" },
        { id: "cornmeal", name: ["M\u0131s\u0131r Unu", "Cornmeal"], sell: 66, cat: "machine", icon: "flour", c1: "#f0d898" },
        { id: "cheese", name: ["Peynir", "Cheese"], sell: 92, cat: "machine", icon: "cheese", c1: "#f0c848" },
        { id: "cream", name: ["Krema", "Cream"], sell: 48, cat: "machine", icon: "milk", c1: "#f8f4ec" },
        { id: "wheat_feed", name: ["Bu\u011Fday Yemi", "Wheat Feed"], sell: 19, cat: "machine", icon: "feed", c1: "#d8b868" },
        { id: "corn_feed", name: ["M\u0131s\u0131r Yemi", "Corn Feed"], sell: 42, cat: "machine", icon: "feed", c1: "#e8c858" },
        { id: "soy_oil", name: ["Soya Ya\u011F\u0131", "Soybean Oil"], sell: 1050, cat: "machine", icon: "oil", c1: "#e8c848" },
        { id: "lavender_oil", name: ["Lavanta Ya\u011F\u0131", "Lavender Oil"], sell: 4100, cat: "machine", icon: "oil", c1: "#b898d8" },
        { id: "strawberry_jam", name: ["\xC7ilek Re\xE7eli", "Strawberry Jam"], sell: 500, cat: "machine", icon: "jam", c1: "#e84858" },
        { id: "grape_molasses", name: ["\xDCz\xFCm Pekmezi", "Grape Molasses"], sell: 3800, cat: "machine", icon: "jam", c1: "#8a4fb5" },
        { id: "lavender_syrup", name: ["Lavanta \u015Eurubu", "Lavender Syrup"], sell: 4e3, cat: "machine", icon: "bottle", c1: "#b898d8" },
        { id: "melon_syrup", name: ["Karpuz \u015Eerbeti", "Melon Syrup"], sell: 1400, cat: "machine", icon: "bottle", c1: "#e85868" },
        { id: "fabric", name: ["Kuma\u015F", "Fabric"], sell: 290, cat: "machine", icon: "fabric", c1: "#88b8d8" },
        { id: "sweater", name: ["Triko", "Sweater"], sell: 540, cat: "machine", icon: "sweater", c1: "#d87858" },
        { id: "wood_crate", name: ["Ah\u015Fap Sand\u0131k", "Wooden Crate"], sell: 68, cat: "machine", icon: "crate", c1: "#b8884a" },
        { id: "planks", name: ["Tahta", "Planks"], sell: 5400, cat: "machine", icon: "planks", c1: "#c89858" },
        { id: "tools", name: ["Alet", "Tools"], sell: 26e3, cat: "machine", icon: "tools", c1: "#8a8a92" },
        { id: "jeweler_tools", name: ["Kuyum Aleti", "Jeweler Tools"], sell: 86e3, cat: "machine", icon: "tools", c1: "#f0c848" },
        { id: "tomato_sauce", name: ["Domates Sosu", "Tomato Sauce"], sell: 300, cat: "machine", icon: "jam", c1: "#e03a2f" },
        { id: "canned_food", name: ["Bal\u0131k Konservesi", "Canned Fish"], sell: 1050, cat: "machine", icon: "can", c1: "#a8b8c8" },
        { id: "bottle", name: ["\u015Ei\u015Fe", "Bottle"], sell: 5600, cat: "machine", icon: "bottle", c1: "#a8d8e8" },
        { id: "amber_vase", name: ["Amber Vazo", "Amber Vase"], sell: 190, cat: "machine", icon: "vase", c1: "#e8a828" }
      ];
      MACHINES = [
        { id: "bakery", name: ["F\u0131r\u0131n", "Bakery"], lvl: 4, cost: 500, c1: "#d87858", c2: "#8a4a32", recipes: [
          { id: "bread", name: ["Ekmek", "Bread"], inputs: [{ item: "wheat", qty: 3 }], out: "bread", qty: 1, time: 300, xp: 5 },
          { id: "cake", name: ["Kek", "Cake"], inputs: [{ item: "wheat", qty: 2 }], out: "cake", qty: 1, time: 480, xp: 4 },
          { id: "omelet", name: ["Omlet", "Omelet"], inputs: [{ item: "egg", qty: 3 }], out: "omelet", qty: 1, time: 360, xp: 6 }
        ] },
        { id: "mill", name: ["De\u011Firmen", "Mill"], lvl: 7, cost: 900, c1: "#e8d8c8", c2: "#a85a3a", recipes: [
          { id: "flour", name: ["Un", "Flour"], inputs: [{ item: "wheat", qty: 4 }], out: "flour", qty: 1, time: 360, xp: 4 },
          { id: "cornmeal", name: ["M\u0131s\u0131r Unu", "Cornmeal"], inputs: [{ item: "corn", qty: 3 }], out: "cornmeal", qty: 1, time: 600, xp: 7 }
        ] },
        { id: "dairy", name: ["Mand\u0131ra", "Dairy"], lvl: 10, cost: 1500, c1: "#f0e8e0", c2: "#88a8c8", recipes: [
          { id: "cheese", name: ["Peynir", "Cheese"], inputs: [{ item: "milk", qty: 2 }], out: "cheese", qty: 1, time: 720, xp: 9 },
          { id: "cream", name: ["Krema", "Cream"], inputs: [{ item: "milk", qty: 1 }], out: "cream", qty: 1, time: 480, xp: 5 }
        ] },
        { id: "feedmill", name: ["Yem Fabrikas\u0131", "Feed Mill"], lvl: 12, cost: 1200, c1: "#d8c8a8", c2: "#8a6a4a", recipes: [
          { id: "wheat_feed", name: ["Bu\u011Fday Yemi", "Wheat Feed"], inputs: [{ item: "wheat", qty: 2 }], out: "wheat_feed", qty: 1, time: 420, xp: 2 },
          { id: "corn_feed", name: ["M\u0131s\u0131r Yemi", "Corn Feed"], inputs: [{ item: "corn", qty: 2 }], out: "corn_feed", qty: 1, time: 540, xp: 4 }
        ] },
        { id: "oilpress", name: ["Ya\u011Fhane", "Oil Press"], lvl: 16, cost: 2200, c1: "#c8a058", c2: "#7a5a32", recipes: [
          { id: "soy_oil", name: ["Soya Ya\u011F\u0131", "Soybean Oil"], inputs: [{ item: "soybean", qty: 3 }], out: "soy_oil", qty: 1, time: 900, xp: 25 },
          { id: "lavender_oil", name: ["Lavanta Ya\u011F\u0131", "Lavender Oil"], inputs: [{ item: "lavender", qty: 2 }], out: "lavender_oil", qty: 1, time: 1320, xp: 60 }
        ] },
        { id: "jam", name: ["Re\xE7el Mutfa\u011F\u0131", "Jam Kitchen"], lvl: 20, cost: 3e3, c1: "#e87878", c2: "#a84a4a", recipes: [
          { id: "strawberry_jam", name: ["\xC7ilek Re\xE7eli", "Strawberry Jam"], inputs: [{ item: "strawberry", qty: 4 }], out: "strawberry_jam", qty: 1, time: 1200, xp: 14 },
          { id: "grape_molasses", name: ["\xDCz\xFCm Pekmezi", "Grape Molasses"], inputs: [{ item: "grape", qty: 4 }], out: "grape_molasses", qty: 1, time: 1680, xp: 55 }
        ] },
        { id: "syrup", name: ["\u015Eurup Evi", "Syrup House"], lvl: 24, cost: 3800, c1: "#d8a8e8", c2: "#8a5aa8", recipes: [
          { id: "lavender_syrup", name: ["Lavanta \u015Eurubu", "Lavender Syrup"], inputs: [{ item: "lavender", qty: 2 }], out: "lavender_syrup", qty: 1, time: 1500, xp: 58 },
          { id: "melon_syrup", name: ["Karpuz \u015Eerbeti", "Melon Syrup"], inputs: [{ item: "watermelon", qty: 2 }], out: "melon_syrup", qty: 1, time: 1800, xp: 24 }
        ] },
        { id: "loom", name: ["Dokuma Tezgah\u0131", "Loom House"], lvl: 28, cost: 4600, c1: "#98b8d8", c2: "#5a7a9a", recipes: [
          { id: "fabric", name: ["Kuma\u015F", "Fabric"], inputs: [{ item: "wool", qty: 3 }], out: "fabric", qty: 1, time: 1800, xp: 18 },
          { id: "sweater", name: ["Triko", "Sweater"], inputs: [{ item: "angora_wool", qty: 2 }], out: "sweater", qty: 1, time: 2160, xp: 26 }
        ] },
        { id: "sawmill", name: ["Kereste Fabrikas\u0131", "Sawmill"], lvl: 34, cost: 6e3, c1: "#c8a068", c2: "#7a5a3a", recipes: [
          { id: "wood_crate", name: ["Ah\u015Fap Sand\u0131k", "Wooden Crate"], inputs: [{ item: "wheat", qty: 6 }], out: "wood_crate", qty: 1, time: 1500, xp: 8 },
          { id: "planks", name: ["Tahta", "Planks"], inputs: [{ item: "wood_log", qty: 4 }], out: "planks", qty: 1, time: 2100, xp: 90 }
        ] },
        { id: "forge", name: ["Demirci", "Blacksmith"], lvl: 40, cost: 8e3, c1: "#788088", c2: "#484e54", recipes: [
          { id: "tools", name: ["Alet", "Tools"], inputs: [{ item: "planks", qty: 3 }], out: "tools", qty: 1, time: 2400, xp: 200 },
          { id: "jeweler_tools", name: ["Kuyum Aleti", "Jeweler Tools"], inputs: [{ item: "tools", qty: 2 }], out: "jeweler_tools", qty: 1, time: 3300, xp: 420 }
        ] },
        { id: "cannery", name: ["Konserve", "Cannery"], lvl: 45, cost: 1e4, c1: "#a8b8c8", c2: "#6a7a8a", recipes: [
          { id: "tomato_sauce", name: ["Domates Sosu", "Tomato Sauce"], inputs: [{ item: "tomato", qty: 5 }], out: "tomato_sauce", qty: 1, time: 2700, xp: 12 },
          { id: "canned_food", name: ["Bal\u0131k Konservesi", "Canned Fish"], inputs: [{ item: "tomato_sauce", qty: 2 }], out: "canned_food", qty: 1, time: 3120, xp: 20 }
        ] },
        { id: "glass", name: ["Cam At\xF6lyesi", "Glasswork"], lvl: 50, cost: 13e3, c1: "#a8d8e8", c2: "#6898a8", recipes: [
          { id: "bottle", name: ["\u015Ei\u015Fe", "Bottle"], inputs: [{ item: "grape", qty: 6 }], out: "bottle", qty: 1, time: 3e3, xp: 70 },
          { id: "amber_vase", name: ["Amber Vazo", "Amber Vase"], inputs: [{ item: "honey", qty: 3 }], out: "amber_vase", qty: 1, time: 3840, xp: 16 }
        ] }
      ];
      CHAINS = [
        { id: "grain", name: ["Tah\u0131l", "Grain"], lvl: 1, gen: ["Tohum Paketi", "Seed Box"], color: "#e8c65b", tiers: [["Tomcuk", "Sprout"], ["Bu\u011Fday Demeti", "Wheat Bundle"], ["Bu\u011Fday Harman\u0131", "Wheat Sheaf"], ["Un \xC7uval\u0131", "Flour Sack"], ["Alt\u0131n Harman", "Golden Sheaf"], ["Bu\u011Fday Efsanesi", "Wheat Legend"]], sell: [2, 6, 18, 60, 220, 900] },
        { id: "dairy", name: ["S\xFCt \xDCr\xFCnleri", "Dairy"], lvl: 4, gen: ["S\xFCt Bidonu", "Milk Churn"], color: "#f0f4f8", tiers: [["S\xFCt \u015Ei\u015Fesi", "Milk Bottle"], ["Krema", "Cream"], ["Tereya\u011F\u0131", "Butter"], ["Peynir Tekeri", "Cheese Wheel"], ["Gourmet Peynir", "Gourmet Cheese"], ["Efsane Teker", "Legend Wheel"]], sell: [3, 9, 28, 95, 350, 1400] },
        { id: "egg", name: ["Yumurta", "Egg"], lvl: 7, gen: ["Yumurta Sepeti", "Egg Basket"], color: "#fff0d8", tiers: [["Yumurta", "Egg"], ["\u0130kili Yumurta", "Double Egg"], ["Yumurta Sepeti", "Egg Basket"], ["Yumurta Kasesi", "Egg Crate"], ["Alt\u0131n Yumurta", "Golden Egg"], ["Dev Yumurta Eseri", "Giant Egg"]], sell: [2, 7, 22, 75, 280, 1100] },
        { id: "flower", name: ["\xC7i\xE7ek", "Flower"], lvl: 10, gen: ["\xC7i\xE7ek Tohumu", "Flower Seeds"], color: "#f088a8", tiers: [["Tomurcuk", "Bud"], ["A\xE7m\u0131\u015F \xC7i\xE7ek", "Bloom"], ["Buket", "Bouquet"], ["\xC7i\xE7ek Vazosu", "Flower Vase"], ["G\xFCl Demeti", "Rose Bouquet"], ["G\xFCl Bah\xE7esi Eseri", "Rose Garden"]], sell: [4, 12, 38, 130, 480, 1900] },
        { id: "honey", name: ["Bal", "Honey"], lvl: 13, gen: ["Polen Topu", "Pollen Ball"], color: "#f0a828", tiers: [["Bal Damlas\u0131", "Honey Drop"], ["Bal Kavanozu", "Honey Jar"], ["Koyu Bal", "Dark Honey"], ["Ball\u0131 Petek", "Honeycomb"], ["Alt\u0131n Petek", "Golden Comb"], ["Kral Petek", "Royal Comb"]], sell: [5, 16, 50, 170, 620, 2500] },
        { id: "wool", name: ["Y\xFCn", "Wool"], lvl: 16, gen: ["Y\xFCn \xC7ilesi", "Wool Skein"], color: "#c8d8e8", tiers: [["\u0130plik", "Thread"], ["Y\xFCn \xC7ilesi", "Yarn Skein"], ["\xD6rme Kuma\u015F", "Knit Fabric"], ["Y\xFCn \u015Eal", "Wool Shawl"], ["Hal\u0131 \xD6rg\xFC", "Woven Rug"], ["Efsane \u015Eal", "Legend Shawl"]], sell: [6, 20, 62, 210, 770, 3100] },
        { id: "wood", name: ["Odun", "Wood"], lvl: 20, gen: ["Odun Y\u0131\u011F\u0131n\u0131", "Wood Pile"], color: "#a87848", tiers: [["Kuru Dal", "Dry Twig"], ["Odun Y\u0131\u011F\u0131n\u0131", "Wood Pile"], ["K\xFCt\xFCk", "Log"], ["Kereste", "Lumber"], ["\u0130\u015Flenmi\u015F Tahta", "Carved Wood"], ["Ah\u015Fap Eser", "Wood Artifact"]], sell: [4, 14, 44, 150, 560, 2200] },
        { id: "fish", name: ["Bal\u0131k", "Fish"], lvl: 24, gen: ["Olta Sepeti", "Tackle Box"], color: "#68b8d8", tiers: [["Sardalya", "Sardine"], ["Mezgit", "Cod"], ["Levrek", "Sea Bass"], ["Somon", "Salmon"], ["Kral Somon", "King Salmon"], ["Efsane Bal\u0131k", "Legend Fish"]], sell: [5, 18, 55, 190, 700, 2800] },
        { id: "gem", name: ["M\xFCcevher", "Gem"], lvl: 30, gen: ["Kaya Par\xE7as\u0131", "Rock Chunk"], color: "#b878e8", tiers: [["\xC7akmak Ta\u015F\u0131", "Flint"], ["Kristal", "Crystal"], ["Kesilmi\u015F Ta\u015F", "Cut Stone"], ["M\xFCcevher", "Gem"], ["M\xFCcevher Tac\u0131", "Gem Tiara"], ["Efsane Ta\xE7", "Legend Crown"]], sell: [8, 30, 95, 330, 1200, 4800] },
        { id: "mushroom", name: ["Mantar", "Mushroom"], lvl: 38, gen: ["Mantar Sepeti", "Mushroom Basket"], color: "#d87858", tiers: [["Spor", "Spore"], ["\u015Eapkal\u0131 Mantar", "Capped Mushroom"], ["K\u0131z\u0131l Mantar", "Red Cap"], ["Kavun Mantar\u0131", "Melon Mushroom"], ["Alt\u0131n Mantar", "Golden Mushroom"], ["Efsane Mantar", "Legend Mushroom"]], sell: [3, 10, 32, 110, 400, 1600] },
        { id: "seashell", name: ["Deniz", "Seashell"], lvl: 50, gen: ["Deniz A\u011F\u0131", "Sea Net"], color: "#f0c8d8", tiers: [["Deniz Kabu\u011Fu", "Seashell"], ["\u0130nci", "Pearl"], ["\u0130nci Gerdanl\u0131k", "Pearl Necklace"], ["Sedef Sand\u0131k", "Nacre Chest"], ["Mercan", "Coral"], ["Efsane Sedef", "Legend Nacre"]], sell: [7, 26, 82, 290, 1050, 4200] }
      ];
      BOARD_STAGES = [
        { lvl: 1, cols: 6, rows: 7, locked: 5, cost: 120 },
        { lvl: 5, cols: 6, rows: 8, locked: 4, cost: 180 },
        { lvl: 12, cols: 7, rows: 8, locked: 5, cost: 260 },
        { lvl: 20, cols: 7, rows: 9, locked: 6, cost: 340 },
        { lvl: 30, cols: 8, rows: 9, locked: 7, cost: 420 },
        { lvl: 45, cols: 8, rows: 10, locked: 8, cost: 520 },
        { lvl: 60, cols: 9, rows: 10, locked: 9, cost: 650 },
        { lvl: 100, cols: 10, rows: 12, locked: 12, cost: 900 }
      ];
      BOARD_CELLS = 120;
      DECOR = [
        { id: "haybale", name: ["Saman Balyas\u0131", "Hay Bale"], rarity: "common", cost: 200, source: "shop", lvl: 3 },
        { id: "fence", name: ["Ah\u015Fap \xC7it", "Wood Fence"], rarity: "common", cost: 120, source: "shop", lvl: 1 },
        { id: "barrel", name: ["Me\u015Fe Varil", "Oak Barrel"], rarity: "common", cost: 250, source: "shop", lvl: 2 },
        { id: "birdhouse", name: ["Ku\u015F Yuvas\u0131", "Bird House"], rarity: "common", cost: 400, source: "shop", lvl: 4 },
        { id: "stone_wall", name: ["Ta\u015F Duvar", "Stone Wall"], rarity: "common", cost: 400, source: "shop", lvl: 6 },
        { id: "sign", name: ["Bah\xE7e Tabelas\u0131", "Garden Sign"], rarity: "common", cost: 500, source: "shop", lvl: 8 },
        { id: "mailbox", name: ["Mektup Kutusu", "Mailbox"], rarity: "common", cost: 450, source: "shop", lvl: 10 },
        { id: "lamp", name: ["Bah\xE7e Feneri", "Garden Lamp"], rarity: "common", cost: 600, source: "shop", lvl: 12 },
        { id: "flowerbed", name: ["Suluboya Tarh", "Watercolor Bed"], rarity: "common", cost: 800, source: "shop", lvl: 15 },
        { id: "bench", name: ["Bank", "Garden Bench"], rarity: "common", cost: 500, source: "shop", lvl: 16 },
        { id: "well", name: ["Su Kuyusu", "Water Well"], rarity: "common", cost: 800, source: "shop", lvl: 18 },
        { id: "scarecrow", name: ["Korkuluk", "Scarecrow"], rarity: "common", cost: 300, source: "shop", lvl: 20 },
        { id: "wheelbarrow", name: ["El Arabas\u0131", "Wheelbarrow"], rarity: "common", cost: 700, source: "shop", lvl: 22 },
        { id: "picnic_table", name: ["Piknik Masas\u0131", "Picnic Table"], rarity: "common", cost: 900, source: "shop", lvl: 24 },
        { id: "windmill", name: ["R\xFCzgar G\xFCl\xFC", "Windmill"], rarity: "common", cost: 1100, source: "shop", lvl: 26 },
        { id: "flagpole", name: ["Bayrak Dire\u011Fi", "Flag Pole"], rarity: "rare", cost: 1e3, source: "shop", lvl: 28 },
        { id: "sunflower_tower", name: ["Ay\xE7i\xE7e\u011Fi Kulesi", "Sunflower Tower"], rarity: "rare", cost: 1800, source: "shop", lvl: 32 },
        { id: "rose_arbor", name: ["G\xFCl \xC7arda\u011F\u0131", "Rose Arbor"], rarity: "rare", cost: 2500, source: "shop", lvl: 36 },
        { id: "swing", name: ["Sal\u0131ncak", "Swing"], rarity: "rare", cost: 2500, source: "shop", lvl: 40 },
        { id: "hedge", name: ["Geometrik \xC7al\u0131", "Geometric Hedge"], rarity: "rare", cost: 4e3, source: "shop", lvl: 46 },
        { id: "fountain", name: ["\xC7e\u015Fme", "Fountain"], rarity: "epic", cost: 5e3, source: "shop", lvl: 55 },
        { id: "pool", name: ["S\xFCs Havuzu", "Ornate Pool"], rarity: "epic", cost: 7500, source: "shop", lvl: 65 },
        // Müze kilometre taşı ödülleri (ücretsiz açılır)
        { id: "statue", name: ["\xC7ift\xE7i Heykeli", "Farmer Statue"], rarity: "legendary", cost: 0, source: "museum", lvl: 0 },
        { id: "golden_scarecrow", name: ["Alt\u0131n Korkuluk", "Golden Scarecrow"], rarity: "legendary", cost: 0, source: "museum", lvl: 0 },
        { id: "harvest_crown", name: ["Hasat Tac\u0131", "Harvest Crown"], rarity: "legendary", cost: 0, source: "museum", lvl: 0 }
      ];
      ISLAND = 16;
      EXPANSIONS = [
        { cost: 0, time: 0 },
        // başlangıç: 4..11
        { cost: 2e3, time: 300 },
        // 8x8 → 3..12
        { cost: 8e3, time: 1800 },
        // 10x10 → 2..13
        { cost: 25e3, time: 7200 },
        // 12x12 → 1..14
        { cost: 6e4, time: 28800 }
        // 14x14 → 0..15
      ];
      PLOT_REF = 3;
      BLDG = {
        barn: { x: 4, y: 4, w: 2, h: 2 },
        // Köy Ambarı — KB
        fusion: { x: 10, y: 4, w: 2, h: 2 },
        // Fusion Tezgahı — KD
        house: { x: 4, y: 10, w: 2, h: 2 },
        // Çiftlik Evi — GB
        dock: { x: 7, y: 11, w: 2, h: 1 }
        // Olta İskelesi — G
      };
      MACHINE_SLOTS = [
        [7, 4],
        [9, 4],
        // kuzey sırası (barn ile fusion arası)
        [4, 7],
        [11, 7],
        // batı/doğu orta
        [4, 9],
        [11, 9],
        // batı/doğu alt
        [6, 11],
        [9, 11],
        // güney sırası
        [2, 6],
        [13, 6],
        // dış halka (genişleme 2+)
        [2, 10],
        [13, 10]
      ];
      PEN_SLOTS = [
        [4, 6],
        [11, 6],
        [4, 8],
        [11, 8],
        [2, 4],
        [13, 4],
        [2, 8],
        [13, 8],
        [2, 12],
        [13, 12],
        [6, 2],
        [9, 2],
        [6, 13],
        [9, 13],
        [2, 2],
        [13, 2]
      ];
      CHAPTERS = [
        ["Terk Edilmi\u015F \xC7iftlik", "The Abandoned Farm"],
        ["\u0130lk Tohum", "First Seed"],
        ["Pika'n\u0131n \u0130zi", "Pika's Trail"],
        ["Sarn\u0131\xE7 S\u0131rr\u0131", "The Cistern Secret"],
        ["Meltem'in Sand\u0131\u011F\u0131", "Meltem's Chest"],
        ["S\xFCt Yolu", "The Milky Way"],
        ["Kerem'in Marangozhanesi", "Kerem's Workshop"],
        ["Felix'in Not Defteri I", "Felix's Notebook I"],
        ["Reis'in Haritas\u0131", "Reis' Map"],
        ["Ay\xE7i\xE7e\u011Fi Vadisi", "Sunflower Valley"],
        ["Deniz'in Bak\u0131m\u0131", "Deniz's Care"],
        ["Tepe Rasathanesi", "The Hill Observatory"],
        ["Bal K\u0131\u015F\u0131", "Honey Winter"],
        ["Ayla'n\u0131n Seras\u0131", "Ayla's Greenhouse"],
        ["Un De\u011Firmeni Balosu", "The Mill Ball"],
        ["Bar\u0131\u015F'\u0131n Mutfa\u011F\u0131", "Bar\u0131\u015F's Kitchen"],
        ["Ya\u011Fmur Damlalar\u0131", "Raindrops"],
        ["Tr\xFCf Orman\u0131", "Truffle Forest"],
        ["Kristal Ma\u011Fara", "Crystal Cave"],
        ["Fener Kulesi", "The Lighthouse"],
        ["Nine Ay\u015Fe'nin Re\xE7eteleri", "Nine Ay\u015Fe's Recipes"],
        ["Kunduz Baraj\u0131", "The Beaver Dam"],
        ["Goncalar", "Rosebuds"],
        ["Felix'in Not Defteri II", "Felix's Notebook II"],
        ["Sedef Vadi", "Nacre Valley"],
        ["Lavanta Tarlas\u0131", "Lavender Field"],
        ["Gurme Teker", "Gourmet Wheel"],
        ["K\u0131\u015F Uykusu", "Hibernation"],
        ["Buzul Dere", "Glacier Creek"],
        ["Y\u0131ld\u0131z Tohumu", "Star Seed"],
        ["\u0130pek Yolu", "The Silk Road"],
        ["Deveku\u015Fu \xC7iftli\u011Fi", "Ostrich Farm"],
        ["Kral Somon", "King Salmon"],
        ["Efsane Ta\xE7", "The Legendary Crown"],
        ["B\xFCy\xFCk Restorasyon", "The Great Restoration"],
        ["K\u0131\u015F \u015Eenli\u011Fi", "Winter Festival"],
        ["M\xFCcevher \xC7ar\u015F\u0131s\u0131", "The Gem Bazaar"],
        ["Felix'in Not Defteri III", "Felix's Notebook III"],
        ["Efsanevi Hasat", "The Legendary Harvest"],
        ["D\xF6n\xFC\u015F", "The Return"]
      ];
      CH_ADJ = [["Alt\u0131n", "Golden"], ["Sisli", "Misty"], ["Kadim", "Ancient"], ["Yosunlu", "Mossy"], ["F\u0131s\u0131ldayan", "Whispering"], ["Mercan", "Coral"], ["Ay I\u015F\u0131kl\u0131", "Moonlit"], ["Z\xFCmr\xFCt", "Emerald"], ["K\u0131z\u0131l", "Crimson"], ["Derin", "Deep"], ["Yedi", "Seven"], ["Kutlu", "Blessed"]];
      CH_NOUN = [["Vadi", "Valley"], ["Koru", "Grove"], ["Tepe", "Hill"], ["Koy", "Cove"], ["Ma\u011Fara", "Cave"], ["Tarla", "Field"], ["Orman", "Forest"], ["G\xF6l", "Lake"], ["Yayla", "Highland"], ["P\u0131nar", "Spring"], ["Ada", "Isle"], ["Bo\u011Faz", "Strait"]];
      PLACES = [
        ["Ah\u0131r Tepesi", "Barn Hill"],
        ["Yel De\u011Firmeni", "The Windmill"],
        ["Sarn\u0131\xE7 Yan\u0131", "By the Cistern"],
        ["Kavakl\u0131 Yol", "Poplar Road"],
        ["Ta\u015F K\xF6pr\xFC", "The Stone Bridge"],
        ["Lavanta Tarlas\u0131", "The Lavender Field"],
        ["Bal Korusu", "The Honey Grove"],
        ["Kristal Ma\u011Fara", "The Crystal Cave"],
        ["Sisli Vadi", "The Misty Valley"],
        ["Kuytu Koy", "The Hidden Cove"],
        ["Ay\xE7i\xE7e\u011Fi Vadisi", "Sunflower Valley"],
        ["Tepe Rasathanesi", "The Observatory"]
      ];
      GOODS = [
        ["bu\u011Fday", "wheat"],
        ["bal", "honey"],
        ["s\xFCt", "milk"],
        ["y\xFCn", "wool"],
        ["\xE7i\xE7ek", "flowers"],
        ["inci", "pearls"],
        ["kristal", "crystals"],
        ["yonca", "clover"]
      ];
      NPC_ROSTER = [
        { name: ["Poyraz", "Poyraz"], title: ["Postac\u0131", "The Postman"] },
        { name: ["Meltem", "Meltem"], title: ["Gezgin T\xFCccar", "The Traveling Merchant"] },
        { name: ["Deniz", "Deniz"], title: ["Veteriner", "The Veterinarian"] },
        { name: ["Bar\u0131\u015F", "Bar\u0131\u015F"], title: ["\u015Eef", "The Chef"] },
        { name: ["Ayla", "Ayla"], title: ["Botanik\xE7i", "The Botanist"] },
        { name: ["Kerem", "Kerem"], title: ["Marangoz", "The Carpenter"] },
        { name: ["Reis", "Reis"], title: ["Bal\u0131k\xE7\u0131", "The Fisherman"] },
        { name: ["Nine Ay\u015Fe", "Granny Ay\u015Fe"], title: ["Kom\u015Fu \xC7ift\xE7i", "The Neighbor Farmer"] }
      ];
      ORDER_NAMES = [
        ["Poyraz", "Poyraz"],
        ["Elif", "Elif"],
        ["Ya\u015Far", "Ya\u015Far"],
        ["Zeynep", "Zeynep"],
        ["Mehmet", "Mehmet"],
        ["Fatma", "Fatma"],
        ["Ali", "Ali"],
        ["Zehra", "Zehra"],
        ["Mustafa", "Mustafa"],
        ["Emine", "Emine"],
        ["Hasan", "Hasan"],
        ["Hatice", "Hatice"],
        ["Osman", "Osman"],
        ["Selin", "Selin"],
        ["Ege", "Ege"],
        ["Nehir", "Nehir"],
        ["Toprak", "Toprak"],
        ["Elmas", "Elmas"],
        ["Derya", "Derya"],
        ["Umut", "Umut"],
        ["Bahar", "Bahar"]
      ];
      ORDER_TITLES = [
        ["Pastaneden", "From the Bakery"],
        ["Manavdan", "From the Grocer"],
        ["Lokantadan", "From the Diner"],
        ["Otelciden", "From the Innkeeper"],
        ["Kasaptan", "From the Butcher"],
        ["Kahveh\xE2neden", "From the Teahouse"],
        ["S\xFCt\xE7\xFCden", "From the Milkman"],
        ["\xC7i\xE7ek\xE7iden", "From the Florist"],
        ["Okuldan", "From the School"],
        ["Belediyeden", "From the Town Hall"],
        ["Pazardan", "From the Market"],
        ["Bal\u0131k\xE7\u0131ndan", "From the Fishmonger"]
      ];
      LETTER_TPL = [
        ["{place} yak\u0131n\u0131nda {n} par\xE7a {good} saklad\u0131m. Tezgah onlar\u0131 sever, sen de seveceksin.", "I hid {n} pieces of {good} near {place}. The bench will love them, and so will you."],
        ["Pika d\xFCn {place} taraf\u0131nda {good} kokusu ald\u0131. Bir bak bakal\u0131m, belki senin i\xE7indir.", "Pika caught the scent of {good} by {place} yesterday. Go take a look \u2014 it might be yours."],
        ["{npc} bana {place}\u2019den yazd\u0131; g\xF6ky\xFCz\xFC alt\u0131n renkmi\u015F. Orada {good} bekliyormu\u015F.", "{npc} wrote to me from {place}; the sky was golden. Some {good} awaits there."],
        ["Eski defterime bakt\u0131m: {place} civar\u0131nda bir {good} haritas\u0131 var. Say\u0131s\u0131 tam {n}.", "I looked in my old notebook: there is a map of {good} around {place}. Exactly {n} of them."],
        ["F\u0131rt\u0131na {place}\u2019deki eski levhay\u0131 devirmi\u015F; alt\u0131ndan {good} \xE7\u0131km\u0131\u015F. Senin olsun.", "A storm toppled the old sign at {place}; beneath it lay {good}. It is yours now."],
        ["R\xFCyanda tezgah\u0131 g\xF6rm\xFC\u015Fs\xFCn... Uyan ve {place}\u2019e git; {n} {good} seni bekliyor.", "You dreamed of the bench... Wake up and go to {place}; {n} {good} await you."]
      ];
      ITEMS = {};
      for (const c of CROPS) ITEMS[c.id] = { id: c.id, name: c.name, sell: c.sell, cat: "crop", icon: "crop:" + c.id };
      for (const p of ANIMAL_PRODUCTS) ITEMS[p.id] = p;
      for (const p of MACHINE_PRODUCTS) ITEMS[p.id] = p;
      DAILY_REWARDS = [
        { coins: 250 },
        { energy: 25 },
        { gems: 3 },
        { coins: 500 },
        { energy: 40 },
        { gems: 8 },
        { coins: 1200, gems: 5 }
      ];
      QUEST_TPLS = [
        { id: "harvest", key: "q.harvest", base: 6, scale: 0.5 },
        { id: "merge", key: "q.merge", base: 10, scale: 1 },
        { id: "deliver", key: "q.deliver", base: 2, scale: 0.15 },
        { id: "feed", key: "q.feed", base: 3, scale: 0.2 },
        { id: "gen", key: "q.gen", base: 10, scale: 0.8 },
        { id: "collect", key: "q.collect", base: 2, scale: 0.15 },
        { id: "fish", key: "q.fish", base: 1, scale: 0 },
        { id: "sell", key: "q.sell", base: 8, scale: 0.6 }
      ];
    }
  });

  // src/i18n.ts
  function setLang(l) {
    lang = l;
  }
  function getLang() {
    return lang;
  }
  function li() {
    return lang === "tr" ? 0 : 1;
  }
  function nm(tuple) {
    return tuple[li()];
  }
  function T(key, params) {
    let s = (STR[key] || STR[key.slice(0, key.lastIndexOf("."))] || [key, key])[lang === "tr" ? 0 : 1];
    if (params) for (const k in params) s = s.replace(new RegExp(`\\{${k}\\}`, "g"), String(params[k]));
    return s;
  }
  var lang, STR;
  var init_i18n = __esm({
    "src/i18n.ts"() {
      "use strict";
      lang = "tr";
      STR = {
        // — Boot / Giriş —
        "boot.title": ["FARM FUSION", "FARM FUSION"],
        "boot.sub": ["Birle\u015Ftir \xB7 \xDCret \xB7 B\xFCy\xFCt", "Merge \xB7 Grow \xB7 Build"],
        "boot.play": ["Oyna", "Play"],
        "boot.continue": ["Devam Et", "Continue"],
        "boot.new": ["Yeni Oyun", "New Game"],
        "boot.newConfirm": ["Mevcut kay\u0131t silinecek. Emin misin?", "Your current save will be deleted. Are you sure?"],
        "boot.tapStart": ["Ba\u015Flamak i\xE7in dokun", "Tap to start"],
        // — Giriş hikâyesi —
        "intro.0.title": ["Sevgili Torunum", "My Dear Grandchild"],
        "intro.0.body": ["Bu mektubu okuyorsan, \xE7iftli\u011Fimi sana b\u0131rakt\u0131m demektir. Beni merak etme \u2014 izlerin \xE7ok geride de\u011Filim. Ada senin art\u0131k. Pika adl\u0131 kedim sana rehberlik edecek.", "If you are reading this, then I have left my farm to you. Do not worry about me \u2014 my trail is not far behind. The island is yours now. My cat Pika will guide you."],
        "intro.1.title": ["Fusion Tezgah\u0131", "The Fusion Bench"],
        "intro.1.body": ["Ah\u0131rda sakl\u0131 bulaca\u011F\u0131n gizemli tezgah, par\xE7alar\u0131 birle\u015Ftirip eserler yarat\u0131r. Enerji d\xF6k, kutular\u0131 a\xE7, ayn\u0131 par\xE7alar\u0131 birle\u015Ftir. Her eser \xE7iftli\u011Fini g\xFC\xE7lendirir.", "The mysterious bench hidden in the barn combines pieces into artifacts. Pour in energy, open the boxes, merge matching pieces. Every artifact empowers your farm."],
        "intro.2.title": ["Yolculuk Ba\u015Fl\u0131yor", "The Journey Begins"],
        "intro.2.body": ["Ek, \xFCret, sipari\u015Fleri teslim et. Her 25 seviyede sana bir mektup yazaca\u011F\u0131m. Unutma: tezgah\u0131n ger\xE7ek g\xFCc\xFC sende.", "Plant, produce, deliver orders. I will write to you every 25 levels. Remember: the true power of the bench is in you."],
        "intro.nameLabel": ["\xC7iftli\u011Finin ad\u0131", "Name your farm"],
        "intro.nameDefault": ["Pika'n\u0131n \xC7iftli\u011Fi", "Pika's Farm"],
        "intro.start": ["Ba\u015Fla!", "Start!"],
        "intro.skip": ["Atla", "Skip"],
        // — Genel —
        "c.close": ["Kapat", "Close"],
        "c.cancel": ["Vazge\xE7", "Cancel"],
        "c.ok": ["Tamam", "OK"],
        "c.yes": ["Evet", "Yes"],
        "c.no": ["Hay\u0131r", "No"],
        "c.buy": ["Sat\u0131n Al", "Buy"],
        "c.sell": ["Sat", "Sell"],
        "c.collect": ["Topla", "Collect"],
        "c.claim": ["Al", "Claim"],
        "c.locked": ["Kilitli", "Locked"],
        "c.lvl": ["Seviye", "Level"],
        "c.needLvl": ["Seviye {n} gerekli", "Requires level {n}"],
        "c.max": ["Maks.", "Max"],
        "c.free": ["\xDCcretsiz", "Free"],
        "c.comingSoon": ["Yak\u0131nda", "Coming soon"],
        "c.min": ["dk", "m"],
        "c.sec": ["sn", "s"],
        "c.hour": ["sa", "h"],
        "c.day": ["g\xFCn", "days"],
        // — HUD —
        "hud.energy": ["Enerji", "Energy"],
        "hud.coins": ["Alt\u0131n", "Coins"],
        "hud.gems": ["Elmas", "Gems"],
        "hud.orders": ["Sipari\u015Fler", "Orders"],
        "hud.barn": ["Ambar", "Barn"],
        "hud.shop": ["D\xFCkk\xE2n", "Shop"],
        "hud.museum": ["M\xFCze", "Museum"],
        "hud.quests": ["G\xF6revler", "Quests"],
        "hud.fusion": ["Fusion", "Fusion"],
        "hud.settings": ["Ayarlar", "Settings"],
        "hud.daily": ["G\xFCnl\xFCk Kasa", "Daily Chest"],
        "hud.weather.sun": ["G\xFCne\u015Fli", "Sunny"],
        "hud.weather.cloud": ["Bulutlu", "Cloudy"],
        "hud.weather.rain": ["Ya\u011Fmurlu", "Rainy"],
        "hud.rainBonus": ["%10 b\xFCy\xFCme h\u0131z\u0131", "+10% growth speed"],
        // — Çiftlik —
        "f.plant": ["Ek", "Plant"],
        "f.harvest": ["Hasat", "Harvest"],
        "f.ready": ["HAZIR", "READY"],
        "f.growing": ["B\xFCy\xFCyor", "Growing"],
        "f.emptyPlot": ["BO\u015E", "EMPTY"],
        "f.seedSelect": ["Tohum se\xE7", "Select seed"],
        "f.plantAll": ["T\xFCm bo\u015F parsellere ek", "Plant all empty plots"],
        "f.growTime": ["B\xFCy\xFCme", "Grow time"],
        "f.yield": ["Verim", "Yield"],
        "f.planted": ["Ekildi!", "Planted!"],
        "f.harvested": ["+{n} {item}", "+{n} {item}"],
        "f.plotsUsed": ["{a} / {b} ekili", "{a} / {b} planted"],
        "f.feedAll": ["Hepsini Yemle", "Feed All"],
        "f.feedCost": ["Yemleme: {n} \u{1FA99}", "Feed: {n} \u{1FA99}"],
        "f.fed": ["Yemlendi", "Fed"],
        "f.collectProduct": ["\xDCr\xFCnleri Topla", "Collect Products"],
        "f.happy": ["Mutluluk", "Happiness"],
        "f.penUpgrade": ["Bar\u0131na\u011F\u0131 B\xFCy\xFCt ({n}\u2192{m})", "Upgrade pen ({n}\u2192{m})"],
        "f.animals": ["Hayvanlar", "Animals"],
        "f.buyMachine": ["\u0130n\u015Fa Et", "Build"],
        "f.recipes": ["Re\xE7eteler", "Recipes"],
        "f.queue": ["Kuyruk", "Queue"],
        "f.inQueue": ["Kuyrukta", "Queued"],
        "f.missingInput": ["Eksik malzeme", "Missing ingredients"],
        "f.machineDone": ["{item} haz\u0131r!", "{item} is ready!"],
        "f.barnFull": ["Ambar dolu!", "Barn is full!"],
        "f.barnCap": ["Kapasite {a}/{b}", "Capacity {a}/{b}"],
        "f.barnUpgrade": ["Ambar\u0131 +20 Geni\u015Flet (15 \u{1F48E})", "Upgrade barn +20 (15 \u{1F48E})"],
        "f.sellAll": ["Hepsini Sat", "Sell All"],
        "f.sellOne": ["1 Sat", "Sell 1"],
        "f.cat.crop": ["Mahsuller", "Crops"],
        "f.cat.animal": ["Hayvan \xDCr\xFCnleri", "Animal Goods"],
        "f.cat.machine": ["\xDCretim", "Produce"],
        "f.expand": ["Aday\u0131 Geni\u015Flet", "Expand Island"],
        "f.expandTo": ["{n}. b\xF6lge a\xE7\u0131l\u0131r", "Unlock area {n}"],
        "f.expandTime": ["\u0130n\u015Faat: {t}", "Construction: {t}"],
        "f.expanding": ["Kerem in\u015Fa ediyor...", "Kerem is building..."],
        "f.expandDone": ["Ada geni\u015Fledi!", "The island grew!"],
        "f.speedUp": ["H\u0131zland\u0131r (1 \u{1F48E})", "Speed up (1 \u{1F48E})"],
        "f.place": ["Yerle\u015Ftir", "Place"],
        "f.tapToPlace": ["Yerle\u015Ftirmek i\xE7in bo\u015F bir \xE7ime dokun", "Tap an empty grass tile to place"],
        "f.placing": ["Yerle\u015Ftirme modu", "Placement mode"],
        "f.move": ["Ta\u015F\u0131", "Move"],
        "f.remove": ["Kald\u0131r", "Remove"],
        "f.refundHalf": ["Yar\u0131 paras\u0131n\u0131 geri al", "Refund half the price"],
        "f.needSpace": ["Bu b\xF6lgede bo\u015F yer kalmad\u0131", "No space left in this area"],
        "f.dock": ["Olta \u0130skelesi", "Fishing Dock"],
        "f.starterPack": ["Miras Paketi", "Heritage Pack"],
        // — Fusion Tezgahı —
        "m.title": ["Fusion Tezgah\u0131", "Fusion Bench"],
        "m.refill": ["Doldur", "Refill"],
        "m.next": ["Sonraki +1", "Next +1"],
        "m.regen": ["Yenileniyor", "Recharging"],
        "m.tier": ["Kademe", "Tier"],
        "m.merged": ["Birle\u015Fme!", "Merged!"],
        "m.double": ["\xC7ift Birle\u015Fme! +1 \u26A1", "Double merge! +1 \u26A1"],
        "m.jackpot": ["JACKPOT! \xD73", "JACKPOT! \xD73"],
        "m.boardFull": ["Tahta dolu!", "Board is full!"],
        "m.noEnergy": ["Enerji bitti!", "Out of energy!"],
        "m.noEnergyTip": ["Enerji 3 dakikada 1 dolar. Reklam izleyerek doldurabilirsin.", "Energy refills 1 per 3 minutes. Watch an ad to refill."],
        "m.buyCell": ["H\xFCcreyi A\xE7", "Unlock cell"],
        "m.cellBought": ["H\xFCcre a\xE7\u0131ld\u0131!", "Cell unlocked!"],
        "m.boardGrew": ["Tahta geni\u015Fledi!", "The board grew!"],
        "m.artifact": ["ESER", "ARTIFACT"],
        "m.sellArtifact": ["Sat ({n} \u{1FA99})", "Sell ({n} \u{1FA99})"],
        "m.donate": ["M\xFCzeye Ba\u011F\u0131\u015Fla", "Donate to museum"],
        "m.donated": ["M\xFCzeye ba\u011F\u0131\u015Fland\u0131!", "Donated to museum!"],
        "m.sellZone": ["SAT", "SELL"],
        "m.dragHere": ["Satmak i\xE7in buraya s\xFCr\xFCkle", "Drag here to sell"],
        "m.genLocked": ["Seviye {n}", "Level {n}"],
        "m.spawn": ["{n} par\xE7a \xE7\u0131kt\u0131!", "{n} pieces dropped!"],
        // — Müze —
        "mu.title": ["Eserler M\xFCzesi", "Museum of Artifacts"],
        "mu.donations": ["Ba\u011F\u0131\u015F: {n}", "Donated: {n}"],
        "mu.nextMilestone": ["S\u0131radaki \xF6d\xFCl: {n} ba\u011F\u0131\u015Fta", "Next reward at {n} donations"],
        "mu.prodBonus": ["\xDCretim h\u0131z\u0131 bonusu", "Production speed bonus"],
        "mu.fragments": ["Felix'in \u015Fifre par\xE7alar\u0131", "Felix's blueprint fragments"],
        "mu.rewardProd": ["+%2 kal\u0131c\u0131 \xFCretim h\u0131z\u0131", "+2% permanent production speed"],
        "mu.rewardGems": ["{n} \u{1F48E}", "{n} \u{1F48E}"],
        "mu.rewardDecor": ["Efsanevi dekor a\xE7\u0131ld\u0131", "Legendary decor unlocked"],
        "mu.milestoneDone": ["Tamamland\u0131 \u2713", "Completed \u2713"],
        // — Siparişler —
        "o.title": ["Sipari\u015F Tahtas\u0131", "Order Board"],
        "o.want": ["\u0130stiyor", "Wants"],
        "o.reward": ["\xD6d\xFCl", "Reward"],
        "o.deliver": ["Teslim Et", "Deliver"],
        "o.delivered": ["Sipari\u015F teslim edildi!", "Order delivered!"],
        "o.express": ["EKSPRES \xD72", "EXPRESS \xD72"],
        "o.expressLeft": ["{t} i\xE7inde", "within {t}"],
        "o.expressLost": ["Ekspres s\xFCresi doldu, normal sipari\u015F oldu", "Express time ran out"],
        "o.reroll": ["Yenile (15 \u{1FA99})", "Reroll (15 \u{1FA99})"],
        "o.rerolled": ["Yeni sipari\u015F geldi!", "New order arrived!"],
        "o.refresh": ["Tahta {t} sonra yenilenir", "Board refreshes in {t}"],
        "o.missing": ["{a}/{b}", "{a}/{b}"],
        "o.npc.from": ["{name} \xB7 {title}", "{name} \xB7 {title}"],
        // — Görevler —
        "q.title": ["G\xFCnl\xFCk G\xF6revler", "Daily Quests"],
        "q.done": ["G\xF6rev tamam!", "Quest complete!"],
        "q.allDone": ["T\xFCm g\xF6revler tamam! +2 \u{1F48E} +20 \u26A1", "All quests done! +2 \u{1F48E} +20 \u26A1"],
        "q.harvest": ["{n} mahsul hasat et", "Harvest {n} crops"],
        "q.merge": ["{n} birle\u015Ftirme yap", "Perform {n} merges"],
        "q.deliver": ["{n} sipari\u015F teslim et", "Deliver {n} orders"],
        "q.feed": ["{n} kez hayvan yemle", "Feed animals {n} times"],
        "q.gen": ["Jenerat\xF6rlere {n} kez dokun", "Tap generators {n} times"],
        "q.collect": ["{n} makine \xFCr\xFCn\xFC topla", "Collect {n} machine goods"],
        "q.fish": ["Bal\u0131k tutmay\u0131 dene", "Try fishing"],
        "q.sell": ["Ambardan {n} e\u015Fya sat", "Sell {n} barn items"],
        // — Günlük kasa —
        "d.title": ["G\xFCnl\xFCk Kasa", "Daily Chest"],
        "d.streak": ["Seri: {n} g\xFCn", "Streak: {n} days"],
        "d.claimed": ["Yar\u0131n tekrar gel!", "Come back tomorrow!"],
        "d.claimToday": ["Bug\xFCnk\xFC \xF6d\xFCl\xFC al", "Claim today\u2019s reward"],
        "d.dayN": ["{n}. g\xFCn", "Day {n}"],
        // — Mektup / hikâye —
        "l.from": ["B\xFCy\xFCkbaba Felix\u2019ten", "From Grandpa Felix"],
        "l.tapOpen": ["A\xE7mak i\xE7in dokun", "Tap to open"],
        "l.tapNext": ["Devam", "Continue"],
        "l.reward": ["Mektup \xF6d\xFCl\xFC", "Letter reward"],
        "l.frag": ["\u015Eifre par\xE7as\u0131 +{n}", "Blueprint fragment +{n}"],
        // — Seviye atlama —
        "lu.title": ["Seviye Atlad\u0131n!", "Level Up!"],
        "lu.now": ["Seviye {n}", "Level {n}"],
        "lu.unlocked": ["Yeni a\xE7\u0131lanlar", "Newly unlocked"],
        "lu.crop": ["Yeni mahsul", "New crop"],
        "lu.animal": ["Yeni hayvan", "New animal"],
        "lu.machine": ["Yeni makine", "New machine"],
        "lu.chain": ["Yeni merge zinciri", "New merge chain"],
        "lu.decor": ["Yeni dekor", "New decor"],
        "lu.board": ["Tezgah geni\u015Fledi", "Bench expanded"],
        "lu.energyCap": ["Enerji kapasitesi artt\u0131", "Energy capacity increased"],
        // — Bölüm kartı —
        "ch.chapter": ["B\xD6L\xDCM {n}", "CHAPTER {n}"],
        "ch.continue": ["Yolculu\u011Fa devam", "Continue the journey"],
        // — Çevrimdışı —
        "off.title": ["Sen yokken...", "While you were away..."],
        "off.away": ["{t} boyunca yoktun", "Gone for {t}"],
        "off.energy": ["+{n} \u26A1 enerji doldu", "+{n} \u26A1 energy restored"],
        "off.crops": ["{n} mahsul olgunla\u015Ft\u0131", "{n} crops ripened"],
        "off.machines": ["{n} \xFCretim bitti", "{n} productions finished"],
        "off.welcome": ["Tekrar ho\u015F geldin! Pika seni \xF6zlemi\u015F. \u{1F43E}", "Welcome back! Pika missed you. \u{1F43E}"],
        // — Balıkçılık —
        "fish.title": ["Reis\u2019in \u0130sklesi", "Reis' Dock"],
        "fish.casts": ["Bug\xFCn {n}/5 at\u0131\u015F", "{n}/5 casts today"],
        "fish.cast": ["Oltay\u0131 At!", "Cast the line!"],
        "fish.pull": ["\xC7ek!", "Reel!"],
        "fish.perfect": ["M\xDCKEMMEL!", "PERFECT!"],
        "fish.good": ["\u0130yi!", "Nice!"],
        "fish.ok": ["Oldu bile", "Not bad"],
        "fish.got": ["{item} tahtaya eklendi!", "{item} added to the board!"],
        "fish.noCasts": ["Bug\xFCnl\xFCk at\u0131\u015F bitti. Yar\u0131n gel!", "No casts left today. Come back tomorrow!"],
        "fish.boardFull": ["Tahta dolu, \xF6nce yer a\xE7!", "Board is full, make room first!"],
        // — Ayarlar —
        "s.title": ["Ayarlar", "Settings"],
        "s.sound": ["Ses efektleri", "Sound effects"],
        "s.music": ["M\xFCzik", "Music"],
        "s.haptics": ["Titre\u015Fim", "Haptics"],
        "s.lang": ["Dil / Language", "Language"],
        "s.reset": ["Kayd\u0131 s\u0131f\u0131rla", "Reset save"],
        "s.resetConfirm": ["T\xFCm ilerlemen silinecek. Emin misin?", "All progress will be lost. Are you sure?"],
        "s.resetDone": ["Kay\u0131t silindi", "Save deleted"],
        "s.about": ["Hakk\u0131nda", "About"],
        "s.privacy": ["Bu oyun hi\xE7bir veri toplamaz; her \u015Fey cihaz\u0131nda saklan\u0131r.", "This game collects no data; everything is stored on your device."],
        "s.version": ["S\xFCr\xFCm", "Version"],
        "s.credits": ["Tasar\u0131m: Farm Fusion Master Plan \xB7 Sanat ve motor: prosed\xFCrel", "Design: Farm Fusion Master Plan \xB7 Art & engine: procedural"],
        // — Reklam (simülasyon; App Store sürümünde gerçek ödüllü reklam olacak) —
        "ad.title": ["\xD6d\xFCll\xFC Reklam", "Rewarded Ad"],
        "ad.text": ["Bu, App Store s\xFCr\xFCm\xFCnde ger\xE7ek bir reklam olacak.", "This will be a real ad in the App Store version."],
        "ad.wait": ["\xD6d\xFCl {n} sn sonra...", "Reward in {n}s..."],
        "ad.done": ["\xD6d\xFCl verildi!", "Reward granted!"],
        "ad.energy": ["+30 \u26A1 enerji", "+30 \u26A1 energy"],
        // — Toast / uyarı —
        "t.noCoins": ["Yeterli alt\u0131n yok", "Not enough coins"],
        "t.noGems": ["Yeterli elmas yok", "Not enough gems"],
        "t.noEnergy": ["Enerji yetersiz", "Not enough energy"],
        "t.saved": ["Kaydedildi", "Saved"],
        "t.needItems": ["Gerekli malzemeler yok", "Missing required goods"],
        "t.barnFull": ["Ambar dolu! Sat\u0131\u015F yap veya y\xFCkselt.", "Barn full! Sell or upgrade."],
        "t.noSpace": ["Yer yok", "No space"],
        "t.lockedArea": ["Bu b\xF6lge hen\xFCz a\xE7\u0131lmad\u0131", "This area is not unlocked yet"],
        "t.nameTooLong": ["\u0130sim \xE7ok uzun", "Name is too long"],
        // — Pika ipuçları —
        "pika.0": ["Miyav! Ayn\u0131 par\xE7alar\u0131 birle\u015Ftirmeyi dene!", "Meow! Try merging matching pieces!"],
        "pika.1": ["Sipari\u015Fler 4 saatte bir yenilenir.", "Orders refresh every 4 hours."],
        "pika.2": ["Ya\u011Fmur mahsulleri %10 h\u0131zland\u0131r\u0131r!", "Rain speeds up crops by 10%!"],
        "pika.3": ["Eserleri m\xFCzeye ba\u011F\u0131\u015Flamak daha k\xE2rl\u0131!", "Donating artifacts to the museum pays off!"],
        "pika.4": ["Enerji bitti\u011Finde tarlaya d\xF6n, mahsul bekler.", "When energy runs out, tend the farm."],
        "pika.5": ["Her 25 seviyede b\xFCy\xFCkbabadan mektup gelir!", "Grandpa writes every 25 levels!"],
        "pika.6": ["Ambar dolarsa \xFCretim durur \u2014 ara s\u0131ra sat!", "Production stops when the barn is full \u2014 sell sometimes!"],
        // — Öğretici —
        "tut.0.title": ["Miyav! Ben Pika!", "Meow! I\u2019m Pika!"],
        "tut.0.text": ["B\xFCy\xFCkbaban\u0131n \xE7iftli\u011Fine ho\u015F geldin! Sana her \u015Feyi g\xF6sterece\u011Fim. Haz\u0131rsan ba\u015Flayal\u0131m!", "Welcome to grandpa\u2019s farm! I\u2019ll show you everything. Ready? Let\u2019s go!"],
        "tut.1.title": ["Haz\u0131r bu\u011Fday!", "Wheat is ready!"],
        "tut.1.text": ["B\xFCy\xFCkbaban\u0131n son ekti\u011Fi bu\u011Fday olgunla\u015Fm\u0131\u015F. Parlak parsele dokun ve hasat et!", "Grandpa\u2019s last wheat has ripened. Tap the glowing plot and harvest it!"],
        "tut.2.title": ["\u015Eimdi sen ek!", "Now you plant!"],
        "tut.2.text": ["Bo\u015F parsele dokun, bu\u011Fday tohumunu se\xE7 ve ek.", "Tap the empty plot, choose wheat seeds and plant."],
        "tut.3.title": ["Beklemek yok!", "No waiting!"],
        "tut.3.text": ["Sana h\u0131zland\u0131rma hediyesi! Butona dokun, bu\u011Fday an\u0131nda olgunla\u015Fs\u0131n.", "A speed-up gift for you! Tap the button to ripen the wheat instantly."],
        "tut.4.title": ["Topla!", "Collect!"],
        "tut.4.text": ["Bu\u011Fday haz\u0131r! Dokun ve hasat et.", "Wheat is ready! Tap to harvest."],
        "tut.5.title": ["Poyraz geldi!", "Poyraz is here!"],
        "tut.5.text": ["Postac\u0131 Poyraz ilk sipari\u015Fi getirdi. Sipari\u015Fler butonuna dokun.", "Postman Poyraz brought the first order. Tap the Orders button."],
        "tut.6.title": ["Teslim et!", "Deliver!"],
        "tut.6.text": ["Bu\u011Fdaylar\u0131 Poyraz\u2019a teslim et ve \xF6d\xFCl\xFCn\xFC al.", "Deliver the wheat to Poyraz and claim your reward."],
        "tut.7.title": ["Fusion Tezgah\u0131!", "The Fusion Bench!"],
        "tut.7.text": ["\u015Eimdi as\u0131l sihir! Kocaman FUSION butonuna dokun.", "Now the real magic! Tap the big FUSION button."],
        "tut.8.title": ["Jenerat\xF6re dokun!", "Tap the generator!"],
        "tut.8.text": ["Tohum Paketi kutusuna dokun; enerji harcay\u0131p par\xE7alar \xE7\u0131kacak.", "Tap the Seed Box; it spends energy and drops pieces."],
        "tut.9.title": ["Birle\u015Ftir!", "Merge!"],
        "tut.9.text": ["\u0130ki ayn\u0131 par\xE7ay\u0131 \xFCst \xFCste s\xFCr\xFCkle ve birle\u015Ftir. Hadi!", "Drag two matching pieces onto each other to merge. Go!"],
        "tut.10.title": ["Harikas\u0131n!", "Amazing!"],
        "tut.10.text": ["Art\u0131k \xE7iftli\u011Fin senin! Ek, \xFCret, birle\u015Ftir. Her 25 seviyede mektup bekliyor. \u0130yi e\u011Flenceler! \u{1F43E}", "The farm is yours now! Plant, produce, merge. Letters await every 25 levels. Have fun! \u{1F43E}"],
        // — Hata/ayrıntılar —
        "x.comingEvent": ["Sezon etkinlikleri yak\u0131nda!", "Seasonal events coming soon!"],
        "x.debug": ["Geli\u015Ftirici", "Developer"]
      };
    }
  });

  // src/core.ts
  var core_exports = {};
  __export(core_exports, {
    EXP: () => EXP,
    applyOffline: () => applyOffline,
    boardStageFor: () => boardStageFor,
    bus: () => bus,
    clamp: () => clamp,
    clearSave: () => clearSave,
    dayDiff: () => dayDiff,
    energyNextIn: () => energyNextIn,
    fmt: () => fmt,
    fmtTime: () => fmtTime,
    haptic: () => haptic,
    hashStr: () => hashStr,
    initialLocked: () => initialLocked,
    isTileUnlocked: () => isTileUnlocked,
    islandInfo: () => islandInfo,
    loadGame: () => loadGame,
    mulberry32: () => mulberry32,
    newGame: () => newGame,
    prodMult: () => prodMult,
    saveGame: () => saveGame,
    setState: () => setState,
    state: () => state,
    tickEnergy: () => tickEnergy,
    todayKey: () => todayKey,
    usableCells: () => usableCells,
    weatherNow: () => weatherNow
  });
  function mulberry32(seed) {
    let a = seed >>> 0;
    return () => {
      a |= 0;
      a = a + 1831565813 | 0;
      let t = Math.imul(a ^ a >>> 15, 1 | a);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function hashStr(s) {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return h >>> 0;
  }
  function newGame() {
    const now = Date.now();
    const st = {
      v: 1,
      created: now,
      last: now,
      name: "",
      level: 1,
      xp: 0,
      coins: 500,
      gems: 12,
      energy: energyCap(1),
      energyAt: now,
      plots: new Array(100).fill(null),
      lastCrop: "wheat",
      expansion: 0,
      expandAt: null,
      animals: [],
      machines: [],
      barn: { wheat: 3 },
      barnLvl: 0,
      board: new Array(BOARD_CELLS).fill(null),
      boardStage: 0,
      boardLocked: [],
      gens: {},
      museum: {},
      decorUnlocked: [],
      fragments: 0,
      orders: [],
      ordersAt: now,
      orderSeq: 1,
      questDay: "",
      quests: [],
      questBonusTaken: false,
      daily: { last: 0, day: 0, streak: 0 },
      fish: { day: "", casts: 0 },
      decor: [],
      tutorial: 0,
      letters: 0,
      stats: { merges: 0, harvests: 0, deliveries: 0, feeds: 0, gens: 0, collects: 0, fish: 0, sells: 0 },
      settings: { sfx: true, music: true, haptic: true, lang: "tr" }
    };
    st.boardLocked = initialLocked(0);
    const { off, size } = soilRect(0);
    const cx = off + Math.floor(size / 2), cy = off + Math.floor(size / 2);
    st.plots[(cy - 3) * 10 + (cx - 3)] = { crop: "wheat", at: now - 12e4, dur: 12e4 };
    st.orders = [{ id: 1, npc: 0, items: [{ item: "wheat", qty: 6 }], coins: 150, xp: 45, express: false, expires: 0 }];
    st.orderSeq = 2;
    return st;
  }
  function initialLocked(stage2) {
    const s = BOARD_STAGES[stage2];
    const cells = [];
    for (let y = 0; y < s.rows; y++) for (let x = 0; x < s.cols; x++) cells.push(y * 10 + x);
    return cells.slice(cells.length - s.locked);
  }
  function usableCells(stage2) {
    const s = BOARD_STAGES[stage2];
    const out = [];
    for (let y = 0; y < s.rows; y++) for (let x = 0; x < s.cols; x++) out.push(y * 10 + x);
    return out;
  }
  function setState(s) {
    state = s;
  }
  function saveGame() {
    try {
      state.last = Date.now();
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    } catch (e) {
    }
  }
  function loadGame() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return null;
      const s = JSON.parse(raw);
      if (!s || s.v !== 1 || typeof s.level !== "number") return null;
      if (!s.board || s.board.length !== BOARD_CELLS) s.board = newGame().board;
      if (!s.plots || s.plots.length !== 100) s.plots = newGame().plots;
      if (!s.lastCrop) s.lastCrop = "wheat";
      s.settings = Object.assign({ sfx: true, music: true, haptic: true, lang: "tr" }, s.settings);
      s.stats = Object.assign({ merges: 0, harvests: 0, deliveries: 0, feeds: 0, gens: 0, collects: 0, fish: 0, sells: 0 }, s.stats);
      return s;
    } catch {
      return null;
    }
  }
  function clearSave() {
    try {
      localStorage.removeItem(SAVE_KEY);
    } catch {
    }
  }
  function tickEnergy() {
    const cap = energyCap(state.level);
    if (state.energy >= cap) {
      state.energyAt = Date.now();
      return;
    }
    const per = ENERGY_REGEN * 1e3;
    const periods = Math.floor((Date.now() - state.energyAt) / per);
    if (periods > 0) {
      state.energy = Math.min(cap, state.energy + periods);
      state.energyAt += periods * per;
      bus.emit("res");
    }
  }
  function energyNextIn() {
    const cap = energyCap(state.level);
    if (state.energy >= cap) return 0;
    const per = ENERGY_REGEN * 1e3;
    return Math.max(0, per - (Date.now() - state.energyAt));
  }
  function weatherNow() {
    const bucket = Math.floor(Date.now() / (20 * 6e4));
    const r = mulberry32(bucket)();
    return r < 0.6 ? "sun" : r < 0.85 ? "cloud" : "rain";
  }
  function prodMult() {
    let m = 1;
    const chainsDone = Object.values(state.museum).filter((n) => n >= 1).length;
    m += 0.02 * chainsDone;
    if (weatherNow() === "rain") m += 0.1;
    return Math.min(1.6, m);
  }
  function applyOffline() {
    const now = Date.now();
    const elapsed = Math.min(now - state.last, 48 * 36e5);
    if (elapsed < 6e4) {
      tickEnergy();
      return null;
    }
    const energyBefore = state.energy;
    tickEnergy();
    const energyGained = state.energy - energyBefore;
    let crops = 0;
    for (const p of state.plots) if (p && Date.now() - p.at >= p.dur) crops++;
    let machines = 0;
    for (const m of state.machines) for (const j of m.queue) if (now - j.at >= j.dur) machines++;
    state.last = now;
    saveGame();
    if (energyGained <= 0 && crops === 0 && machines === 0) return null;
    return { elapsed, energy: energyGained, crops, machines };
  }
  function fmt(n) {
    return new Intl.NumberFormat(getLang() === "tr" ? "tr-TR" : "en-US").format(Math.floor(n));
  }
  function fmtTime(ms) {
    const s = Math.max(0, Math.ceil(ms / 1e3));
    const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), sec = s % 60;
    if (h > 0) return `${h}sa ${m}dk`;
    if (m > 0) return `${m}dk ${sec.toString().padStart(2, "0")}sn`;
    return `${sec}sn`;
  }
  function clamp(v, a, b) {
    return Math.max(a, Math.min(b, v));
  }
  function todayKey() {
    const d = /* @__PURE__ */ new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
  }
  function dayDiff(a, b) {
    return Math.floor(b / 864e5) - Math.floor(a / 864e5);
  }
  function haptic(pattern = 12) {
    if (!state.settings.haptic) return;
    try {
      navigator.vibrate && navigator.vibrate(pattern);
    } catch {
    }
  }
  function boardStageFor(level) {
    let s = 0;
    for (let i = 0; i < BOARD_STAGES.length; i++) if (level >= BOARD_STAGES[i].lvl) s = i;
    return s;
  }
  function islandInfo() {
    const m = 4 - state.expansion;
    return { margin: m, soil: soilRect(state.expansion) };
  }
  function isTileUnlocked(x, y) {
    const m = 4 - state.expansion;
    return x >= m && y >= m && x <= ISLAND - 1 - m && y <= ISLAND - 1 - m;
  }
  var Bus, bus, SAVE_KEY, state, EXP;
  var init_core = __esm({
    "src/core.ts"() {
      "use strict";
      init_data();
      init_i18n();
      Bus = class {
        constructor() {
          this.m = /* @__PURE__ */ new Map();
        }
        on(ev, fn) {
          (this.m.get(ev) || this.m.set(ev, /* @__PURE__ */ new Set()).get(ev)).add(fn);
        }
        off(ev, fn) {
          this.m.get(ev)?.delete(fn);
        }
        emit(ev, data) {
          this.m.get(ev)?.forEach((f) => f(data));
        }
      };
      bus = new Bus();
      SAVE_KEY = "farmfusion_save_v1";
      state = newGame();
      EXP = EXPANSIONS;
    }
  });

  // src/audio.ts
  function initAudio() {
    if (ctx) {
      resumeAudio();
      return;
    }
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createGain();
      master.gain.value = 0.9;
      master.connect(ctx.destination);
      sfxGain = ctx.createGain();
      sfxGain.gain.value = state.settings.sfx ? 0.5 : 0;
      sfxGain.connect(master);
      musGain = ctx.createGain();
      musGain.gain.value = state.settings.music ? 0.16 : 0;
      musGain.connect(master);
      noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
      startMusic();
    } catch {
    }
  }
  function resumeAudio() {
    if (ctx && ctx.state === "suspended") ctx.resume().catch(() => {
    });
  }
  function tone(freq, dur, type, vol, when = 0, slideTo) {
    if (!ctx) return;
    const t = ctx.currentTime + when;
    const o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(Math.max(1, slideTo), t + dur);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.012);
    g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
    o.connect(g);
    g.connect(sfxGain);
    o.start(t);
    o.stop(t + dur + 0.05);
  }
  function noise(dur, vol, freq, when = 0, q = 1) {
    if (!ctx || !noiseBuf) return;
    const t = ctx.currentTime + when;
    const src = ctx.createBufferSource();
    src.buffer = noiseBuf;
    const f = ctx.createBiquadFilter();
    f.type = "bandpass";
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
    src.connect(f);
    f.connect(g);
    g.connect(sfxGain);
    src.start(t);
    src.stop(t + dur + 0.05);
  }
  function arp(freqs, step2, type, vol, dur = 0.3) {
    freqs.forEach((f, i) => tone(f, dur, type, vol, i * step2));
  }
  function sfx(name, n = 0) {
    if (!ctx || !state.settings.sfx) return;
    switch (name) {
      case "tap":
        tone(660, 0.07, "sine", 0.25);
        break;
      case "back":
        tone(440, 0.09, "sine", 0.2, 0, 330);
        break;
      case "error":
        tone(140, 0.12, "sawtooth", 0.18);
        tone(120, 0.14, "sawtooth", 0.15, 0.1);
        break;
      case "plant":
        tone(180, 0.12, "triangle", 0.3, 0, 120);
        noise(0.06, 0.12, 900);
        break;
      case "harvest":
        tone(520, 0.1, "triangle", 0.3, 0, 260);
        noise(0.08, 0.1, 1600, 0.04);
        arp([660, 880], 0.06, "sine", 0.12, 0.12);
        break;
      case "coin":
        tone(988, 0.09, "square", 0.12);
        tone(1319, 0.14, "square", 0.1, 0.07);
        break;
      case "gem":
        arp([1047, 1319, 1568], 0.07, "sine", 0.16, 0.18);
        break;
      case "xp":
        tone(740, 0.08, "sine", 0.15, 0, 990);
        break;
      case "merge": {
        const f = 300 + 90 * n;
        tone(f, 0.14, "sine", 0.3, 0, f * 1.8);
        tone(f * 1.5, 0.18, "sine", 0.16, 0.05);
        noise(0.05, 0.08, 2400, 0.02, 2);
        break;
      }
      case "mergeBig":
        arp([392, 494, 587, 784], 0.06, "triangle", 0.22, 0.3);
        break;
      case "artifact":
        arp([523, 659, 784, 1047, 1319], 0.09, "sine", 0.2, 0.5);
        noise(0.4, 0.05, 3e3, 0.1, 0.5);
        break;
      case "gen":
        tone(320, 0.1, "triangle", 0.26, 0, 480);
        tone(640, 0.08, "sine", 0.14, 0.07);
        break;
      case "jackpot":
        arp([523, 659, 784, 1047, 784, 1047, 1319], 0.07, "square", 0.14, 0.25);
        break;
      case "levelup":
        arp([523, 659, 784, 1047], 0.11, "triangle", 0.24, 0.45);
        arp([1319, 1568], 0.1, "sine", 0.12, 0.5);
        break;
      case "unlock":
        arp([440, 554, 659, 880], 0.09, "triangle", 0.2, 0.3);
        break;
      case "letter":
        noise(0.25, 0.06, 1200, 0, 0.4);
        arp([880, 1109], 0.12, "sine", 0.15, 0.4);
        break;
      case "open":
        noise(0.14, 0.06, 700, 0, 0.7);
        tone(520, 0.1, "sine", 0.12, 0.02, 700);
        break;
      case "close":
        noise(0.12, 0.05, 500, 0, 0.7);
        tone(500, 0.1, "sine", 0.1, 0.02, 360);
        break;
      case "energy":
        arp([659, 880, 1047], 0.08, "sine", 0.18, 0.25);
        break;
      case "collect":
        tone(587, 0.09, "sine", 0.22, 0, 784);
        tone(880, 0.1, "sine", 0.14, 0.06);
        break;
      case "feed":
        tone(300, 0.08, "triangle", 0.2, 0, 240);
        tone(360, 0.08, "triangle", 0.18, 0.09, 300);
        break;
      case "place":
        tone(240, 0.1, "triangle", 0.28, 0, 180);
        noise(0.07, 0.1, 800, 0.03);
        break;
      case "buy":
        arp([784, 988], 0.08, "sine", 0.18, 0.2);
        tone(1568, 0.2, "sine", 0.08, 0.14);
        break;
      case "sell":
        tone(880, 0.08, "square", 0.1);
        tone(659, 0.12, "square", 0.1, 0.06);
        break;
      case "splash":
        noise(0.3, 0.16, 600, 0, 0.6);
        tone(200, 0.2, "sine", 0.14, 0, 90);
        break;
      case "fish":
        arp([330, 392, 494, 587], 0.07, "triangle", 0.2, 0.2);
        break;
      case "quest":
        arp([587, 740, 880], 0.09, "sine", 0.18, 0.3);
        break;
      case "chapter":
        arp([262, 330, 392, 523, 659, 784], 0.13, "triangle", 0.2, 0.6);
        break;
      case "daily":
        arp([659, 784, 988, 1319], 0.09, "sine", 0.18, 0.35);
        break;
      case "drag":
        tone(520, 0.05, "sine", 0.14);
        break;
      case "drop":
        tone(400, 0.06, "sine", 0.16, 0, 300);
        break;
      case "cell":
        tone(700, 0.08, "triangle", 0.2);
        tone(1047, 0.12, "sine", 0.12, 0.05);
        break;
    }
  }
  function musNote(freq, dur, type, vol, when, filt = 2400) {
    if (!ctx) return;
    const t = when;
    const o = ctx.createOscillator(), g = ctx.createGain(), f = ctx.createBiquadFilter();
    o.type = type;
    o.frequency.value = freq;
    f.type = "lowpass";
    f.frequency.value = filt;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.02);
    g.gain.exponentialRampToValueAtTime(1e-4, t + dur);
    o.connect(f);
    f.connect(g);
    g.connect(musGain);
    o.start(t);
    o.stop(t + dur + 0.1);
  }
  function setMusicScene(s) {
    scene = s;
  }
  function startMusic() {
    if (musicTimer !== null) return;
    nextBar = ctx.currentTime + 0.2;
    musicTimer = window.setInterval(() => {
      if (!ctx || !state.settings.music) return;
      while (nextBar < ctx.currentTime + 1.2) {
        scheduleBar(nextBar);
        nextBar += 2;
      }
    }, 300);
  }
  function scheduleBar(t) {
    const night = scene === "night";
    const board = scene === "board";
    const scale = board ? SCALE_BOARD : SCALE_DAY;
    const chords = board ? CHORDS_BOARD : CHORDS_DAY;
    const chord = chords[barIdx % 4];
    const padVol = night ? 0.05 : 0.07;
    for (const f of chord) musNote(f, night ? 3.6 : 2.2, "triangle", padVol, t, night ? 900 : 1400);
    const notes = night ? 2 : board ? 6 : 4;
    const type = board ? "sawtooth" : "sine";
    const vol = board ? 0.09 : night ? 0.08 : 0.1;
    const filt = board ? 1800 : 2600;
    let idx = lastMel < 0 ? 2 : lastMel;
    for (let i = 0; i < notes; i++) {
      const when = t + i * (2 / notes) + (Math.random() < 0.3 ? 0.25 : 0);
      const step2 = [1, 1, 2, -1, -1, 2, 0][Math.floor(Math.random() * 7)];
      idx = Math.max(0, Math.min(scale.length - 1, idx + step2));
      if (Math.random() < 0.82) musNote(scale[idx], board ? 0.3 : 0.7, type, vol, when, filt);
      if (night && Math.random() < 0.4) musNote(scale[idx] * 2, 0.9, "sine", vol * 0.4, when + 0.35, 3200);
    }
    lastMel = idx;
    barIdx++;
  }
  var ctx, master, sfxGain, musGain, noiseBuf, musicTimer, scene, nextBar, barIdx, SCALE_DAY, SCALE_BOARD, CHORDS_DAY, CHORDS_BOARD, lastMel;
  var init_audio = __esm({
    "src/audio.ts"() {
      "use strict";
      init_core();
      ctx = null;
      noiseBuf = null;
      musicTimer = null;
      scene = "island";
      nextBar = 0;
      barIdx = 0;
      bus.on("settings", () => {
        if (!ctx) return;
        sfxGain.gain.value = state.settings.sfx ? 0.5 : 0;
        musGain.gain.value = state.settings.music ? 0.16 : 0;
      });
      SCALE_DAY = [262, 294, 330, 392, 440, 523, 587, 659];
      SCALE_BOARD = [294, 330, 370, 440, 494, 587, 659, 740];
      CHORDS_DAY = [[131, 165, 196], [110, 131, 165], [175, 220, 262], [196, 247, 294]];
      CHORDS_BOARD = [[147, 185, 220], [165, 208, 247], [131, 165, 196], [175, 220, 262]];
      lastMel = -1;
    }
  });

  // src/art.ts
  var art_exports = {};
  __export(art_exports, {
    SS: () => SS,
    TILE_H: () => TILE_H,
    TILE_W: () => TILE_W,
    animalSprite: () => animalSprite,
    buildingSprite: () => buildingSprite,
    cloudSprite: () => cloudSprite,
    cropSprite: () => cropSprite,
    decorSprite: () => decorSprite,
    grassTile: () => grassTile,
    millBlades: () => millBlades,
    pikaSprite: () => pikaSprite,
    shade: () => shade,
    soilTile: () => soilTile,
    treeSprite: () => treeSprite,
    waveSprite: () => waveSprite
  });
  function shade(hex, amt) {
    const n = parseInt(hex.slice(1), 16);
    let r = n >> 16 & 255, g = n >> 8 & 255, b = n & 255;
    if (amt >= 0) {
      r += (255 - r) * amt;
      g += (255 - g) * amt;
      b += (255 - b) * amt;
    } else {
      r *= 1 + amt;
      g *= 1 + amt;
      b *= 1 + amt;
    }
    return `#${((1 << 24) + (Math.round(r) << 16) + (Math.round(g) << 8) + Math.round(b)).toString(16).slice(1)}`;
  }
  function cached(key, w, h, draw) {
    let c = cache.get(key);
    if (!c) {
      const sw = Math.max(1, Math.ceil(w * SS)), sh = Math.max(1, Math.ceil(h * SS));
      const cv = document.createElement("canvas");
      cv.width = sw;
      cv.height = sh;
      const x2 = cv.getContext("2d");
      x2.scale(SS, SS);
      x2.lineJoin = "round";
      x2.lineCap = "round";
      draw(x2);
      c = cv;
      cache.set(key, c);
    }
    return c;
  }
  function rr(x, px, py, w, h, r) {
    x.beginPath();
    x.moveTo(px + r, py);
    x.arcTo(px + w, py, px + w, py + h, r);
    x.arcTo(px + w, py + h, px, py + h, r);
    x.arcTo(px, py + h, px, py, r);
    x.arcTo(px, py, px + w, py, r);
    x.closePath();
  }
  function ell(x, cx, cy, rx, ry, fill, stroke, lw = 2) {
    x.beginPath();
    x.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    if (fill) {
      x.fillStyle = fill;
      x.fill();
    }
    if (stroke) {
      x.strokeStyle = stroke;
      x.lineWidth = lw;
      x.stroke();
    }
  }
  function shadow(x, cx, cy, rx, ry = rx * 0.4, a = 0.16) {
    x.save();
    x.globalAlpha = a;
    ell(x, cx, cy, rx, ry, "#1e3a12");
    x.restore();
  }
  function outline(x, col, lw = 2.5) {
    x.strokeStyle = col;
    x.lineWidth = lw;
    x.stroke();
  }
  function vgrad(x, py, h, c1, c2) {
    const g = x.createLinearGradient(0, py, 0, py + h);
    g.addColorStop(0, c1);
    g.addColorStop(1, c2);
    return g;
  }
  function star(x, cx, cy, r, fill) {
    x.save();
    x.translate(cx, cy);
    x.beginPath();
    for (let i = 0; i < 4; i++) {
      x.rotate(Math.PI / 2);
      x.moveTo(0, -r);
      x.quadraticCurveTo(r * 0.18, -r * 0.18, r, 0);
      x.quadraticCurveTo(r * 0.18, r * 0.18, 0, r);
    }
    x.closePath();
    x.fillStyle = fill;
    x.fill();
    x.restore();
  }
  function eye(x, cx, cy, r = 2.4, blush = false, dir = 0) {
    x.fillStyle = "#2a2420";
    x.beginPath();
    x.ellipse(cx + dir, cy, r * 0.75, r, 0, 0, Math.PI * 2);
    x.fill();
    x.fillStyle = "#fff";
    x.beginPath();
    x.arc(cx + dir - r * 0.2, cy - r * 0.35, r * 0.32, 0, Math.PI * 2);
    x.fill();
    if (blush) {
      x.save();
      x.globalAlpha = 0.35;
      ell(x, cx - 5, cy + 4.5, 3, 1.8, "#f08060");
      ell(x, cx + 5, cy + 4.5, 3, 1.8, "#f08060");
      x.restore();
    }
  }
  function grassTile(v) {
    return cached(`grass${v}`, TILE_W + 2, TILE_H + 2, (x) => {
      const base = ["#79c858", "#74c253", "#7ecd5d", "#71bd4f"][v % 4];
      x.beginPath();
      x.moveTo(TILE_W / 2 + 1, 1);
      x.lineTo(TILE_W + 1, TILE_H / 2 + 1);
      x.lineTo(TILE_W / 2 + 1, TILE_H + 1);
      x.lineTo(1, TILE_H / 2 + 1);
      x.closePath();
      x.fillStyle = base;
      x.fill();
      x.save();
      x.clip();
      const rnd = (s) => {
        const a = Math.sin(s * 127.1 + v * 311.7) * 43758.5;
        return a - Math.floor(a);
      };
      for (let i = 0; i < 5; i++) {
        const px = 12 + rnd(i) * 104, py = 8 + rnd(i + 9) * 48;
        x.globalAlpha = 0.12 + rnd(i + 5) * 0.1;
        ell(x, px, py, 8 + rnd(i + 3) * 10, 4 + rnd(i + 7) * 5, i % 2 ? "#a8e078" : "#5ba83e");
      }
      x.globalAlpha = 1;
      for (let i = 0; i < 7; i++) {
        const px = 14 + rnd(i + 20) * 100, py = 10 + rnd(i + 31) * 44;
        x.strokeStyle = "rgba(255,255,255,0.14)";
        x.lineWidth = 1.4;
        x.beginPath();
        x.moveTo(px, py);
        x.lineTo(px + 1.5, py - 4);
        x.stroke();
      }
      x.restore();
      x.strokeStyle = "rgba(255,255,255,0.22)";
      x.lineWidth = 2;
      x.beginPath();
      x.moveTo(TILE_W / 2 + 1, 1);
      x.lineTo(1, TILE_H / 2 + 1);
      x.stroke();
      x.strokeStyle = "rgba(30,58,18,0.18)";
      x.beginPath();
      x.moveTo(TILE_W / 2 + 1, TILE_H + 1);
      x.lineTo(TILE_W + 1, TILE_H / 2 + 1);
      x.stroke();
    });
  }
  function soilTile(state2) {
    return cached(`soil${state2}`, TILE_W + 2, TILE_H + 2, (x) => {
      x.beginPath();
      x.moveTo(TILE_W / 2 + 1, 1);
      x.lineTo(TILE_W + 1, TILE_H / 2 + 1);
      x.lineTo(TILE_W / 2 + 1, TILE_H + 1);
      x.lineTo(1, TILE_H / 2 + 1);
      x.closePath();
      x.fillStyle = state2 === 2 ? "#a5714a" : state2 === 1 ? "#96653f" : "#8d5e3a";
      x.fill();
      x.save();
      x.clip();
      x.strokeStyle = "rgba(60,35,18,0.3)";
      x.lineWidth = 2.5;
      for (let i = 0; i < 3; i++) {
        x.beginPath();
        x.moveTo(TILE_W / 2 - 42 + i * 26, TILE_H / 2 - 21 + i * 13);
        x.lineTo(TILE_W / 2 + i * 26 - 8, TILE_H / 2 - 8 + i * 13 + 13);
        x.stroke();
      }
      x.strokeStyle = "rgba(255,220,180,0.15)";
      x.lineWidth = 2;
      for (let i = 0; i < 3; i++) {
        x.beginPath();
        x.moveTo(TILE_W / 2 - 38 + i * 26, TILE_H / 2 - 19 + i * 13);
        x.lineTo(TILE_W / 2 + i * 26 - 4, TILE_H / 2 - 10 + i * 13 + 12);
        x.stroke();
      }
      if (state2 === 2) {
        const g = x.createRadialGradient(TILE_W / 2, TILE_H / 2, 4, TILE_W / 2, TILE_H / 2, 58);
        g.addColorStop(0, "rgba(255,230,130,0.34)");
        g.addColorStop(1, "rgba(255,230,130,0)");
        x.fillStyle = g;
        x.fillRect(0, 0, TILE_W + 2, TILE_H + 2);
      }
      x.restore();
      x.strokeStyle = "rgba(50,28,12,0.35)";
      x.lineWidth = 2;
      x.stroke();
    });
  }
  function cropSprite(cropId, stage2) {
    const def = CROPS.find((c) => c.id === cropId);
    return cached(`crop:${cropId}:${stage2}`, 100, 100, (x) => {
      x.translate(50, 94);
      const { type, fruit, leaf } = def.art;
      const L = leaf, LD = shade(leaf, -0.3), L2 = shade(leaf, 0.22);
      const F = fruit, FD = shade(fruit, -0.28);
      shadow(x, 0, 0, 26, 9);
      if (stage2 === 0) {
        x.strokeStyle = LD;
        x.lineWidth = 3;
        x.beginPath();
        x.moveTo(0, 0);
        x.lineTo(0, -13);
        x.stroke();
        ell(x, -6, -13, 6, 3.4, L, LD, 2);
        x.save();
        x.translate(-6, -13);
        x.rotate(-0.5);
        x.translate(6, 13);
        ell(x, -6, -13, 6, 3.4, L2, LD, 1.6);
        x.restore();
        ell(x, 7, -10, 5.5, 3.2, L2, LD, 2);
        return;
      }
      const grow = [0, 0.55, 0.82, 1][stage2];
      const s = 0.5 + grow * 0.62;
      x.scale(s, s);
      const drawFruit = (fx, fy, r, ripe) => {
        if (!ripe) {
          ell(x, fx, fy, r, r * 0.92, shade(F, 0.18), FD, 2);
          return;
        }
        ell(x, fx, fy, r, r * 0.92, vgrad(x, fy - r, r * 2, shade(F, 0.25), F), FD, 2.2);
        x.save();
        x.globalAlpha = 0.5;
        ell(x, fx - r * 0.32, fy - r * 0.35, r * 0.26, r * 0.18, "#ffffff");
        x.restore();
      };
      const sparkle = () => {
        star(x, 20, -58, 6, "rgba(255,240,150,0.95)");
        star(x, -16, -44, 4, "rgba(255,240,150,0.8)");
      };
      if (type === "tuft") {
        const blades = 6;
        for (let i = 0; i < blades; i++) {
          const a = -Math.PI / 2 + (i - (blades - 1) / 2) * 0.34;
          const len = 44 + i % 2 * 10;
          const tipX = Math.cos(a) * len, tipY = Math.sin(a) * len;
          x.strokeStyle = i % 2 ? LD : L;
          x.lineWidth = 5;
          x.beginPath();
          x.moveTo(0, 0);
          x.quadraticCurveTo(tipX * 0.4, tipY * 0.7, tipX, tipY);
          x.stroke();
          if (stage2 === 3) {
            ell(x, tipX, tipY - 3, 5, 8, vgrad(x, tipY - 11, 16, shade(F, 0.3), F), FD, 1.8);
            ell(x, tipX - 2.5, tipY - 6, 1.6, 2.6, "#fff8e0");
          } else if (stage2 === 2) ell(x, tipX, tipY - 2, 3.4, 5.5, shade(F, 0.15), FD, 1.4);
        }
        if (stage2 === 3) sparkle();
      } else if (type === "stalk") {
        for (const [sx, sway] of [[-12, -0.1], [0, 0], [12, 0.12]]) {
          x.strokeStyle = LD;
          x.lineWidth = 5;
          x.beginPath();
          x.moveTo(sx, 0);
          x.quadraticCurveTo(sx + sway * 40, -38, sx + sway * 60, -62);
          x.stroke();
          ell(x, sx + sway * 26 - 12, -30, 11, 4, L2, LD, 1.8);
          ell(x, sx + sway * 34 + 12, -42, 11, 4, L, LD, 1.8);
          if (stage2 >= 2) {
            const r = stage2 === 3 ? 8 : 5;
            const cy = stage2 === 3 ? -48 : -36;
            rr(x, sx + sway * 40 - r * 0.7, cy - r, r * 1.4, r * 2.4, r * 0.6);
            x.fillStyle = stage2 === 3 ? vgrad(x, cy - r, r * 2.4, shade(F, 0.3), F) : shade(F, 0.15);
            x.fill();
            outline(x, FD, 2);
            if (stage2 === 3) {
              x.strokeStyle = "rgba(255,255,255,0.4)";
              x.lineWidth = 1.4;
              for (let g2 = 0; g2 < 4; g2++) {
                x.beginPath();
                x.moveTo(sx + sway * 40 - r * 0.5, cy - r + 2 + g2 * r * 0.55);
                x.lineTo(sx + sway * 40 + r * 0.5, cy - r + 2 + g2 * r * 0.55);
                x.stroke();
              }
            }
          }
        }
        if (stage2 === 3) sparkle();
      } else if (type === "root") {
        for (let i = 0; i < 7; i++) {
          const a = -Math.PI / 2 + (i - 3) * 0.42;
          x.strokeStyle = i % 2 ? L : L2;
          x.lineWidth = 4.4;
          x.beginPath();
          x.moveTo(0, -2);
          x.quadraticCurveTo(Math.cos(a) * 16, -18, Math.cos(a) * 26, -30 + Math.abs(i - 3) * 3);
          x.stroke();
        }
        if (stage2 >= 2) {
          const r = stage2 === 3 ? def.art.big ? 13 : 10 : 6;
          ell(x, -14, -4, r, r * 0.8, vgrad(x, -4 - r, r * 1.6, shade(F, 0.25), F), FD, 2);
          ell(x, 13, -3, r * 0.9, r * 0.72, vgrad(x, -3 - r, r * 1.6, shade(F, 0.2), F), FD, 2);
        }
        if (stage2 === 3) sparkle();
      } else if (type === "bush" || type === "lowbush") {
        const wide = type === "lowbush" ? 1.25 : 1;
        const hh = type === "lowbush" ? 26 : 38;
        ell(x, 0, -hh, 30 * wide, hh * 0.95, vgrad(x, -hh * 2, hh * 2, shade(L, 0.24), shade(L, -0.08)), LD, 2.6);
        ell(x, -12 * wide, -hh - 8, 14 * wide, 11, shade(L, 0.3), LD, 2);
        if (stage2 >= 2) {
          const r = def.id === "eggplant" || def.id === "pepper" ? 5 : 6.5;
          const pts = type === "lowbush" ? [[-16, -18], [-2, -14], [14, -20], [6, -26]] : [[-14, -30], [0, -24], [13, -33], [-5, -40]];
          for (const [px, py] of pts) drawFruit(px, py, stage2 === 3 ? r : r * 0.65, stage2 === 3);
        }
        if (stage2 === 3) sparkle();
      } else if (type === "vine") {
        x.strokeStyle = LD;
        x.lineWidth = 4;
        x.beginPath();
        x.moveTo(-30, -2);
        x.quadraticCurveTo(0, -20, 30, -4);
        x.stroke();
        x.beginPath();
        x.moveTo(-20, -4);
        x.quadraticCurveTo(4, -30, 24, -16);
        x.stroke();
        for (const [lx, ly] of [[-24, -10], [-8, -18], [10, -22], [22, -10]]) ell(x, lx, ly, 10, 6.5, L2, LD, 1.8);
        if (stage2 >= 2) {
          const r = (def.art.big ? 11 : 7) * (stage2 === 3 ? 1 : 0.6);
          drawFruit(-14, -6, r, stage2 === 3);
          drawFruit(12, -5, r * 0.9, stage2 === 3);
          if (def.id === "grape" && stage2 === 3) {
            drawFruit(-1, -8, r * 0.8, true);
          }
        }
        if (stage2 === 3) sparkle();
      } else if (type === "flower") {
        for (const [sx, hgt] of [[-14, 40], [0, 52], [13, 44]]) {
          x.strokeStyle = LD;
          x.lineWidth = 3.4;
          x.beginPath();
          x.moveTo(sx, 0);
          x.quadraticCurveTo(sx + 4, -hgt * 0.6, sx, -hgt);
          x.stroke();
          const spikeH = stage2 >= 2 ? 16 * (stage2 === 3 ? 1 : 0.7) : 7;
          rr(x, sx - 4, -hgt - spikeH, 8, spikeH + 4, 4);
          x.fillStyle = stage2 === 3 ? vgrad(x, -hgt - spikeH, spikeH + 4, shade(F, 0.3), F) : shade(F, 0.1);
          x.fill();
          outline(x, FD, 1.8);
        }
        ell(x, -20, -6, 9, 5, L2, LD, 1.6);
        ell(x, 20, -7, 9, 5, L, LD, 1.6);
        if (stage2 === 3) sparkle();
      }
    });
  }
  function animalSprite(animalId, frame = 0) {
    const def = ANIMALS.find((a) => a.id === animalId);
    return cached(`ani:${animalId}:${frame}`, 90, 76, (x) => {
      x.translate(45, 70);
      const c1 = def.c1, c2 = def.c2;
      const D1 = shade(c1, -0.28), D2 = shade(c2, -0.25);
      const bob = frame === 1 ? -2.5 : 0;
      shadow(x, 0, 0, 26, 8);
      x.translate(0, bob);
      if (def.art === "bird") {
        const tall = def.id === "ostrich";
        const bodyY = tall ? -40 : -22, bodyR = def.scale ? def.scale * 20 : 20;
        if (!tall) {
          x.strokeStyle = "#e8a13a";
          x.lineWidth = 2.6;
          x.beginPath();
          x.moveTo(-7, -8);
          x.lineTo(-7, 0);
          x.moveTo(8, -8);
          x.lineTo(8, 0);
          x.stroke();
        } else {
          x.strokeStyle = "#c8905a";
          x.lineWidth = 3.4;
          x.beginPath();
          x.moveTo(-6, -20);
          x.lineTo(-7, 0);
          x.moveTo(8, -20);
          x.lineTo(9, 0);
          x.stroke();
        }
        ell(x, 0, bodyY, bodyR * 1.15, bodyR, vgrad(x, bodyY - bodyR, bodyR * 2, shade(c1, 0.18), c1), D1, 2.4);
        x.save();
        x.translate(-bodyR, bodyY - 2);
        x.rotate(-0.5);
        ell(x, -6, 0, 9, 5, c2 === "#e05a3a" ? "#e8b84a" : shade(c1, 0.1), D1, 2);
        x.restore();
        ell(x, 2, bodyY + 2, bodyR * 0.62, bodyR * 0.44, shade(c1, -0.06), D1, 2);
        const headY = bodyY - (tall ? 26 : bodyR * 0.9), headX = tall ? 14 : bodyR * 0.85;
        ell(x, headX, headY, 11, 10.5, c1, D1, 2.2);
        if (def.id === "chicken") {
          x.fillStyle = "#e8a13a";
          x.beginPath();
          x.moveTo(headX + 8, headY - 1);
          x.lineTo(headX + 16, headY + 1);
          x.lineTo(headX + 8, headY + 4);
          x.closePath();
          x.fill();
          x.fillStyle = "#e05a3a";
          ell(x, headX - 1, headY - 11, 3, 4, "#e05a3a");
          ell(x, headX + 2, headY - 12, 2.6, 3.4, "#e05a3a");
          ell(x, headX, headY - 6, 3, 2.4, "#e05a3a");
        } else {
          x.fillStyle = "#e8a83a";
          rr(x, headX + 7, headY - 2, 9, 5, 2.4);
          x.fill();
        }
        eye(x, headX + 2, headY - 2, 2.2, true);
      } else if (def.art === "quad") {
        const sc = def.scale || 1;
        x.scale(sc, sc);
        const fluffy = def.id === "sheep";
        const bodyY = -26;
        x.strokeStyle = D2;
        x.lineWidth = 5;
        x.beginPath();
        x.moveTo(-13, -14);
        x.lineTo(-14, -1);
        x.moveTo(12, -14);
        x.lineTo(13, -1);
        x.stroke();
        x.strokeStyle = shade(c2, 0.1);
        x.lineWidth = 4.6;
        x.beginPath();
        x.moveTo(-8, -15);
        x.lineTo(-9, -1);
        x.moveTo(7, -15);
        x.lineTo(8, -1);
        x.stroke();
        if (fluffy) {
          for (let i = 0; i < 6; i++) ell(x, -18 + i * 7.4, bodyY + i % 2 * 3, 9, 8, c1, D1, 1.8);
          ell(x, 0, bodyY - 4, 17, 11, shade(c1, 0.12), D1, 2);
        } else {
          ell(x, 0, bodyY, 24, 15, vgrad(x, bodyY - 15, 30, shade(c1, 0.16), c1), D1, 2.6);
          if (def.id === "cow" || def.id === "buffalo") {
            ell(x, -8, bodyY - 2, 7, 5.4, c2);
            ell(x, 9, bodyY + 3, 5, 4, c2);
          }
        }
        x.strokeStyle = D2;
        x.lineWidth = 3.4;
        x.beginPath();
        x.moveTo(-23, bodyY - 4);
        x.quadraticCurveTo(-31, bodyY - 2, -29, bodyY + 7);
        x.stroke();
        const headX = 22, headY = bodyY - 12;
        ell(x, headX, headY, 12, 11, vgrad(x, headY - 11, 22, shade(c1, 0.2), c1), D1, 2.4);
        if (fluffy) ell(x, headX - 2, headY - 8, 12, 9, c1, D1, 2);
        if (def.id === "goat" || def.id === "buffalo" || def.id === "cow") {
          x.strokeStyle = "#d8c8a8";
          x.lineWidth = 3.4;
          x.beginPath();
          x.moveTo(headX - 4, headY - 9);
          x.quadraticCurveTo(headX - 10, headY - 16, headX - 14, headY - 12);
          x.stroke();
          if (def.id !== "goat") {
            x.beginPath();
            x.moveTo(headX + 2, headY - 10);
            x.quadraticCurveTo(headX + 9, headY - 17, headX + 13, headY - 12);
            x.stroke();
          }
        } else {
          ell(x, headX - 8, headY - 8, 5, 3.4, c2, D2, 1.6);
          ell(x, headX + 6, headY - 9, 5, 3.4, c2, D2, 1.6);
        }
        eye(x, headX + 3, headY - 1, 2.2, def.id === "llama" || def.id === "alpaca");
        if (def.id === "pig") ell(x, headX + 10, headY + 3, 3, 2.2, "#e88aa0");
      } else if (def.art === "small") {
        const bodyY = -18;
        if (def.id === "squirrel") ell(x, -17, bodyY - 10, 7, 13, shade(c2, 0.2), D2, 2);
        ell(x, 0, bodyY, 16, 13, vgrad(x, bodyY - 13, 26, shade(c1, 0.16), c1), D1, 2.4);
        const headY = bodyY - 15;
        ell(x, 2, headY, 12, 11, c1, D1, 2.2);
        if (def.id === "rabbit") {
          ell(x, -3, headY - 13, 3.4, 9, c1, D1, 1.8);
          ell(x, 7, headY - 13, 3.4, 9, c1, D1, 1.8);
          ell(x, -3, headY - 12, 1.7, 6, "#f0b8c0");
          ell(x, 7, headY - 12, 1.7, 6, "#f0b8c0");
        } else {
          ell(x, -2, headY - 11, 4.4, 6, c1, D1, 1.6);
          ell(x, 8, headY - 10, 4.4, 6, c1, D1, 1.6);
        }
        eye(x, 5, headY - 1, 2.2, true);
      } else {
        const bodyY = -14;
        if (def.id === "bee") {
          x.save();
          x.globalAlpha = 0.65;
          ell(x, -3, bodyY - 12, 10, 6, "#d8ecff", "#a8c8e8", 1.4);
          ell(x, 7, bodyY - 11, 9, 5, "#d8ecff", "#a8c8e8", 1.4);
          x.restore();
          ell(x, 0, bodyY, 13, 10, vgrad(x, bodyY - 10, 20, shade(c1, 0.2), c1), D2, 2.2);
          x.strokeStyle = D2;
          x.lineWidth = 3;
          for (const bx of [-6, 0, 6]) {
            x.beginPath();
            x.moveTo(bx, bodyY - 8);
            x.quadraticCurveTo(bx + 1, bodyY, bx, bodyY + 7);
            x.stroke();
          }
          eye(x, 9, bodyY - 3, 2, false);
        } else {
          for (let i = 0; i < 4; i++) ell(x, -12 + i * 8, bodyY - i * 1.5, 6.4, 6, i % 2 ? c1 : shade(c1, 0.12), D2, 1.8);
          ell(x, 12, bodyY - 5, 7, 6.4, shade(c1, 0.2), D2, 2);
          eye(x, 14, bodyY - 6, 1.8, false);
          x.strokeStyle = D2;
          x.lineWidth = 1.4;
          x.beginPath();
          x.moveTo(15, bodyY - 10);
          x.lineTo(18, bodyY - 16);
          x.stroke();
        }
      }
    });
  }
  function gableRoof(x, cx, top, w, h, c, dark) {
    x.beginPath();
    x.moveTo(cx - w / 2 - 6, top + h);
    x.lineTo(cx - w * 0.3, top);
    x.lineTo(cx + w * 0.3, top);
    x.lineTo(cx + w / 2 + 6, top + h);
    x.closePath();
    x.fillStyle = vgrad(x, top, h, shade(c, 0.18), c);
    x.fill();
    outline(x, dark, 2.6);
    x.fillStyle = shade(c, -0.35);
    x.fillRect(cx - w / 2 - 7, top + h - 4, w + 14, 5);
  }
  function window2(x, cx, cy, w, h, glow = false) {
    rr(x, cx - w / 2, cy - h / 2, w, h, 3);
    x.fillStyle = glow ? "#ffe9a8" : "#bfe0ec";
    x.fill();
    x.strokeStyle = "#6b4a32";
    x.lineWidth = 2.4;
    x.stroke();
    x.beginPath();
    x.moveTo(cx, cy - h / 2);
    x.lineTo(cx, cy + h / 2);
    x.moveTo(cx - w / 2, cy);
    x.lineTo(cx + w / 2, cy);
    x.stroke();
  }
  function buildingSprite(kind, machineId) {
    if (kind === "barn") return cached("bldg:barn", 210, 200, (x) => {
      x.translate(105, 192);
      shadow(x, 0, 0, 82, 26);
      rr(x, -78, -108, 156, 108, 8);
      x.fillStyle = vgrad(x, -108, 108, "#e06a50", "#c8503a");
      x.fill();
      outline(x, "#8a3226", 3);
      x.beginPath();
      x.moveTo(-92, -100);
      x.lineTo(-58, -152);
      x.lineTo(58, -152);
      x.lineTo(92, -100);
      x.closePath();
      x.fillStyle = vgrad(x, -152, 54, "#7a5548", "#5f4036");
      x.fill();
      outline(x, "#463028", 3);
      x.fillStyle = "#8a6a58";
      x.fillRect(-96, -104, 192, 7);
      rr(x, -34, -72, 68, 72, 6);
      x.fillStyle = "#a8442f";
      x.fill();
      x.strokeStyle = "#f2e8d8";
      x.lineWidth = 3.4;
      x.stroke();
      x.beginPath();
      x.moveTo(-32, -70);
      x.lineTo(32, -4);
      x.moveTo(32, -70);
      x.lineTo(-32, -4);
      x.stroke();
      rr(x, -18, -136, 36, 34, 5);
      x.fillStyle = "#5f4036";
      x.fill();
      x.strokeStyle = "#f2e8d8";
      x.lineWidth = 2.6;
      x.stroke();
      star(x, 0, -120, 7, "#f2e8d8");
      window2(x, -56, -80, 20, 22);
      window2(x, 56, -80, 20, 22);
      x.strokeStyle = "#463028";
      x.lineWidth = 3;
      x.beginPath();
      x.moveTo(0, -152);
      x.lineTo(0, -176);
      x.stroke();
      x.fillStyle = "#e8a83a";
      x.beginPath();
      x.moveTo(0, -176);
      x.lineTo(20, -170);
      x.lineTo(0, -164);
      x.closePath();
      x.fill();
    });
    if (kind === "house") return cached("bldg:house", 210, 200, (x) => {
      x.translate(105, 192);
      shadow(x, 0, 0, 80, 25);
      rr(x, -72, -96, 144, 96, 8);
      x.fillStyle = vgrad(x, -96, 96, "#fdf3e0", "#f0dfc0");
      x.fill();
      outline(x, "#a88a5a", 3);
      gableRoof(x, 0, -152, 170, 58, "#d87a4a", "#9a4f2c");
      rr(x, 36, -176, 18, 38, 3);
      x.fillStyle = "#b06048";
      x.fill();
      outline(x, "#7a4030", 2.4);
      rr(x, 33, -180, 24, 8, 3);
      x.fillStyle = "#8a4a34";
      x.fill();
      rr(x, -16, -46, 32, 46, 14);
      x.fillStyle = "#6a9ac8";
      x.fill();
      outline(x, "#3f6a92", 2.6);
      ell(x, 8, -24, 2.4, 2.4, "#f0d848");
      window2(x, -44, -60, 24, 24, true);
      window2(x, 44, -60, 24, 24);
      for (const [fx, col] of [[-58, "#f088a8"], [58, "#f0c848"], [-40, "#f088a8"], [40, "#e88a5a"]]) ell(x, fx, -6, 4, 4, col, shade(col, -0.3), 1.4);
      x.strokeStyle = "#5a9a3e";
      x.lineWidth = 2;
      for (const fx of [-58, 58, -40, 40]) {
        x.beginPath();
        x.moveTo(fx, -3);
        x.lineTo(fx, -14);
        x.stroke();
      }
    });
    if (kind === "fusion") return cached("bldg:fusion", 210, 210, (x) => {
      x.translate(105, 200);
      shadow(x, 0, 0, 80, 25);
      rr(x, -74, -70, 148, 70, 10);
      x.fillStyle = vgrad(x, -70, 70, "#8a6a4a", "#6e523a");
      x.fill();
      outline(x, "#4e3a28", 3);
      x.strokeStyle = "rgba(255,255,255,0.14)";
      x.lineWidth = 2;
      for (let i = 1; i < 5; i++) {
        x.beginPath();
        x.moveTo(-74, -70 + i * 14);
        x.lineTo(74, -70 + i * 14);
        x.stroke();
      }
      x.beginPath();
      x.moveTo(-86, -68);
      x.quadraticCurveTo(-52, -150, 0, -158);
      x.quadraticCurveTo(52, -150, 86, -68);
      x.closePath();
      x.fillStyle = vgrad(x, -158, 92, "#3ec8b4", "#2a9a94");
      x.fill();
      outline(x, "#1d6e6a", 3);
      x.strokeStyle = "#f0c848";
      x.lineWidth = 4;
      x.beginPath();
      x.moveTo(-86, -68);
      x.quadraticCurveTo(0, -96, 86, -68);
      x.stroke();
      x.save();
      ell(x, 0, -158, 13, 15, vgrad(x, -173, 30, "#bff2ea", "#5adcd0"), "#1d6e6a", 2.4);
      x.globalAlpha = 0.8;
      star(x, -4, -162, 5, "#ffffff");
      x.restore();
      star(x, -40, -100, 6, "rgba(255,255,255,0.75)");
      star(x, 42, -112, 5, "rgba(240,200,72,0.85)");
      star(x, 0, -128, 4, "rgba(255,255,255,0.6)");
      rr(x, -30, -52, 60, 52, 8);
      x.fillStyle = "#1d6e6a";
      x.fill();
      rr(x, -22, -46, 44, 44, 6);
      const g = x.createRadialGradient(0, -24, 2, 0, -24, 30);
      g.addColorStop(0, "rgba(140,255,230,0.95)");
      g.addColorStop(1, "rgba(60,200,180,0.1)");
      x.fillStyle = g;
      x.fill();
      ell(x, 0, -24, 8, 8, "#eafff8");
    });
    if (kind === "dock") return cached("bldg:dock", 220, 120, (x) => {
      x.translate(110, 112);
      shadow(x, 0, 2, 92, 14, 0.12);
      for (const px of [-84, -28, 30, 84]) {
        rr(x, px - 5, -30, 10, 32, 3);
        x.fillStyle = "#7a5a3a";
        x.fill();
        outline(x, "#54402c", 2);
      }
      rr(x, -96, -42, 192, 18, 5);
      x.fillStyle = vgrad(x, -42, 18, "#b08a58", "#8a6a42");
      x.fill();
      outline(x, "#5f4a2e", 2.6);
      x.strokeStyle = "rgba(60,44,26,0.4)";
      x.lineWidth = 2;
      for (let i = 1; i < 8; i++) {
        x.beginPath();
        x.moveTo(-96 + i * 24, -42);
        x.lineTo(-96 + i * 24, -24);
        x.stroke();
      }
      rr(x, -70, -66, 22, 26, 4);
      x.fillStyle = "#88a8b8";
      x.fill();
      outline(x, "#5a7484", 2.2);
      x.strokeStyle = "#7a5a3a";
      x.lineWidth = 3;
      x.beginPath();
      x.moveTo(56, -42);
      x.quadraticCurveTo(66, -86, 92, -74);
      x.stroke();
      x.strokeStyle = "#d8d8d8";
      x.lineWidth = 1.4;
      x.beginPath();
      x.moveTo(92, -74);
      x.lineTo(92, -52);
      x.stroke();
      ell(x, 92, -49, 4, 4, "#e05a4a", "#a83a2e", 1.6);
      x.strokeStyle = "#5f4a2e";
      x.lineWidth = 3.4;
      x.beginPath();
      x.moveTo(-40, -42);
      x.lineTo(-40, -84);
      x.stroke();
      ell(x, -40, -90, 7, 8, "#ffd868", "#b08a30", 2.2);
      star(x, -40, -90, 10, "rgba(255,220,120,0.35)");
    });
    if (kind === "machine") {
      const def = MACHINES.find((m) => m.id === machineId);
      return cached(`bldg:machine:${machineId}`, 130, 150, (x) => {
        x.translate(65, 142);
        drawMachine(x, def.id, def.c1, def.c2);
      });
    }
    if (kind === "ghost") return cached("bldg:ghost", 130, 90, (x) => {
      x.translate(65, 84);
      x.setLineDash([8, 6]);
      x.beginPath();
      x.moveTo(0, -60);
      x.lineTo(52, -32);
      x.lineTo(0, -4);
      x.lineTo(-52, -32);
      x.closePath();
      x.strokeStyle = "rgba(255,255,255,0.85)";
      x.lineWidth = 3.4;
      x.stroke();
      x.setLineDash([]);
      x.fillStyle = "rgba(255,255,255,0.16)";
      x.fill();
      rr(x, -4, -44, 8, 26, 3);
      x.fillStyle = "#a8804a";
      x.fill();
      rr(x, -13, -52, 26, 12, 4);
      x.fillStyle = "#8898a8";
      x.fill();
      outline(x, "#5a6a7a", 2);
    });
    if (kind === "pen") return cached("bldg:pen", 130, 100, (x) => {
      x.translate(65, 92);
      x.globalAlpha = 0.5;
      x.beginPath();
      x.moveTo(0, -58);
      x.lineTo(54, -30);
      x.lineTo(0, -2);
      x.lineTo(-54, -30);
      x.closePath();
      x.fillStyle = "#d8c8a8";
      x.fill();
      x.globalAlpha = 1;
      x.strokeStyle = "#8a6a46";
      x.lineWidth = 3.4;
      const posts = [[-54, -30], [-27, -44], [27, -44], [54, -30], [0, -16]];
      for (const [px, py] of posts) {
        x.beginPath();
        x.moveTo(px, py + 4);
        x.lineTo(px, py - 14);
        x.stroke();
      }
      x.strokeStyle = "#a8875f";
      x.lineWidth = 3;
      x.beginPath();
      x.moveTo(-54, -40);
      x.lineTo(0, -12);
      x.lineTo(54, -40);
      x.stroke();
      x.beginPath();
      x.moveTo(-54, -34);
      x.lineTo(0, -6);
      x.lineTo(54, -34);
      x.stroke();
    });
    return cached("bldg:blank", 4, 4, () => {
    });
  }
  function drawMachine(x, id, c1, c2) {
    const D1 = shade(c1, -0.3), D2 = shade(c2, -0.3);
    shadow(x, 0, 0, 46, 13);
    const base = (w, h, wallTop = shade(c1, 0.15)) => {
      rr(x, -w / 2, -h, w, h, 7);
      x.fillStyle = vgrad(x, -h, h, wallTop, c1);
      x.fill();
      outline(x, D1, 2.8);
    };
    const roof = (w, top) => {
      x.beginPath();
      x.moveTo(-w / 2 - 6, top + 26);
      x.lineTo(-w * 0.28, top);
      x.lineTo(w * 0.28, top);
      x.lineTo(w / 2 + 6, top + 26);
      x.closePath();
      x.fillStyle = vgrad(x, top, 26, shade(c2, 0.2), c2);
      x.fill();
      outline(x, D2, 2.6);
    };
    switch (id) {
      case "bakery":
        base(84, 62);
        roof(92, -62);
        rr(x, 20, -100, 14, 30, 3);
        x.fillStyle = "#b8b0a8";
        x.fill();
        outline(x, "#87807a", 2);
        rr(x, -20, -40, 40, 40, 6);
        x.fillStyle = "#3a2a20";
        x.fill();
        x.save();
        x.globalAlpha = 0.9;
        ell(x, 0, -22, 12, 8, "#e8a850", "#a86a2e", 2);
        x.strokeStyle = "#a86a2e";
        x.lineWidth = 2;
        for (let i = -1; i <= 1; i++) {
          x.beginPath();
          x.moveTo(i * 7, -28);
          x.quadraticCurveTo(i * 7 + 2, -22, i * 7, -17);
          x.stroke();
        }
        x.restore();
        break;
      case "mill": {
        x.beginPath();
        x.moveTo(-34, 0);
        x.lineTo(-24, -86);
        x.lineTo(24, -86);
        x.lineTo(34, 0);
        x.closePath();
        x.fillStyle = vgrad(x, -86, 86, "#f0e4cc", "#dcc9a4");
        x.fill();
        outline(x, "#a8946e", 2.8);
        roof(52, -86);
        window2(x, 0, -50, 16, 18);
        break;
      }
      case "dairy":
        base(80, 56);
        roof(88, -56);
        rr(x, 40, -34, 20, 34, 6);
        x.fillStyle = "#e8eef2";
        x.fill();
        outline(x, "#9aa8b2", 2.2);
        ell(x, 50, -34, 10, 4, "#c8d4dc", "#9aa8b2", 2);
        ell(x, 0, -30, 10, 10, "#fff", "#c8d4dc", 2);
        break;
      case "feedmill": {
        rr(x, -26, -84, 52, 84, 12);
        x.fillStyle = vgrad(x, -84, 84, shade(c1, 0.2), c1);
        x.fill();
        outline(x, D1, 2.8);
        x.beginPath();
        x.moveTo(-30, -84);
        x.quadraticCurveTo(0, -116, 30, -84);
        x.closePath();
        x.fillStyle = c2;
        x.fill();
        outline(x, D2, 2.6);
        x.strokeStyle = "rgba(255,255,255,0.3)";
        x.lineWidth = 2;
        for (let i = 1; i < 4; i++) {
          x.beginPath();
          x.moveTo(-26, -i * 20);
          x.lineTo(26, -i * 20);
          x.stroke();
        }
        rr(x, 30, -28, 22, 28, 6);
        x.fillStyle = "#d8b068";
        x.fill();
        outline(x, "#a8824a", 2.2);
        break;
      }
      case "oilpress":
        base(74, 48, shade(c1, 0.1));
        roof(82, -48);
        rr(x, -52, -36, 22, 36, 6);
        x.fillStyle = "#a87a48";
        x.fill();
        outline(x, "#7a5634", 2.2);
        ell(x, -41, -36, 11, 4.4, "#c89a5e", "#7a5634", 2);
        x.strokeStyle = "#6a4a2e";
        x.lineWidth = 5;
        x.beginPath();
        x.moveTo(8, -48);
        x.lineTo(8, -78);
        x.lineTo(34, -70);
        x.stroke();
        break;
      case "jam":
        base(78, 52);
        roof(86, -52);
        ell(x, 0, -14, 22, 14, "#c85a4a", "#8a3a2e", 2.6);
        ell(x, 0, -18, 17, 8, "#e86a5a");
        x.strokeStyle = "#8a3a2e";
        x.lineWidth = 4;
        x.beginPath();
        x.arc(0, -18, 22, Math.PI * 1.15, Math.PI * 1.85);
        x.stroke();
        break;
      case "syrup":
        base(78, 52);
        roof(86, -52);
        for (const [bx, col] of [[-16, "#b878e8"], [8, "#e878b8"], [28, "#e8a838"]]) {
          rr(x, bx, -34, 12, 34, 4);
          x.fillStyle = col;
          x.fill();
          outline(x, shade(col, -0.3), 1.8);
          rr(x, bx + 3, -42, 6, 10, 2);
          x.fillStyle = shade(col, -0.15);
          x.fill();
        }
        break;
      case "loom":
        base(78, 52);
        roof(86, -52);
        for (const [bx, col] of [[-18, "#68b8d8"], [6, "#e8a8b8"]]) {
          x.beginPath();
          x.moveTo(bx, -48);
          x.lineTo(bx + 16, -48);
          x.lineTo(bx + 14, -8);
          x.lineTo(bx + 2, -12);
          x.closePath();
          x.fillStyle = col;
          x.fill();
          outline(x, shade(col, -0.3), 2);
        }
        break;
      case "sawmill":
        base(78, 46, "#c8a068");
        roof(86, -46);
        for (let i = 0; i < 3; i++) ell(x, -30 + i * 3, -8 - i * 11, 24 - i * 2, 9, i % 2 ? "#a87848" : "#c89460", "#7a5634", 2.2);
        ell(x, 30, -26, 15, 15, "#b8c2ca", "#7a848c", 2.6);
        x.strokeStyle = "#7a848c";
        x.lineWidth = 2;
        for (let i = 0; i < 6; i++) {
          const a = i * Math.PI / 3;
          x.beginPath();
          x.moveTo(30 + Math.cos(a) * 5, -26 + Math.sin(a) * 5);
          x.lineTo(30 + Math.cos(a) * 13, -26 + Math.sin(a) * 13);
          x.stroke();
        }
        break;
      case "forge":
        base(74, 50, shade(c1, -0.05));
        roof(82, -50);
        rr(x, -14, -40, 28, 12, 3);
        x.fillStyle = "#5a636b";
        x.fill();
        outline(x, "#383e44", 2);
        rr(x, -5, -28, 10, 16, 2);
        x.fillStyle = "#5a636b";
        x.fill();
        rr(x, -20, -34, 14, 30, 3);
        const gg = x.createRadialGradient(24, -28, 2, 24, -28, 20);
        gg.addColorStop(0, "rgba(255,180,60,0.95)");
        gg.addColorStop(1, "rgba(255,100,20,0)");
        x.fillStyle = gg;
        x.fillRect(4, -48, 40, 40);
        ell(x, 24, -28, 7, 6, "#ffb040");
        break;
      case "cannery":
        base(80, 56);
        roof(88, -56);
        rr(x, -12, -36, 24, 30, 5);
        x.fillStyle = "#c8d4dc";
        x.fill();
        outline(x, "#8a98a4", 2.2);
        ell(x, 0, -36, 12, 4.4, "#e8f0f4", "#8a98a4", 2);
        window2(x, 0, -50, 30, 14);
        break;
      case "glass":
        base(74, 50);
        roof(82, -50);
        rr(x, -16, -34, 32, 34, 6);
        x.fillStyle = "#3a2a20";
        x.fill();
        const gf = x.createRadialGradient(0, -18, 2, 0, -18, 16);
        gf.addColorStop(0, "rgba(255,160,60,0.95)");
        gf.addColorStop(1, "rgba(255,90,20,0)");
        x.fillStyle = gf;
        x.fillRect(-16, -34, 32, 32);
        for (const [bx, by] of [[-30, -44], [32, -48]]) ell(x, bx, by, 7, 7, "rgba(170,225,240,0.9)", "#7ab0c8", 1.8);
        break;
    }
  }
  function millBlades() {
    return cached("millblades", 120, 120, (x) => {
      x.translate(60, 60);
      x.strokeStyle = "#8a6a46";
      x.lineWidth = 4.4;
      for (let i = 0; i < 4; i++) {
        x.save();
        x.rotate(i * Math.PI / 2);
        x.beginPath();
        x.moveTo(0, 0);
        x.lineTo(0, -52);
        x.stroke();
        x.beginPath();
        x.moveTo(0, -52);
        x.lineTo(-13, -50);
        x.lineTo(-13, -14);
        x.lineTo(0, -12);
        x.closePath();
        x.fillStyle = vgrad(x, -52, 40, "#fdf6e4", "#ecdfc0");
        x.fill();
        outline(x, "#b0a080", 2);
        x.strokeStyle = "#8a6a46";
        x.lineWidth = 4.4;
        x.restore();
      }
      ell(x, 0, 0, 6, 6, "#6a4e34");
    });
  }
  function decorSprite(decorId) {
    const def = DECOR.find((d) => d.id === decorId);
    const gold = def?.rarity === "legendary";
    return cached(`decor:${decorId}`, 110, 120, (x) => {
      x.translate(55, 112);
      const wood = "#a8804a", woodD = "#7a5a34";
      const stone = "#b8b4a8", stoneD = "#8a867a";
      const S = () => shadow(x, 0, 0, 30, 10);
      switch (decorId) {
        case "haybale":
          S();
          rr(x, -28, -44, 56, 44, 10);
          x.fillStyle = vgrad(x, -44, 44, "#e8c878", "#d0a850");
          x.fill();
          outline(x, "#a8823a", 2.8);
          x.strokeStyle = "#c8a040";
          x.lineWidth = 2.2;
          for (let i = 1; i < 4; i++) {
            x.beginPath();
            x.moveTo(-28, -44 + i * 11);
            x.lineTo(28, -44 + i * 11);
            x.stroke();
          }
          x.strokeStyle = woodD;
          x.lineWidth = 3;
          x.beginPath();
          x.moveTo(-30, -36);
          x.lineTo(30, -36);
          x.moveTo(-30, -18);
          x.lineTo(30, -18);
          x.stroke();
          break;
        case "fence":
          S();
          for (const px of [-24, 0, 24]) {
            rr(x, px - 4, -40, 8, 40, 3);
            x.fillStyle = wood;
            x.fill();
            outline(x, woodD, 2);
          }
          x.strokeStyle = wood;
          x.lineWidth = 5;
          x.beginPath();
          x.moveTo(-32, -30);
          x.lineTo(32, -30);
          x.moveTo(-32, -14);
          x.lineTo(32, -14);
          x.stroke();
          break;
        case "barrel":
          S();
          x.beginPath();
          x.moveTo(-20, 0);
          x.quadraticCurveTo(-24, -22, -20, -42);
          x.lineTo(20, -42);
          x.quadraticCurveTo(24, -22, 20, 0);
          x.closePath();
          x.fillStyle = vgrad(x, -42, 42, "#b08850", "#8a683c");
          x.fill();
          outline(x, woodD, 2.6);
          x.strokeStyle = "#6a8a94";
          x.lineWidth = 3.4;
          x.beginPath();
          x.moveTo(-22, -32);
          x.lineTo(22, -32);
          x.moveTo(-22, -12);
          x.lineTo(22, -12);
          x.stroke();
          break;
        case "birdhouse":
          S();
          rr(x, -4, -52, 8, 52, 3);
          x.fillStyle = wood;
          x.fill();
          outline(x, woodD, 2);
          rr(x, -16, -84, 32, 34, 6);
          x.fillStyle = "#d8b078";
          x.fill();
          outline(x, woodD, 2.4);
          x.beginPath();
          x.moveTo(-22, -84);
          x.lineTo(0, -102);
          x.lineTo(22, -84);
          x.closePath();
          x.fillStyle = "#c86a4a";
          x.fill();
          outline(x, "#8a4630", 2.2);
          ell(x, 0, -68, 6, 7, "#4a3626");
          break;
        case "stone_wall":
          S();
          for (let i = 0; i < 5; i++) {
            const px = -32 + i * 16, py = i % 2 ? -22 : -30;
            rr(x, px, py, 18, 24, 7);
            x.fillStyle = i % 2 ? stone : shade(stone, 0.1);
            x.fill();
            outline(x, stoneD, 2);
          }
          break;
        case "sign":
          S();
          rr(x, -4, -44, 8, 44, 3);
          x.fillStyle = wood;
          x.fill();
          outline(x, woodD, 2);
          rr(x, -26, -66, 52, 26, 6);
          x.fillStyle = "#d8b078";
          x.fill();
          outline(x, woodD, 2.4);
          x.strokeStyle = "#8a6840";
          x.lineWidth = 2.4;
          x.beginPath();
          x.moveTo(-16, -58);
          x.lineTo(16, -58);
          x.moveTo(-16, -50);
          x.lineTo(8, -50);
          x.stroke();
          break;
        case "mailbox":
          S();
          rr(x, -4, -34, 8, 34, 3);
          x.fillStyle = wood;
          x.fill();
          outline(x, woodD, 2);
          rr(x, -14, -56, 28, 24, 9);
          x.fillStyle = "#6a9ac8";
          x.fill();
          outline(x, "#3f6a92", 2.2);
          x.strokeStyle = "#6a9ac8";
          x.lineWidth = 3;
          x.beginPath();
          x.moveTo(14, -50);
          x.lineTo(28, -56);
          x.stroke();
          ell(x, 28, -56, 4, 4, "#e05a4a", "#a83a2e", 1.6);
          break;
        case "lamp":
          S();
          rr(x, -4, -74, 8, 74, 3);
          x.fillStyle = "#5a4a3a";
          x.fill();
          outline(x, "#3a2e22", 2);
          ell(x, 0, -82, 10, 12, "#ffd868", "#b08a30", 2.4);
          star(x, 0, -82, 16, "rgba(255,220,120,0.3)");
          break;
        case "flowerbed":
          S();
          x.beginPath();
          x.moveTo(0, -44);
          x.lineTo(36, -24);
          x.lineTo(0, -4);
          x.lineTo(-36, -24);
          x.closePath();
          x.fillStyle = "#8d5e3a";
          x.fill();
          outline(x, "#5f4026", 2.4);
          for (const [fx, fy, col] of [[-14, -28, "#f088a8"], [0, -20, "#f0c848"], [12, -30, "#88b8f0"], [-4, -34, "#e87858"], [16, -22, "#c888e8"]]) {
            ell(x, fx, fy, 5, 5, col, shade(col, -0.3), 1.6);
            x.strokeStyle = "#5a9a3e";
            x.lineWidth = 2;
            x.beginPath();
            x.moveTo(fx, fy + 4);
            x.lineTo(fx, fy + 9);
            x.stroke();
          }
          break;
        case "bench":
          S();
          rr(x, -30, -26, 60, 8, 3);
          x.fillStyle = wood;
          x.fill();
          outline(x, woodD, 2.2);
          rr(x, -30, -46, 60, 8, 3);
          x.fillStyle = wood;
          x.fill();
          outline(x, woodD, 2.2);
          rr(x, -26, -18, 8, 18, 2);
          x.fillStyle = woodD;
          x.fill();
          rr(x, 18, -18, 8, 18, 2);
          x.fillStyle = woodD;
          x.fill();
          break;
        case "well":
          S();
          for (let i = 0; i < 6; i++) {
            const a = i * Math.PI / 3;
            ell(x, Math.cos(a) * 20, -14 + Math.sin(a) * 8, 9, 7, i % 2 ? stone : shade(stone, 0.12), stoneD, 1.8);
          }
          ell(x, 0, -14, 16, 6.4, "#3a5a8a");
          rr(x, -22, -58, 6, 40, 2);
          x.fillStyle = wood;
          x.fill();
          rr(x, 16, -58, 6, 40, 2);
          x.fillStyle = wood;
          x.fill();
          x.beginPath();
          x.moveTo(-30, -56);
          x.lineTo(0, -74);
          x.lineTo(30, -56);
          x.closePath();
          x.fillStyle = "#c86a4a";
          x.fill();
          outline(x, "#8a4630", 2.2);
          x.strokeStyle = "#5a4a3a";
          x.lineWidth = 2;
          x.beginPath();
          x.moveTo(0, -54);
          x.lineTo(0, -30);
          x.stroke();
          rr(x, -7, -30, 14, 12, 3);
          x.fillStyle = "#a8804a";
          x.fill();
          outline(x, woodD, 1.8);
          break;
        case "scarecrow":
        case "golden_scarecrow": {
          S();
          const main = decorId === "scarecrow" ? "#c8a05a" : "#f0c848";
          const md = shade(main, -0.32);
          rr(x, -4, -54, 8, 54, 3);
          x.fillStyle = wood;
          x.fill();
          outline(x, woodD, 2);
          x.beginPath();
          x.moveTo(-34, -46);
          x.lineTo(34, -46);
          x.lineTo(0, -66);
          x.closePath();
          x.fillStyle = main;
          x.fill();
          outline(x, md, 2.4);
          ell(x, 0, -74, 13, 12, "#f0d8a8", "#c8a870", 2.4);
          x.strokeStyle = md;
          x.lineWidth = 2.2;
          x.beginPath();
          x.moveTo(-7, -78);
          x.lineTo(-3, -74);
          x.moveTo(7, -78);
          x.lineTo(3, -74);
          x.stroke();
          x.fillStyle = "#4a3626";
          ell(x, -4.4, -76, 1.8, 2.2);
          ell(x, 4.4, -76, 1.8, 2.2);
          x.beginPath();
          x.moveTo(0, -72);
          x.quadraticCurveTo(3, -70, 0, -68);
          x.strokeStyle = "#4a3626";
          x.lineWidth = 1.6;
          x.stroke();
          ell(x, 0, -84, 16, 5, "#d8a850", "#a8823a", 2);
          x.beginPath();
          x.moveTo(-9, -84);
          x.quadraticCurveTo(0, -102, 9, -84);
          x.closePath();
          x.fillStyle = "#d8a850";
          x.fill();
          outline(x, "#a8823a", 2);
          break;
        }
        case "wheelbarrow":
          S();
          x.beginPath();
          x.moveTo(-28, -26);
          x.quadraticCurveTo(0, -40, 28, -26);
          x.lineTo(20, -12);
          x.quadraticCurveTo(0, -22, -20, -12);
          x.closePath();
          x.fillStyle = "#c86a4a";
          x.fill();
          outline(x, "#8a4630", 2.4);
          ell(x, 18, -6, 7, 7, "#5a5a5a", "#3a3a3a", 2);
          x.strokeStyle = woodD;
          x.lineWidth = 4;
          x.beginPath();
          x.moveTo(-16, -12);
          x.lineTo(-30, -2);
          x.stroke();
          ell(x, -28, -2, 5, 5, "#4a4a4a");
          break;
        case "picnic_table":
          S();
          rr(x, -34, -30, 68, 9, 3);
          x.fillStyle = wood;
          x.fill();
          outline(x, woodD, 2.2);
          rr(x, -34, -52, 68, 8, 3);
          x.fillStyle = wood;
          x.fill();
          outline(x, woodD, 2.2);
          rr(x, -28, -22, 8, 22, 2);
          x.fillStyle = woodD;
          x.fill();
          rr(x, 20, -22, 8, 22, 2);
          x.fillStyle = woodD;
          x.fill();
          break;
        case "windmill":
          S();
          x.beginPath();
          x.moveTo(-20, 0);
          x.lineTo(-14, -58);
          x.lineTo(14, -58);
          x.lineTo(20, 0);
          x.closePath();
          x.fillStyle = "#f0e4cc";
          x.fill();
          outline(x, "#a8946e", 2.4);
          x.beginPath();
          x.moveTo(-24, -58);
          x.quadraticCurveTo(0, -84, 24, -58);
          x.closePath();
          x.fillStyle = "#c86a4a";
          x.fill();
          outline(x, "#8a4630", 2.2);
          x.save();
          x.translate(0, -70);
          x.rotate(0.6);
          for (let i = 0; i < 4; i++) {
            x.save();
            x.rotate(i * Math.PI / 2);
            x.beginPath();
            x.moveTo(0, 0);
            x.lineTo(0, -26);
            x.lineTo(-7, -24);
            x.lineTo(-7, -6);
            x.closePath();
            x.fillStyle = "#fdf6e4";
            x.fill();
            outline(x, "#b0a080", 1.8);
            x.restore();
          }
          x.restore();
          break;
        case "flagpole":
          S();
          rr(x, -3, -96, 6, 96, 3);
          x.fillStyle = "#b8bcc2";
          x.fill();
          outline(x, "#82868c", 2);
          ell(x, 0, -98, 5, 5, "#f0c848", "#b08a30", 1.8);
          x.beginPath();
          x.moveTo(3, -92);
          x.lineTo(34, -82);
          x.lineTo(3, -72);
          x.closePath();
          x.fillStyle = "#e05a4a";
          x.fill();
          outline(x, "#a83a2e", 2);
          star(x, 14, -82, 5, "#fff0d0");
          break;
        case "sunflower_tower":
          S();
          for (let i = 0; i < 3; i++) {
            const sy = -22 - i * 26;
            x.strokeStyle = "#5a9a3e";
            x.lineWidth = 4;
            x.beginPath();
            x.moveTo(0, sy + 16);
            x.lineTo(0, sy);
            x.stroke();
            ell(x, 0, sy - 6, 6, 12, "#f0c848", "#b08a30", 2);
            ell(x, 0, sy - 16, 13, 14, "#f0c848", "#a8823a", 2.4);
            x.fillStyle = "#8a5a2e";
            for (let s = 0; s < 8; s++) {
              const a = s * Math.PI / 4;
              ell(x, Math.cos(a) * 6, sy - 16 + Math.sin(a) * 7, 2.6, 2.6, "#8a5a2e");
            }
            ell(x, 0, sy - 16, 4.6, 5, "#6a4420");
          }
          break;
        case "rose_arbor":
          S();
          x.strokeStyle = wood;
          x.lineWidth = 6;
          x.beginPath();
          x.moveTo(-30, 0);
          x.lineTo(-30, -60);
          x.quadraticCurveTo(0, -92, 30, -60);
          x.lineTo(30, 0);
          x.stroke();
          for (const [px, py] of [[-24, -66], [-10, -84], [8, -86], [24, -64], [-30, -40], [30, -40]]) {
            ell(x, px, py, 7, 7, "#e86a8a", "#a83a5a", 1.8);
            ell(x, px - 2, py - 2, 2.6, 2.6, "#f8b8c8");
          }
          break;
        case "swing":
          S();
          x.strokeStyle = wood;
          x.lineWidth = 6;
          x.beginPath();
          x.moveTo(-34, 0);
          x.lineTo(-20, -72);
          x.moveTo(34, 0);
          x.lineTo(20, -72);
          x.moveTo(-22, -70);
          x.lineTo(22, -70);
          x.stroke();
          x.strokeStyle = "#6a6a6a";
          x.lineWidth = 2.4;
          x.beginPath();
          x.moveTo(-12, -70);
          x.lineTo(-12, -34);
          x.moveTo(12, -70);
          x.lineTo(12, -34);
          x.stroke();
          rr(x, -16, -34, 32, 7, 3);
          x.fillStyle = wood;
          x.fill();
          outline(x, woodD, 2);
          break;
        case "hedge":
          S();
          rr(x, -34, -48, 68, 48, 16);
          x.fillStyle = vgrad(x, -48, 48, "#68a84e", "#4e8a3a");
          x.fill();
          outline(x, "#38642a", 2.6);
          x.save();
          x.globalAlpha = 0.3;
          for (const [px, py] of [[-18, -30], [8, -38], [22, -20], [-6, -16]]) ell(x, px, py, 6, 4, "#a8e078");
          x.restore();
          break;
        case "fountain":
          S();
          ell(x, 0, -12, 36, 14, stone, stoneD, 2.6);
          ell(x, 0, -14, 28, 9, "#68c8e8");
          rr(x, -6, -46, 12, 32, 4);
          x.fillStyle = stone;
          x.fill();
          outline(x, stoneD, 2);
          ell(x, 0, -48, 18, 6, shade(stone, 0.1), stoneD, 2);
          ell(x, 0, -58, 5, 5, "#9adcf0", "#68a8c8", 1.8);
          star(x, 0, -66, 8, "rgba(150,220,240,0.8)");
          break;
        case "pool":
          S();
          x.beginPath();
          x.moveTo(0, -46);
          x.lineTo(42, -24);
          x.lineTo(0, -2);
          x.lineTo(-42, -24);
          x.closePath();
          x.fillStyle = stone;
          x.fill();
          outline(x, stoneD, 2.6);
          x.beginPath();
          x.moveTo(0, -36);
          x.lineTo(30, -20);
          x.lineTo(0, -6);
          x.lineTo(-30, -20);
          x.closePath();
          x.fillStyle = "#5ac8e8";
          x.fill();
          x.strokeStyle = "rgba(255,255,255,0.6)";
          x.lineWidth = 2;
          x.beginPath();
          x.moveTo(-12, -20);
          x.quadraticCurveTo(0, -26, 12, -20);
          x.stroke();
          break;
        case "statue":
          S();
          rr(x, -22, -24, 44, 24, 4);
          x.fillStyle = stone;
          x.fill();
          outline(x, stoneD, 2.2);
          rr(x, -14, -56, 28, 32, 8);
          x.fillStyle = shade(stone, 0.08);
          x.fill();
          outline(x, stoneD, 2.2);
          ell(x, 0, -64, 11, 11, shade(stone, 0.12), stoneD, 2.2);
          ell(x, 0, -72, 15, 4.6, "#c8a05a", "#8a6a34", 2);
          x.beginPath();
          x.moveTo(-8, -72);
          x.quadraticCurveTo(0, -88, 8, -72);
          x.closePath();
          x.fillStyle = "#c8a05a";
          x.fill();
          break;
        case "harvest_crown":
          S();
          rr(x, -20, -22, 40, 22, 4);
          x.fillStyle = "#8a6a4a";
          x.fill();
          outline(x, woodD, 2.2);
          x.beginPath();
          x.moveTo(-18, -26);
          x.lineTo(-18, -48);
          x.lineTo(-9, -38);
          x.lineTo(0, -54);
          x.lineTo(9, -38);
          x.lineTo(18, -48);
          x.lineTo(18, -26);
          x.closePath();
          x.fillStyle = vgrad(x, -54, 28, "#ffe07c", "#e7a53c");
          x.fill();
          outline(x, "#a87820", 2.4);
          for (const [px, py] of [[-9, -30], [9, -30], [0, -34]]) ell(x, px, py, 3, 3, "#e05a4a", "#a83a2e", 1.4);
          break;
        default:
          S();
          ell(x, 0, -16, 18, 16, "#88c05a", "#5a8a3a", 2.4);
          break;
      }
      if (gold) {
        star(x, 26, -78, 8, "rgba(255,225,120,0.9)");
        star(x, -30, -60, 5, "rgba(255,225,120,0.7)");
      }
    });
  }
  function pikaSprite(pose) {
    return cached(`pika:${pose}`, 90, 80, (x) => {
      x.translate(45, 74);
      const O = "#f5a04a", OD = "#c8742e", O2 = "#fbc078", C = "#f2e8dc";
      shadow(x, 0, 0, 26, 8);
      if (pose === "sleep") {
        ell(x, 0, -14, 26, 15, O, OD, 2.6);
        ell(x, 16, -22, 13, 11, O2, OD, 2.2);
        ell(x, 10, -32, 4.4, 5, O, OD, 1.6);
        ell(x, 22, -32, 4.4, 5, O, OD, 1.6);
        x.save();
        x.translate(-24, -14);
        x.rotate(0.9);
        ell(x, -8, 0, 12, 6, O2, OD, 2);
        x.restore();
        x.strokeStyle = "#3a2c20";
        x.lineWidth = 1.8;
        x.beginPath();
        x.arc(18, -22, 2.6, 0.15, Math.PI - 0.15);
        x.stroke();
        x.beginPath();
        x.arc(27, -22, 2.6, 0.15, Math.PI - 0.15);
        x.stroke();
        x.fillStyle = "#8ab8e0";
        x.font = "bold 11px sans-serif";
        x.fillText("z", 30, -38);
        x.font = "bold 9px sans-serif";
        x.fillText("z", 37, -46);
        return;
      }
      const walking = pose === "walk";
      x.save();
      x.translate(-22, -22);
      x.rotate(walking ? -0.25 : -0.05);
      x.beginPath();
      x.moveTo(0, 0);
      x.quadraticCurveTo(-16, -10, -14, -26);
      x.quadraticCurveTo(-6, -20, 2, -8);
      x.closePath();
      x.fillStyle = O;
      x.fill();
      outline(x, OD, 2.4);
      x.strokeStyle = OD;
      x.lineWidth = 2.6;
      x.beginPath();
      x.moveTo(-12, -20);
      x.lineTo(-7, -14);
      x.stroke();
      x.restore();
      if (walking) {
        x.strokeStyle = OD;
        x.lineWidth = 5.4;
        x.beginPath();
        x.moveTo(-8, -12);
        x.lineTo(-11, -1);
        x.moveTo(8, -12);
        x.lineTo(12, -1);
        x.stroke();
      } else {
        ell(x, -9, -4, 6, 4, O, OD, 2);
        ell(x, 9, -4, 6, 4, O, OD, 2);
      }
      ell(x, 0, -20, 19, 15, vgrad(x, -35, 30, O2, O), OD, 2.6);
      if (!walking) ell(x, 0, -13, 10, 7, C);
      const hy = walking ? -40 : -38;
      ell(x, 4, hy, 15, 14, O2, OD, 2.6);
      x.beginPath();
      x.moveTo(-5, hy - 10);
      x.lineTo(-8, hy - 22);
      x.lineTo(2, hy - 13);
      x.closePath();
      x.fillStyle = O;
      x.fill();
      outline(x, OD, 2);
      x.beginPath();
      x.moveTo(11, hy - 11);
      x.lineTo(14, hy - 22);
      x.lineTo(19, hy - 11);
      x.closePath();
      x.fillStyle = O;
      x.fill();
      outline(x, OD, 2);
      x.beginPath();
      x.moveTo(-5.4, hy - 12);
      x.lineTo(-7, hy - 18.6);
      x.lineTo(-0.6, hy - 13.6);
      x.closePath();
      x.fillStyle = "#e88a9a";
      x.fill();
      x.strokeStyle = OD;
      x.lineWidth = 2.4;
      x.beginPath();
      x.moveTo(10, hy - 4);
      x.lineTo(14, hy - 1);
      x.moveTo(6, hy - 6);
      x.lineTo(9, hy - 3);
      x.stroke();
      x.beginPath();
      x.moveTo(-12, -26);
      x.lineTo(-8, -24);
      x.moveTo(-13, -18);
      x.lineTo(-9, -17);
      x.stroke();
      eye(x, 9, hy - 1, 2.8, true);
      eye(x, 18, hy - 1, 2.8, true);
      x.fillStyle = "#e88a7a";
      x.beginPath();
      x.moveTo(12, hy + 4);
      x.lineTo(16, hy + 4);
      x.lineTo(14, hy + 7);
      x.closePath();
      x.fill();
      x.strokeStyle = "#3a2c20";
      x.lineWidth = 1.6;
      x.beginPath();
      x.moveTo(14, hy + 7);
      x.quadraticCurveTo(12, hy + 10, 9.6, hy + 9);
      x.stroke();
      x.beginPath();
      x.moveTo(16, hy + 9.6);
      x.quadraticCurveTo(16, hy + 10, 20, hy + 10);
      x.stroke();
      x.strokeStyle = "rgba(250,240,220,0.9)";
      x.lineWidth = 1.3;
      x.beginPath();
      x.moveTo(19, hy + 5);
      x.lineTo(26, hy + 3.6);
      x.moveTo(19, hy + 7);
      x.lineTo(26, hy + 8);
      x.stroke();
    });
  }
  function treeSprite(kind) {
    return cached(`tree:${kind}`, 130, 150, (x) => {
      x.translate(65, 144);
      const trunk = "#9a704a", trunkD = "#6e4e30";
      if (kind === "oak" || kind === "oakBig") {
        const s = kind === "oakBig" ? 1.35 : 1;
        x.scale(s, s);
        shadow(x, 0, 0, 34, 11);
        x.beginPath();
        x.moveTo(-8, 0);
        x.quadraticCurveTo(-6, -26, -10, -40);
        x.lineTo(10, -40);
        x.quadraticCurveTo(6, -26, 8, 0);
        x.closePath();
        x.fillStyle = trunk;
        x.fill();
        outline(x, trunkD, 2.4);
        const blobs = [[-24, -58, 24, "#66b04c"], [24, -56, 23, "#5aa844"], [0, -76, 27, "#74c058"], [-10, -54, 22, "#6ab44e"], [12, -66, 21, "#68b04a"]];
        for (const [bx, by, br, col] of blobs) ell(x, bx, by, br, br * 0.88, col, "#428232", 2.6);
        x.save();
        x.globalAlpha = 0.35;
        ell(x, -14, -72, 9, 6, "#a8e078");
        x.restore();
        ell(x, -18, -62, 3, 3, "#e05a4a");
        ell(x, 16, -70, 3, 3, "#e05a4a");
        ell(x, 2, -56, 3, 3, "#e05a4a");
      } else if (kind === "pine") {
        shadow(x, 0, 0, 26, 9);
        rr(x, -6, -26, 12, 26, 4);
        x.fillStyle = trunk;
        x.fill();
        outline(x, trunkD, 2.2);
        for (let i = 0; i < 3; i++) {
          const ty = -30 - i * 26, tw = 34 - i * 8;
          x.beginPath();
          x.moveTo(-tw, ty);
          x.lineTo(0, ty - 34);
          x.lineTo(tw, ty);
          x.closePath();
          x.fillStyle = vgrad(x, ty - 34, 36, shade("#4e9a44", 0.14 + i * 0.05), "#3f8438");
          x.fill();
          outline(x, "#2e6428", 2.2);
        }
      } else if (kind === "bush") {
        shadow(x, 0, 0, 22, 8);
        for (const [bx, by, br] of [[-14, -16, 16], [14, -16, 16], [0, -26, 19]])
          ell(x, bx, by, br, br * 0.9, "#5fae4a", "#428232", 2.4);
        ell(x, 12, -34, 4, 4, "#f0c848", "#b08a30", 1.4);
      } else if (kind === "rock") {
        shadow(x, 0, 0, 22, 8);
        x.beginPath();
        x.moveTo(-22, 0);
        x.lineTo(-18, -18);
        x.lineTo(-4, -26);
        x.lineTo(12, -22);
        x.lineTo(22, -6);
        x.lineTo(18, 0);
        x.closePath();
        x.fillStyle = vgrad(x, -26, 26, "#c8c4b8", "#a8a498");
        x.fill();
        outline(x, "#82807a", 2.4);
        x.save();
        x.globalAlpha = 0.5;
        ell(x, -8, -18, 6, 3.4, "#e8e4d8");
        x.restore();
      } else {
        for (const [fx, fy, col] of [[-20, -6, "#f088a8"], [-4, -12, "#f0c848"], [14, -6, "#88b8f0"], [24, -12, "#e87858"], [-28, -12, "#c888e8"], [4, -4, "#f0f0e8"]]) {
          x.strokeStyle = "#5a9a3e";
          x.lineWidth = 2.2;
          x.beginPath();
          x.moveTo(fx, 4);
          x.quadraticCurveTo(fx + 2, -4, fx, fy + 4);
          x.stroke();
          for (let p = 0; p < 5; p++) {
            const a = p * Math.PI * 2 / 5;
            ell(x, fx + Math.cos(a) * 3.4, fy + Math.sin(a) * 3.4, 2.6, 2.6, col);
          }
          ell(x, fx, fy, 2, 2, "#f0d868");
        }
      }
    });
  }
  function cloudSprite(variant) {
    return cached(`cloud:${variant}`, 100, 50, (x) => {
      const PUFFS = [
        [[26, 30, 18], [48, 22, 23], [72, 30, 17], [38, 36, 16], [60, 36, 16]],
        [[20, 32, 15], [44, 20, 21], [68, 28, 16], [34, 36, 14], [57, 34, 15]],
        [[30, 28, 20], [55, 22, 24], [78, 30, 18], [44, 36, 17], [66, 36, 16]]
      ];
      const puffs = PUFFS[variant % 3];
      x.save();
      x.shadowColor = "rgba(60,90,140,0.12)";
      x.shadowBlur = 10;
      x.shadowOffsetY = 4;
      x.fillStyle = "#ffffff";
      for (const [px, py, pr] of puffs) {
        x.beginPath();
        x.arc(px, py, pr, 0, Math.PI * 2);
        x.fill();
      }
      x.restore();
      x.save();
      x.globalAlpha = 0.35;
      x.fillStyle = "#dceaf5";
      ell(x, 50, 40, 34, 7);
      x.restore();
    });
  }
  function waveSprite() {
    return cached("wave", 60, 20, (x) => {
      x.strokeStyle = "rgba(255,255,255,0.55)";
      x.lineWidth = 3;
      x.beginPath();
      x.moveTo(4, 12);
      x.quadraticCurveTo(18, 2, 32, 12);
      x.quadraticCurveTo(46, 20, 58, 10);
      x.stroke();
    });
  }
  var SS, cache, TILE_W, TILE_H;
  var init_art = __esm({
    "src/art.ts"() {
      "use strict";
      init_data();
      SS = 2;
      cache = /* @__PURE__ */ new Map();
      TILE_W = 128;
      TILE_H = 64;
    }
  });

  // src/systems.ts
  var systems_exports = {};
  __export(systems_exports, {
    addCoins: () => addCoins,
    addGems: () => addGems,
    animalDef: () => animalDef,
    barnAdd: () => barnAdd,
    barnCap: () => barnCap,
    barnCount: () => barnCount,
    barnHas: () => barnHas,
    barnSell: () => barnSell,
    barnTake: () => barnTake,
    buyAnimal: () => buyAnimal,
    buyExpansion: () => buyExpansion,
    buyMachine: () => buyMachine,
    checkDailyRollover: () => checkDailyRollover,
    claimDaily: () => claimDaily,
    collectMachine: () => collectMachine,
    collectPen: () => collectPen,
    dailyAvailable: () => dailyAvailable,
    decorOwned: () => decorOwned,
    deliverOrder: () => deliverOrder,
    ensureOrders: () => ensureOrders,
    ensureQuests: () => ensureQuests,
    expansionDef: () => expansionDef,
    expansionInProgress: () => expansionInProgress,
    feedPen: () => feedPen,
    fishDone: () => fishDone,
    fishReady: () => fishReady,
    genOrder: () => genOrder,
    grantXP: () => grantXP,
    harvestPlot: () => harvestPlot,
    isSoil: () => isSoil,
    machineDef: () => machineDef,
    museumBonusPct: () => museumBonusPct,
    museumDonate: () => museumDonate,
    orderCount: () => orderCount,
    penProgress: () => penProgress,
    placeDecor: () => placeDecor,
    plantPlot: () => plantPlot,
    plotAt: () => plotAt,
    plotFromIdx: () => plotFromIdx,
    plotProgress: () => plotProgress,
    questEvent: () => questEvent,
    removeDecor: () => removeDecor,
    rerollOrder: () => rerollOrder,
    speedUpExpansion: () => speedUpExpansion,
    speedUpPlot: () => speedUpPlot,
    spendCoins: () => spendCoins,
    spendGems: () => spendGems,
    startRecipe: () => startRecipe,
    tickExpansion: () => tickExpansion,
    tickGame: () => tickGame,
    tileOccupied: () => tileOccupied,
    unlocksAt: () => unlocksAt,
    upgradePen: () => upgradePen
  });
  function addCoins(n) {
    state.coins += n;
    bus.emit("res");
  }
  function spendCoins(n) {
    if (state.coins < n) {
      bus.emit("toast", T("t.noCoins"));
      sfx("error");
      return false;
    }
    state.coins -= n;
    bus.emit("res");
    return true;
  }
  function addGems(n) {
    state.gems += n;
    bus.emit("res");
  }
  function spendGems(n) {
    if (state.gems < n) {
      bus.emit("toast", T("t.noGems"));
      sfx("error");
      return false;
    }
    state.gems -= n;
    bus.emit("res");
    return true;
  }
  function grantXP(n) {
    state.xp += n;
    while (state.level < MAX_LEVEL && state.xp >= xpForLevel(state.level)) {
      const oldStage = state.boardStage;
      state.xp -= xpForLevel(state.level);
      state.level++;
      const ns = boardStageFor(state.level);
      if (ns > oldStage) upgradeBoardStage(oldStage, ns);
      addCoins(5 * state.level);
      state.energy = Math.min(energyCap(state.level), state.energy + 5);
      bus.emit("levelup", { level: state.level, unlocks: unlocksAt(state.level) });
      if (state.level % LETTER_EVERY === 0) bus.emit("letter", { level: state.level });
      const ch = Math.floor(state.level / CHAPTER_EVERY);
      if (state.level % CHAPTER_EVERY === 0 && ch >= 1) bus.emit("chapter", { n: ch });
    }
    bus.emit("res");
  }
  function upgradeBoardStage(oldStage, newStage) {
    const prevLocked = initialLocked(oldStage);
    const purchased = prevLocked.filter((i) => !state.boardLocked.includes(i));
    state.boardLocked = initialLocked(newStage).filter((i) => !purchased.includes(i));
    state.boardStage = newStage;
    bus.emit("board:grew");
    bus.emit("toast", T("m.boardGrew"));
  }
  function unlocksAt(level) {
    const out = [];
    for (const c of CROPS) if (c.lvl === level) out.push({ type: "crop", id: c.id, name: nm(c.name), icon: "crop:" + c.id });
    for (const a of ANIMALS) if (a.lvl === level) out.push({ type: "animal", id: a.id, name: nm(a.name), icon: "animal:" + a.id });
    for (const m of MACHINES) if (m.lvl === level) out.push({ type: "machine", id: m.id, name: nm(m.name), icon: "machine:" + m.id });
    for (const c of CHAINS) if (c.lvl === level) out.push({ type: "chain", id: c.id, name: nm(c.name), icon: "chain:" + c.id });
    for (const d of DECOR) if (d.lvl === level && d.source === "shop") out.push({ type: "decor", id: d.id, name: nm(d.name), icon: "decor:" + d.id });
    return out;
  }
  function barnCap() {
    return BARN_BASE + state.barnLvl * BARN_STEP;
  }
  function barnCount() {
    return Object.values(state.barn).reduce((a, b) => a + b, 0);
  }
  function barnAdd(id, n) {
    const space = barnCap() - barnCount();
    const add = Math.max(0, Math.min(n, space));
    if (add > 0) state.barn[id] = (state.barn[id] || 0) + add;
    if (add < n) {
      bus.emit("toast", T("t.barnFull"));
      sfx("error");
    }
    bus.emit("res");
    return add;
  }
  function barnHas(id, n) {
    return (state.barn[id] || 0) >= n;
  }
  function barnTake(id, n) {
    if (!barnHas(id, n)) return false;
    state.barn[id] -= n;
    if (state.barn[id] <= 0) delete state.barn[id];
    bus.emit("res");
    return true;
  }
  function barnSell(id, n) {
    const have = state.barn[id] || 0;
    const sell = Math.min(n, have);
    if (sell <= 0) return;
    barnTake(id, sell);
    addCoins(item(id).sell * sell);
    state.stats.sells += sell;
    sfx("sell");
    questEvent("sell", sell);
  }
  function plotAt(x, y) {
    return (y - PLOT_REF) * 10 + (x - PLOT_REF);
  }
  function plotFromIdx(i) {
    return { x: i % 10 + PLOT_REF, y: Math.floor(i / 10) + PLOT_REF };
  }
  function isSoil(x, y) {
    const { off, size } = soilRect(state.expansion);
    return x >= off && y >= off && x < off + size && y < off + size;
  }
  function plotProgress(i) {
    const p = state.plots[i];
    if (!p) return 0;
    return Math.min(1, (Date.now() - p.at) / p.dur);
  }
  function plantPlot(i, cropId) {
    const def = CROPS.find((c) => c.id === cropId);
    if (state.plots[i]) return false;
    if (!spendCoins(def.seed)) return false;
    state.plots[i] = { crop: cropId, at: Date.now(), dur: def.grow * 1e3 / prodMult() };
    state.lastCrop = cropId;
    sfx("plant");
    haptic(10);
    bus.emit("farm:changed");
    bus.emit("planted", { plot: i });
    return true;
  }
  function speedUpPlot(i) {
    const p = state.plots[i];
    if (!p || plotProgress(i) >= 1) return false;
    if (!spendGems(1)) return false;
    p.at = Date.now() - p.dur;
    sfx("energy");
    bus.emit("farm:changed");
    return true;
  }
  function harvestPlot(i) {
    const p = state.plots[i];
    if (!p || plotProgress(i) < 1) return false;
    const def = CROPS.find((c) => c.id === p.crop);
    const got = barnAdd(def.id, def.yield);
    if (got <= 0) return false;
    state.plots[i] = null;
    grantXP(def.xp);
    state.stats.harvests++;
    sfx("harvest");
    haptic([10, 40, 20]);
    questEvent("harvest", 1);
    bus.emit("farm:changed");
    bus.emit("harvestfx", { plot: i, crop: p.crop, count: got });
    bus.emit("harvested", { plot: i });
    return true;
  }
  function animalDef(type) {
    return ANIMALS.find((a) => a.id === type);
  }
  function penProgress(idx) {
    const a = state.animals[idx];
    if (!a || !a.fedAt) return 0;
    return Math.min(1, (Date.now() - a.fedAt) / a.fedDur);
  }
  function feedPen(idx) {
    const a = state.animals[idx];
    if (!a || a.fedAt) return false;
    const def = animalDef(a.type);
    if (!spendCoins(def.feed * a.count)) return false;
    a.fedAt = Date.now();
    a.fedDur = def.cycle * 1e3 / prodMult();
    state.stats.feeds++;
    sfx("feed");
    haptic(10);
    questEvent("feed", 1);
    bus.emit("farm:changed");
    return true;
  }
  function collectPen(idx) {
    const a = state.animals[idx];
    if (!a || !a.fedAt || penProgress(idx) < 1) return false;
    const def = animalDef(a.type);
    a.happy++;
    let qty = a.count;
    if (a.happy % 5 === 0) qty += Math.ceil(a.count / 2);
    const got = barnAdd(def.product, qty);
    if (got <= 0) return false;
    a.fedAt = 0;
    grantXP(def.xp * a.count);
    state.stats.collects++;
    sfx("collect");
    haptic([10, 40, 20]);
    questEvent("collect", 1);
    bus.emit("farm:changed");
    bus.emit("penfx", { idx, product: def.product, count: got });
    return true;
  }
  function upgradePen(idx) {
    const a = state.animals[idx];
    if (!a || a.count >= 4) return false;
    const def = animalDef(a.type);
    if (!spendCoins(def.cost * 0.6)) return false;
    a.count++;
    sfx("buy");
    bus.emit("farm:changed");
    return true;
  }
  function buyAnimal(typeId) {
    const def = animalDef(typeId);
    if (state.animals.some((a) => a.type === typeId)) return false;
    if (!spendCoins(def.cost)) return false;
    state.animals.push({ type: typeId, fedAt: 0, fedDur: 0, happy: 0, count: 2 });
    sfx("buy");
    haptic(15);
    bus.emit("farm:changed");
    return true;
  }
  function machineDef(type) {
    return MACHINES.find((m) => m.id === type);
  }
  function buyMachine(typeId) {
    const def = machineDef(typeId);
    if (state.machines.some((m) => m.type === typeId)) return false;
    if (!spendCoins(def.cost)) return false;
    state.machines.push({ type: typeId, queue: [], slots: 2 });
    sfx("buy");
    haptic(15);
    bus.emit("farm:changed");
    return true;
  }
  function startRecipe(mIdx, rId) {
    const m = state.machines[mIdx];
    const def = machineDef(m.type);
    const rec = def.recipes.find((r) => r.id === rId);
    if (m.queue.length >= m.slots) return false;
    for (const inp of rec.inputs) if (!barnHas(inp.item, inp.qty)) {
      bus.emit("toast", T("t.needItems"));
      sfx("error");
      return false;
    }
    if (barnCount() + rec.qty > barnCap()) {
      bus.emit("toast", T("t.barnFull"));
      sfx("error");
      return false;
    }
    for (const inp of rec.inputs) barnTake(inp.item, inp.qty);
    m.queue.push({ r: rId, at: Date.now(), dur: rec.time * 1e3 / prodMult() });
    sfx("tap");
    haptic(10);
    bus.emit("farm:changed");
    return true;
  }
  function collectMachine(mIdx, qIdx) {
    const m = state.machines[mIdx];
    const job = m.queue[qIdx];
    if (!job || Date.now() - job.at < job.dur) return false;
    const rec = machineDef(m.type).recipes.find((r) => r.id === job.r);
    const got = barnAdd(rec.out, rec.qty);
    if (got <= 0) return false;
    m.queue.splice(qIdx, 1);
    grantXP(rec.xp);
    state.stats.collects++;
    sfx("collect");
    haptic([10, 40, 20]);
    questEvent("collect", 1);
    bus.emit("farm:changed");
    return true;
  }
  function availableItems() {
    const out = [];
    for (const c of CROPS) if (c.lvl <= state.level) out.push(c.id);
    for (const a of state.animals) out.push(animalDef(a.type).product);
    for (const m of state.machines) for (const r of machineDef(m.type).recipes) out.push(r.out);
    return out;
  }
  function genOrder() {
    const pool = availableItems();
    const nItems = Math.min(pool.length, 2 + Math.floor(Math.random() * 3) + (state.level > 30 ? 1 : 0));
    const chosen = [];
    while (chosen.length < nItems) {
      const it = pool[Math.floor(Math.random() * pool.length)];
      if (!chosen.includes(it)) chosen.push(it);
    }
    const items = chosen.map((id) => {
      const price = item(id).sell;
      let maxQ = 4 + Math.min(10, Math.floor(state.level / 12));
      if (price > 100) maxQ = 4;
      if (price > 500) maxQ = 2;
      if (price > 2e3) maxQ = 1;
      const qty = 1 + Math.floor(Math.random() * maxQ);
      return { item: id, qty };
    });
    const base = items.reduce((s, i2) => s + item(i2.item).sell * i2.qty, 0);
    const express = Math.random() < EXPRESS_CHANCE;
    const mult = express ? 2 : 1;
    return {
      id: state.orderSeq++,
      npc: Math.floor(Math.random() * 20),
      items,
      coins: Math.round((base * (1.5 + Math.random() * 0.5) + state.level * 3) * mult),
      xp: Math.round((base * 0.14 + 10 + state.level * 1.5) * mult),
      express,
      expires: express ? Date.now() + EXPRESS_MS : 0
    };
  }
  function orderCount() {
    return Math.min(9, 4 + Math.floor(state.level / 12));
  }
  function ensureOrders() {
    const now = Date.now();
    if (now - state.ordersAt > ORDER_REFRESH_MS) {
      state.orders = [];
      state.ordersAt = now;
    }
    for (const o of state.orders) if (o.express && now > o.expires) {
      o.express = false;
      o.coins = Math.round(o.coins / 2);
      o.xp = Math.round(o.xp / 2);
      bus.emit("toast", T("o.expressLost"));
    }
    while (state.orders.length < orderCount()) state.orders.push(genOrder());
  }
  function deliverOrder(id) {
    const o = state.orders.find((x) => x.id === id);
    if (!o) return false;
    for (const it of o.items) if (!barnHas(it.item, it.qty)) return false;
    for (const it of o.items) barnTake(it.item, it.qty);
    addCoins(o.coins);
    grantXP(o.xp);
    state.stats.deliveries++;
    state.orders = state.orders.filter((x) => x.id !== id);
    ensureOrders();
    sfx("coin");
    haptic([10, 40, 20]);
    questEvent("deliver", 1);
    bus.emit("orders");
    bus.emit("orderdone", o);
    return true;
  }
  function rerollOrder(id) {
    if (!spendCoins(ORDER_REROLL_COST)) return false;
    state.orders = state.orders.filter((x) => x.id !== id);
    state.orders.push(genOrder());
    sfx("tap");
    bus.emit("orders");
    return true;
  }
  function ensureQuests() {
    const today = todayKey();
    if (state.questDay !== today) {
      state.questDay = today;
      state.questBonusTaken = false;
      let seed = 0;
      for (const c of today) seed = seed * 31 + c.charCodeAt(0) >>> 0;
      const rnd = () => {
        seed = seed * 1664525 + 1013904223 >>> 0;
        return seed / 4294967296;
      };
      const pool = [...QUEST_TPLS];
      state.quests = [];
      for (let i = 0; i < 3; i++) {
        const t = pool.splice(Math.floor(rnd() * pool.length), 1)[0];
        state.quests.push({ id: t.id, goal: Math.round(t.base + t.scale * Math.sqrt(state.level) * 2), prog: 0, claimed: false });
      }
    }
  }
  function questEvent(type, n = 1) {
    let changed = false;
    for (const q of state.quests) {
      if (q.id === type && !q.claimed && q.prog < q.goal) {
        q.prog = Math.min(q.goal, q.prog + n);
        if (q.prog >= q.goal) {
          q.claimed = true;
          const reward = 100 + state.level * 8;
          addCoins(reward);
          grantXP(30 + state.level * 2);
          bus.emit("toast", `${T("q.done")} +${reward} \u{1FA99}`);
          sfx("quest");
          haptic([10, 50, 30]);
        }
        changed = true;
      }
    }
    if (changed && state.quests.every((q) => q.claimed) && !state.questBonusTaken) {
      state.questBonusTaken = true;
      addGems(2);
      state.energy = Math.min(energyCap(state.level), state.energy + 20);
      bus.emit("toast", T("q.allDone"));
      sfx("gem");
    }
    if (changed) bus.emit("quests");
  }
  function dailyAvailable() {
    if (state.daily.last === 0) return true;
    const d = dayDiff(state.daily.last, Date.now());
    return d >= 1;
  }
  function checkDailyRollover() {
    if (state.daily.last === 0) return;
    const d = dayDiff(state.daily.last, Date.now());
    if (d > 1) {
      state.daily.day = 0;
      state.daily.streak = 0;
    }
  }
  function claimDaily() {
    if (!dailyAvailable()) return false;
    const r = DAILY_REWARDS[state.daily.day % DAILY_REWARDS.length];
    if (r.coins) addCoins(r.coins);
    if (r.gems) addGems(r.gems);
    if (r.energy) state.energy = Math.min(energyCap(state.level), state.energy + r.energy);
    state.daily.last = Date.now();
    state.daily.streak++;
    state.daily.day = (state.daily.day + 1) % DAILY_REWARDS.length;
    sfx("daily");
    haptic([10, 60, 30, 60]);
    saveGame();
    return true;
  }
  function museumDonate(chainId) {
    state.museum[chainId] = (state.museum[chainId] || 0) + 1;
    const don = state.museum[chainId];
    const chain = CHAINS.find((c) => c.id === chainId);
    let milestoneMsg = "";
    if (MUSEUM_MILESTONES.includes(don)) {
      if (don === 3) {
        addGems(10);
        milestoneMsg = T("mu.rewardGems", { n: 10 });
      }
      if (don === 10) {
        const leg = DECOR.find((d) => d.source === "museum" && !state.decorUnlocked.includes(d.id));
        if (leg) {
          state.decorUnlocked.push(leg.id);
          milestoneMsg = `${T("mu.rewardDecor")}: ${nm(leg.name)}`;
        } else {
          addGems(25);
          milestoneMsg = T("mu.rewardGems", { n: 25 });
        }
      }
      if (don === 25) {
        addGems(100);
        milestoneMsg = T("mu.rewardGems", { n: 100 });
      }
      if (don === 1) milestoneMsg = T("mu.rewardProd");
    }
    sfx("artifact");
    haptic([20, 60, 20, 60, 40]);
    bus.emit("res");
    bus.emit("museum");
    return don;
  }
  function museumBonusPct() {
    return Object.values(state.museum).filter((n) => n >= 1).length * 2;
  }
  function fishReady() {
    if (state.fish.day !== todayKey()) {
      state.fish.day = todayKey();
      state.fish.casts = 0;
    }
    return state.fish.casts < FISH_PER_DAY;
  }
  function fishDone(accuracy) {
    state.fish.casts++;
    state.stats.fish++;
    questEvent("fish", 1);
    const tier = accuracy > 0.85 ? 3 : accuracy > 0.55 ? 2 : 1;
    sfx(tier === 3 ? "fish" : "splash");
    haptic(tier === 3 ? [10, 50, 20, 50] : 15);
    return tier;
  }
  function tileOccupied(x, y) {
    for (const [k, b] of Object.entries(BLDG)) {
      if (x >= b.x && x < b.x + b.w && y >= b.y && y < b.y + b.h) return k;
    }
    if (isSoil(x, y)) return "soil";
    for (const d of state.decor) if (d.x === x && d.y === y) return "decor";
    for (let i = 0; i < state.machines.length && i < MACHINE_SLOTS.length; i++) {
      const [sx, sy] = MACHINE_SLOTS[i];
      if (sx === x && sy === y) return "machine";
    }
    for (let i = 0; i < state.animals.length && i < PEN_SLOTS.length; i++) {
      const [sx, sy] = PEN_SLOTS[i];
      if (sx === x && sy === y) return "pen";
    }
    return null;
  }
  function placeDecor(decorId, x, y) {
    if (tileOccupied(x, y)) return false;
    state.decor.push({ id: decorId, x, y });
    sfx("place");
    haptic(15);
    bus.emit("farm:changed");
    return true;
  }
  function removeDecor(x, y) {
    const i = state.decor.findIndex((d2) => d2.x === x && d2.y === y);
    if (i < 0) return false;
    const d = state.decor[i];
    const def = DECOR.find((dd) => dd.id === d.id);
    addCoins(Math.floor(def.cost / 2));
    state.decor.splice(i, 1);
    sfx("sell");
    bus.emit("farm:changed");
    return true;
  }
  function decorOwned(decorId) {
    return state.decor.filter((d) => d.id === decorId).length;
  }
  function expansionDef() {
    if (state.expansion >= EXPANSIONS.length - 1) return null;
    if (state.expandAt !== null) return null;
    return EXPANSIONS[state.expansion + 1];
  }
  function expansionInProgress() {
    return state.expandAt !== null;
  }
  function buyExpansion() {
    const def = expansionDef();
    if (!def || state.expansion >= EXPANSIONS.length - 1) return false;
    if (!spendCoins(def.cost)) return false;
    state.expandAt = Date.now() + def.time * 1e3;
    sfx("buy");
    haptic(15);
    bus.emit("farm:changed");
    return true;
  }
  function speedUpExpansion() {
    if (state.expandAt === null) return false;
    const remainMin = Math.ceil((state.expandAt - Date.now()) / 6e4);
    const gems = Math.max(1, Math.ceil(remainMin / 10));
    if (!spendGems(gems)) return false;
    state.expandAt = Date.now();
    return true;
  }
  function tickExpansion() {
    if (state.expandAt !== null && Date.now() >= state.expandAt) {
      state.expandAt = null;
      state.expansion++;
      sfx("unlock");
      haptic([20, 60, 20, 60]);
      bus.emit("toast", T("f.expandDone"));
      bus.emit("farm:changed");
      return true;
    }
    return false;
  }
  function tickGame() {
    tickExpansion();
    ensureOrders();
    ensureQuests();
  }
  var init_systems = __esm({
    "src/systems.ts"() {
      "use strict";
      init_data();
      init_core();
      init_i18n();
      init_audio();
    }
  });

  // src/ui.ts
  var ui_exports = {};
  __export(ui_exports, {
    DAILY_REWARDS_LBL: () => DAILY_REWARDS_LBL,
    SVG: () => SVG,
    confirmDlg: () => confirmDlg,
    currencyFly: () => currencyFly,
    el: () => el,
    floatText: () => floatText,
    ico: () => ico,
    initHUD: () => initHUD,
    showAdOverlay: () => showAdOverlay,
    showChapter: () => showChapter,
    showDaily: () => showDaily,
    showLevelUp: () => showLevelUp,
    showOffline: () => showOffline,
    toast: () => toast,
    updateHUD: () => updateHUD
  });
  function DAILY_REWARDS_LBL() {
    return DAILY_REWARDS.map((r) => r.coins ? `${fmt(r.coins)} \u{1FA99}` : r.gems ? `${r.gems} \u{1F48E}` : `${r.energy} \u26A1`);
  }
  function el(tag, cls = "", html = "") {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html) e.innerHTML = html;
    return e;
  }
  function ico(name, cls = "") {
    return `<span class="ico ${cls}">${SVG[name] || ""}</span>`;
  }
  function initHUD(hudRoot) {
    hudRoot.innerHTML = `
    <div class="hud-top pt-safe">
      <div class="hud-row">
        <div class="lvl-wrap">
          <div class="lvl-badge"><span class="lvl-star">${SVG.star}</span><span class="lvl-num" id="hud-lvl">1</span></div>
          <div class="xp-track"><div class="xp-fill" id="hud-xp"></div></div>
        </div>
        <div class="cur-pills">
          <div class="cur-pill" id="hud-coins">${ico("coin")}<span></span></div>
          <div class="cur-pill" id="hud-gems">${ico("gem")}<span></span></div>
          <div class="cur-pill energy" id="hud-energy">${ico("bolt")}<span></span></div>
        </div>
        <button class="icon-btn" id="hud-settings" aria-label="${T("hud.settings")}">${SVG.gear}</button>
      </div>
      <div class="hud-row2">
        <div class="island-plate"><span class="ip-dot"></span><span id="hud-island">${state.name || T("intro.nameDefault")}</span></div>
        <div class="weather-badge" id="hud-weather"></div>
      </div>
    </div>
    <div class="hud-bottom pb-safe">
      <button class="dock-btn" id="btn-orders">${SVG.orders}<span>${T("hud.orders")}</span><em class="bdg hidden" id="bdg-orders"></em></button>
      <button class="dock-btn" id="btn-barn">${SVG.barn}<span>${T("hud.barn")}</span></button>
      <button class="fusion-btn" id="btn-fusion"><span class="fb-bolt">${SVG.bolt}</span><span class="fb-lbl">FUSION</span><span class="fb-e" id="hud-fenergy"></span></button>
      <button class="dock-btn" id="btn-shop">${SVG.shop}<span>${T("hud.shop")}</span></button>
      <button class="dock-btn" id="btn-museum">${SVG.museum}<span>${T("hud.museum")}</span></button>
    </div>
    <div class="side-btns">
      <button class="side-btn" id="btn-quests">${SVG.quest}<em class="bdg hidden" id="bdg-quests"></em></button>
      <button class="side-btn" id="btn-daily">${SVG.chest}<em class="bdg hidden" id="bdg-daily"></em></button>
    </div>
    <div class="pika-bubble hidden" id="pika-bubble"></div>
  `;
    hudRefs = {
      lvl: hudRoot.querySelector("#hud-lvl"),
      xp: hudRoot.querySelector("#hud-xp"),
      coins: hudRoot.querySelector("#hud-coins span"),
      gems: hudRoot.querySelector("#hud-gems span"),
      energy: hudRoot.querySelector("#hud-energy span"),
      fenergy: hudRoot.querySelector("#hud-fenergy"),
      weather: hudRoot.querySelector("#hud-weather"),
      island: hudRoot.querySelector("#hud-island"),
      bdgOrders: hudRoot.querySelector("#bdg-orders"),
      bdgQuests: hudRoot.querySelector("#bdg-quests"),
      bdgDaily: hudRoot.querySelector("#bdg-daily")
    };
    hudRoot.querySelector("#btn-orders").addEventListener("click", () => {
      sfx("open");
      bus.emit("panel:orders");
    });
    hudRoot.querySelector("#btn-barn").addEventListener("click", () => {
      sfx("open");
      bus.emit("panel:barn");
    });
    hudRoot.querySelector("#btn-shop").addEventListener("click", () => {
      sfx("open");
      bus.emit("panel:shop");
    });
    hudRoot.querySelector("#btn-museum").addEventListener("click", () => {
      sfx("open");
      bus.emit("panel:museum");
    });
    hudRoot.querySelector("#btn-fusion").addEventListener("click", () => bus.emit("open:fusion"));
    hudRoot.querySelector("#hud-settings").addEventListener("click", () => {
      sfx("open");
      bus.emit("panel:settings");
    });
    hudRoot.querySelector("#btn-quests").addEventListener("click", () => {
      sfx("open");
      bus.emit("panel:quests");
    });
    hudRoot.querySelector("#btn-daily").addEventListener("click", () => {
      sfx("open");
      bus.emit("panel:daily");
    });
    updateHUD();
    bus.on("res", updateHUD);
    bus.on("quests", updateHUD);
    bus.on("orders", updateHUD);
  }
  function updateHUD() {
    if (!hudRefs.lvl) return;
    hudRefs.lvl.textContent = String(state.level);
    const cap = energyCap(state.level);
    hudRefs.energy.textContent = `${state.energy}/${cap}`;
    hudRefs.fenergy.textContent = `\u26A1 ${state.energy}`;
    hudRefs.coins.textContent = fmt(state.coins);
    hudRefs.gems.textContent = fmt(state.gems);
    hudRefs.island.textContent = state.name || T("intro.nameDefault");
    const req = Math.round(55 * Math.pow(state.level, 1.45) + 30 * state.level);
    const prevReq = state.level > 1 ? Math.round(55 * Math.pow(state.level - 1, 1.45) + 30 * (state.level - 1)) : 0;
    const pct = Math.max(0, Math.min(100, state.xp / req * 100));
    hudRefs.xp.style.width = pct + "%";
    const w = weatherNow();
    hudRefs.weather.innerHTML = `<span class="w-ico">${w === "rain" ? "\u{1F327}\uFE0F" : w === "cloud" ? "\u26C5" : "\u2600\uFE0F"}</span><span>${T("hud.weather." + w)}</span>`;
    const deliverable = state.orders.filter((o) => o.items.every((i2) => (state.barn[i2.item] || 0) >= i2.qty)).length;
    setBdg(hudRefs.bdgOrders, deliverable);
    const qDone = state.quests.filter((q) => q.claimed).length;
    setBdg(hudRefs.bdgQuests, qDone > 0 ? 0 : 0);
    setBdg(hudRefs.bdgDaily, dailyAvailable() ? 1 : 0);
  }
  function setBdg(e, n) {
    if (n > 0) {
      e.textContent = String(n);
      e.classList.remove("hidden");
    } else e.classList.add("hidden");
  }
  function toast(msg) {
    const root2 = document.getElementById("toasts");
    const t = el("div", "toast", msg);
    root2.appendChild(t);
    requestAnimationFrame(() => t.classList.add("show"));
    setTimeout(() => {
      t.classList.remove("show");
      setTimeout(() => t.remove(), 300);
    }, 2400);
    while (root2.children.length > 4) root2.firstChild.remove();
  }
  function floatText(x, y, text, cls = "") {
    const f = el("div", `floaty ${cls}`, text);
    f.style.left = x + "px";
    f.style.top = y + "px";
    document.getElementById("game").appendChild(f);
    setTimeout(() => f.remove(), 1300);
  }
  function currencyFly(target, fromX, fromY, n = 6) {
    const pill = document.getElementById("hud-coins") || document.getElementById("hud-gems");
    if (!pill) return;
    const r = pill.getBoundingClientRect();
    for (let i = 0; i < n; i++) {
      const d = el("div", "flydot", SVG[target === "coins" ? "coin" : "gem"]);
      d.style.left = fromX + "px";
      d.style.top = fromY + "px";
      document.body.appendChild(d);
      setTimeout(() => {
        d.style.transform = `translate(${r.left + r.width / 2 - fromX}px, ${r.top + r.height / 2 - fromY}px) scale(0.4)`;
        d.style.opacity = "0.1";
      }, 20 + i * 40);
      setTimeout(() => d.remove(), 700 + i * 40);
    }
  }
  function confirmDlg(title, msg, okLabel) {
    return new Promise((resolve) => {
      const root2 = document.getElementById("modals");
      const m = el("div", "modal-backdrop", `
      <div class="modal-card confirm">
        <h3>${title}</h3>
        <p>${msg}</p>
        <div class="m-actions">
          <button class="btn ghost" id="cf-no">${T("c.cancel")}</button>
          <button class="btn primary" id="cf-yes">${okLabel || T("c.yes")}</button>
        </div>
      </div>`);
      root2.appendChild(m);
      m.querySelector("#cf-yes").addEventListener("click", () => {
        m.remove();
        sfx("tap");
        resolve(true);
      });
      m.querySelector("#cf-no").addEventListener("click", () => {
        m.remove();
        sfx("close");
        resolve(false);
      });
    });
  }
  function showLevelUp(level, unlocks) {
    const root2 = document.getElementById("modals");
    const rows = unlocks.map((u) => `
    <div class="unlock-row">
      <span class="ul-ico" data-icon="${u.icon}">${unlockIconHTML(u)}</span>
      <div><b>${u.name}</b><span>${T("lu." + u.type)}</span></div>
    </div>`).join("");
    const m = el("div", "modal-backdrop center", `
    <div class="modal-card levelup">
      <div class="lu-badge">${SVG.star}<span>${level}</span></div>
      <h3>${T("lu.title")}</h3>
      <p class="lu-sub">${T("lu.now", { n: level })}</p>
      ${unlocks.length ? `<div class="unlock-list">${rows}</div>` : ""}
      <div class="confetti">${Array.from({ length: 14 }, (_, i) => `<i style="--i:${i}"></i>`).join("")}</div>
      <button class="btn primary big" id="lu-ok">${T("c.ok")}</button>
    </div>`);
    root2.appendChild(m);
    m.querySelector("#lu-ok").addEventListener("click", () => {
      m.remove();
      sfx("tap");
    });
  }
  function unlockIconHTML(u) {
    const map = {
      crop: "\u{1F331}",
      animal: "\u{1F423}",
      machine: "\u2699\uFE0F",
      chain: "\u2728",
      decor: "\u{1F390}"
    };
    return `<span class="emoji">${map[u.type] || "\u2728"}</span>`;
  }
  function showChapter(n) {
    const root2 = document.getElementById("modals");
    const name = nm(chapterName(n));
    const m = el("div", "chapter-card", `
    <div class="cc-inner">
      <div class="cc-num">${T("ch.chapter", { n })}</div>
      <h2 class="cc-name">${name}</h2>
      <div class="cc-line"></div>
      <button class="btn gold big" id="cc-ok">${T("ch.continue")}</button>
    </div>`);
    root2.appendChild(m);
    sfx("chapter");
    m.querySelector("#cc-ok").addEventListener("click", () => m.remove());
  }
  function showDaily() {
    const root2 = document.getElementById("modals");
    const canClaim = dailyAvailable();
    const nextIdx = state.daily.day % 7;
    const cells = DAILY_REWARDS_LBL().map((lbl, i) => `
    <div class="d-cell ${i === nextIdx && canClaim ? "today" : ""} ${i < nextIdx ? "past" : ""}">
      <span class="d-day">${T("d.dayN", { n: i + 1 })}</span>
      <span class="d-rw">${lbl}</span>
    </div>`).join("");
    const m = el("div", "modal-backdrop", `
    <div class="modal-card daily">
      <h3>${ico("chest")} ${T("d.title")}</h3>
      <p class="d-streak">${T("d.streak", { n: state.daily.streak })}</p>
      <div class="d-grid">${cells}</div>
      <div class="m-actions">
        <button class="btn ghost" id="d-close">${T("c.close")}</button>
        <button class="btn gold big ${canClaim ? "" : "disabled"}" id="d-claim">${canClaim ? T("d.claimToday") : T("d.claimed")}</button>
      </div>
    </div>`);
    root2.appendChild(m);
    m.querySelector("#d-close").addEventListener("click", () => {
      m.remove();
      sfx("close");
    });
    m.querySelector("#d-claim").addEventListener("click", () => {
      if (claimDaily()) {
        m.remove();
        updateHUD();
      }
    });
  }
  function showOffline(s) {
    const root2 = document.getElementById("modals");
    const rows = [];
    if (s.energy > 0) rows.push(`<li>${T("off.energy", { n: s.energy })}</li>`);
    if (s.crops > 0) rows.push(`<li>${T("off.crops", { n: s.crops })}</li>`);
    if (s.machines > 0) rows.push(`<li>${T("off.machines", { n: s.machines })}</li>`);
    const m = el("div", "modal-backdrop", `
    <div class="modal-card offline">
      <h3>${T("off.title")}</h3>
      <p class="o-away">${T("off.away", { t: fmtDurBig(s.elapsed) })}</p>
      ${rows.length ? `<ul class="o-list">${rows.join("")}</ul>` : ""}
      <p class="o-pika">\u{1F43E} ${T("off.welcome")}</p>
      <button class="btn primary big" id="o-ok">${T("c.ok")}</button>
    </div>`);
    root2.appendChild(m);
    m.querySelector("#o-ok").addEventListener("click", () => m.remove());
  }
  function fmtDurBig(ms) {
    const h = Math.floor(ms / 36e5), m = Math.floor(ms % 36e5 / 6e4);
    if (h > 0) return `${h}${T("c.hour")} ${m}${T("c.min")}`;
    return `${m}${T("c.min")}`;
  }
  function showAdOverlay(onReward) {
    const root2 = document.getElementById("modals");
    const m = el("div", "modal-backdrop dark", `
    <div class="ad-card">
      <div class="ad-badge">AD</div>
      <div class="ad-art"><span class="ad-spin">\u{1F4FA}</span></div>
      <h3>${T("ad.title")}</h3>
      <p>${T("ad.text")}</p>
      <div class="ad-count" id="ad-count"></div>
      <div class="ad-bar"><div id="ad-fill"></div></div>
    </div>`);
    root2.appendChild(m);
    let n = 5;
    const cd = m.querySelector("#ad-count");
    const fill = m.querySelector("#ad-fill");
    cd.textContent = T("ad.wait", { n });
    const iv = setInterval(() => {
      n--;
      if (n <= 0) {
        clearInterval(iv);
        m.remove();
        sfx("energy");
        bus.emit("toast", T("ad.done"));
        onReward();
      } else {
        cd.textContent = T("ad.wait", { n });
        fill.style.width = (5 - n) / 5 * 100 + "%";
      }
    }, 1e3);
    fill.style.width = "0%";
  }
  var SVG, hudRefs;
  var init_ui = __esm({
    "src/ui.ts"() {
      "use strict";
      init_core();
      init_i18n();
      init_audio();
      init_data();
      init_systems();
      SVG = {
        refresh: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M20 12a8 8 0 1 1-2.4-5.7"/><path d="M20 3v5h-5" stroke-linejoin="round"/></svg>`,
        coin: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#f5c43a" stroke="#a87a14" stroke-width="2"/><circle cx="12" cy="12" r="6.5" fill="#ffd868"/></svg>`,
        gem: `<svg viewBox="0 0 24 24"><path d="M12 3l7 5-3 11H8L5 8z" fill="#5ad0d8" stroke="#1d7888" stroke-width="1.6"/><path d="M12 3l7 5H5z" fill="#8ae8e0"/><path d="M12 3v16" stroke="rgba(255,255,255,.6)" stroke-width="1.2"/></svg>`,
        bolt: `<svg viewBox="0 0 24 24"><path d="M13 2L5 13h5l-2 9 9-12h-5z" fill="#ffe07c" stroke="#c1a124" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
        star: `<svg viewBox="0 0 24 24"><path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17l-6.1 3.6 1.4-6.8L2.2 9.1l6.9-.8z" fill="#ffe07c" stroke="#c1a124" stroke-width="1.4" stroke-linejoin="round"/></svg>`,
        gear: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3.2"/><path d="M12 2.8v3M12 18.2v3M2.8 12h3M18.2 12h3M5.5 5.5l2.1 2.1M16.4 16.4l2.1 2.1M18.5 5.5l-2.1 2.1M7.6 16.4l-2.1 2.1"/></svg>`,
        orders: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="4" width="14" height="17" rx="2.5"/><path d="M9 4V2.8h6V4M8.5 9.5h7M8.5 13h7M8.5 16.5h4"/></svg>`,
        barn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 21V10l9-6 9 6v11"/><path d="M8 21v-7h8v7M8 14l8 6M16 14l-8 6"/></svg>`,
        shop: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 8h16l-1.5 12h-13z"/><path d="M8.5 8V6a3.5 3.5 0 017 0v2"/></svg>`,
        museum: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 21h18M4.5 21v-10M19.5 21v-10M8 21v-8M12 21v-8M16 21v-8M2.5 8.5L12 3l9.5 5.5"/></svg>`,
        flask: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M9.5 3h5M10.5 3v6L4.5 19a2 2 0 001.8 3h11.4a2 2 0 001.8-3l-6-10V3"/><path d="M7.5 14.5h9"/></svg>`,
        chest: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="8" width="18" height="12" rx="2"/><path d="M3 12h18M12 11v3.5"/><path d="M5 8V6a7 4 0 0114 0v2" transform="translate(0 1)"/></svg>`,
        quest: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2z"/><path d="M9.5 8.5h5M9.5 12.5h5"/></svg>`,
        fish: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M3 12s3.5-6 9.5-6c4 0 7 3 8.5 6-1.5 3-4.5 6-8.5 6C6.5 18 3 12 3 12z"/><path d="M3 12l3-4M3 12l3 4"/><circle cx="16" cy="11" r="1.2" fill="currentColor"/></svg>`,
        mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>`,
        plus: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
        lock: `<svg viewBox="0 0 24 24"><rect x="5" y="10" width="14" height="10" rx="3" fill="currentColor"/><path d="M8 10V7a4 4 0 018 0v3" stroke="currentColor" stroke-width="2.4" fill="none"/></svg>`,
        check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5l5 5 10-11"/></svg>`,
        x: `<svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>`,
        hammer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M14 5l5 5-2.5 2.5L11.5 7.5z"/><path d="M11.5 9.5L4 17l3 3 7.5-7.5"/></svg>`,
        expand: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5"/></svg>`,
        play: `<svg viewBox="0 0 24 24"><path d="M7 4.5l13 7.5-13 7.5z" fill="currentColor"/></svg>`,
        back: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 5.5L8 12l6.5 6.5"/></svg>`,
        home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M4 11l8-7 8 7v9a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 014 20z"/><path d="M9.5 21.5v-7h5v7"/></svg>`,
        timer: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.8 2M9.5 2.5h5"/></svg>`
      };
      hudRefs = {};
      bus.on("toast", (msg) => toast(msg));
    }
  });

  // src/version.ts
  var VERSION = "1.0.0";

  // src/main.ts
  init_core();
  init_i18n();
  init_audio();

  // src/farm.ts
  init_data();
  init_core();
  init_art();
  init_systems();
  init_i18n();
  var HW = TILE_W / 2;
  var HH = TILE_H / 64 * 32;
  var FarmScene = class {
    constructor(canvas) {
      this.W = 0;
      this.H = 0;
      this.dpr = 1;
      this.cam = { x: 1024, y: 576, z: 0.55 };
      this.minZ = 0.22;
      this.maxZ = 1.6;
      this.pointers = /* @__PURE__ */ new Map();
      this.panStart = null;
      this.pinchD = 0;
      this.moved = 0;
      this.lastTap = 0;
      this.lastTapX = -999;
      this.lastTapY = -999;
      this.particles = [];
      this.ripples = [];
      this.pika = { x: 7.5, y: 9.5, tx: 7.5, ty: 9.5, pose: "sit", nextAt: 0 };
      this.baseCache = null;
      this.baseStage = -1;
      this.placing = null;
      this.onPlace = null;
      this.hoverTile = null;
      this.smokeAt = 0;
      this.t = 0;
      /** Ada tabanı: çim karoları + kenar gölgesi (aşama başına önbellek) — kesin hizalı */
      this.baseBX = 0;
      this.baseBY = 0;
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.resize();
      this.cam.z = this.defaultZoom();
      window.addEventListener("resize", () => this.resize());
      this.bindInput();
      bus.on("harvestfx", (d) => this.burstAtPlot(d.plot, "#ffd868", 10));
      bus.on("penfx", (d) => {
        const p = PEN_SLOTS[d.idx];
        if (p) this.burst(this.tileCX(p[0], p[1]), this.tileCY(p[0], p[1]) - 30, "#f088a8", 8);
      });
      bus.on("orderdone", () => {
      });
      bus.on("farm:changed", () => {
        this.baseStage = -1;
      });
    }
    defaultZoom() {
      return Math.max(0.42, Math.min(this.maxZ, Math.min(this.W / 1250, this.H / 1300)));
    }
    resize() {
      this.dpr = Math.min(window.devicePixelRatio || 1, 2.5);
      const r = this.canvas.getBoundingClientRect();
      this.W = r.width;
      this.H = r.height;
      this.canvas.width = Math.round(r.width * this.dpr);
      this.canvas.height = Math.round(r.height * this.dpr);
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    }
    // ═══════════ KOORDİNATLAR ═══════════
    tileCX(x, y) {
      return (x - y) * HW + 8 * TILE_W;
    }
    tileCY(x, y) {
      return (x + y) * HH + HH;
    }
    // elmas MERKEZİ
    worldToScreen(wx, wy) {
      return { x: (wx - this.cam.x) * this.cam.z + this.W / 2, y: (wy - this.cam.y) * this.cam.z + this.H / 2 };
    }
    screenToWorld(sx, sy) {
      return { x: (sx - this.W / 2) / this.cam.z + this.cam.x, y: (sy - this.H / 2) / this.cam.z + this.cam.y };
    }
    screenToTile(sx, sy) {
      const w = this.screenToWorld(sx, sy);
      const lx = w.x - 8 * TILE_W, ly = w.y;
      const fx = (lx / HW + ly / HH) / 2, fy = (ly / HH - lx / HW) / 2;
      return { x: Math.floor(fx), y: Math.floor(fy) };
    }
    pikaScreenPos() {
      return this.worldToScreen(this.tileCX(this.pika.x, this.pika.y), this.tileCY(this.pika.x, this.pika.y) - 40);
    }
    clampCam() {
      this.cam.x = Math.max(560, Math.min(1490, this.cam.x));
      this.cam.y = Math.max(60, Math.min(1100, this.cam.y));
    }
    // ═══════════ GİRDİ ═══════════
    bindInput() {
      const c = this.canvas;
      c.addEventListener("pointerdown", (e) => {
        try {
          c.setPointerCapture(e.pointerId);
        } catch {
        }
        this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        if (this.pointers.size === 1) {
          this.panStart = { x: e.clientX, y: e.clientY, cx: this.cam.x, cy: this.cam.y };
          this.moved = 0;
        } else if (this.pointers.size === 2) {
          const [a, b] = [...this.pointers.values()];
          this.pinchD = Math.hypot(a.x - b.x, a.y - b.y);
        }
      });
      c.addEventListener("pointermove", (e) => {
        const prev = this.pointers.get(e.pointerId);
        if (prev) {
          this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
        }
        if (this.pointers.size === 1 && this.panStart) {
          const dx = e.clientX - this.panStart.x, dy = e.clientY - this.panStart.y;
          this.moved = Math.max(this.moved, Math.abs(dx) + Math.abs(dy));
          this.cam.x = this.panStart.cx - dx / this.cam.z;
          this.cam.y = this.panStart.cy - dy / this.cam.z;
          this.clampCam();
        } else if (this.pointers.size === 2) {
          const [a, b] = [...this.pointers.values()];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (this.pinchD > 0) {
            this.cam.z = Math.max(this.minZ, Math.min(this.maxZ, this.cam.z * (d / this.pinchD)));
          }
          this.pinchD = d;
          this.moved = 99;
        }
        const rect = c.getBoundingClientRect();
        this.hoverTile = this.screenToTile(e.clientX - rect.left, e.clientY - rect.top);
      });
      const end = (e) => {
        this.pointers.delete(e.pointerId);
        if (this.pointers.size === 0) this.panStart = null;
        if (this.pointers.size < 2) this.pinchD = 0;
        if (this.moved < 10) this.tap(e.clientX - c.getBoundingClientRect().left, e.clientY - c.getBoundingClientRect().top);
      };
      c.addEventListener("pointerup", end);
      c.addEventListener("pointercancel", (e) => {
        this.pointers.delete(e.pointerId);
        this.panStart = null;
      });
      c.addEventListener("wheel", (e) => {
        e.preventDefault();
        this.cam.z = Math.max(this.minZ, Math.min(this.maxZ, this.cam.z * (e.deltaY < 0 ? 1.1 : 0.9)));
      }, { passive: false });
      c.addEventListener("dblclick", () => {
        this.cam.z = this.defaultZoom();
      });
    }
    tap(sx, sy) {
      const now = Date.now();
      if (now - this.lastTap < 280 && Math.hypot(sx - this.lastTapX, sy - this.lastTapY) < 28) return;
      this.lastTap = now;
      this.lastTapX = sx;
      this.lastTapY = sy;
      const t = this.screenToTile(sx, sy);
      this.ripples.push({ x: sx, y: sy, t: now });
      if (this.placing) {
        if (t.x >= 0 && t.y >= 0 && t.x < ISLAND && t.y < ISLAND && isTileUnlocked(t.x, t.y) && !tileOccupied(t.x, t.y)) {
          this.onPlace && this.onPlace(t.x, t.y);
        } else {
          bus.emit("toast", T("f.needSpace"));
        }
        return;
      }
      for (const [kind, b] of Object.entries(BLDG)) {
        if (t.x >= b.x && t.x < b.x + b.w && t.y >= b.y && t.y < b.y + b.h) {
          bus.emit(`tap:${kind}`);
          haptic(8);
          return;
        }
      }
      if (t.x < 0 || t.y < 0 || t.x >= ISLAND || t.y >= ISLAND) return;
      if (isSoil(t.x, t.y)) {
        const pi = plotAt(t.x, t.y);
        const p = state.plots[pi];
        if (p) {
          if (plotProgress(pi) >= 1) bus.emit("harvest:plot", { plot: pi });
          else bus.emit("info:plot", { plot: pi });
        } else bus.emit("plant:plot", { plot: pi });
        haptic(8);
        return;
      }
      for (let i = 0; i < MACHINE_SLOTS.length; i++) {
        const [sx2, sy2] = MACHINE_SLOTS[i];
        if (sx2 === t.x && sy2 === t.y) {
          if (i < state.machines.length) bus.emit("tap:machine", { idx: i });
          else bus.emit("tap:ghostMachine", { slot: i });
          haptic(8);
          return;
        }
      }
      for (let i = 0; i < PEN_SLOTS.length; i++) {
        const [sx2, sy2] = PEN_SLOTS[i];
        if (sx2 === t.x && sy2 === t.y) {
          if (i < state.animals.length) bus.emit("tap:pen", { idx: i });
          else bus.emit("tap:ghostPen", { slot: i });
          haptic(8);
          return;
        }
      }
      const d = state.decor.find((dd) => dd.x === t.x && dd.y === t.y);
      if (d) {
        bus.emit("tap:decor", { x: t.x, y: t.y });
        haptic(8);
        return;
      }
      if (!isTileUnlocked(t.x, t.y)) {
        bus.emit("toast", T("t.lockedArea"));
        return;
      }
      bus.emit("tap:grass");
    }
    // ═══════════ PARTİKÜLLER ═══════════
    burst(wx, wy, col, n) {
      for (let i = 0; i < n; i++) {
        const a = Math.random() * Math.PI * 2, sp = 0.6 + Math.random() * 1.6;
        this.particles.push({ x: wx, y: wy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 1.4, life: 0, max: 40 + Math.random() * 30, kind: "spark", col, size: 3 + Math.random() * 3 });
      }
    }
    burstAtPlot(pi, col, n) {
      const px = pi % 10 + PLOT_REF, py = Math.floor(pi / 10) + PLOT_REF;
      this.burst(this.tileCX(px, py), this.tileCY(px, py) - 26, col, n);
    }
    smoke(wx, wy) {
      this.particles.push({ x: wx + (Math.random() - 0.5) * 6, y: wy, vx: 0.14, vy: -0.5 - Math.random() * 0.3, life: 0, max: 90, kind: "smoke", col: "rgba(250,250,250,0.5)", size: 4 + Math.random() * 4 });
    }
    // ═══════════ PIKA YAPAY ZEKÂSI ═══════════
    updatePika(dt) {
      const p = this.pika;
      const night = this.isNight();
      if (night && p.pose !== "sleep") {
        p.tx = BLDG.house.x + 0.6;
        p.ty = BLDG.house.y + 1.6;
      }
      const dx = p.tx - p.x, dy = p.ty - p.y;
      const dist = Math.hypot(dx, dy);
      if (dist > 0.08) {
        p.x += dx / dist * dt * 1.1;
        p.y += dy / dist * dt * 1.1;
        p.pose = night && dist < 1.2 ? "sleep" : "walk";
      } else {
        if (night) p.pose = "sleep";
        else if (Date.now() > p.nextAt) {
          const m = 4 - state.expansion;
          for (let tries = 0; tries < 8; tries++) {
            const nx = m + 0.5 + Math.random() * (ISLAND - 2 * m - 1);
            const ny = m + 0.5 + Math.random() * (ISLAND - 2 * m - 1);
            if (!isSoil(Math.floor(nx), Math.floor(ny))) {
              p.tx = nx;
              p.ty = ny;
              break;
            }
          }
          p.nextAt = Date.now() + 3e3 + Math.random() * 6e3;
          p.pose = "sit";
        }
      }
    }
    isNight() {
      const h = (/* @__PURE__ */ new Date()).getHours();
      return h >= 20 || h < 6;
    }
    // ═══════════ ANA RENDER ═══════════
    render(dtms) {
      const dt = Math.min(0.05, dtms / 1e3);
      this.t += dt;
      const x = this.ctx;
      const now = Date.now();
      const weather = weatherNow();
      this.updatePika(dt);
      const g = x.createLinearGradient(0, 0, 0, this.H);
      g.addColorStop(0, "#8fd4ee");
      g.addColorStop(0.5, "#5cb8e0");
      g.addColorStop(1, "#3a9ac8");
      x.fillStyle = g;
      x.fillRect(0, 0, this.W, this.H);
      x.save();
      for (let i = 0; i < 26; i++) {
        const rnd = mulberry32(i * 77 + Math.floor(this.t * 0.7))();
        const wy = (i * 137 + rnd * 200 + this.t * 8) % (this.H + 100) - 50;
        const wx = (i * 231 + rnd * 500 + Math.sin(this.t * 0.5 + i) * 30) % (this.W + 100) - 50;
        x.globalAlpha = 0.1 + rnd * 0.1;
        x.fillStyle = "#ffffff";
        x.beginPath();
        x.ellipse(wx, wy, 26 + rnd * 34, 3, 0, 0, Math.PI * 2);
        x.fill();
      }
      x.restore();
      x.save();
      x.translate(this.W / 2 - this.cam.x * this.cam.z, this.H / 2 - this.cam.y * this.cam.z);
      x.scale(this.cam.z, this.cam.z);
      const shore = 16;
      x.save();
      x.globalAlpha = 0.5 + Math.sin(this.t * 1.4) * 0.12;
      x.fillStyle = "rgba(255,255,255,0.55)";
      x.beginPath();
      const o = 10;
      x.moveTo(this.tileCX(-1, -1) - o, this.tileCY(-1, -1));
      x.lineTo(this.tileCX(16, -1), this.tileCY(16, -1) - o * 0.5);
      x.lineTo(this.tileCX(16, 16) + o, this.tileCY(16, 16));
      x.lineTo(this.tileCX(-1, 16), this.tileCY(-1, 16) + o * 0.5);
      x.closePath();
      x.lineWidth = shore;
      x.strokeStyle = "rgba(255,255,255,0.35)";
      x.stroke();
      x.restore();
      this.ensureBase();
      x.drawImage(this.baseCache, this.baseBX, this.baseBY);
      const { off, size } = soilRect(state.expansion);
      for (let py = off; py < off + size; py++) {
        for (let px = off; px < off + size; px++) {
          const pi = plotAt(px, py);
          const p = state.plots[pi];
          const prog = p ? plotProgress(pi) : 0;
          const tile = !p ? soilTile(0) : prog >= 1 ? soilTile(2) : soilTile(1);
          x.drawImage(tile, this.tileCX(px, py) - TILE_W / 2 - 1, this.tileCY(px, py) - TILE_H / 2 - 1, TILE_W + 2, TILE_H + 2);
        }
      }
      const draws = [];
      const anchor = (gx, gy) => gx + gy;
      for (const [tx, ty, kind] of NATURE) {
        if (kind === "") continue;
        draws.push({ d: anchor(tx, ty), f: () => {
          const spr = treeSprite(kind);
          const s = 0.55 + (tx * 7 + ty * 13) % 5 * 0.04;
          x.drawImage(spr, this.tileCX(tx, ty) - 65 * s, this.tileCY(tx, ty) - 138 * s + 6, 130 * s, 150 * s);
        } });
      }
      for (const [kind, b] of Object.entries(BLDG)) {
        const bx = b.x + b.w / 2 - 0.5, by = b.y + b.h / 2 - 0.5;
        draws.push({ d: anchor(bx + 0.8, by + 0.8), f: () => {
          const spr = buildingSprite(kind);
          const s = kind === "dock" ? 0.62 : 0.72;
          x.drawImage(spr, this.tileCX(bx, by) - 105 * s, this.tileCY(bx, by) - 185 * s + 4, 210 * s, (kind === "fusion" ? 210 : 200) * s);
        } });
      }
      for (let i = 0; i < MACHINE_SLOTS.length; i++) {
        const [mx, my] = MACHINE_SLOTS[i];
        const owned = i < state.machines.length;
        let ghostDef = null;
        if (!owned) {
          const next = MACHINES.find((m) => !state.machines.some((mm) => mm.type === m.id));
          if (next && state.level >= next.lvl && i === state.machines.length) ghostDef = next;
        }
        if (!owned && !ghostDef) continue;
        draws.push({ d: anchor(mx, my), f: () => {
          if (owned) {
            const m = state.machines[i];
            const spr = buildingSprite("machine", m.type);
            x.drawImage(spr, this.tileCX(mx, my) - 44, this.tileCY(mx, my) - 116, 88, 102);
            if (m.type === "mill") {
              x.save();
              x.translate(this.tileCX(mx, my), this.tileCY(mx, my) - 96);
              x.rotate(this.t * 0.8);
              x.drawImage(millBlades(), -34, -34, 68, 68);
              x.restore();
            }
            const done = m.queue.some((j) => now - j.at >= j.dur);
            if (done) this.bubble(x, this.tileCX(mx, my), this.tileCY(mx, my) - 120, "done");
            else if (m.queue.length) {
              const j = m.queue[0];
              const pr = Math.min(1, (now - j.at) / j.dur);
              this.progress(x, this.tileCX(mx, my), this.tileCY(mx, my) - 116, pr);
              if (now - j.at < j.dur && now > this.smokeAt) {
                this.smoke(this.tileCX(mx, my) + 10, this.tileCY(mx, my) - 100);
              }
            }
          } else {
            const spr = buildingSprite("ghost");
            x.drawImage(spr, this.tileCX(mx, my) - 44, this.tileCY(mx, my) - 60, 88, 60);
          }
        } });
      }
      if (now > this.smokeAt) this.smokeAt = now + 350;
      for (let i = 0; i < state.animals.length && i < PEN_SLOTS.length; i++) {
        const [px2, py2] = PEN_SLOTS[i];
        const a = state.animals[i];
        const def = ANIMALS.find((an) => an.id === a.type);
        draws.push({ d: anchor(px2, py2), f: () => {
          x.drawImage(buildingSprite("pen"), this.tileCX(px2, py2) - 44, this.tileCY(px2, py2) - 66, 88, 66);
          const n = Math.min(2, a.count);
          for (let k = 0; k < n; k++) {
            const ox = (k === 0 ? -12 : 12) + Math.sin(this.t * 2 + i * 3 + k) * 2;
            const bob = Math.sin(this.t * 3 + k * 2 + i) > 0.93 ? -4 : 0;
            const spr = animalSprite(a.type, Math.sin(this.t * 2.4 + k) > 0 ? 0 : 1);
            const s = 0.52 * (def.scale || 1);
            x.drawImage(spr, this.tileCX(px2, py2) + ox - 45 * s, this.tileCY(px2, py2) - 70 * s + bob, 90 * s, 76 * s);
          }
          const fed = a.fedAt > 0;
          if (fed) {
            const pr = Math.min(1, (now - a.fedAt) / a.fedDur);
            if (pr >= 1) this.bubble(x, this.tileCX(px2, py2), this.tileCY(px2, py2) - 84, "ready");
            else this.progress(x, this.tileCX(px2, py2), this.tileCY(px2, py2) - 78, pr);
          }
        } });
      }
      for (let pi = 0; pi < state.plots.length; pi++) {
        const p = state.plots[pi];
        if (!p) continue;
        const px = pi % 10 + PLOT_REF, py = Math.floor(pi / 10) + PLOT_REF;
        const prog = plotProgress(pi);
        const stageN = prog >= 1 ? 3 : prog >= 0.6 ? 2 : prog >= 0.25 ? 1 : 0;
        draws.push({ d: anchor(px, py) + 0.4, f: () => {
          const spr = cropSprite(p.crop, stageN);
          const sway = Math.sin(this.t * 1.6 + px * 1.3 + py * 0.7) * 0.05;
          x.save();
          x.translate(this.tileCX(px, py), this.tileCY(px, py) + 4);
          x.rotate(sway);
          if (prog >= 1) {
            x.save();
            x.globalAlpha = 0.5 + Math.sin(this.t * 3) * 0.2;
            x.fillStyle = "rgba(255,230,130,0.25)";
            x.beginPath();
            x.ellipse(0, -30, 34, 40, 0, 0, Math.PI * 2);
            x.fill();
            x.restore();
          }
          x.drawImage(spr, -46, -88, 92, 92);
          x.restore();
        } });
      }
      for (const d of state.decor) {
        draws.push({ d: anchor(d.x, d.y), f: () => {
          const spr = decorSprite(d.id);
          x.drawImage(spr, this.tileCX(d.x, d.y) - 40, this.tileCY(d.x, d.y) - 96, 80, 88);
        } });
      }
      draws.push({ d: anchor(this.pika.x, this.pika.y) + 0.5, f: () => {
        const spr = pikaSprite(this.pika.pose);
        const s = 0.72;
        x.drawImage(spr, this.tileCX(this.pika.x, this.pika.y) - 45 * s, this.tileCY(this.pika.x, this.pika.y) - 74 * s + (this.pika.pose === "walk" ? Math.abs(Math.sin(this.t * 8)) * -3 : 0), 90 * s, 80 * s);
      } });
      draws.sort((a, b) => a.d - b.d);
      for (const d of draws) d.f();
      if (this.placing && this.hoverTile) {
        const m = 4 - state.expansion;
        for (let gy = m; gy < ISLAND - m; gy++) for (let gx = m; gx < ISLAND - m; gx++) {
          if (isSoil(gx, gy) || tileOccupied(gx, gy)) continue;
          const ok = this.hoverTile.x === gx && this.hoverTile.y === gy;
          if (!ok) continue;
          x.save();
          x.globalAlpha = 0.85;
          x.fillStyle = "rgba(255,255,255,0.35)";
          x.beginPath();
          x.moveTo(this.tileCX(gx, gy), this.tileCY(gx, gy) - HH);
          x.lineTo(this.tileCX(gx + 1, gy), this.tileCY(gx + 1, gy) - HH + HH);
          x.lineTo(this.tileCX(gx + 1, gy + 1) - 0, this.tileCY(gx + 1, gy + 1));
          x.lineTo(this.tileCX(gx, gy + 1), this.tileCY(gx, gy + 1) - HH + HH);
          x.closePath();
          x.fill();
          x.strokeStyle = "#fff";
          x.lineWidth = 3;
          x.stroke();
          x.restore();
        }
      }
      this.particles = this.particles.filter((p) => p.life < p.max);
      for (const p of this.particles) {
        p.life += dtms / 16.6;
        p.x += p.vx;
        p.y += p.vy;
        if (p.kind === "spark") p.vy += 0.05;
        if (p.kind === "smoke") {
          p.vx *= 1.004;
          p.size += 0.06;
        }
        const alpha = 1 - p.life / p.max;
        x.save();
        x.globalAlpha = alpha * (p.kind === "smoke" ? 0.5 : 0.95);
        if (p.kind === "smoke") {
          x.fillStyle = "#f8f8f5";
          x.beginPath();
          x.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          x.fill();
        } else {
          x.fillStyle = p.col;
          x.beginPath();
          x.arc(p.x, p.y, p.size * alpha, 0, Math.PI * 2);
          x.fill();
          x.globalAlpha = alpha * 0.4;
          x.beginPath();
          x.arc(p.x, p.y, p.size * 2 * alpha, 0, Math.PI * 2);
          x.fill();
        }
        x.restore();
      }
      x.restore();
      if (weather === "rain") {
        x.save();
        x.strokeStyle = "rgba(200,230,255,0.5)";
        x.lineWidth = 1.6;
        for (let i = 0; i < 70; i++) {
          const rx = (i * 97 + this.t * 640) % (this.W + 60) - 30;
          const ry = (i * 211 + this.t * 900) % (this.H + 60) - 30;
          x.beginPath();
          x.moveTo(rx, ry);
          x.lineTo(rx - 5, ry + 14);
          x.stroke();
        }
        x.restore();
      }
      const hour = (/* @__PURE__ */ new Date()).getHours();
      if (hour >= 20 || hour < 6) {
        x.save();
        x.globalCompositeOperation = "multiply";
        x.fillStyle = "rgba(70,90,160,0.55)";
        x.fillRect(0, 0, this.W, this.H);
        x.restore();
        x.save();
        x.globalCompositeOperation = "lighter";
        for (let i = 0; i < 14; i++) {
          const fx = (i * 173 + Math.sin(this.t * 0.6 + i * 2) * 90 + this.t * 12) % this.W;
          const fy = (i * 97 + Math.cos(this.t * 0.5 + i) * 70) % this.H;
          const a = 0.3 + Math.sin(this.t * 2.5 + i * 1.7) * 0.3;
          x.globalAlpha = Math.max(0, a);
          x.fillStyle = "#d8f090";
          x.beginPath();
          x.arc(fx, fy, 2.2, 0, Math.PI * 2);
          x.fill();
          x.globalAlpha = Math.max(0, a) * 0.3;
          x.beginPath();
          x.arc(fx, fy, 6, 0, Math.PI * 2);
          x.fill();
        }
        x.restore();
      } else if (hour >= 17 || hour < 8) {
        x.save();
        x.globalCompositeOperation = "multiply";
        x.fillStyle = "rgba(255,200,140,0.16)";
        x.fillRect(0, 0, this.W, this.H);
        x.restore();
      }
      for (let i = 0; i < 6; i++) {
        const cs = 0.7 + i % 3 * 0.35;
        const spr = cloudSprite(i % 3);
        const cw = 100 * cs, ch = 50 * cs;
        const cx2 = (i * 337 + this.t * (9 + i * 2)) % (this.W + 300) - 150;
        const cy2 = 30 + i * 89 % Math.max(1, Math.floor(this.H * 0.34));
        x.save();
        x.globalAlpha = weather === "cloud" || weather === "rain" ? 0.85 : 0.55;
        x.drawImage(spr, cx2, cy2, cw, ch);
        x.restore();
      }
      this.ripples = this.ripples.filter((r) => now - r.t < 500);
      for (const r of this.ripples) {
        const p = (now - r.t) / 500;
        x.save();
        x.globalAlpha = (1 - p) * 0.5;
        x.strokeStyle = "#ffffff";
        x.lineWidth = 2.4;
        x.beginPath();
        x.ellipse(r.x, r.y, 8 + p * 34, (8 + p * 34) * 0.5, 0, 0, Math.PI * 2);
        x.stroke();
        x.restore();
      }
    }
    bubble(x, wx, wy, kind) {
      const bob = Math.sin(this.t * 4) * 3;
      x.save();
      x.translate(wx, wy + bob);
      x.fillStyle = "#fffdf6";
      x.strokeStyle = "rgba(128,85,51,0.35)";
      x.lineWidth = 2;
      x.beginPath();
      x.ellipse(0, 0, 16, 13, 0, 0, Math.PI * 2);
      x.fill();
      x.stroke();
      x.beginPath();
      x.moveTo(-4, 11);
      x.lineTo(0, 18);
      x.lineTo(4, 11);
      x.closePath();
      x.fillStyle = "#fffdf6";
      x.fill();
      if (kind === "done") {
        x.strokeStyle = "#58a942";
        x.lineWidth = 3.4;
        x.lineCap = "round";
        x.beginPath();
        x.moveTo(-6, 0);
        x.lineTo(-1, 5);
        x.lineTo(7, -6);
        x.stroke();
      } else {
        x.fillStyle = "#e8862e";
        x.font = "bold 17px Comfortaa, sans-serif";
        x.textAlign = "center";
        x.textBaseline = "middle";
        x.fillText("!", 0, 1);
      }
      x.restore();
    }
    progress(x, wx, wy, p) {
      x.save();
      x.translate(wx, wy);
      x.fillStyle = "rgba(30,27,22,0.55)";
      x.beginPath();
      x.roundRect(-22, -5, 44, 10, 5);
      x.fill();
      x.fillStyle = "#9dd761";
      x.beginPath();
      x.roundRect(-20, -3, Math.max(3, 40 * p), 6, 3);
      x.fill();
      x.restore();
    }
    ensureBase() {
      if (this.baseCache && this.baseStage === state.expansion) return;
      this.baseBX = this.tileCX(-1, 16) - TILE_W / 2 - 6;
      this.baseBY = this.tileCY(-1, -1) - TILE_H / 2 - 6;
      const w = this.tileCX(16, -1) + TILE_W / 2 + 6 - this.baseBX;
      const h = this.tileCY(16, 16) + TILE_H / 2 + 6 - this.baseBY;
      const c = document.createElement("canvas");
      c.width = Math.ceil(w);
      c.height = Math.ceil(h);
      const bx = c.getContext("2d");
      for (let y2 = 0; y2 < ISLAND; y2++) {
        for (let x2 = 0; x2 < ISLAND; x2++) {
          const v = (x2 * 7 + y2 * 13) % 4;
          const dx = this.tileCX(x2, y2) - TILE_W / 2 - this.baseBX;
          const dy = this.tileCY(x2, y2) - TILE_H / 2 - this.baseBY;
          bx.drawImage(grassTile(v), dx, dy);
          if (x2 === 0 || y2 === 0 || x2 === ISLAND - 1 || y2 === ISLAND - 1) {
            bx.save();
            bx.globalAlpha = 0.14;
            bx.fillStyle = "#1e3a12";
            bx.beginPath();
            const cx = dx + TILE_W / 2, cy = dy + TILE_H / 2;
            bx.moveTo(cx - HW, cy);
            bx.lineTo(cx, cy - HH);
            bx.lineTo(cx + HW, cy);
            bx.lineTo(cx, cy + HH);
            bx.closePath();
            bx.fill();
            bx.restore();
          }
        }
      }
      this.baseCache = c;
      this.baseStage = state.expansion;
    }
  };
  var NATURE = [
    [0, 0, "oakBig"],
    [15, 0, "pine"],
    [0, 15, "pine"],
    [15, 15, "oakBig"],
    [1, 4, "bush"],
    [14, 6, "bush"],
    [2, 14, "rock"],
    [13, 13, "bush"],
    [0, 7, "flowers"],
    [15, 9, "flowers"],
    [7, 0, "bush"],
    [10, 15, "rock"],
    [3, 0, "flowers"],
    [12, 1, "oak"],
    [1, 11, "oak"],
    [14, 11, "pine"]
  ];

  // src/main.ts
  init_ui();

  // src/panels.ts
  init_data();
  init_core();
  init_i18n();
  init_audio();
  init_ui();

  // src/icons.ts
  init_art();
  var urlCache = /* @__PURE__ */ new Map();
  function toURL(key, w, h, draw) {
    let u = urlCache.get(key);
    if (!u) {
      const c = document.createElement("canvas");
      c.width = w * SS;
      c.height = h * SS;
      const x = c.getContext("2d");
      x.scale(SS, SS);
      x.lineJoin = "round";
      x.lineCap = "round";
      draw(x);
      u = c.toDataURL("image/png");
      urlCache.set(key, u);
    }
    return u;
  }
  function rr2(x, px, py, w, h, r) {
    x.beginPath();
    x.moveTo(px + r, py);
    x.arcTo(px + w, py, px + w, py + h, r);
    x.arcTo(px + w, py + h, px, py + h, r);
    x.arcTo(px, py + h, px, py, r);
    x.arcTo(px, py, px + w, py, r);
    x.closePath();
  }
  function ell2(x, cx, cy, rx, ry, fill, stroke, lw = 2) {
    x.beginPath();
    x.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    if (fill) {
      x.fillStyle = fill;
      x.fill();
    }
    if (stroke) {
      x.strokeStyle = stroke;
      x.lineWidth = lw;
      x.stroke();
    }
  }
  function vg(x, py, h, c1, c2) {
    const g = x.createLinearGradient(0, py, 0, py + h);
    g.addColorStop(0, c1);
    g.addColorStop(1, c2);
    return g;
  }
  function star2(x, cx, cy, r, fill) {
    x.save();
    x.translate(cx, cy);
    x.beginPath();
    for (let i = 0; i < 4; i++) {
      x.rotate(Math.PI / 2);
      x.moveTo(0, -r);
      x.quadraticCurveTo(r * 0.18, -r * 0.18, r, 0);
      x.quadraticCurveTo(r * 0.18, r * 0.18, 0, r);
    }
    x.closePath();
    x.fillStyle = fill;
    x.fill();
    x.restore();
  }
  var IC = 128;
  function tierAura(x, t) {
    if (t >= 4) {
      const gold = t >= 5;
      const col = gold ? "255,205,80" : "200,215,235";
      const g = x.createRadialGradient(IC / 2, IC / 2 + 6, 20, IC / 2, IC / 2 + 6, 62);
      g.addColorStop(0, `rgba(${col},0)`);
      g.addColorStop(0.72, `rgba(${col},0.18)`);
      g.addColorStop(1, `rgba(${col},0)`);
      x.fillStyle = g;
      x.fillRect(0, 0, IC, IC);
      if (t === 6) {
        star2(x, IC - 20, 24, 9, "rgba(255,220,110,0.95)");
        star2(x, 20, IC - 30, 6, "rgba(255,220,110,0.75)");
        star2(x, IC - 30, IC - 18, 5, "rgba(255,235,160,0.6)");
      } else star2(x, IC - 20, 26, 6, gold ? "rgba(255,215,100,0.9)" : "rgba(230,240,255,0.9)");
    }
  }
  function baseShadow(x, cy = IC - 16, rx = 40) {
    x.save();
    x.globalAlpha = 0.14;
    ell2(x, IC / 2, cy, rx, rx * 0.28, "#1e3a12");
    x.restore();
  }
  var MOTIFS = {
    grain(x, t) {
      const s = 0.55 + t * 0.09;
      x.save();
      x.translate(IC / 2, IC - 22);
      x.scale(s, s);
      const gold = t >= 5 ? "#f5d460" : "#e8c65b";
      for (let i = 0; i < 5; i++) {
        const a = -Math.PI / 2 + (i - 2) * 0.38, len = 52;
        const tx = Math.cos(a) * len, ty = Math.sin(a) * len;
        x.strokeStyle = "#a0904a";
        x.lineWidth = 4.4;
        x.beginPath();
        x.moveTo(0, 0);
        x.quadraticCurveTo(tx * 0.4, ty * 0.7, tx, ty);
        x.stroke();
        ell2(x, tx, ty - 4, 6, 10, vg(x, ty - 14, 20, shade(gold, 0.25), gold), shade(gold, -0.3), 2);
      }
      if (t >= 3) {
        rr2(x, -26, -26, 52, 14, 6);
        x.fillStyle = t >= 5 ? "#f0c048" : "#e8dcc0";
        x.fill();
        x.strokeStyle = "#a8865a";
        x.lineWidth = 2.4;
        x.stroke();
      }
      if (t === 6) {
        ell2(x, 0, -46, 12, 12, "#ffe89a", "#c89820", 2.4);
        star2(x, 0, -46, 7, "#fff");
      }
      x.restore();
    },
    dairy(x, t) {
      baseShadow(x);
      const cx = IC / 2, by = IC - 24;
      if (t <= 1) {
        rr2(x, cx - 14, by - 44, 28, 44, 8);
        x.fillStyle = vg(x, by - 44, 44, "#ffffff", "#dce8f0");
        x.fill();
        x.strokeStyle = "#9ab4c4";
        x.lineWidth = 2.4;
        x.stroke();
        rr2(x, cx - 7, by - 56, 14, 14, 4);
        x.fillStyle = "#e8f0f4";
        x.fill();
        x.stroke();
        x.fillStyle = "#a8c8dc";
        x.fillRect(cx - 14, by - 30, 28, 8);
      } else if (t === 2) {
        ell2(x, cx, by - 18, 30, 16, "#f8f4ec", "#c8b8a8", 2.6);
        ell2(x, cx, by - 30, 24, 12, "#fdfaf4");
        star2(x, cx + 12, by - 40, 5, "#fff");
      } else if (t === 3) {
        rr2(x, cx - 30, by - 30, 60, 26, 6);
        x.fillStyle = vg(x, by - 30, 26, "#ffe9a8", "#f5d460");
        x.fill();
        x.strokeStyle = "#c8a030";
        x.lineWidth = 2.4;
        x.stroke();
        rr2(x, cx - 36, by - 12, 72, 12, 5);
        x.fillStyle = "#e8dcc0";
        x.fill();
        x.strokeStyle = "#b8a888";
        x.stroke();
      } else {
        const R = t === 6 ? 42 : t === 5 ? 38 : 34;
        ell2(x, cx, by - 22, R, R * 0.62, vg(x, by - 22 - R * 0.6, R * 1.2, "#ffe27a", "#e8b83a"), "#b8901e", 2.8);
        ell2(x, cx, by - 22 - R * 0.5, R * 0.94, R * 0.5, "#f8d45c");
        for (let i = 0; i < 5; i++) ell2(x, cx - 24 + i * 12, by - 24 - i % 2 * 8, 4, 3, "#e8a828");
        if (t === 6) {
          star2(x, cx, by - 22 - R * 0.5, 8, "#fff2c0");
        }
        if (t === 5) {
          ell2(x, cx, by - 22 - R * 0.5, 8, 4, "#fff2c0");
        }
      }
    },
    egg(x, t) {
      baseShadow(x, IC - 18, 34);
      const cx = IC / 2, by = IC - 20;
      const eggD = (ex, ey, r, col) => {
        x.beginPath();
        x.ellipse(ex, ey, r * 0.82, r, 0, 0, Math.PI * 2);
        x.fillStyle = vg(x, ey - r, r * 2, shade(col, 0.2), col);
        x.fill();
        x.strokeStyle = shade(col, -0.3);
        x.lineWidth = 2.2;
        x.stroke();
        x.save();
        x.globalAlpha = 0.55;
        ell2(x, ex - r * 0.28, ey - r * 0.4, r * 0.22, r * 0.3, "#fff");
        x.restore();
      };
      if (t === 1) eggD(cx, by - 26, 26, "#fff4e0");
      else if (t === 2) {
        eggD(cx - 16, by - 22, 20, "#fff4e0");
        eggD(cx + 16, by - 24, 22, "#fff4e0");
      } else if (t === 3) {
        x.beginPath();
        x.moveTo(cx - 34, by - 26);
        x.quadraticCurveTo(cx, by + 2, cx + 34, by - 26);
        x.lineTo(cx + 26, by - 44);
        x.lineTo(cx - 26, by - 44);
        x.closePath();
        x.fillStyle = "#d8a860";
        x.fill();
        x.strokeStyle = "#a87840";
        x.lineWidth = 2.6;
        x.stroke();
        x.strokeStyle = "#a87840";
        x.lineWidth = 2;
        for (let i = -1; i <= 1; i++) {
          x.beginPath();
          x.moveTo(cx + i * 18, by - 44);
          x.quadraticCurveTo(cx + i * 20, by - 28, cx + i * 22, by - 12);
          x.stroke();
        }
        eggD(cx - 14, by - 50, 14, "#fff4e0");
        eggD(cx + 12, by - 52, 15, "#fff4e0");
      } else if (t === 4) {
        rr2(x, cx - 34, by - 36, 68, 34, 6);
        x.fillStyle = "#c89858";
        x.fill();
        x.strokeStyle = "#986830";
        x.lineWidth = 2.6;
        x.stroke();
        eggD(cx - 18, by - 42, 15, "#fff4e0");
        eggD(cx, by - 44, 16, "#fff4e0");
        eggD(cx + 18, by - 42, 15, "#fff4e0");
      } else if (t === 5) eggD(cx, by - 32, 32, "#ffd84a");
      else {
        eggD(cx, by - 36, 38, "#fff4e0");
        x.strokeStyle = "#c8a030";
        x.lineWidth = 3;
        x.beginPath();
        x.moveTo(cx - 26, by - 44);
        x.quadraticCurveTo(cx, by - 58, cx + 26, by - 44);
        x.stroke();
        star2(x, cx, by - 36, 7, "#f0c848");
      }
    },
    flower(x, t) {
      baseShadow(x);
      const cx = IC / 2, by = IC - 22;
      x.strokeStyle = "#5a9a3e";
      x.lineWidth = 4;
      x.beginPath();
      x.moveTo(cx, by);
      x.quadraticCurveTo(cx - 6, by - 26, cx, by - 44);
      x.stroke();
      ell2(x, cx - 10, by - 20, 10, 5, "#7ab84e", "#4e8432", 1.8);
      ell2(x, cx + 10, by - 28, 10, 5, "#7ab84e", "#4e8432", 1.8);
      const petal = (px, py, r, col) => {
        for (let i = 0; i < 6; i++) {
          const a = i * Math.PI / 3;
          ell2(x, px + Math.cos(a) * r * 0.7, py + Math.sin(a) * r * 0.7, r * 0.55, r * 0.55, col, shade(col, -0.25), 1.4);
        }
        ell2(x, px, py, r * 0.45, r * 0.45, "#f5d460", "#c89820", 1.4);
      };
      if (t === 1) {
        ell2(x, cx, by - 50, 10, 13, "#f0a0b8", "#c06888", 2.2);
        ell2(x, cx - 8, by - 42, 7, 10, "#88c05a", "#5a8a3a", 1.8);
        ell2(x, cx + 8, by - 42, 7, 10, "#88c05a", "#5a8a3a", 1.8);
      } else if (t === 2) petal(cx, by - 52, 16, "#f088a8");
      else if (t === 3) {
        petal(cx - 18, by - 50, 13, "#f088a8");
        petal(cx + 18, by - 52, 13, "#e87898");
        petal(cx, by - 62, 12, "#f8a8c0");
        ell2(x, cx - 30, by - 18, 8, 5, "#88c05a", "#5a8a3a", 1.6);
        ell2(x, cx + 30, by - 18, 8, 5, "#88c05a", "#5a8a3a", 1.6);
      } else if (t === 4) {
        x.beginPath();
        x.moveTo(cx - 16, by - 30);
        x.quadraticCurveTo(cx - 24, by - 4, cx - 12, by);
        x.lineTo(cx + 12, by);
        x.quadraticCurveTo(cx + 24, by - 4, cx + 16, by - 30);
        x.closePath();
        x.fillStyle = vg(x, by - 30, 30, "#a8d8e8", "#78a8c0");
        x.fill();
        x.strokeStyle = "#587e94";
        x.lineWidth = 2.4;
        x.stroke();
        petal(cx, by - 44, 12, "#f088a8");
        x.strokeStyle = "#5a9a3e";
        x.lineWidth = 3;
        x.beginPath();
        x.moveTo(cx, by - 30);
        x.lineTo(cx, by - 40);
        x.stroke();
      } else {
        const col = t === 5 ? "#e84a68" : "#f06888";
        for (const [px, py, r] of [[cx - 22, by - 48, 12], [cx + 22, by - 50, 12], [cx, by - 62, 11], [cx - 10, by - 38, 10], [cx + 12, by - 36, 10]]) {
          for (let i = 0; i < 5; i++) {
            const a = i * Math.PI * 2 / 5 + px;
            ell2(x, px + Math.cos(a) * r * 0.6, py + Math.sin(a) * r * 0.6, r * 0.55, r * 0.55, col, shade(col, -0.28), 1.4);
          }
          ell2(x, px, py, r * 0.4, r * 0.4, "#f5d460");
        }
      }
    },
    honey(x, t) {
      baseShadow(x);
      const cx = IC / 2, by = IC - 22;
      const amber = "#e89a28";
      if (t === 1) {
        x.beginPath();
        x.moveTo(cx, by - 56);
        x.quadraticCurveTo(cx + 22, by - 26, cx + 16, by - 14);
        x.quadraticCurveTo(cx + 8, by - 2, cx, by - 2);
        x.quadraticCurveTo(cx - 8, by - 2, cx - 16, by - 14);
        x.quadraticCurveTo(cx - 22, by - 26, cx, by - 56);
        x.closePath();
        x.fillStyle = vg(x, by - 56, 54, "#ffc44a", amber);
        x.fill();
        x.strokeStyle = "#b8741a";
        x.lineWidth = 2.4;
        x.stroke();
        x.save();
        x.globalAlpha = 0.6;
        ell2(x, cx - 6, by - 26, 4, 7, "#ffe8a0");
        x.restore();
      } else if (t <= 3) {
        const dark = t === 3;
        const col = dark ? "#b06818" : amber;
        rr2(x, cx - 24, by - 44, 48, 44, 10);
        x.fillStyle = vg(x, by - 44, 44, shade(col, 0.25), col);
        x.fill();
        x.strokeStyle = "#a8681a";
        x.lineWidth = 2.6;
        x.stroke();
        rr2(x, cx - 20, by - 54, 40, 12, 5);
        x.fillStyle = "#d8a860";
        x.fill();
        x.strokeStyle = "#a87838";
        x.lineWidth = 2.2;
        x.stroke();
        x.fillStyle = "rgba(255,240,180,0.5)";
        x.fillRect(cx - 18, by - 38, 8, 30);
      } else {
        const R = t === 6 ? 40 : t === 5 ? 36 : 32;
        const gold = t >= 5;
        ell2(x, cx, by - 26, R, R * 0.85, vg(x, by - 26 - R, R * 2, gold ? "#ffd456" : "#e8a83a", gold ? "#e8a52a" : "#b87a1e"), "#96620e", 2.8);
        x.strokeStyle = "rgba(120,70,10,0.5)";
        x.lineWidth = 2;
        for (let row = -1; row <= 1; row++) for (let col = -1; col <= 1; col++) {
          const hx = cx + col * 15 + (row % 2 ? 7 : 0), hy = by - 26 + row * 12;
          x.beginPath();
          for (let i = 0; i < 6; i++) {
            const a = i * Math.PI / 3 + Math.PI / 6;
            const px2 = hx + Math.cos(a) * 7, py2 = hy + Math.sin(a) * 7;
            i === 0 ? x.moveTo(px2, py2) : x.lineTo(px2, py2);
          }
          x.closePath();
          x.stroke();
        }
        if (t === 6) {
          x.beginPath();
          x.moveTo(cx - 12, by - 66);
          x.lineTo(-12 + cx, by - 78);
          x.lineTo(cx - 4, by - 70);
          x.lineTo(cx, by - 80);
          x.lineTo(cx + 4, by - 70);
          x.lineTo(cx + 12, by - 78);
          x.lineTo(cx + 12, by - 66);
          x.closePath();
          x.fillStyle = "#f5d460";
          x.fill();
          x.strokeStyle = "#b8901e";
          x.lineWidth = 2;
          x.stroke();
        }
      }
    },
    wool(x, t) {
      baseShadow(x);
      const cx = IC / 2, by = IC - 22;
      const col = t >= 5 ? "#f5d460" : "#c8d8e8";
      if (t === 1) {
        ell2(x, cx, by - 26, 26, 26, col, shade(col, -0.3), 2.6);
        x.strokeStyle = shade(col, -0.22);
        x.lineWidth = 2.4;
        x.beginPath();
        x.arc(cx, by - 26, 26, 0.3, 2.4);
        x.stroke();
        x.beginPath();
        x.arc(cx, by - 26, 20, 2.8, 5.2);
        x.stroke();
        x.beginPath();
        x.moveTo(cx + 24, by - 30);
        x.quadraticCurveTo(cx + 40, by - 36, cx + 44, by - 48);
        x.stroke();
      } else if (t === 2) {
        for (let i = 0; i < 3; i++) ell2(x, cx - 18 + i * 18, by - 22 - i % 2 * 8, 16, 16, i % 2 ? shade(col, 0.1) : col, shade(col, -0.3), 2.4);
        x.strokeStyle = shade(col, -0.25);
        x.lineWidth = 2;
        for (let i = 0; i < 3; i++) {
          x.beginPath();
          x.arc(cx - 18 + i * 18, by - 22 - i % 2 * 8, 16, 0.5, 2.2);
          x.stroke();
        }
      } else if (t === 3) {
        rr2(x, cx - 32, by - 34, 64, 30, 6);
        x.fillStyle = vg(x, by - 34, 30, shade(col, 0.2), col);
        x.fill();
        x.strokeStyle = shade(col, -0.3);
        x.lineWidth = 2.4;
        x.stroke();
        x.strokeStyle = shade(col, -0.18);
        x.lineWidth = 2;
        for (let i = 1; i < 4; i++) {
          x.beginPath();
          x.moveTo(cx - 32, by - 34 + i * 7.5);
          x.lineTo(cx + 32, by - 34 + i * 7.5);
          x.stroke();
        }
        x.beginPath();
        x.moveTo(cx - 20, by - 36);
        x.quadraticCurveTo(cx - 8, by - 20, cx - 22, by - 4);
        x.stroke();
      } else if (t === 4) {
        x.beginPath();
        x.moveTo(cx - 30, by - 48);
        x.quadraticCurveTo(cx, by - 20, cx + 30, by - 48);
        x.lineTo(cx + 24, by - 6);
        x.quadraticCurveTo(cx, by + 6, cx - 24, by - 6);
        x.closePath();
        x.fillStyle = vg(x, by - 48, 52, shade(col, 0.25), col);
        x.fill();
        x.strokeStyle = shade(col, -0.3);
        x.lineWidth = 2.6;
        x.stroke();
        x.strokeStyle = shade(col, -0.2);
        x.lineWidth = 2;
        for (const dy of [-36, -26, -16]) {
          x.beginPath();
          x.moveTo(cx - 26, by + dy * 0.9);
          x.quadraticCurveTo(cx, by + dy * 0.9 + 12, cx + 26, by + dy * 0.9);
          x.stroke();
        }
      } else {
        x.beginPath();
        x.moveTo(cx - 34, by - 50);
        x.quadraticCurveTo(cx, by - 24, cx + 34, by - 50);
        x.lineTo(cx + 28, by - 4);
        x.quadraticCurveTo(cx, by + 8, cx - 28, by - 4);
        x.closePath();
        x.fillStyle = vg(x, by - 50, 56, shade(col, 0.28), col);
        x.fill();
        x.strokeStyle = shade(col, -0.32);
        x.lineWidth = 2.8;
        x.stroke();
        x.strokeStyle = shade(col, -0.22);
        x.lineWidth = 2;
        for (const dy of [-38, -28, -18, -8]) {
          x.beginPath();
          x.moveTo(cx - 28, by + dy);
          x.quadraticCurveTo(cx, by + dy + 12, cx + 28, by + dy);
          x.stroke();
        }
        star2(x, cx, by - 32, 8, t === 6 ? "#fff" : "#f0c848");
        star2(x, cx - 16, by - 22, 5, t === 6 ? "#fff" : "#f0c848");
        star2(x, cx + 16, by - 22, 5, t === 6 ? "#fff" : "#f0c848");
      }
    },
    wood(x, t) {
      baseShadow(x);
      const cx = IC / 2, by = IC - 22;
      const logD = (lx, ly, r, len, rot, col) => {
        x.save();
        x.translate(lx, ly);
        x.rotate(rot);
        rr2(x, -len / 2, -r, len, r * 2, r * 0.5);
        x.fillStyle = vg(x, -r, r * 2, shade(col, 0.15), col);
        x.fill();
        x.strokeStyle = shade(col, -0.32);
        x.lineWidth = 2.2;
        x.stroke();
        ell2(x, len / 2 - 2, 0, r * 0.42, r * 0.85, "#e8d0a8", shade(col, -0.32), 2);
        x.strokeStyle = "#c8a878";
        x.lineWidth = 1.4;
        x.beginPath();
        x.arc(len / 2 - 2, 0, r * 0.3, 0, Math.PI * 2);
        x.stroke();
        x.restore();
      };
      if (t === 1) {
        x.strokeStyle = "#a87848";
        x.lineWidth = 6;
        x.beginPath();
        x.moveTo(cx - 26, by);
        x.quadraticCurveTo(cx - 4, by - 22, cx + 24, by - 10);
        x.stroke();
        x.lineWidth = 4;
        x.beginPath();
        x.moveTo(cx - 8, by - 13);
        x.lineTo(cx + 2, by - 30);
        x.stroke();
      } else if (t === 2) {
        logD(cx, by - 14, 11, 40, -0.12, "#a87848");
        logD(cx + 6, by - 2, 11, 40, -0.12, "#98683a");
      } else if (t === 3) {
        logD(cx - 8, by - 26, 13, 48, -1.35, "#a87848");
        logD(cx + 14, by - 12, 13, 48, -1.35, "#98683a");
        logD(cx - 4, by + 2, 13, 44, -1.3, "#a87848");
      } else if (t === 4) {
        for (let i = 0; i < 3; i++) {
          const py = by - 34 + i * 15;
          rr2(x, cx - 32, py, 64, 12, 4);
          x.fillStyle = i % 2 ? "#d8ab72" : "#c89858";
          x.fill();
          x.strokeStyle = "#986830";
          x.lineWidth = 2;
          x.stroke();
        }
      } else {
        const gold = t === 6;
        rr2(x, cx - 26, by - 46, 52, 46, 8);
        x.fillStyle = gold ? vg(x, by - 46, 46, "#ffe27a", "#e8a52a") : vg(x, by - 46, 46, "#e0b87e", "#b8874e");
        x.fill();
        x.strokeStyle = gold ? "#b8801e" : "#8a5e2e";
        x.lineWidth = 2.6;
        x.stroke();
        x.strokeStyle = gold ? "rgba(150,90,10,0.5)" : "rgba(120,80,40,0.5)";
        x.lineWidth = 2;
        x.beginPath();
        x.moveTo(cx - 16, by - 12);
        x.lineTo(cx - 8, by - 34);
        x.lineTo(cx, by - 16);
        x.lineTo(cx + 8, by - 36);
        x.lineTo(cx + 16, by - 12);
        x.stroke();
        if (gold) star2(x, cx, by - 24, 9, "#fff");
      }
    },
    fish(x, t) {
      baseShadow(x, IC - 16, 36);
      const cx = IC / 2, by = IC - 26;
      const col = t === 5 ? "#f0b84a" : t === 6 ? "#6aa8f0" : t === 4 ? "#e8874a" : t === 3 ? "#88b8e8" : t === 2 ? "#a8c8d8" : "#b8d0dc";
      const size = 0.5 + t * 0.11;
      x.save();
      x.translate(cx, by - 14);
      x.scale(size, size);
      x.beginPath();
      x.moveTo(-34, 0);
      x.quadraticCurveTo(-6, -22, 22, -6);
      x.quadraticCurveTo(28, 0, 22, 6);
      x.quadraticCurveTo(-6, 22, -34, 0);
      x.closePath();
      x.fillStyle = vg(x, -22, 44, shade(col, 0.25), col);
      x.fill();
      x.strokeStyle = shade(col, -0.32);
      x.lineWidth = 2.6;
      x.stroke();
      x.beginPath();
      x.moveTo(18, -2);
      x.lineTo(38, -16);
      x.lineTo(34, 0);
      x.lineTo(38, 16);
      x.closePath();
      x.fillStyle = shade(col, -0.1);
      x.fill();
      x.stroke();
      x.beginPath();
      x.moveTo(-6, -14);
      x.lineTo(2, -26);
      x.lineTo(10, -12);
      x.closePath();
      x.fillStyle = shade(col, 0.12);
      x.fill();
      x.stroke();
      x.strokeStyle = "rgba(255,255,255,0.35)";
      x.lineWidth = 1.6;
      x.beginPath();
      x.arc(-8, 0, 8, -0.8, 0.8);
      x.stroke();
      x.beginPath();
      x.arc(-8, 0, 14, -0.7, 0.7);
      x.stroke();
      ell2(x, -22, -4, 4, 4, "#fff", shade(col, -0.3), 1.4);
      ell2(x, -23, -4, 2, 2, "#2a2420");
      if (t >= 5) star2(x, 0, -18, 8, "#ffe08a");
      x.restore();
    },
    gem(x, t) {
      baseShadow(x);
      const cx = IC / 2, by = IC - 22;
      if (t === 6) {
        x.beginPath();
        x.moveTo(cx - 30, by - 22);
        x.lineTo(cx - 30, by - 46);
        x.lineTo(cx - 16, by - 34);
        x.lineTo(cx, by - 54);
        x.lineTo(cx + 16, by - 34);
        x.lineTo(cx + 30, by - 46);
        x.lineTo(cx + 30, by - 22);
        x.closePath();
        x.fillStyle = vg(x, by - 54, 34, "#ffe27a", "#e8a52a");
        x.fill();
        x.strokeStyle = "#b8801e";
        x.lineWidth = 2.8;
        x.stroke();
        ell2(x, cx - 30, by - 48, 5, 5, "#e86a8a", "#a83a5a", 1.6);
        ell2(x, cx, by - 58, 6, 6, "#88b8f0", "#4a7ac0", 1.6);
        ell2(x, cx + 30, by - 48, 5, 5, "#88e0a0", "#4aa868", 1.6);
        rr2(x, cx - 32, by - 20, 64, 10, 5);
        x.fillStyle = "#f0c848";
        x.fill();
        x.strokeStyle = "#b8801e";
        x.stroke();
        return;
      }
      if (t === 5) {
        x.beginPath();
        x.moveTo(cx, by - 52);
        x.lineTo(cx + 26, by - 34);
        x.lineTo(cx + 16, by - 6);
        x.lineTo(cx - 16, by - 6);
        x.lineTo(cx - 26, by - 34);
        x.closePath();
        x.fillStyle = vg(x, by - 52, 48, "#e0a8f8", "#a858d8");
        x.fill();
        x.strokeStyle = "#783898";
        x.lineWidth = 2.8;
        x.stroke();
        x.beginPath();
        x.moveTo(cx, by - 52);
        x.lineTo(cx, by - 6);
        x.moveTo(cx - 26, by - 34);
        x.lineTo(cx + 26, by - 34);
        x.strokeStyle = "rgba(255,255,255,0.5)";
        x.lineWidth = 1.8;
        x.stroke();
        star2(x, cx + 8, by - 40, 6, "rgba(255,255,255,0.8)");
        return;
      }
      if (t <= 2) {
        const col = t === 1 ? "#9aa8b8" : "#c8b8e8";
        x.save();
        x.translate(cx, by - 26);
        x.rotate(0.3);
        x.beginPath();
        x.moveTo(0, -26);
        x.lineTo(16, -4);
        x.lineTo(6, 22);
        x.lineTo(-12, 14);
        x.lineTo(-14, -10);
        x.closePath();
        x.fillStyle = vg(x, -26, 48, shade(col, 0.3), col);
        x.fill();
        x.strokeStyle = shade(col, -0.35);
        x.lineWidth = 2.6;
        x.stroke();
        x.beginPath();
        x.moveTo(0, -26);
        x.lineTo(-4, 16);
        x.strokeStyle = "rgba(255,255,255,0.4)";
        x.lineWidth = 2;
        x.stroke();
        x.restore();
      } else {
        const col = "#d8b8f8";
        x.beginPath();
        x.moveTo(cx, by - 50);
        x.lineTo(cx + 22, by - 30);
        x.lineTo(cx + 14, by - 4);
        x.lineTo(cx - 14, by - 4);
        x.lineTo(cx - 22, by - 30);
        x.closePath();
        x.fillStyle = vg(x, by - 50, 46, shade(col, 0.3), col);
        x.fill();
        x.strokeStyle = "#9060b8";
        x.lineWidth = 2.6;
        x.stroke();
        x.strokeStyle = "rgba(255,255,255,0.5)";
        x.lineWidth = 1.8;
        x.beginPath();
        x.moveTo(cx, by - 50);
        x.lineTo(cx, by - 4);
        x.moveTo(cx - 22, by - 30);
        x.lineTo(cx + 22, by - 30);
        x.stroke();
      }
    },
    mushroom(x, t) {
      baseShadow(x);
      const cx = IC / 2, by = IC - 22;
      const capCol = t === 5 ? "#f0c848" : t === 3 ? "#d84a3a" : t === 6 ? "#e8a83a" : "#c87858";
      const size = 0.7 + t * 0.1;
      x.save();
      x.translate(cx, by);
      x.scale(size, size);
      rr2(x, -11, -34, 22, 34, 9);
      x.fillStyle = vg(x, -34, 34, "#fdf6e8", "#e0d0b0");
      x.fill();
      x.strokeStyle = "#b0a080";
      x.lineWidth = 2.2;
      x.stroke();
      x.beginPath();
      x.moveTo(-34, -28);
      x.quadraticCurveTo(0, -66, 34, -28);
      x.quadraticCurveTo(0, -18, -34, -28);
      x.closePath();
      x.fillStyle = vg(x, -66, 42, shade(capCol, 0.22), capCol);
      x.fill();
      x.strokeStyle = shade(capCol, -0.34);
      x.lineWidth = 2.6;
      x.stroke();
      ell2(x, -16, -38, 5.4, 4, "#fff8e8");
      ell2(x, 8, -44, 6.4, 4.6, "#fff8e8");
      ell2(x, 20, -33, 4, 3, "#fff8e8");
      ell2(x, -5, -24, 2.6, 3.2, "#3a2c20");
      ell2(x, 6, -24, 2.6, 3.2, "#3a2c20");
      if (t >= 5) star2(x, -24, -44, 7, "#fff0b0");
      if (t === 6) {
        star2(x, 26, -48, 8, "#fff0b0");
        ell2(x, 0, -56, 5, 5, "#ffe89a", "#c89820", 1.6);
      }
      x.restore();
    },
    seashell(x, t) {
      baseShadow(x);
      const cx = IC / 2, by = IC - 22;
      if (t === 2) {
        ell2(x, cx, by - 28, 26, 26, vg(x, by - 54, 52, "#fff", "#e8e0e8"), "#b8b0c0", 2.6);
        x.save();
        x.globalAlpha = 0.8;
        ell2(x, cx - 8, by - 36, 7, 5, "#fff");
        x.restore();
        return;
      }
      if (t === 3) {
        x.strokeStyle = "#d8c8a8";
        x.lineWidth = 3;
        x.beginPath();
        x.arc(cx, by + 6, 34, Math.PI * 1.15, Math.PI * 1.85);
        x.stroke();
        for (let i = 0; i < 5; i++) {
          const a = Math.PI * 1.15 + i * Math.PI * 0.175;
          ell2(x, cx + Math.cos(a) * 34, by + 6 + Math.sin(a) * 34, 8, 8, "#f0ecf0", "#b0a8b8", 1.8);
        }
        ell2(x, cx, by - 40, 10, 10, "#fff", "#c0b8c8", 2);
        return;
      }
      if (t === 4) {
        rr2(x, cx - 30, by - 34, 60, 32, 8);
        x.fillStyle = vg(x, -34 + by, 32, "#f0e8f0", "#c8b8d8");
        x.fill();
        x.strokeStyle = "#9078a8";
        x.lineWidth = 2.6;
        x.stroke();
        rr2(x, cx - 34, by - 40, 68, 12, 6);
        x.fillStyle = "#d8c8e8";
        x.fill();
        x.stroke();
        star2(x, cx, by - 18, 7, "#f0c848");
        return;
      }
      if (t >= 5) {
        const col = t === 5 ? "#f0888a" : "#f0a8c0";
        x.strokeStyle = col;
        x.lineCap = "round";
        for (const [sx, ang, len] of [[-14, -0.5, 40], [0, 0, 52], [14, 0.5, 40]]) {
          x.lineWidth = 9;
          x.beginPath();
          x.moveTo(cx + sx, by);
          x.quadraticCurveTo(cx + sx + ang * 20, by - len * 0.6, cx + sx + ang * 26, by - len);
          x.stroke();
          x.lineWidth = 6;
          x.beginPath();
          x.moveTo(cx + sx + ang * 12, by - len * 0.5);
          x.quadraticCurveTo(cx + sx + ang * 12 - 14, by - len * 0.7, cx + sx + ang * 12 - 16, by - len * 0.9);
          x.stroke();
          x.beginPath();
          x.moveTo(cx + sx + ang * 12, by - len * 0.5);
          x.quadraticCurveTo(cx + sx + ang * 12 + 14, by - len * 0.72, cx + sx + ang * 12 + 15, by - len * 0.92);
          x.stroke();
        }
        for (const [px2, py2] of [[cx - 26, by - 44], [cx + 24, by - 46], [cx, by - 56]]) ell2(x, px2, py2, 5, 5, shade(col, 0.3), shade(col, -0.25), 1.6);
        return;
      }
      x.beginPath();
      x.moveTo(cx, by - 52);
      x.quadraticCurveTo(cx + 34, by - 40, cx + 30, by - 6);
      x.quadraticCurveTo(cx, by + 6, cx - 30, by - 6);
      x.quadraticCurveTo(cx - 34, by - 40, cx, by - 52);
      x.closePath();
      x.fillStyle = vg(x, by - 52, 58, "#f8e8f0", "#e8b8cc");
      x.fill();
      x.strokeStyle = "#b08098";
      x.lineWidth = 2.6;
      x.stroke();
      x.strokeStyle = "rgba(176,128,152,0.6)";
      x.lineWidth = 2;
      for (const dx of [-18, -8, 0, 8, 18]) {
        x.beginPath();
        x.moveTo(cx, by - 50);
        x.quadraticCurveTo(cx + dx * 1.2, by - 24, cx + dx * 1.4, by - 8);
        x.stroke();
      }
    }
  };
  function chainIconURL(chainId, tier) {
    return toURL(`chain:${chainId}:${tier}`, IC, IC, (x) => {
      tierAura(x, tier);
      (MOTIFS[chainId] || MOTIFS.grain)(x, tier);
    });
  }
  var PRODUCTS = {
    egg(x) {
      MOTIFS.egg(x, 1);
    },
    milk(x) {
      MOTIFS.dairy(x, 1);
    },
    wool(x) {
      MOTIFS.wool(x, 1);
    },
    truffle(x) {
      ell2(x, 64, 70, 34, 30, vg(x, 40, 60, "#5a4838", "#3e3026"), "#2a2018", 2.6);
      for (const [px, py] of [[52, 62], [74, 58], [64, 78]]) ell2(x, px, py, 6, 4, "rgba(200,180,150,0.3)");
    },
    honey(x) {
      MOTIFS.honey(x, 1);
    },
    cocoon(x) {
      ell2(x, 64, 70, 22, 30, vg(x, 40, 60, "#f0ead8", "#d0c4a4"), "#a89878", 2.4);
      x.strokeStyle = "#b8a888";
      x.lineWidth = 2;
      for (let i = 0; i < 4; i++) {
        x.beginPath();
        x.ellipse(64, 70, 22 - i * 4, 30 - i * 5, 0.3, 0, Math.PI * 2);
        x.stroke();
      }
    },
    feather(x) {
      x.save();
      x.translate(64, 66);
      x.rotate(0.5);
      x.beginPath();
      x.moveTo(0, -36);
      x.quadraticCurveTo(20, -10, 8, 30);
      x.quadraticCurveTo(-6, 34, -12, 8);
      x.quadraticCurveTo(-14, -20, 0, -36);
      x.closePath();
      x.fillStyle = vg(x, -36, 70, "#fff", "#e0dcf0");
      x.fill();
      x.strokeStyle = "#b0a8c8";
      x.lineWidth = 2.2;
      x.stroke();
      x.strokeStyle = "#c0b8d8";
      x.lineWidth = 1.6;
      x.beginPath();
      x.moveTo(0, -34);
      x.lineTo(4, 30);
      x.stroke();
      x.restore();
    },
    nut(x) {
      for (const [px, py] of [[52, 74], [76, 74], [64, 58]]) {
        ell2(x, px, py, 13, 15, vg(x, py - 15, 30, "#d8a86a", "#b8844a"), "#8a5e2e", 2.2);
        x.save();
        x.globalAlpha = 0.5;
        ell2(x, px - 4, py - 6, 4, 3, "#f0d8b0");
        x.restore();
      }
    },
    log(x) {
      x.save();
      x.translate(64, 70);
      x.rotate(-0.2);
      rr2(x, -36, -13, 72, 26, 8);
      x.fillStyle = vg(x, -13, 26, "#b8874e", "#98683a");
      x.fill();
      x.strokeStyle = "#6e4a26";
      x.lineWidth = 2.4;
      x.stroke();
      ell2(x, 32, 0, 8, 13, "#e8d0a8", "#6e4a26", 2);
      x.strokeStyle = "#8a6236";
      x.lineWidth = 1.8;
      x.beginPath();
      x.moveTo(-30, -4);
      x.lineTo(20, -6);
      x.stroke();
      x.restore();
    },
    bread(x) {
      x.beginPath();
      x.moveTo(30, 88);
      x.quadraticCurveTo(22, 56, 40, 44);
      x.quadraticCurveTo(64, 30, 88, 44);
      x.quadraticCurveTo(106, 56, 98, 88);
      x.closePath();
      x.fillStyle = vg(x, 30, 58, "#e8b06a", "#c89048");
      x.fill();
      x.strokeStyle = "#96682c";
      x.lineWidth = 2.8;
      x.stroke();
      x.strokeStyle = "rgba(150,104,44,0.7)";
      x.lineWidth = 3;
      for (let i = 0; i < 3; i++) {
        x.beginPath();
        x.moveTo(42 + i * 16, 76);
        x.quadraticCurveTo(46 + i * 16, 64, 42 + i * 16, 54);
        x.stroke();
      }
    },
    cake(x) {
      rr2(x, 36, 58, 56, 30, 8);
      x.fillStyle = vg(x, 58, 30, "#f8e8c8", "#e8c898");
      x.fill();
      x.strokeStyle = "#b89868";
      x.lineWidth = 2.4;
      x.stroke();
      x.beginPath();
      x.moveTo(36, 58);
      x.quadraticCurveTo(64, 34, 92, 58);
      x.closePath();
      x.fillStyle = "#f0a8c0";
      x.fill();
      x.strokeStyle = "#c07898";
      x.stroke();
      ell2(x, 64, 40, 5, 5, "#e84a68", "#a82a44", 1.6);
    },
    omelet(x) {
      ell2(x, 64, 74, 34, 20, vg(x, 54, 40, "#f8e070", "#e8c040"), "#b8901e", 2.6);
      ell2(x, 58, 72, 10, 7, "#fff8e0", "#e0c880", 2);
      ell2(x, 72, 76, 8, 6, "#fff8e0", "#e0c880", 2);
    },
    flour(x) {
      rr2(x, 40, 50, 48, 44, 12);
      x.fillStyle = vg(x, 50, 44, "#f5ecd8", "#e0d0b0");
      x.fill();
      x.strokeStyle = "#b0a080";
      x.lineWidth = 2.6;
      x.stroke();
      rr2(x, 44, 42, 40, 14, 6);
      x.fillStyle = "#d8c8a8";
      x.fill();
      x.stroke();
      x.strokeStyle = "#c0b090";
      x.lineWidth = 2;
      x.beginPath();
      x.moveTo(48, 68);
      x.quadraticCurveTo(64, 60, 80, 68);
      x.stroke();
    },
    cheese(x) {
      MOTIFS.dairy(x, 4);
    },
    feed(x) {
      rr2(x, 42, 52, 44, 42, 10);
      x.fillStyle = vg(x, 52, 42, "#e0c078", "#c8a050");
      x.fill();
      x.strokeStyle = "#98783a";
      x.lineWidth = 2.6;
      x.stroke();
      rr2(x, 46, 44, 36, 12, 5);
      x.fillStyle = "#c8a868";
      x.fill();
      x.stroke();
      for (let i = 0; i < 5; i++) ell2(x, 50 + i * 7, 70 + i % 2 * 6, 3, 2, "#a8823e");
    },
    oil(x) {
      rr2(x, 46, 56, 36, 40, 10);
      x.fillStyle = "rgba(240,210,110,0.9)";
      x.fill();
      x.strokeStyle = "#a8822e";
      x.lineWidth = 2.6;
      x.stroke();
      rr2(x, 54, 42, 20, 16, 5);
      x.fillStyle = "#d8b860";
      x.fill();
      x.stroke();
      ell2(x, 64, 34, 7, 9, "#f0c84a", "#a8822e", 2);
    },
    jam(x) {
      rr2(x, 42, 50, 44, 44, 10);
      x.fillStyle = vg(x, 50, 44, "#e86868", "#c04040");
      x.fill();
      x.strokeStyle = "#8a2828";
      x.lineWidth = 2.6;
      x.stroke();
      rr2(x, 46, 42, 36, 12, 5);
      x.fillStyle = "#d8a860";
      x.fill();
      x.strokeStyle = "#a87838";
      x.lineWidth = 2.2;
      x.stroke();
      x.save();
      x.globalAlpha = 0.5;
      x.fillRect(50, 58, 7, 28);
      x.restore();
    },
    bottle(x) {
      rr2(x, 50, 58, 28, 36, 8);
      x.fillStyle = "rgba(168,216,232,0.85)";
      x.fill();
      x.strokeStyle = "#6898a8";
      x.lineWidth = 2.6;
      x.stroke();
      rr2(x, 56, 40, 16, 20, 5);
      x.fillStyle = "rgba(190,230,240,0.85)";
      x.fill();
      x.stroke();
      rr2(x, 54, 56, 20, 10, 3);
      x.fillStyle = "#e05a4a";
      x.fill();
    },
    vase(x) {
      x.beginPath();
      x.moveTo(50, 52);
      x.quadraticCurveTo(40, 84, 56, 92);
      x.lineTo(72, 92);
      x.quadraticCurveTo(88, 84, 78, 52);
      x.closePath();
      x.fillStyle = vg(x, 52, 40, "#f8c860", "#d88820");
      x.fill();
      x.strokeStyle = "#a8681a";
      x.lineWidth = 2.6;
      x.stroke();
      ell2(x, 64, 50, 16, 6, "#f0a828", "#a8681a", 2);
      x.strokeStyle = "#5a9a3e";
      x.lineWidth = 3;
      x.beginPath();
      x.moveTo(64, 50);
      x.quadraticCurveTo(74, 38, 80, 30);
      x.stroke();
      ell2(x, 80, 28, 6, 4, "#88c05a", "#5a8a3a", 1.6);
    },
    fabric(x) {
      x.beginPath();
      x.moveTo(32, 56);
      x.lineTo(96, 56);
      x.lineTo(90, 92);
      x.quadraticCurveTo(64, 100, 38, 92);
      x.closePath();
      x.fillStyle = vg(x, 56, 40, "#98c8e8", "#6898c0");
      x.fill();
      x.strokeStyle = "#4878a0";
      x.lineWidth = 2.6;
      x.stroke();
      x.strokeStyle = "rgba(255,255,255,0.5)";
      x.lineWidth = 2;
      for (const dy of [68, 78]) {
        x.beginPath();
        x.moveTo(36, dy);
        x.quadraticCurveTo(64, dy + 6, 92, dy);
        x.stroke();
      }
    },
    sweater(x) {
      x.beginPath();
      x.moveTo(48, 48);
      x.lineTo(80, 48);
      x.lineTo(88, 60);
      x.lineTo(84, 94);
      x.lineTo(44, 94);
      x.lineTo(40, 60);
      x.closePath();
      x.fillStyle = vg(x, 48, 46, "#f09878", "#d86848");
      x.fill();
      x.strokeStyle = "#a84828";
      x.lineWidth = 2.6;
      x.stroke();
      rr2(x, 46, 42, 36, 12, 6);
      x.fillStyle = "#e88868";
      x.fill();
      x.stroke();
      x.strokeStyle = "rgba(255,255,255,0.4)";
      x.lineWidth = 2;
      for (const dy of [64, 76]) {
        x.beginPath();
        x.moveTo(44, dy);
        x.lineTo(84, dy);
        x.stroke();
      }
    },
    crate(x) {
      rr2(x, 38, 54, 52, 40, 6);
      x.fillStyle = vg(x, 54, 40, "#c89858", "#a87838");
      x.fill();
      x.strokeStyle = "#785426";
      x.lineWidth = 2.6;
      x.stroke();
      x.strokeStyle = "#8a6236";
      x.lineWidth = 3;
      x.beginPath();
      x.moveTo(42, 58);
      x.lineTo(86, 90);
      x.moveTo(86, 58);
      x.lineTo(42, 90);
      x.stroke();
      x.beginPath();
      x.moveTo(38, 74);
      x.lineTo(90, 74);
      x.stroke();
    },
    planks(x) {
      MOTIFS.wood(x, 4);
    },
    tools(x) {
      x.save();
      x.translate(64, 70);
      x.rotate(-0.4);
      x.strokeStyle = "#8a929c";
      x.lineWidth = 7;
      x.lineCap = "round";
      x.beginPath();
      x.moveTo(-22, 14);
      x.lineTo(14, -18);
      x.stroke();
      ell2(x, 18, -22, 9, 9, "#8a929c", "#5a636e", 2.4);
      ell2(x, 18, -22, 3.4, 3.4, "#e8ecf0");
      x.restore();
      x.save();
      x.translate(52, 78);
      x.rotate(0.3);
      rr2(x, -3, -22, 7, 26, 3);
      x.fillStyle = "#a8804a";
      x.fill();
      rr2(x, -13, -30, 27, 11, 4);
      x.fillStyle = "#8a929c";
      x.fill();
      x.strokeStyle = "#5a636e";
      x.lineWidth = 2;
      x.stroke();
      x.restore();
    },
    can(x) {
      rr2(x, 44, 50, 40, 44, 6);
      x.fillStyle = vg(x, 50, 44, "#d8e0e8", "#a8b4c0");
      x.fill();
      x.strokeStyle = "#78848e";
      x.lineWidth = 2.6;
      x.stroke();
      ell2(x, 64, 50, 20, 7, "#e8f0f4", "#78848e", 2.2);
      x.strokeStyle = "#78848e";
      x.lineWidth = 2;
      x.beginPath();
      x.moveTo(64, 50);
      x.lineTo(64, 38);
      x.stroke();
      rr2(x, 56, 34, 16, 7, 3);
      x.fillStyle = "#e8f0f4";
      x.fill();
      x.stroke();
    }
  };
  function productIconURL(icon, c1) {
    return toURL(`prod:${icon}:${c1 || ""}`, IC, IC, (x) => {
      (PRODUCTS[icon] || PRODUCTS.feed)(x, 1);
    });
  }
  function cropIconURL(cropId) {
    return toURL(`cropicon:${cropId}`, IC, IC, (x) => {
      const spr = cropSprite(cropId, 3);
      const s = IC / 100 * 1.05;
      x.drawImage(spr, (IC - 100 * s) / 2, IC - 100 * s + 4, 100 * s, 100 * s);
    });
  }
  function itemIconURL(iconKey, id, c1) {
    if (iconKey.startsWith("crop:")) return cropIconURL(iconKey.slice(5));
    if (PRODUCTS[iconKey]) return productIconURL(iconKey, c1);
    return productIconURL(iconKey, c1);
  }
  var SKINS = ["#f8d0a8", "#f0c098", "#e0a878", "#c89068", "#a87050"];
  var HAIRS = ["#3a2c20", "#6a4a2e", "#a87848", "#d8b060", "#8a8a8e", "#b85030"];
  var HATS = [
    (x) => {
    },
    // şapkasız
    (x) => {
      ell2(x, 64, 40, 34, 8, "#e8c878", "#a8823a", 2.4);
      x.beginPath();
      x.moveTo(46, 40);
      x.quadraticCurveTo(64, 16, 82, 40);
      x.closePath();
      x.fillStyle = "#e8c878";
      x.fill();
      x.strokeStyle = "#a8823a";
      x.lineWidth = 2.2;
      x.stroke();
    },
    (x) => {
      x.beginPath();
      x.moveTo(44, 42);
      x.quadraticCurveTo(64, 18, 84, 42);
      x.closePath();
      x.fillStyle = "#e05a4a";
      x.fill();
      x.strokeStyle = "#a83a2e", x.lineWidth = 2.2;
      x.stroke();
      rr2(x, 44, 38, 40, 8, 4);
      x.fillStyle = "#c84838";
      x.fill();
    },
    (x) => {
      for (const [px, col] of [[48, "#f088a8"], [58, "#f0c848"], [70, "#88b8f0"], [80, "#f088a8"]])
        for (let i = 0; i < 5; i++) {
          const a = i * Math.PI * 2 / 5;
          ell2(x, px + Math.cos(a) * 3, 36 + Math.sin(a) * 3, 2.4, 2.4, col);
        }
    },
    (x) => {
      ell2(x, 64, 42, 30, 7, "#8a6a4a", "#5e4630", 2.2);
      x.beginPath();
      x.moveTo(48, 42);
      x.quadraticCurveTo(64, 20, 80, 42);
      x.closePath();
      x.fillStyle = "#8a6a4a";
      x.fill();
      x.strokeStyle = "#5e4630";
      x.lineWidth = 2.2;
      x.stroke();
    }
  ];
  function avatarURL(seed) {
    return toURL(`avatar:${seed}`, IC, IC, (x) => {
      const rnd = (n) => {
        const v = Math.sin(seed * 127.1 + n * 311.7) * 43758.5;
        return v - Math.floor(v);
      };
      const skin = SKINS[Math.floor(rnd(1) * SKINS.length)];
      const hair = HAIRS[Math.floor(rnd(2) * HAIRS.length)];
      const bg = ["#ffe8c8", "#e8f4d8", "#d8ecf8", "#f8e0e8"][Math.floor(rnd(3) * 4)];
      x.beginPath();
      x.arc(64, 64, 60, 0, Math.PI * 2);
      x.fillStyle = bg;
      x.fill();
      x.beginPath();
      x.moveTo(24, 108);
      x.quadraticCurveTo(64, 74, 104, 108);
      x.lineTo(104, 120);
      x.lineTo(24, 120);
      x.closePath();
      x.fillStyle = ["#e0785a", "#5a9ac8", "#78b068", "#c8a04a"][Math.floor(rnd(4) * 4)];
      x.fill();
      x.beginPath();
      x.ellipse(64, 62, 28, 30, 0, 0, Math.PI * 2);
      x.fillStyle = skin;
      x.fill();
      x.fillStyle = hair;
      x.beginPath();
      x.ellipse(64, 46, 29, 22, 0, Math.PI, 0);
      x.fill();
      const style = Math.floor(rnd(5) * 3);
      if (style === 0) {
        ell2(x, 36, 60, 7, 20, hair);
        ell2(x, 92, 60, 7, 20, hair);
      }
      if (style === 1) {
        ell2(x, 38, 50, 8, 10, hair);
        ell2(x, 90, 50, 8, 10, hair);
      }
      ell2(x, 54, 62, 4.4, 5.4, "#2a2420");
      ell2(x, 74, 62, 4.4, 5.4, "#2a2420");
      x.fillStyle = "#fff";
      ell2(x, 52.6, 60, 1.6, 1.8);
      ell2(x, 72.6, 60, 1.6, 1.8);
      x.save();
      x.globalAlpha = 0.3;
      ell2(x, 46, 72, 5, 3, "#f08060");
      ell2(x, 82, 72, 5, 3, "#f08060");
      x.restore();
      x.strokeStyle = "#8a5a48";
      x.lineWidth = 2.4;
      x.beginPath();
      x.arc(64, 72, 8, 0.35, Math.PI - 0.35);
      x.stroke();
      HATS[Math.floor(rnd(6) * HATS.length)](x);
    });
  }

  // src/panels.ts
  init_art();
  init_systems();

  // src/merge.ts
  init_data();
  init_core();
  init_i18n();
  init_audio();

  // src/energy.ts
  init_core();
  function useEnergy(n) {
    tickEnergy();
    if (state.energy < n) return false;
    state.energy -= n;
    bus.emit("res");
    return true;
  }
  var tickEnergy2 = tickEnergy;
  var energyNextIn2 = energyNextIn;

  // src/merge.ts
  init_systems();
  init_systems();
  var root = null;
  var gridEl = null;
  var energyEl = null;
  var timerHandle = null;
  var dragFrom = null;
  var dragGhost = null;
  var dragOverSell = false;
  function initMergeUI(container) {
    root = container;
    root.innerHTML = `
    <div class="fusion-head">
      <button class="icon-btn" id="fusion-close" aria-label="${T("c.close")}">${SVG2.close}</button>
      <div class="fusion-title">
        <span class="ft-ico">\u2726</span><span>${T("m.title")}</span>
      </div>
      <div class="energy-pill" id="fusion-energy"></div>
    </div>
    <div class="fusion-body">
      <div class="wood-frame">
        <div class="clamp tl"></div><div class="clamp tr"></div><div class="clamp bl"></div><div class="clamp br"></div>
        <div class="board-well"><div class="merge-grid" id="merge-grid"></div></div>
      </div>
      <div class="gen-tray" id="gen-tray"></div>
    </div>
    <div class="sell-zone" id="sell-zone">
      <div class="sz-ico">\u{1FA99}</div><div class="sz-lbl">${T("m.sellZone")}</div>
    </div>
    <div class="fusion-modal hidden" id="artifact-modal"></div>
  `;
    gridEl = root.querySelector("#merge-grid");
    energyEl = root.querySelector("#fusion-energy");
    root.querySelector("#fusion-close").addEventListener("click", () => {
      sfx("close");
      bus.emit("close:fusion");
    });
    buildTray();
    renderBoard();
    renderEnergy();
    bus.on("board:changed", () => {
      if (root && !root.classList.contains("hidden")) {
        renderBoard();
        if (fxPending) {
          applyMergeFx(fxPending.to, fxPending.tier);
          fxPending = null;
        }
      }
    });
    bus.on("res", () => {
      if (root && !root.classList.contains("hidden")) renderEnergy();
    });
    if (timerHandle) clearInterval(timerHandle);
    timerHandle = window.setInterval(() => {
      if (!root || root.classList.contains("hidden")) return;
      tickEnergy2();
      renderEnergy();
      updateCooldowns();
    }, 1e3);
  }
  var SVG2 = {
    close: `<svg viewBox="0 0 24 24" width="22" height="22"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" fill="none"/></svg>`,
    lock: `<svg viewBox="0 0 24 24" width="18" height="18"><rect x="5" y="10" width="14" height="10" rx="3" fill="currentColor"/><path d="M8 10V7a4 4 0 018 0v3" stroke="currentColor" stroke-width="2.4" fill="none"/></svg>`
  };
  function stage() {
    return BOARD_STAGES[state.boardStage];
  }
  function isLocked(idx) {
    return state.boardLocked.includes(idx);
  }
  function freeCells() {
    return usableCells(state.boardStage).filter((i) => !state.board[i] && !isLocked(i));
  }
  function addItem(chain, tier) {
    const free = freeCells();
    if (!free.length) return false;
    const idx = free[Math.floor(Math.random() * free.length)];
    state.board[idx] = { c: chain, t: tier };
    return idx >= 0;
  }
  function cellIdx(x, y) {
    return y * 10 + x;
  }
  function tryDrop(from, to) {
    const a = state.board[from], b = state.board[to];
    if (!a) return "invalid";
    if (isLocked(to)) return "invalid";
    if (!b) {
      state.board[to] = a;
      state.board[from] = null;
      sfx("drop");
      return "moved";
    }
    if (b.c === a.c && b.t === a.t && a.t < 6) {
      state.board[from] = null;
      state.board[to] = { c: a.c, t: a.t + 1 };
      state.stats.merges++;
      let chains = 1;
      let cur = to;
      for (let guard = 0; guard < 3; guard++) {
        const it = state.board[cur];
        if (!it || it.t >= 6) break;
        const x = cur % 10, y = Math.floor(cur / 10);
        const neigh = [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]].map(([nx, ny]) => cellIdx(nx, ny)).find((i) => usableCells(state.boardStage).includes(i) && state.board[i] && state.board[i].c === it.c && state.board[i].t === it.t);
        if (neigh === void 0) break;
        state.board[neigh] = null;
        state.board[cur] = { c: it.c, t: it.t + 1 };
        state.stats.merges++;
        chains++;
        if (state.energy < energyCap(state.level)) state.energy++;
      }
      const finalItem = state.board[to];
      if (finalItem.t === 6) {
        sfx("artifact");
        haptic([20, 80, 40, 80]);
        bus.emit("toast", `${nm(CHAINS.find((c) => c.id === finalItem.c).tiers[5])} ${T("m.artifact")}!`);
      } else {
        sfx("merge", finalItem.t);
        haptic(12 + finalItem.t * 3);
        if (chains > 1) {
          bus.emit("toast", T("m.double"));
          sfx("mergeBig");
        }
      }
      bus.emit("merge:done", { chains, tier: finalItem.t, to });
      fxPending = { to, tier: finalItem.t };
      bus.emit("board:changed");
      return "merged";
    }
    return "invalid";
  }
  function sellCell(idx) {
    const it = state.board[idx];
    if (!it) return false;
    const chain = CHAINS.find((c) => c.id === it.c);
    const value = chain.sell[it.t - 1];
    state.board[idx] = null;
    state.coins += value;
    sfx("sell");
    haptic(10);
    bus.emit("res");
    bus.emit("board:changed");
    return true;
  }
  function buyCell(idx) {
    const cost = stage().cost;
    if (state.coins < cost) {
      bus.emit("toast", T("t.noCoins"));
      sfx("error");
      return false;
    }
    state.coins -= cost;
    state.boardLocked = state.boardLocked.filter((i) => i !== idx);
    sfx("cell");
    haptic(15);
    bus.emit("res");
    bus.emit("board:changed");
    return true;
  }
  function tapGenerator(chainId) {
    const chain = CHAINS.find((c) => c.id === chainId);
    if (state.level < chain.lvl) {
      bus.emit("toast", T("c.needLvl", { n: chain.lvl }));
      sfx("error");
      return false;
    }
    const cd = state.gens[chainId] || 0;
    if (Date.now() < cd) return false;
    if (!useEnergy(1)) {
      bus.emit("toast", T("m.noEnergy"));
      sfx("error");
      return false;
    }
    state.gens[chainId] = Date.now() + GEN_COOLDOWN * 1e3;
    state.stats.gens++;
    const jackpot = Math.random() < JACKPOT_CHANCE;
    let count = jackpot ? 3 : 1;
    const r = Math.random();
    if (r < 0.33) count *= 2;
    else if (r < 0.45) count *= 3;
    let placed = 0;
    for (let i = 0; i < count; i++) {
      const roll = Math.random();
      const tier = roll < 0.8 ? 1 : roll < 0.98 ? 2 : 3;
      if (addItem(chainId, tier)) placed++;
    }
    if (placed === 0) {
      state.energy = Math.min(energyCap(state.level), state.energy + 1);
      bus.emit("toast", T("m.boardFull"));
      sfx("error");
      return false;
    }
    sfx("gen");
    sfx("drop");
    haptic(10);
    if (jackpot) {
      sfx("jackpot");
      haptic([10, 40, 10, 40, 10]);
      bus.emit("toast", T("m.jackpot"));
    }
    bus.emit("gen:tap", { chain: chainId });
    bus.emit("board:changed");
    return true;
  }
  function renderEnergy() {
    if (!energyEl) return;
    const cap = energyCap(state.level);
    const pct = Math.round(state.energy / cap * 100);
    const next = energyNextIn2();
    energyEl.innerHTML = `
    <span class="e-ico">\u26A1</span>
    <div class="e-col">
      <span class="e-num">${state.energy}/${cap}</span>
      <div class="e-bar"><div class="e-fill" style="width:${pct}%"></div></div>
    </div>
    ${state.energy < cap ? `<span class="e-next">${next > 0 ? Math.ceil(next / 1e3) + "s" : ""}</span>` : ""}
    <button class="refill-btn" id="e-refill">${T("m.refill")}</button>
  `;
    const btn = energyEl.querySelector("#e-refill");
    if (btn) btn.addEventListener("click", () => {
      sfx("tap");
      bus.emit("ad:request", { placement: "energy", reward: () => {
        state.energy = Math.min(energyCap(state.level), state.energy + AD_ENERGY);
        sfx("energy");
        bus.emit("res");
        renderEnergy();
        bus.emit("toast", T("ad.energy"));
      } });
    });
  }
  function renderBoard() {
    if (!gridEl) return;
    const s = stage();
    gridEl.style.gridTemplateColumns = `repeat(${s.cols}, 1fr)`;
    gridEl.innerHTML = "";
    for (let y = 0; y < s.rows; y++) {
      for (let x = 0; x < s.cols; x++) {
        const idx = cellIdx(x, y);
        const cell = document.createElement("div");
        const it = state.board[idx];
        if (isLocked(idx)) {
          cell.className = "mcell locked";
          cell.innerHTML = `<span class="lk">${SVG2.lock}</span><span class="lk-price">${s.cost} \u{1FA99}</span>`;
          cell.addEventListener("click", () => buyCell(idx));
        } else if (it) {
          cell.className = "mcell has" + (it.t >= 6 ? " artifact" : it.t === 5 ? " t5" : it.t === 4 ? " t4" : "");
          const chain = CHAINS.find((c) => c.id === it.c);
          cell.innerHTML = `
          <img src="${chainIconURL(it.c, it.t)}" alt="${nm(chain.tiers[it.t - 1])}" draggable="false">
          <span class="tier-badge">${it.t}</span>
          ${it.t === 6 ? '<span class="master-tag">MASTER</span>' : ""}
        `;
          bindDrag(cell, idx);
        } else {
          cell.className = "mcell empty";
          cell.innerHTML = '<span class="dot"></span>';
          bindDrop(cell, idx);
        }
        gridEl.appendChild(cell);
      }
    }
  }
  function buildTray() {
    const tray = root.querySelector("#gen-tray");
    tray.innerHTML = "";
    for (const chain of CHAINS) {
      const chip = document.createElement("button");
      chip.className = "gen-chip";
      chip.dataset.chain = chain.id;
      const locked = state.level < chain.lvl;
      chip.innerHTML = `
      <span class="gc-ring"><img src="${chainIconURL(chain.id, 1)}" alt="" draggable="false"></span>
      <span class="gc-lbl">${nm(chain.gen)}</span>
      <span class="gc-cd hidden"></span>
      ${locked ? `<span class="gc-lock">${SVG2.lock}${chain.lvl}</span>` : ""}
    `;
      chip.addEventListener("click", () => tapGenerator(chain.id));
      tray.appendChild(chip);
    }
    updateCooldowns();
  }
  function updateCooldowns() {
    if (!root) return;
    root.querySelectorAll(".gen-chip").forEach((chip) => {
      const chainId = chip.dataset.chain;
      const cd = state.gens[chainId] || 0;
      const remain = cd - Date.now();
      const cdEl = chip.querySelector(".gc-cd");
      const ring = chip.querySelector(".gc-ring");
      if (remain > 0) {
        cdEl.classList.remove("hidden");
        cdEl.textContent = Math.ceil(remain / 1e3) + "s";
        ring.style.setProperty("--cd", `${remain / (GEN_COOLDOWN * 1e3)}`);
        chip.classList.add("cooling");
      } else {
        cdEl.classList.add("hidden");
        ring.style.setProperty("--cd", "0");
        chip.classList.remove("cooling");
      }
    });
  }
  function idxFromPoint(px, py) {
    const cells = gridEl.querySelectorAll(".mcell");
    for (let i = 0; i < cells.length; i++) {
      const r = cells[i].getBoundingClientRect();
      if (px >= r.left && px <= r.right && py >= r.top && py <= r.bottom) {
        const s = stage();
        const gx = i % s.cols, gy = Math.floor(i / s.cols);
        return cellIdx(gx, gy);
      }
    }
    return -1;
  }
  function bindDrag(cell, idx) {
    cell.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".artifact")) {
      }
      dragFrom = idx;
      const it = state.board[idx];
      const chain = CHAINS.find((c) => c.id === it.c);
      dragGhost = document.createElement("div");
      dragGhost.className = "drag-ghost";
      dragGhost.innerHTML = `<img src="${chainIconURL(it.c, it.t)}" alt="">`;
      document.body.appendChild(dragGhost);
      moveGhost(e.clientX, e.clientY);
      try {
        cell.setPointerCapture(e.pointerId);
      } catch {
      }
      sfx("drag");
      const move = (ev) => {
        moveGhost(ev.clientX, ev.clientY);
        const over = idxFromPoint(ev.clientX, ev.clientY);
        highlightCell(over);
        const sz = root.querySelector("#sell-zone");
        const sr = sz.getBoundingClientRect();
        dragOverSell = ev.clientX >= sr.left && ev.clientX <= sr.right && ev.clientY >= sr.top && ev.clientY <= sr.bottom;
        sz.classList.toggle("hot", dragOverSell);
      };
      const up = (ev) => {
        cell.removeEventListener("pointermove", move);
        cell.removeEventListener("pointerup", up);
        cell.removeEventListener("pointercancel", up);
        dragGhost?.remove();
        dragGhost = null;
        highlightCell(-2);
        root.querySelector("#sell-zone").classList.remove("hot");
        const dist = Math.abs(ev.clientX - e.clientX) + Math.abs(ev.clientY - e.clientY);
        if (dist < 8) {
          const item2 = state.board[idx];
          if (item2.t === 6) {
            showArtifactModal(idx);
            dragFrom = null;
            return;
          }
          if (selected >= 0 && selected !== idx) {
            const res = tryDrop(selected, idx);
            if (res !== "invalid") {
              selected = -1;
              gridEl.querySelectorAll(".mcell").forEach((el2) => el2.classList.remove("sel"));
            } else {
              sfx("error");
              haptic([30, 40, 30]);
            }
          } else {
            selected = selected === idx ? -1 : idx;
            gridEl.querySelectorAll(".mcell").forEach((el2) => el2.classList.remove("sel"));
            if (selected >= 0) cell.classList.add("sel");
            sfx(selected >= 0 ? "drag" : "back");
          }
          dragFrom = null;
          return;
        }
        if (dragOverSell) {
          sellCell(idx);
          dragFrom = null;
          return;
        }
        const to = idxFromPoint(ev.clientX, ev.clientY);
        if (to >= 0 && to !== idx) tryDrop(idx, to);
        dragFrom = null;
      };
      cell.addEventListener("pointermove", move);
      cell.addEventListener("pointerup", up);
      cell.addEventListener("pointercancel", up);
    });
  }
  function bindDrop(cell, idx) {
    cell.addEventListener("click", () => {
      if (selected >= 0 && selected !== idx) {
        const res = tryDrop(selected, idx);
        if (res !== "invalid") {
          selected = -1;
          gridEl.querySelectorAll(".mcell").forEach((el2) => el2.classList.remove("sel"));
        } else {
          sfx("error");
          haptic([30, 40, 30]);
        }
      }
    });
  }
  var selected = -1;
  function moveGhost(x, y) {
    if (dragGhost) {
      dragGhost.style.left = x + "px";
      dragGhost.style.top = y + "px";
    }
  }
  var fxPending = null;
  function applyMergeFx(to, tier) {
    if (!gridEl) return;
    const s = stage();
    const cell = gridEl.children[Math.floor(to / 10) * s.cols + to % 10];
    if (!cell) return;
    cell.classList.remove("pop");
    void cell.offsetWidth;
    cell.classList.add("pop");
    setTimeout(() => cell.classList.remove("pop"), 420);
    const n = 6 + tier * 2;
    const cols = tier >= 5 ? ["#ffd868", "#ffbe3d", "#fff3c4"] : tier >= 3 ? ["#ffd868", "#a8d97f"] : ["#e8f2c8", "#a8d97f"];
    for (let i = 0; i < n; i++) {
      const sp = document.createElement("span");
      sp.className = "mspark";
      const ang = Math.PI * 2 * i / n + Math.random() * 0.6;
      const d = 26 + Math.random() * 26;
      sp.style.setProperty("--dx", Math.cos(ang) * d + "px");
      sp.style.setProperty("--dy", Math.sin(ang) * d + "px");
      sp.style.background = cols[i % cols.length];
      sp.style.left = "50%";
      sp.style.top = "50%";
      cell.appendChild(sp);
      setTimeout(() => sp.remove(), 620);
    }
  }
  function highlightCell(over) {
    gridEl.querySelectorAll(".mcell").forEach((el2) => el2.classList.remove("over"));
    if (over >= 0) {
      const cells = gridEl.querySelectorAll(".mcell");
      const s = stage();
      const gx = over % 10, gy = Math.floor(over / 10);
      if (gx < s.cols && gy < s.rows) cells[gy * s.cols + gx]?.classList.add("over");
    }
  }
  function showArtifactModal(idx) {
    const it = state.board[idx];
    const chain = CHAINS.find((c) => c.id === it.c);
    const name = nm(chain.tiers[5]);
    const value = chain.sell[5];
    const modal = root.querySelector("#artifact-modal");
    modal.innerHTML = `
    <div class="am-card">
      <div class="am-art"><img src="${chainIconURL(it.c, 6)}" alt=""></div>
      <h3>${name}</h3>
      <p class="am-sub">${T("m.artifact")} \xB7 ${nm(chain.name)}</p>
      <div class="am-actions">
        <button class="btn gold" id="am-donate">\u{1F3DB}\uFE0F ${T("m.donate")}</button>
        <button class="btn brown" id="am-sell">${T("m.sellArtifact", { n: fmt(value) })}</button>
      </div>
      <button class="btn ghost" id="am-cancel">${T("c.cancel")}</button>
    </div>
  `;
    modal.classList.remove("hidden");
    sfx("letter");
    modal.querySelector("#am-donate").addEventListener("click", () => {
      state.board[idx] = null;
      const don = museumDonate(it.c);
      state.fragments++;
      addFragReward();
      modal.classList.add("hidden");
      bus.emit("board:changed");
      bus.emit("toast", `${T("m.donated")} (${don})`);
    });
    modal.querySelector("#am-sell").addEventListener("click", () => {
      sellCell(idx);
      modal.classList.add("hidden");
    });
    modal.querySelector("#am-cancel").addEventListener("click", () => modal.classList.add("hidden"));
  }
  function addFragReward() {
    const gems = 2 + Math.floor(state.level / 100);
    addGems(gems);
    bus.emit("toast", `${T("l.frag", { n: 1 })} +${gems} \u{1F48E}`);
  }
  function openFusion() {
    if (!root) return;
    root.classList.remove("hidden");
    root.classList.remove("slide-out");
    root.classList.add("slide-in");
    renderBoard();
    renderEnergy();
    updateCooldowns();
    sfx("tap");
  }
  function closeFusion() {
    if (!root) return;
    root.classList.add("slide-out");
    setTimeout(() => root.classList.add("hidden"), 260);
  }

  // src/panels.ts
  var sheetEl = null;
  var extraEl = null;
  function initPanels(sheetsRoot, extraRoot) {
    sheetEl = sheetsRoot;
    extraEl = extraRoot;
    const on = (ev, fn) => bus.on(ev, fn);
    on("panel:orders", () => openOrders());
    on("panel:barn", () => openBarn());
    on("panel:shop", () => openShop("expand"));
    on("panel:museum", () => openMuseum());
    on("panel:settings", () => openSettings());
    on("panel:quests", () => openQuests());
    on("panel:daily", () => openDailySheet());
    on("plant:plot", (d) => openSeedSheet(d.plot));
    on("harvest:plot", (d) => doHarvest(d.plot));
    on("info:plot", (d) => showPlotInfo(d.plot));
    on("tap:machine", (d) => openMachine(d.idx));
    on("tap:ghostMachine", (d) => openGhostMachine());
    on("tap:pen", (d) => openPen(d.idx));
    on("tap:ghostPen", (d) => openGhostPen());
    on("tap:decor", (d) => openDecorPop(d.x, d.y));
    on("tap:dock", () => openFishing());
    on("tap:barn", () => openBarn());
    on("tap:fusion", () => bus.emit("open:fusion"));
    on("tap:house", () => openProfile());
    on("debug:open", () => openDebug());
  }
  function closeSheet() {
    if (!sheetEl) return;
    const s = sheetEl.firstElementChild;
    if (s) {
      s.classList.add("closing");
      setTimeout(() => {
        s.remove();
        bus.emit("sheet:close");
      }, 240);
    }
  }
  function mountSheet(html, cls = "") {
    closeSheet();
    setTimeout(() => {
      const s = el("div", `sheet ${cls}`, html);
      sheetEl.appendChild(s);
      s.querySelector(".sheet-close")?.addEventListener("click", () => {
        sfx("close");
        closeSheet();
      });
      requestAnimationFrame(() => {
        s.classList.add("open");
        bus.emit("sheet:open");
      });
    }, sheetEl.childElementCount ? 240 : 0);
  }
  function sheetHeader(title, icon = "") {
    return `<div class="sheet-head"><div class="sh-title">${icon ? ico(icon) : ""}<span>${title}</span></div>
    <button class="icon-btn sheet-close">${SVG.x}</button></div>`;
  }
  function doHarvest(pi) {
    const p = state.plots[pi];
    if (!p) return;
    const def = CROPS.find((c) => c.id === p.crop);
    if (harvestPlot(pi)) {
      const t = plotFromIdx(pi);
      bus.emit("floatat", { x: t.x, y: t.y, text: `+${def.yield} ${nm(def.name)}` });
    }
  }
  function showPlotInfo(pi) {
    const p = state.plots[pi];
    if (!p) return;
    const remain = p.at + p.dur - Date.now();
    const def = CROPS.find((c) => c.id === p.crop);
    toast(`${nm(def.name)} \xB7 ${fmtTime(remain)}`);
  }
  function openSeedSheet(plotIdx) {
    const avail = CROPS.filter((c) => c.lvl <= state.level);
    const cells = avail.map((c) => {
      const can = state.coins >= c.seed;
      return `<button class="seed-card ${can ? "" : "poor"}" data-crop="${c.id}">
      <img src="${cropIconURL(c.id)}" alt="" draggable="false">
      <span class="sc-name">${nm(c.name)}</span>
      <span class="sc-meta">${fmtTime(c.grow * 1e3)} \xB7 \xD7${c.yield}</span>
      <span class="sc-cost">${c.seed} \u{1FA99}</span>
    </button>`;
    }).join("");
    const emptyCount = state.plots.filter((p, i) => !p && isPlotActive(i)).length;
    const lastCrop = CROPS.find((c) => c.id === state.lastCrop && c.lvl <= state.level);
    const allCrop = lastCrop || avail.filter((c) => state.coins >= c.seed).sort((a, b) => a.seed - b.seed)[0];
    mountSheet(`
    ${sheetHeader(T("f.seedSelect"), "barn")}
    ${emptyCount > 1 && allCrop ? `<button class="btn primary block" id="plant-all" data-crop="${allCrop.id}">${T("f.plantAll")} \u2014 ${nm(allCrop.name)} (${emptyCount})</button>` : ""}
    <div class="seed-grid">${cells}</div>
  `);
    setTimeout(() => {
      const s = sheetEl.querySelector(".sheet:not(.closing)");
      if (!s) return;
      s.querySelectorAll(".seed-card").forEach((b) => b.addEventListener("click", () => {
        const id = b.dataset.crop;
        if (plantPlot(plotIdx, id)) {
          sfx("plant");
          closeSheet();
        }
      }));
      s.querySelector("#plant-all")?.addEventListener("click", () => {
        const all = s.querySelector("#plant-all");
        const id = all.dataset.crop;
        const def = CROPS.find((c) => c.id === id);
        if (!def || state.coins < def.seed) {
          toast(T("t.noCoins"));
          return;
        }
        let n = 0;
        for (let i = 0; i < state.plots.length; i++) {
          if (!state.plots[i] && isPlotActive(i)) {
            if (plantPlot(i, id)) n++;
          }
        }
        if (n) {
          toast(`${nm(def.name)} \xD7${n} ${T("f.planted")}`);
          closeSheet();
        }
      });
    }, 260);
  }
  function isPlotActive(i) {
    const { off, size } = soilRect(state.expansion);
    const x = i % 10 + 3, y = Math.floor(i / 10) + 3;
    return x >= off && y >= off && x < off + size && y < off + size;
  }
  function openBarn(tab = "crop") {
    const cap = barnCap(), cnt = barnCount();
    const cats = ["crop", "animal", "machine"];
    const items = Object.entries(state.barn).filter(([id]) => ITEMS[id]?.cat === tab).sort((a, b) => item(a[0]).sell - item(b[0]).sell);
    const cells = items.length ? items.map(([id, n]) => {
      const def = item(id);
      return `<div class="barn-item">
      <img src="${itemIconURL(def.icon, id, def.c1)}" alt="" draggable="false">
      <div class="bi-info"><b>${nm(def.name)}</b><span>${n} \xD7 ${def.sell} \u{1FA99}</span></div>
      <div class="bi-actions">
        <button class="btn mini brown" data-sell="${id}" data-n="1">${T("f.sellOne")}</button>
        <button class="btn mini gold" data-sell="${id}" data-n="${n}">${T("f.sellAll")}</button>
      </div>
    </div>`;
    }).join("") : `<p class="empty-note">\u2014</p>`;
    mountSheet(`
    ${sheetHeader(T("hud.barn"), "barn")}
    <div class="barn-cap">
      <div class="bc-bar"><div class="bc-fill ${cnt >= cap ? "full" : ""}" style="width:${Math.min(100, cnt / cap * 100)}%"></div></div>
      <span>${T("f.barnCap", { a: cnt, b: cap })}</span>
      <button class="btn mini primary" id="barn-upg">${T("f.barnUpgrade")}</button>
    </div>
    <div class="tab-row">${cats.map((c) => `<button class="tab ${c === tab ? "on" : ""}" data-tab="${c}">${T("f.cat." + c)}</button>`).join("")}</div>
    <div class="barn-list">${cells}</div>
  `);
    setTimeout(() => {
      const s = sheetEl.querySelector(".sheet:not(.closing)");
      if (!s) return;
      s.querySelectorAll("[data-sell]").forEach((b) => b.addEventListener("click", () => {
        const id = b.dataset.sell, n = parseInt(b.dataset.n);
        barnSell(id, n);
        openBarn(tab);
      }));
      s.querySelectorAll("[data-tab]").forEach((b) => b.addEventListener("click", () => openBarn(b.dataset.tab)));
      s.querySelector("#barn-upg")?.addEventListener("click", () => {
        if (state.gems < BARN_GEM_COST) {
          toast(T("t.noGems"));
          return;
        }
        state.gems -= BARN_GEM_COST;
        state.barnLvl++;
        sfx("buy");
        bus.emit("res");
        openBarn(tab);
      });
    }, 260);
  }
  function openOrders() {
    const refreshIn = Math.max(0, state.ordersAt + 4 * 36e5 - Date.now());
    const cards = state.orders.map((o) => {
      const itemsHtml = o.items.map((i2) => {
        const have = state.barn[i2.item] || 0;
        const ok = have >= i2.qty;
        return `<div class="oi ${ok ? "ok" : "no"}">
        <img src="${itemIconURL(item(i2.item).icon, i2.item, item(i2.item).c1)}" alt="" draggable="false">
        <span>${ok ? `${i2.qty}` : `${have}/${i2.qty}`}</span>
      </div>`;
      }).join("");
      const canDeliver = o.items.every((i2) => (state.barn[i2.item] || 0) >= i2.qty);
      const npcName = nm(ORDER_NAMES[o.npc % 20]);
      const npcTitle = nm(ORDER_TITLES[o.npc % 12]);
      const express = o.express ? `<div class="express">${T("o.express")}<span class="ex-t" data-exp="${o.id}">${fmtTime(o.expires - Date.now())}</span></div>` : "";
      return `<div class="order-card ${o.express ? "is-express" : ""}">
      <div class="oc-head">
        <img class="oc-avatar" src="${avatarURL(o.npc)}" alt="" draggable="false">
        <div class="oc-npc"><b>${npcName}</b><span>${npcTitle}</span></div>
        ${express}
      </div>
      <div class="oc-items">${itemsHtml}</div>
      <div class="oc-foot">
        <div class="oc-reward">${ico("coin")}<b>${fmt(o.coins)}</b>${ico("star")}<b>${fmt(o.xp)}</b></div>
        <div class="oc-actions">
          <button class="btn mini ghost icon-only" data-reroll="${o.id}" title="${T("o.reroll")}" aria-label="${T("o.reroll")}" style="width:38px">${SVG.refresh || "\u21BB"}</button>
          <button class="btn primary ${canDeliver ? "" : "disabled"}" data-deliver="${o.id}">${T("o.deliver")}</button>
        </div>
      </div>
    </div>`;
    }).join("");
    mountSheet(`
    ${sheetHeader(T("o.title"), "orders")}
    <p class="o-refresh">${T("o.refresh", { t: fmtTime(refreshIn) })}</p>
    <div class="orders-list">${cards}</div>
  `);
    setTimeout(() => {
      const s = sheetEl.querySelector(".sheet:not(.closing)");
      if (!s) return;
      s.querySelectorAll("[data-deliver]").forEach((b) => b.addEventListener("click", () => {
        if (deliverOrder(parseInt(b.dataset.deliver))) {
          sfx("coin");
          openOrders();
        }
      }));
      s.querySelectorAll("[data-reroll]").forEach((b) => b.addEventListener("click", () => {
        if (rerollOrder(parseInt(b.dataset.reroll))) openOrders();
      }));
    }, 260);
  }
  function openShop(tab = "expand") {
    let body = "";
    if (tab === "expand") {
      const def = expansionDef();
      const inProgress = expansionInProgress();
      const next = state.expansion < EXPANSIONS.length - 1 ? EXPANSIONS[state.expansion + 1] : null;
      body = `
      <div class="exp-card">
        <div class="exp-art">${SVG.expand}</div>
        <div class="exp-info">
          <b>${T("f.expand")} ${state.expansion + 2}/5</b>
          ${inProgress ? `<span class="exp-t" id="exp-timer">${fmtTime((state.expandAt || 0) - Date.now())}</span>
               <button class="btn gold" id="exp-speed">${T("f.speedUp")}</button>` : next ? `<span>${T("f.expandTo", { n: state.expansion + 2 })} \xB7 ${T("f.expandTime", { t: fmtTime(next.time * 1e3) })}</span>
                 <button class="btn primary" id="exp-buy">${fmt(next.cost)} \u{1FA99}</button>` : `<span>${T("c.max")}</span>`}
        </div>
      </div>
      <div class="exp-note">${T("f.expanding")} \u{1F528}</div>`;
    } else {
      const cells = DECOR.filter((d) => d.source === "shop" || state.decorUnlocked.includes(d.id)).map((d) => {
        const unlocked = d.source === "shop" ? state.level >= d.lvl : state.decorUnlocked.includes(d.id);
        const owned = decorOwned(d.id);
        const can = unlocked && state.coins >= d.cost;
        return `<button class="decor-card ${d.rarity} ${unlocked ? "" : "locked"}" data-decor="${d.id}" ${can ? "" : "disabled"}>
        <img src="${decorIcon(d.id)}" alt="" draggable="false">
        <span class="dc-name">${nm(d.name)}</span>
        <span class="dc-meta">${unlocked ? d.cost === 0 ? T("c.free") : `${fmt(d.cost)} \u{1FA99}` : T("c.needLvl", { n: d.lvl })}</span>
        ${owned ? `<span class="dc-owned">\xD7${owned}</span>` : ""}
      </button>`;
      }).join("");
      body = `<div class="decor-grid">${cells}</div>`;
    }
    mountSheet(`
    ${sheetHeader(T("hud.shop"), "shop")}
    <div class="tab-row">
      <button class="tab ${tab === "expand" ? "on" : ""}" data-t="expand">${ico("hammer")} ${T("f.expand")}</button>
      <button class="tab ${tab === "decor" ? "on" : ""}" data-t="decor">${T("lu.decor")}</button>
    </div>
    ${body}
  `);
    setTimeout(() => {
      const s = sheetEl.querySelector(".sheet:not(.closing)");
      if (!s) return;
      s.querySelectorAll("[data-t]").forEach((b) => b.addEventListener("click", () => openShop(b.dataset.t)));
      s.querySelector("#exp-buy")?.addEventListener("click", () => {
        if (buyExpansion()) openShop("expand");
      });
      s.querySelector("#exp-speed")?.addEventListener("click", () => {
        if (speedUpExpansion()) openShop("expand");
      });
      s.querySelectorAll("[data-decor]").forEach((b) => b.addEventListener("click", async () => {
        const id = b.dataset.decor;
        const def = DECOR.find((d) => d.id === id);
        if (state.level < def.lvl && def.source === "shop") {
          toast(T("c.needLvl", { n: def.lvl }));
          return;
        }
        if (state.coins < def.cost) {
          toast(T("t.noCoins"));
          return;
        }
        state.coins -= def.cost;
        bus.emit("res");
        closeSheet();
        bus.emit("start:placing", { decorId: id });
      }));
    }, 260);
  }
  function decorIcon(id) {
    const spr = decorSprite(id);
    return spr.toDataURL("image/png");
  }
  function openMuseum() {
    const bonus = museumBonusPct();
    const rows = CHAINS.map((c) => {
      const don = state.museum[c.id] || 0;
      const nextM = [1, 3, 10, 25].find((m) => don < m);
      const mDone = [1, 3, 10, 25].filter((m) => don >= m).length;
      return `<div class="mu-row ${don > 0 ? "active" : ""}">
      <img src="${chainIconURL(c.id, 6)}" alt="" draggable="false">
      <div class="mu-info">
        <b>${nm(c.name)}</b>
        <div class="mu-stars">${[1, 2, 3, 4].map((i) => `<span class="${i <= mDone ? "on" : ""}">\u2605</span>`).join("")}</div>
        <span>${don > 0 ? T("mu.donations", { n: don }) : "\u2014"}</span>
      </div>
      <div class="mu-next">${nextM ? T("mu.nextMilestone", { n: nextM }) : T("mu.milestoneDone")}</div>
    </div>`;
    }).join("");
    mountSheet(`
    ${sheetHeader(T("mu.title"), "museum")}
    <div class="mu-bonus">
      <div class="mub-main">${ico("star")} ${T("mu.prodBonus")}: <b>+${bonus}%</b></div>
      <div class="mub-frag">${ico("mail")} ${T("mu.fragments")}: <b>${state.fragments}</b></div>
    </div>
    <div class="mu-list">${rows}</div>
  `);
  }
  function openQuests() {
    const rows = state.quests.map((q) => {
      const tpl = QUEST_LBL(q.id);
      const pct = Math.min(100, q.prog / q.goal * 100);
      return `<div class="quest-row ${q.claimed ? "done" : ""}">
      <div class="q-info"><b>${tpl}</b><span>${q.prog}/${q.goal}</span></div>
      <div class="q-bar"><div class="q-fill" style="width:${pct}%"></div></div>
      ${q.claimed ? `<span class="q-done">${SVG.check}</span>` : ""}
    </div>`;
    }).join("");
    mountSheet(`
    ${sheetHeader(T("q.title"), "quest")}
    <div class="quest-list">${rows}</div>
  `);
  }
  function QUEST_LBL(id) {
    const q = state.quests.find((qq) => qq.id === id);
    const names = {
      harvest: ["{n} mahsul hasat et", "Harvest {n} crops"],
      merge: ["{n} birle\u015Ftirme yap", "Perform {n} merges"],
      deliver: ["{n} sipari\u015F teslim et", "Deliver {n} orders"],
      feed: ["{n} kez hayvan yemle", "Feed animals {n} times"],
      gen: ["Jenerat\xF6rlere {n} kez dokun", "Tap generators {n} times"],
      collect: ["{n} makine \xFCr\xFCn\xFC topla", "Collect {n} machine goods"],
      fish: ["Bal\u0131k tutmay\u0131 dene", "Try fishing"],
      sell: ["Ambardan {n} e\u015Fya sat", "Sell {n} barn items"]
    };
    const lang2 = getLang() === "tr" ? 0 : 1;
    return (names[id] || ["?", "?"])[lang2].replace("{n}", String(q?.goal ?? "?"));
  }
  function openMachine(idx) {
    const m = state.machines[idx];
    if (!m) return;
    const def = machineDef(m.type);
    const queueHtml = m.queue.map((j, qi) => {
      const rec = def.recipes.find((r) => r.id === j.r);
      const done = Date.now() - j.at >= j.dur;
      const pct = Math.min(100, (Date.now() - j.at) / j.dur * 100);
      return `<div class="qjob ${done ? "done" : ""}">
      <img src="${itemIconURL(item(rec.out).icon, rec.out, item(rec.out).c1)}" alt="" draggable="false">
      <div class="qj-info"><b>${nm(rec.name)}</b><span>${done ? T("f.machineDone", { item: nm(rec.name) }) : fmtTime(j.at + j.dur - Date.now())}</span>
        <div class="q-bar"><div class="q-fill" style="width:${pct}%"></div></div></div>
      ${done ? `<button class="btn primary mini" data-collect="${qi}">${T("c.collect")}</button>` : ""}
    </div>`;
    }).join("");
    const recHtml = def.recipes.map((r) => {
      const can = r.inputs.every((i2) => (state.barn[i2.item] || 0) >= i2.qty) && m.queue.length < m.slots;
      const ins = r.inputs.map((i2) => {
        const have = state.barn[i2.item] || 0;
        return `<span class="ri ${have >= i2.qty ? "ok" : "no"}"><img src="${itemIconURL(item(i2.item).icon, i2.item, item(i2.item).c1)}" draggable="false">${i2.qty}</span>`;
      }).join("");
      return `<button class="recipe-card ${can ? "" : "disabled"}" data-rec="${r.id}">
      <div class="rc-ins">${ins}<span class="rc-arrow">\u2192</span><img class="rc-out" src="${itemIconURL(item(r.out).icon, r.out, item(r.out).c1)}" draggable="false"></div>
      <div class="rc-meta"><b>${nm(r.name)}</b><span>${fmtTime(r.time * 1e3)} \xB7 ${r.xp} XP</span></div>
    </button>`;
    }).join("");
    mountSheet(`
    ${sheetHeader(nm(def.name), "barn")}
    <div class="mq-wrap">
      <div class="mq-queue"><h4>${T("f.queue")} (${m.queue.length}/${m.slots})</h4>${queueHtml || `<p class="empty-note">${T("f.inQueue")}</p>`}</div>
      <h4>${T("f.recipes")}</h4>
      <div class="mq-recs">${recHtml}</div>
    </div>
  `);
    setTimeout(() => {
      const s = sheetEl.querySelector(".sheet:not(.closing)");
      if (!s) return;
      s.querySelectorAll("[data-collect]").forEach((b) => b.addEventListener("click", () => {
        if (collectMachine(idx, parseInt(b.dataset.collect))) {
          sfx("collect");
          openMachine(idx);
        }
      }));
      s.querySelectorAll("[data-rec]").forEach((b) => b.addEventListener("click", () => {
        if (startRecipe(idx, b.dataset.rec)) openMachine(idx);
      }));
    }, 260);
  }
  function openPen(idx) {
    const a = state.animals[idx];
    if (!a) return;
    const def = animalDef(a.type);
    const fed = a.fedAt > 0;
    const ready = fed && penProgress(idx) >= 1;
    const pct = fed ? Math.min(100, penProgress(idx) * 100) : 0;
    const spr = animalSprite(a.type, 0);
    const feedCost = def.feed * a.count;
    mountSheet(`
    ${sheetHeader(nm(def.name), "barn")}
    <div class="pen-hero">
      <img src="${spr.toDataURL("image/png")}" alt="" draggable="false">
      <div class="ph-info">
        <b>${nm(def.name)} \xD7${a.count}</b>
        <span>${T("f.happy")}: ${"\u2665".repeat(Math.min(5, a.happy % 5 === 0 && a.happy > 0 ? 5 : a.happy % 5))}${"\u2661".repeat(5 - Math.min(5, a.happy % 5 === 0 && a.happy > 0 ? 5 : a.happy % 5))}</span>
        ${fed ? `<div class="q-bar"><div class="q-fill" style="width:${pct}%"></div></div><span>${ready ? T("f.collectProduct") : fmtTime(a.fedAt + a.fedDur - Date.now())}</span>` : `<span class="ph-idle">${T("f.fed")} \u2717</span>`}
      </div>
    </div>
    <div class="pen-actions">
      ${ready ? `<button class="btn primary big" id="pen-collect">${T("f.collectProduct")} (${a.count} ${nm(item(def.product).name)})</button>` : !fed ? `<button class="btn gold big" id="pen-feed">${T("f.feedAll")} \xB7 ${T("f.feedCost", { n: feedCost })}</button>` : `<button class="btn ghost big disabled">${fmtTime(a.fedAt + a.fedDur - Date.now())}</button>`}
      ${a.count < 4 ? `<button class="btn brown" id="pen-upg">${T("f.penUpgrade", { n: a.count, m: a.count + 1 })} \xB7 ${fmt(Math.round(def.cost * 0.6))} \u{1FA99}</button>` : ""}
    </div>
  `);
    setTimeout(() => {
      const s = sheetEl.querySelector(".sheet:not(.closing)");
      if (!s) return;
      s.querySelector("#pen-feed")?.addEventListener("click", () => {
        if (feedPen(idx)) openPen(idx);
      });
      s.querySelector("#pen-collect")?.addEventListener("click", () => {
        if (collectPen(idx)) openPen(idx);
      });
      s.querySelector("#pen-upg")?.addEventListener("click", () => {
        if (upgradePen(idx)) openPen(idx);
      });
    }, 260);
  }
  function openGhostMachine() {
    const next = MACHINES.find((m) => !state.machines.some((mm) => mm.type === m.id));
    if (!next) {
      toast(T("c.max"));
      return;
    }
    if (state.level < next.lvl) {
      toast(T("c.needLvl", { n: next.lvl }));
      return;
    }
    Promise.resolve().then(() => (init_art(), art_exports)).then((art) => {
      const img = art.buildingSprite("machine", next.id).toDataURL("image/png");
      mountSheet(`
      ${sheetHeader(T("f.buyMachine"), "shop")}
      <div class="ghost-card">
        <img src="${img}" alt="" draggable="false">
        <div class="gc-info">
          <b>${nm(next.name)}</b>
          <span>${next.recipes.map((r) => nm(r.name)).join(" \xB7 ")}</span>
        </div>
        <button class="btn primary big" id="gm-buy">${fmt(next.cost)} \u{1FA99}</button>
      </div>
    `);
      setTimeout(() => {
        sheetEl.querySelector("#gm-buy")?.addEventListener("click", () => {
          if (buyMachine(next.id)) closeSheet();
        });
      }, 260);
    });
  }
  function openGhostPen() {
    const candidates = ANIMALS.filter((a) => a.lvl <= state.level && !state.animals.some((x) => x.type === a.id));
    const list = candidates.length ? candidates : ANIMALS.filter((a) => !state.animals.some((x) => x.type === a.id)).slice(0, 3);
    const cells = list.map((a) => {
      const can = state.level >= a.lvl && state.coins >= a.cost;
      return `<button class="animal-card ${can ? "" : "locked"}" data-animal="${a.id}">
      <img src="${animalSprite(a.id, 0).toDataURL("image/png")}" alt="" draggable="false">
      <b>${nm(a.name)}</b>
      <span>${state.level >= a.lvl ? `${fmt(a.cost)} \u{1FA99} \xB7 ${nm(item(a.product).name)}` : T("c.needLvl", { n: a.lvl })}</span>
    </button>`;
    }).join("");
    mountSheet(`
    ${sheetHeader(T("f.animals"), "barn")}
    <div class="animal-grid">${cells}</div>
  `);
    setTimeout(() => {
      sheetEl.querySelectorAll("[data-animal]").forEach((b) => b.addEventListener("click", () => {
        if (buyAnimal(b.dataset.animal)) closeSheet();
      }));
    }, 260);
  }
  function openDecorPop(x, y) {
    const d = state.decor.find((dd) => dd.x === x && dd.y === y);
    if (!d) return;
    const def = DECOR.find((dd) => dd.id === d.id);
    if (extraEl) {
      extraEl.innerHTML = `
      <div class="decor-pop">
        <b>${nm(def.name)}</b>
        <div>
          <button class="btn mini brown" id="dp-move">${T("f.move")}</button>
          <button class="btn mini ghost" id="dp-remove">${T("f.remove")} (+${fmt(Math.floor(def.cost / 2))} \u{1FA99})</button>
        </div>
      </div>`;
      extraEl.querySelector("#dp-move").addEventListener("click", () => {
        extraEl.innerHTML = "";
        bus.emit("start:placing", { decorId: d.id, moveFrom: { x, y } });
      });
      extraEl.querySelector("#dp-remove").addEventListener("click", () => {
        removeDecor(x, y);
        extraEl.innerHTML = "";
      });
    }
  }
  function openFishing() {
    fishReady();
    const casts = state.fish.casts;
    mountSheet(`
    ${sheetHeader(T("fish.title"), "fish")}
    <div class="fish-casts">${T("fish.casts", { n: casts })}</div>
    <div class="fish-game" id="fish-game">
      <div class="fg-bar">
        <div class="fg-zone"></div>
        <div class="fg-marker" id="fg-marker"></div>
      </div>
      <button class="btn primary big" id="fg-pull">${T("fish.pull")}</button>
      <button class="btn gold big hidden" id="fg-cast">${T("fish.cast")}</button>
      <div class="fg-result hidden" id="fg-result"></div>
    </div>
  `);
    setTimeout(() => {
      const s = sheetEl.querySelector(".sheet:not(.closing)");
      if (!s) return;
      const marker = s.querySelector("#fg-marker");
      const zone = s.querySelector(".fg-zone");
      const pull = s.querySelector("#fg-pull");
      const castBtn = s.querySelector("#fg-cast");
      const result = s.querySelector("#fg-result");
      let pos = 0, dir = 1, raf = 0, zonePos = 0.5, zoneW = 0.24, playing = false;
      const setZone = () => {
        zonePos = 0.3 + Math.random() * 0.4;
        zoneW = 0.14 + Math.random() * 0.1;
        zone.style.left = (zonePos - zoneW / 2) * 100 + "%";
        zone.style.width = zoneW * 100 + "%";
      };
      const loop2 = () => {
        pos += dir * 0.016;
        if (pos > 1) {
          pos = 1;
          dir = -1;
        }
        if (pos < 0) {
          pos = 0;
          dir = 1;
        }
        marker.style.left = pos * 100 + "%";
        raf = requestAnimationFrame(loop2);
      };
      const startCast = () => {
        if (!fishReady()) {
          result.classList.remove("hidden");
          result.textContent = T("fish.noCasts");
          pull.classList.add("hidden");
          castBtn.classList.add("hidden");
          return;
        }
        setZone();
        playing = true;
        pos = 0;
        dir = 1;
        pull.classList.remove("hidden");
        castBtn.classList.add("hidden");
        result.classList.add("hidden");
        cancelAnimationFrame(raf);
        loop2();
      };
      pull.addEventListener("click", () => {
        if (!playing) return;
        playing = false;
        cancelAnimationFrame(raf);
        const center = zonePos;
        const accuracy = Math.max(0, 1 - Math.abs(pos - center) / (zoneW * 1.6));
        const tier = fishDone(accuracy);
        const fishName = nm(CHAINS.find((c) => c.id === "fish").tiers[tier - 1]);
        if (addItem("fish", tier)) {
          result.innerHTML = `<b>${accuracy > 0.85 ? T("fish.perfect") : accuracy > 0.55 ? T("fish.good") : T("fish.ok")}</b><br>${T("fish.got", { item: fishName })}`;
        } else {
          result.innerHTML = `<b>${T("fish.boardFull")}</b>`;
        }
        result.classList.remove("hidden");
        pull.classList.add("hidden");
        castBtn.classList.remove("hidden");
        s.querySelector(".fish-casts").textContent = T("fish.casts", { n: state.fish.casts });
        haptic(20);
      });
      castBtn.addEventListener("click", startCast);
      if (fishReady()) startCast();
      else {
        result.classList.remove("hidden");
        result.textContent = T("fish.noCasts");
        pull.classList.add("hidden");
        castBtn.classList.add("hidden");
      }
    }, 260);
  }
  function openProfile() {
    const s = state.stats;
    mountSheet(`
    ${sheetHeader(state.name || T("intro.nameDefault"), "home")}
    <div class="profile-card">
      <div class="pr-lvl">${ico("star")} ${T("c.lvl")} ${state.level}</div>
      <div class="pr-chapter">\u{1F4D6} ${nm(chapterName(Math.floor((state.level - 1) / 250) + 1))}</div>
      <div class="pr-stats">
        <div><b>${fmt(s.harvests)}</b><span>\u{1F33E}</span></div>
        <div><b>${fmt(s.merges)}</b><span>\u2728</span></div>
        <div><b>${fmt(s.deliveries)}</b><span>\u{1F4E6}</span></div>
        <div><b>${fmt(s.gens)}</b><span>\u26A1</span></div>
        <div><b>${fmt(s.fish)}</b><span>\u{1F41F}</span></div>
        <div><b>${fmt(state.fragments)}</b><span> Blueprint</span></div>
      </div>
    </div>
  `);
  }
  function openSettings() {
    const st = state.settings;
    mountSheet(`
    ${sheetHeader(T("s.title"), "gear")}
    <div class="set-list">
      <div class="set-row"><span>\u{1F50A} ${T("s.sound")}</span><button class="toggle ${st.sfx ? "on" : ""}" data-set="sfx"><i></i></button></div>
      <div class="set-row"><span>\u{1F3B5} ${T("s.music")}</span><button class="toggle ${st.music ? "on" : ""}" data-set="music"><i></i></button></div>
      <div class="set-row"><span>\u{1F4F3} ${T("s.haptics")}</span><button class="toggle ${st.haptic ? "on" : ""}" data-set="haptic"><i></i></button></div>
      <div class="set-row"><span>\u{1F310} ${T("s.lang")}</span>
        <div class="lang-row">
          <button class="tab ${getLang() === "tr" ? "on" : ""}" data-lang="tr">T\xFCrk\xE7e</button>
          <button class="tab ${getLang() === "en" ? "on" : ""}" data-lang="en">English</button>
        </div>
      </div>
      <div class="set-row danger"><span>\u{1F5D1}\uFE0F ${T("s.reset")}</span><button class="btn mini brown" id="set-reset">${T("s.reset")}</button></div>
    </div>
    <div class="about-box">
      <b>Farm Fusion v${VERSION}</b>
      <p>${T("s.privacy")}</p>
      <p>${T("s.credits")}</p>
    </div>
  `);
    setTimeout(() => {
      const s = sheetEl.querySelector(".sheet:not(.closing)");
      if (!s) return;
      s.querySelectorAll("[data-set]").forEach((b) => b.addEventListener("click", () => {
        const key = b.dataset.set;
        state.settings[key] = !state.settings[key];
        b.classList.toggle("on", state.settings[key]);
        sfx("tap");
        bus.emit("settings");
        saveGame();
      }));
      s.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => {
        setLang(b.dataset.lang);
        state.settings.lang = getLang();
        saveGame();
        location.reload();
      }));
      s.querySelector("#set-reset")?.addEventListener("click", async () => {
        if (await confirmDlg(T("s.reset"), T("s.resetConfirm"))) {
          clearSave();
          location.reload();
        }
      });
    }, 260);
  }
  function openDailySheet() {
    showDaily();
  }
  function openDebug() {
    mountSheet(`
    ${sheetHeader(`\u2699\uFE0F ${T("x.debug")}`, "gear")}
    <div class="dbg-grid">
      <button class="btn brown" id="db-coins">+1000 \u{1FA99}</button>
      <button class="btn brown" id="db-gems">+25 \u{1F48E}</button>
      <button class="btn brown" id="db-xp">+500 XP</button>
      <button class="btn brown" id="db-energy">+30 \u26A1</button>
      <button class="btn brown" id="db-skip">+1 saat</button>
      <button class="btn brown" id="db-lvl">+5 seviye</button>
    </div>
  `);
    setTimeout(() => {
      const s = sheetEl.querySelector(".sheet:not(.closing)");
      if (!s) return;
      s.querySelector("#db-coins").addEventListener("click", () => {
        state.coins += 1e3;
        bus.emit("res");
      });
      s.querySelector("#db-gems").addEventListener("click", () => {
        state.gems += 25;
        bus.emit("res");
      });
      s.querySelector("#db-xp").addEventListener("click", () => {
        Promise.resolve().then(() => (init_systems(), systems_exports)).then((m) => m.grantXP(500));
      });
      s.querySelector("#db-energy").addEventListener("click", () => {
        Promise.resolve().then(() => (init_core(), core_exports)).then((m) => m.tickEnergy());
        state.energy += 30;
        bus.emit("res");
      });
      s.querySelector("#db-skip").addEventListener("click", () => {
        timeSkip(36e5);
      });
      s.querySelector("#db-lvl").addEventListener("click", () => {
        let need = 0;
        for (let i = state.level; i < state.level + 5; i++) need += Math.round(55 * Math.pow(i, 1.45) + 30 * i);
        Promise.resolve().then(() => (init_systems(), systems_exports)).then((m) => m.grantXP(need));
      });
    }, 260);
  }
  function timeSkip(ms) {
    const now = Date.now();
    for (const p of state.plots) if (p) p.at -= ms;
    for (const m of state.machines) for (const j of m.queue) {
      j.at -= ms;
    }
    for (const a of state.animals) if (a.fedAt) a.fedAt -= ms;
    if (state.expandAt) state.expandAt -= ms;
    state.energyAt -= ms;
    Promise.resolve().then(() => (init_core(), core_exports)).then((m) => m.tickEnergy());
    bus.emit("farm:changed");
    bus.emit("res");
    toast("\u23E9 +1 saat");
  }

  // src/tutorial.ts
  init_core();
  init_i18n();
  init_audio();
  var overlay = null;
  var bubble = null;
  var farm = null;
  var step = -1;
  function isActive() {
    return state.tutorial >= 0;
  }
  function initTutorial(f) {
    farm = f;
    overlay = document.getElementById("tutorial");
    bubble = document.getElementById("pika-bubble");
    const evs = ["harvested", "planted", "panel:orders", "orderdone", "open:fusion", "gen:tap", "merge:done", "tut:next"];
    for (const e of evs) bus.on(e, () => onEvent(e));
    bus.on("sheet:open", () => overlay?.classList.add("sheet-open"));
    bus.on("sheet:close", () => overlay?.classList.remove("sheet-open"));
  }
  function startTutorial() {
    if (state.tutorial < 0) return;
    step = state.tutorial;
    show();
  }
  function onEvent(e) {
    if (state.tutorial < 0 || step < 0) return;
    const advanceOn = {
      0: ["tut:next"],
      1: ["harvested"],
      2: ["planted"],
      3: ["tut:next"],
      4: ["harvested"],
      5: ["panel:orders"],
      6: ["orderdone"],
      7: ["open:fusion"],
      8: ["gen:tap"],
      9: ["merge:done"],
      10: ["tut:next"]
    };
    const list = advanceOn[step] || [];
    if (list.includes(e)) {
      step++;
      state.tutorial = step;
      if (step > 10) {
        finish();
        return;
      }
      show();
    }
  }
  function finish() {
    state.tutorial = -1;
    step = -1;
    hideOverlay();
    state.coins += 300;
    state.gems += 3;
    bus.emit("res");
    sfx("levelup");
    bus.emit("toast", "\u{1F393} +300 \u{1FA99} +3 \u{1F48E}");
  }
  function hideOverlay() {
    if (overlay) overlay.innerHTML = "";
    if (bubble) bubble.classList.add("hidden");
  }
  function targetRect() {
    const s = step;
    if (s === 1 || s === 2 || s === 4) {
      const pi = s === 1 || s === 4 ? tutorialPlotReady() : tutorialPlotEmpty();
      if (pi >= 0 && farm) {
        const x = pi % 10 + 3, y = Math.floor(pi / 10) + 3;
        const p = farm.worldToScreen(farm.tileCX(x, y), farm.tileCY(x, y));
        const r = 46;
        return { rect: new DOMRect(p.x - r, p.y - r, r * 2, r * 2), anywhere: false };
      }
      return { rect: null, anywhere: false };
    }
    if (s === 5 || s === 6) return { rect: rectOf("#btn-orders"), anywhere: false };
    if (s === 7) return { rect: rectOf("#btn-fusion"), anywhere: false };
    if (s === 8 || s === 9) return { rect: null, anywhere: false };
    return { rect: null, anywhere: true };
  }
  function rectOf(sel) {
    const e = document.querySelector(sel);
    return e ? e.getBoundingClientRect() : null;
  }
  function tutorialPlotReady() {
    for (let i = 0; i < state.plots.length; i++) {
      const p = state.plots[i];
      if (p && Date.now() - p.at >= p.dur) return i;
    }
    return -1;
  }
  function tutorialPlotEmpty() {
    for (let i = 0; i < state.plots.length; i++) if (!state.plots[i] && isActivePlot(i)) return i;
    return -1;
  }
  function isActivePlot(i) {
    const { off, size } = { off: Math.floor((16 - Math.min(10, 4 + 2 * state.expansion)) / 2), size: Math.min(10, 4 + 2 * state.expansion) };
    const x = i % 10 + 3, y = Math.floor(i / 10) + 3;
    return x >= off && y >= off && x < off + size && y < off + size;
  }
  function show() {
    if (!overlay) return;
    const title = T(`tut.${step}.title`);
    const text = T(`tut.${step}.text`);
    const { rect, anywhere } = targetRect();
    overlay.innerHTML = "";
    if (step === 3) {
      overlay.innerHTML = `
      <div class="tut-catcher" id="tut-catch"></div>
      <div class="tut-card center-card">
        <h4>${title}</h4><p>${text}</p>
        <button class="btn gold big" id="tut-speed">\u26A1 ${T("f.speedUp")}</button>
      </div>`;
      overlay.querySelector("#tut-speed").addEventListener("click", () => {
        for (let i = 0; i < state.plots.length; i++) {
          const p = state.plots[i];
          if (p && Date.now() - p.at < p.dur) {
            p.at = Date.now() - p.dur;
          }
        }
        sfx("energy");
        bus.emit("farm:changed");
        onEvent("tut:next");
      });
      return;
    }
    if (anywhere) {
      overlay.innerHTML = `
      <div class="tut-dim tut-dim-block"></div>
      <div class="tut-card center-card">
        <div class="tc-pika"></div>
        <h4>${title}</h4><p>${text}</p>
        <button class="btn primary" id="tut-ok">${T("c.ok")}</button>
      </div>`;
      overlay.querySelector("#tut-ok").addEventListener("click", () => {
        sfx("tap");
        onEvent("tut:next");
      });
      return;
    }
    if (rect) {
      const l = rect.left - 8, t = rect.top - 8, r = rect.right + 8, b = rect.bottom + 8;
      overlay.innerHTML = `
      <div class="tut-hole" style="left:${l}px;top:${t}px;width:${r - l}px;height:${b - t}px"></div>
      <div class="tut-catch" style="left:0;top:0;width:100%;height:${Math.max(0, t)}px"></div>
      <div class="tut-catch" style="left:0;top:${b}px;width:100%;bottom:0"></div>
      <div class="tut-catch" style="left:0;top:${t}px;width:${Math.max(0, l)}px;height:${b - t}px"></div>
      <div class="tut-catch" style="left:${r}px;top:${t}px;right:0;height:${b - t}px"></div>
      <div class="tut-card" style="left:${bubbleX(rect)}px;top:${bubbleY(rect)}px">
        <div class="tc-pika"></div>
        <h4>${title}</h4><p>${text}</p>
      </div>
      <div class="tut-finger" style="left:${rect.left + rect.width / 2 - 18}px;top:${rect.top + rect.height / 2 - 10}px">\u{1F446}</div>`;
    } else {
      overlay.innerHTML = `
      <div class="tut-dim"></div>
      <div class="tut-card center-card">
        <div class="tc-pika"></div>
        <h4>${title}</h4><p>${text}</p>
      </div>`;
    }
  }
  function bubbleX(r) {
    const w = Math.min(300, window.innerWidth - 24);
    return Math.max(12, Math.min(window.innerWidth - w - 12, r.left + r.width / 2 - w / 2));
  }
  function bubbleY(r) {
    return Math.min(window.innerHeight - 220, r.bottom + 14);
  }

  // src/letter.ts
  init_data();
  init_core();
  init_i18n();
  init_audio();
  init_ui();
  function introFlow() {
    return new Promise((resolve) => {
      const root2 = document.getElementById("modals");
      let step2 = 0;
      const name = state.name || T("intro.nameDefault");
      const wrap = el("div", "intro-flow");
      root2.appendChild(wrap);
      const show2 = () => {
        wrap.innerHTML = "";
        if (step2 < 3) {
          const card = el("div", "intro-card", `
          <div class="ic-seal">\u{1F9ED}</div>
          <h3>${T(`intro.${step2}.title`)}</h3>
          <p>${T(`intro.${step2}.body`)}</p>
          <div class="ic-actions">
            <button class="btn ghost" id="in-skip">${T("intro.skip")}</button>
            <button class="btn primary" id="in-next">${step2 < 2 ? T("l.tapNext") : T("intro.start")}</button>
          </div>
        `);
          wrap.appendChild(card);
          requestAnimationFrame(() => card.classList.add("open"));
          card.querySelector("#in-next").addEventListener("click", () => {
            sfx("tap");
            step2++;
            show2();
          });
          card.querySelector("#in-skip").addEventListener("click", () => {
            sfx("close");
            finish2(name);
          });
        } else {
          const card = el("div", "intro-card", `
          <h3>${T("intro.nameLabel")}</h3>
          <input id="in-name" maxlength="18" value="${name}" autocomplete="off">
          <div class="ic-actions">
            <button class="btn primary big" id="in-go">${T("intro.start")}</button>
          </div>
        `);
          wrap.appendChild(card);
          requestAnimationFrame(() => card.classList.add("open"));
          setTimeout(() => card.querySelector("#in-name").focus(), 300);
          card.querySelector("#in-go").addEventListener("click", () => {
            const val = card.querySelector("#in-name").value.trim() || name;
            sfx("levelup");
            finish2(val.slice(0, 18));
          });
        }
      };
      const finish2 = (n) => {
        wrap.remove();
        resolve(n);
      };
      sfx("letter");
      show2();
    });
  }
  function showLetter(level) {
    const idx = state.letters;
    const rng = mulberry32(level * 977 + 13);
    const tpl = nm(LETTER_TPL[Math.floor(rng() * LETTER_TPL.length)]);
    const place = nm(PLACES[Math.floor(rng() * PLACES.length)]);
    const good = nm(GOODS[Math.floor(rng() * GOODS.length)]);
    const npc = nm(NPC_ROSTER[Math.floor(rng() * NPC_ROSTER.length)].name);
    const n = 2 + Math.floor(rng() * 9);
    const text = tpl.replace(/{place}/g, place).replace(/{good}/g, good).replace(/{npc}/g, npc).replace(/{n}/g, String(n));
    const chapterIdx = Math.floor((level - 1) / 250) + 1;
    const gems = 2 + Math.floor(level / 100);
    state.letters++;
    state.fragments++;
    const root2 = document.getElementById("modals");
    const m = el("div", "letter-wrap", `
    <div class="letter-card">
      <div class="lt-head">
        <span class="lt-seal"> wax </span>
        <div><b>${T("l.from")}</b><span>${nm(chapterName(chapterIdx))}</span></div>
      </div>
      <div class="lt-body">
        <p>${text}</p>
        <p class="lt-sign">\u2014 ${"Felix"}</p>
      </div>
      <div class="lt-rewards">
        <span class="chip gold">+${gems} \u{1F48E}</span>
        <span class="chip teal">${T("l.frag", { n: 1 })}</span>
      </div>
      <button class="btn primary big" id="lt-ok">${T("l.tapNext")}</button>
    </div>`);
    root2.appendChild(m);
    sfx("letter");
    state.gems += gems;
    bus.emit("res");
    m.querySelector("#lt-ok").addEventListener("click", () => {
      sfx("tap");
      m.remove();
    });
  }

  // src/ads.ts
  init_core();
  init_ui();
  function initAds() {
    bus.on("ad:request", (d) => {
      showAdOverlay(d.reward);
    });
  }

  // src/main.ts
  init_systems();
  var game = document.getElementById("game");
  var boot = document.getElementById("boot");
  var farmCanvas = document.getElementById("farm");
  var farm2;
  var running = true;
  var lastFrame = performance.now();
  var lastTick = 0;
  var lastSave = 0;
  var pikaTipAt = 0;
  function showBoot(hasSave) {
    boot.innerHTML = `
    <div class="boot-bg"></div>
    <div class="boot-inner">
      <div class="logo">
        <span class="logo-farm">FARM</span>
        <span class="logo-fusion">FUSION</span>
        <span class="logo-sub">${T("boot.sub")}</span>
      </div>
      <div class="boot-pika" id="boot-pika"></div>
      <div class="boot-actions">
        ${hasSave ? `<button class="btn primary big" id="b-continue">${T("boot.continue")}</button>
                     <button class="btn ghost" id="b-new">${T("boot.new")}</button>` : `<button class="btn primary big pulse" id="b-play">${T("boot.play")}</button>`}
      </div>
    </div>
    <div class="boot-foot">v${VERSION} \xB7 ${T("s.privacy")}</div>
  `;
    const start = () => {
      initAudio();
      boot.classList.add("fade-out");
      setTimeout(() => boot.classList.add("hidden"), 500);
      beginGame(false);
    };
    boot.querySelector("#b-play")?.addEventListener("click", start);
    boot.querySelector("#b-continue")?.addEventListener("click", () => {
      initAudio();
      boot.classList.add("fade-out");
      setTimeout(() => boot.classList.add("hidden"), 500);
      beginGame(true);
    });
    boot.querySelector("#b-new")?.addEventListener("click", async () => {
      initAudio();
      if (!await confirmNew()) return;
      boot.classList.add("fade-out");
      setTimeout(() => boot.classList.add("hidden"), 500);
      beginGame(false);
    });
  }
  function confirmNew() {
    return Promise.resolve().then(() => (init_ui(), ui_exports)).then((ui) => ui.confirmDlg(T("boot.new"), T("boot.newConfirm")));
  }
  async function beginGame(fromSave) {
    if (!fromSave) setState(newGame());
    ensureOrders();
    ensureQuests();
    checkDailyRollover();
    if (fromSave) {
      const off = applyOffline();
      if (off) setTimeout(() => showOffline(off), 600);
    } else {
      await introFlow().then((name) => {
        state.name = name;
      });
    }
    game.classList.remove("hidden");
    initHUD(document.getElementById("hud"));
    initPanels(document.getElementById("sheets"), document.getElementById("extra"));
    initMergeUI(document.getElementById("fusion"));
    initTutorial(farm2);
    initAds();
    bus.on("levelup", (d) => showLevelUp(d.level, d.unlocks));
    bus.on("letter", (d) => setTimeout(() => showLetter(d.level), 800));
    bus.on("chapter", (d) => setTimeout(() => showChapter(d.n), 400));
    bus.on("open:fusion", () => {
      openFusion();
      setMusicScene("board");
    });
    bus.on("close:fusion", () => {
      closeFusion();
      setMusicScene("island");
    });
    bus.on("floatat", (d) => {
      const p = farm2.worldToScreen(farm2.tileCX(d.x, d.y), farm2.tileCY(d.x, d.y) - 40);
      floatText(p.x, p.y, d.text, "gold");
    });
    bus.on("orderdone", (o) => {
      currencyFly("coins", window.innerWidth / 2, window.innerHeight / 2, 7);
      toast(`${T("o.delivered")} +${o.coins} \u{1FA99}`);
    });
    bus.on("start:placing", (d) => {
      if (d.moveFrom) {
        removeDecor(d.moveFrom.x, d.moveFrom.y);
      }
      farm2.placing = d.decorId;
      farm2.onPlace = (x, y) => {
        if (placeDecor(d.decorId, x, y)) {
          farm2.placing = null;
          toast(`${T("f.placed")} \u2728`);
        }
      };
      toast(T("f.tapToPlace"));
    });
    updateHUD();
    if (isActive()) startTutorial();
    lastFrame = performance.now();
    requestAnimationFrame(loop);
    saveGame();
    if (new URLSearchParams(location.search).get("debug") === "1") {
      const db = el("button", "debug-fab", "\u2699\uFE0F");
      db.addEventListener("click", () => bus.emit("debug:open"));
      document.body.appendChild(db);
      const ff = {
        version: VERSION,
        get state() {
          return state;
        },
        get farm() {
          return farm2;
        },
        bus,
        save: saveGame,
        tap(cx, cy) {
          const o = { bubbles: true, cancelable: true, pointerId: 7, clientX: cx, clientY: cy, isPrimary: true, pointerType: "touch" };
          farmCanvas.dispatchEvent(new PointerEvent("pointerdown", o));
          farmCanvas.dispatchEvent(new PointerEvent("pointerup", o));
        },
        tapTile(tx, ty) {
          const p = farm2.worldToScreen(farm2.tileCX(tx, ty), farm2.tileCY(tx, ty));
          const r = farmCanvas.getBoundingClientRect();
          ff.tap(p.x + r.left, p.y + r.top);
        }
      };
      window.__ff = ff;
    }
  }
  function loop(now) {
    if (!running) return;
    const dt = now - lastFrame;
    lastFrame = now;
    try {
      farm2.render(dt);
    } catch (e) {
      if (!loop.__errOnce) {
        loop.__errOnce = true;
        console.error("render error:", e);
      }
    }
    if (now - lastTick > 1e3) {
      lastTick = now;
      tickEnergy();
      tickGame();
      updateHUD();
      const night = farm2.isNight();
      setMusicScene(night ? "night" : "island");
    }
    if (now - lastSave > 2e4) {
      lastSave = now;
      saveGame();
    }
    updatePikaBubble(now);
    requestAnimationFrame(loop);
  }
  var pikaTipIdx = Math.floor(Math.random() * 7);
  function updatePikaBubble(now) {
    const bubble2 = document.getElementById("pika-bubble");
    if (!bubble2) return;
    if (isActive()) {
      bubble2.classList.add("hidden");
      return;
    }
    if (now > pikaTipAt) {
      pikaTipAt = now + 45e3 + Math.random() * 6e4;
      pikaTipIdx = (pikaTipIdx + 1 + Math.floor(Math.random() * 3)) % 7;
      const idx = state.energy < 5 ? 4 : pikaTipIdx;
      bubble2.textContent = T(`pika.${idx}`);
      bubble2.classList.remove("hidden");
      setTimeout(() => bubble2.classList.add("hidden"), 6e3);
    }
    if (!bubble2.classList.contains("hidden")) {
      const p = farm2.pikaScreenPos();
      bubble2.style.left = Math.max(8, Math.min(window.innerWidth - 220, p.x - 90)) + "px";
      bubble2.style.top = Math.max(60, p.y - 60) + "px";
    }
  }
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      running = false;
      saveGame();
    } else {
      running = true;
      lastFrame = performance.now();
      tickEnergy();
      requestAnimationFrame(loop);
    }
  });
  window.addEventListener("pagehide", saveGame);
  window.addEventListener("beforeunload", saveGame);
  (function init() {
    const saved = loadGame();
    if (saved) {
      setState(saved);
      setLang(saved.settings.lang || "tr");
    }
    farm2 = new FarmScene(farmCanvas);
    showBoot(!!saved);
    const bootLoop = () => {
      if (boot.classList.contains("hidden")) return;
      farm2.render(16);
      requestAnimationFrame(bootLoop);
    };
    requestAnimationFrame(bootLoop);
    setTimeout(() => {
      const bp = document.getElementById("boot-pika");
      if (bp) {
        Promise.resolve().then(() => (init_art(), art_exports)).then((art) => {
          bp.style.background = `center/contain no-repeat url(${art.pikaSprite("sit").toDataURL("image/png")})`;
        });
      }
    }, 50);
  })();
})();
