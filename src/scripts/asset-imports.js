import contentData from '../assets/content.tsv?url'

// Image metas import
import cosmosInterfaceImageMeta from '../assets/image_metas/COSMOS Interface.tsv?url'
import nautilusRendersImageMeta from '../assets/image_metas/Nautilus Renders.tsv?url'
import startingANewHonorsPortfolioWebsiteImageMeta
  from '../assets/image_metas/Starting a New Honors Portfolio Website.tsv?url'

// Link metas import
import internationalBrainLabPositionLinkMeta from '../assets/link_metas/International Brain Lab Position.tsv?url'
import multimodalityFinalPortfolioLinkMeta from '../assets/link_metas/Multimodality Final Portfolio.tsv?url'
import nasaSummerUndergraduateResearchProgramLinkMeta
  from '../assets/link_metas/NASA Summer Undergraduate Research Program.tsv?url'

// ============================
// Package and export
// ============================

export const content = contentData

export const imageAssetMetas = {
  'Starting a New Honors Portfolio Website':
  startingANewHonorsPortfolioWebsiteImageMeta,
  'Nautilus Renders': nautilusRendersImageMeta,
  'COSMOS Interface': cosmosInterfaceImageMeta,
}

export const linkAssetMetas = {
  'International Brain Lab Position': internationalBrainLabPositionLinkMeta,
  'Multimodality Final Portfolio': multimodalityFinalPortfolioLinkMeta,
  'NASA Summer Undergraduate Research Program':
  nasaSummerUndergraduateResearchProgramLinkMeta,
}

export const embedAssets = {
  'ROV22 Simulation Demo': ['https://www.youtube.com/embed/ygnG9eYG1sI'],
  'Leadership and Democracy Final Paper': [
    'https://res.cloudinary.com/kjy5/image/upload/v1655227118/Honors%20Portfolio/Leadership%20and%20Democracy%20Final%20Paper/0_ccxx3a.pdf',
  ],
  'Evil Hangman': ['https://replit.com/@kjy5/Evil-Hangman-Demo?embed=true'],
  'Fall Quarter Reflection': ['https://res.cloudinary.com/kjy5/image/upload/v1655227118/Honors%20Portfolio/Fall%20Quarter%20Reflection/0_xohsvl.pdf'],
}
