import contentData from '../assets/content.tsv?url'

// Image metas import
import cosmosInterfaceImageMeta from '../assets/image_metas/COSMOS Interface.tsv?url'
import nautilusRendersImageMeta from '../assets/image_metas/Nautilus Renders.tsv?url'
import startingANewHonorsPortfolioWebsiteImageMeta
  from '../assets/image_metas/Starting a New Honors Portfolio Website.tsv?url'

// Link metas import
import internationalBrainLabPositionLinkMeta from '../assets/link_metas/International Brain Lab Position.tsv?url'
import multimodalCompositionFinalPortfolioLinkMeta
  from '../assets/link_metas/Multimodal Composition Final Portfolio.tsv?url'
import nasaSummerUndergraduateResearchProgramLinkMeta
  from '../assets/link_metas/NASA Summer Undergraduate Research Program.tsv?url'
import scene from '../assets/scene.json?url'

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
  'Multimodal Composition Final Portfolio': multimodalCompositionFinalPortfolioLinkMeta,
  'NASA Summer Undergraduate Research Program':
  nasaSummerUndergraduateResearchProgramLinkMeta,
}

export const embedAssets = {
  'ROV22 Simulation Demo': ['https://www.youtube.com/embed/ygnG9eYG1sI'],
  'Leadership and Democracy Final Paper': [
    'https://res.cloudinary.com/kjy5/image/upload/v1655227118/Honors%20Portfolio/Leadership%20and%20Democracy%20Final%20Paper/0_ccxx3a.pdf',
  ],
  'Evil Hangman': ['https://replit.com/@kjy5/Evil-Hangman-Demo?embed=true'],
  'Fall Quarter Reflection': [
    'https://res.cloudinary.com/kjy5/image/upload/v1655227118/Honors%20Portfolio/Fall%20Quarter%20Reflection/0_xohsvl.pdf',
  ],
}

export const graphicAssets = {
  'International Brain Lab Position': 'https://res.cloudinary.com/kjy5/raw/upload/v1657473196/Honors%20Portfolio/International%20Brain%20Lab%20Position/Brain_tozt9h.json',
  'Multimodal Composition Final Portfolio': 'https://res.cloudinary.com/kjy5/raw/upload/v1657424232/Honors%20Portfolio/Multimodal%20Composition%20Final%20Portfolio/intro_image_wfaf5l.json',
  'NASA Summer Undergraduate Research Program': 'https://res.cloudinary.com/kjy5/raw/upload/v1657510709/Honors%20Portfolio/NASA%20Summer%20Undergraduate%20Research%20Program/hsl_q0tmeu.json',
  'Starting a New Honors Portfolio Website': 'https://res.cloudinary.com/kjy5/raw/upload/v1657518825/Honors%20Portfolio/Starting%20a%20New%20Honors%20Portfolio%20Website/website_bgeb18.json',
  'ROV22 Simulation Demo': scene,
  'Leadership and Democracy Final Paper': 'https://res.cloudinary.com/kjy5/raw/upload/v1657522828/Honors%20Portfolio/Leadership%20and%20Democracy%20Final%20Paper/door_c772st.json',
  'Nautilus Renders': 'https://res.cloudinary.com/kjy5/raw/upload/v1657424372/Honors%20Portfolio/Nautilus%20Renders/Nautilus_mj4ikr.json',
  'Evil Hangman': '',
  'COSMOS Interface': '',
  'Fall Quarter Reflection': '',
}
