import contentData from "../assets/content.tsv?url";

// Image metas import
import cosmosInterfaceImageMeta from "../assets/image_metas/COSMOS Interface.tsv?url";
import nautilusRendersImageMeta from "../assets/image_metas/Nautilus Renders.tsv?url";
import startingANewHonorsPortfolioWebsiteImageMeta from "../assets/image_metas/Starting a New Honors Portfolio Website.tsv?url";

// Link metas import
import internationalBrainLabPositionLinkMeta from "../assets/link_metas/International Brain Lab Position.tsv?url";
import multimodalityFinalPortfolioLinkMeta from "../assets/link_metas/Multimodality Final Portfolio.tsv?url";
import nasaSummerUndergraduateResearchProgramLinkMeta from "../assets/link_metas/NASA Summer Undergraduate Research Program.tsv?url";

// Google Drive prefix
const GOOGLE_DRIVE_PREFIX = "https://drive.google.com/uc?id=";

// Starting a New Honors Portfolio Website
const STARTING_A_NEW_HONORS_PORTFOLIO_WEBSITE_0_THUMB =
  "13ZxzfGabLqeNTpKN9IISGRRFaht4ScTA";
const STARTING_A_NEW_HONORS_PORTFOLIO_WEBSITE_1_THUMB =
  "13YYUhYGfAcTkPfPPLye8Sjlo5ZrKJuzV";
const STARTING_A_NEW_HONORS_PORTFOLIO_WEBSITE_0 =
  "13MxL5x1HbaDFF_15hc8z1qjwBbqktxqP";
const STARTING_A_NEW_HONORS_PORTFOLIO_WEBSITE_1 =
  "13VqvvQpnzL67eMxOOP-0whKZg2Kq7Xbu";

// ROV22 Simulation Demo
const ROV22_SIMULATION_DEMO_0 = "https://www.youtube.com/embed/ygnG9eYG1sI";

// Leadership and Democracy Final Paper
const LEADERSHIP_AND_DEMOCRACY_FINAL_PAPER_0 = `${GOOGLE_DRIVE_PREFIX}10cRFabkm-YSRPJmX72XTpelixVsiHtW9`;

// Nautilus Renders
const NAUTILUS_RENDERS_0_THUMB = "11wJksEDdFmCPswkyG1Vv_Arhj4QaUlNp";
const NAUTILUS_RENDERS_1_THUMB = "11zQj6CxQ29Ec60Hr8TCyhIwFhaHKCao-";
const NAUTILUS_RENDERS_2_THUMB = "11rpK4AaQZgfj4C3gC8PC2BFp5PrKoVvq";
const NAUTILUS_RENDERS_3_THUMB = "11sD4g9ipGSC31d9qW7NrRgpkPa4AL1H8";
const NAUTILUS_RENDERS_4_THUMB = "11zPtkbaDYMVfU_JwgMBcoaiwlIOyL3ge";
const NAUTILUS_RENDERS_5_THUMB = "11pXjlPQ0Cpz6q68Lwy84Ct-yMfXOvijx";
const NAUTILUS_RENDERS_0 = "12jTDVr05tx2ScmrBwQHTKPUahp5I5oSs";
const NAUTILUS_RENDERS_1 = "12r7lN4tVp_HJmY-PKPFriCbmlWBGoGyI";
const NAUTILUS_RENDERS_2 = "12iYG3XSQ6b-hNvKX6Gfqq42a7U1lyscN";
const NAUTILUS_RENDERS_3 = "12j2E2nJTkEgBBOi8a-0Od5SWENf9cZ5S";
const NAUTILUS_RENDERS_4 = "12ko_O3b8A_DdXnRM_gfGEmtvY1u997E9";
const NAUTILUS_RENDERS_5 = "12a-l9v7IEWU4gYIZvMA1LwWPvB9s6ccn";

// Evil Hangman
const EVIL_HANGMAN_0 = "https://replit.com/@kjy5/Evil-Hangman-Demo?embed=true";

// COSMOS Interface
const COSMOS_INTERFACE_0_THUMB = "135GH_FzEP6mV7v1kQRU4yC56FC8ENrWO";
const COSMOS_INTERFACE_0 = "130npiLhK29XAiK7y9nue_3cOuaXYWK5c";

// Fall Quarter Reflection
const FALL_QUARTER_REFLECTION_0 = `${GOOGLE_DRIVE_PREFIX}102YUoEyh1LLXqh6G1yV4iPCCEnvG-1lT`;

// ============================
// Package and export
// ============================

export const content = contentData;

export const imageAssetMetas = {
  "Starting a New Honors Portfolio Website":
    startingANewHonorsPortfolioWebsiteImageMeta,
  "Nautilus Renders": nautilusRendersImageMeta,
  "COSMOS Interface": cosmosInterfaceImageMeta,
};

export const linkAssetMetas = {
  "International Brain Lab Position": internationalBrainLabPositionLinkMeta,
  "Multimodality Final Portfolio": multimodalityFinalPortfolioLinkMeta,
  "NASA Summer Undergraduate Research Program":
    nasaSummerUndergraduateResearchProgramLinkMeta,
};

export const imageAssets = {
  "Starting a New Honors Portfolio Website": [
    STARTING_A_NEW_HONORS_PORTFOLIO_WEBSITE_0,
    STARTING_A_NEW_HONORS_PORTFOLIO_WEBSITE_1,
  ],
  "Nautilus Renders": [
    NAUTILUS_RENDERS_0,
    NAUTILUS_RENDERS_1,
    NAUTILUS_RENDERS_2,
    NAUTILUS_RENDERS_3,
    NAUTILUS_RENDERS_4,
    NAUTILUS_RENDERS_5,
  ],
  "COSMOS Interface": [COSMOS_INTERFACE_0],
};
export const imageAssetThumbnails = {
  "Starting a New Honors Portfolio Website": [
    STARTING_A_NEW_HONORS_PORTFOLIO_WEBSITE_0_THUMB,
    STARTING_A_NEW_HONORS_PORTFOLIO_WEBSITE_1_THUMB,
  ],
  "Nautilus Renders": [
    NAUTILUS_RENDERS_0_THUMB,
    NAUTILUS_RENDERS_1_THUMB,
    NAUTILUS_RENDERS_2_THUMB,
    NAUTILUS_RENDERS_3_THUMB,
    NAUTILUS_RENDERS_4_THUMB,
    NAUTILUS_RENDERS_5_THUMB,
  ],
  "COSMOS Interface": [COSMOS_INTERFACE_0_THUMB],
};
export const embedAssets = {
  "ROV22 Simulation Demo": [ROV22_SIMULATION_DEMO_0],
  "Leadership and Democracy Final Paper": [
    LEADERSHIP_AND_DEMOCRACY_FINAL_PAPER_0,
  ],
  "Evil Hangman": [EVIL_HANGMAN_0],
  "Fall Quarter Reflection": [FALL_QUARTER_REFLECTION_0],
};
