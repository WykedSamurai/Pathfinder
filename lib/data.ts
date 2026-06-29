export type GameSystem = "Pathfinder 1E" | "Pathfinder 2E" | "D&D 5E" | "Star Wars Saga" | "Custom";

export type ModuleStatus = "planned" | "active" | "later";

export const supportedSystems: GameSystem[] = [
  "Pathfinder 1E",
  "Pathfinder 2E",
  "D&D 5E",
  "Star Wars Saga",
  "Custom",
];

export const campaignModules = [
  {
    title: "Campaign Hub",
    status: "active" as ModuleStatus,
    description: "Create separate campaign spaces with their own characters, lore, rules, sessions, and AI context.",
  },
  {
    title: "Live Roleplay",
    status: "planned" as ModuleStatus,
    description: "A shared chat room for narration, player posts, OOC notes, and automatic session logs.",
  },
  {
    title: "Character Vault",
    status: "planned" as ModuleStatus,
    description: "Store player characters, NPCs, portraits, secrets, inventories, and campaign-specific visibility.",
  },
  {
    title: "Rules Notes",
    status: "planned" as ModuleStatus,
    description: "Save house rules, etiquette, system references, and campaign-specific rulings without mixing worlds.",
  },
  {
    title: "Crafting Module",
    status: "later" as ModuleStatus,
    description: "Track recipes, materials, tools, skill checks, crafting time, progress, and results.",
  },
  {
    title: "Kingdom Builder",
    status: "later" as ModuleStatus,
    description: "Manage settlements, hexes, treasury, buildings, leaders, armies, events, and kingdom turns.",
  },
];

export const sampleCampaigns = [
  {
    name: "Ashes of House Dacosta",
    system: "Pathfinder 1E",
    tone: "Solo intrigue, noble investigation, slow-burn politics",
  },
  {
    name: "Outer Rim Shadows",
    system: "Star Wars Saga",
    tone: "Smugglers, force mysteries, faction trouble",
  },
  {
    name: "Custom Homebrew World",
    system: "Custom",
    tone: "Rules-light shared storytelling sandbox",
  },
];
