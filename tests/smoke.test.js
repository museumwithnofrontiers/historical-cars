import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'historicalCars',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Historical Cars',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: 'cce9ed43-6802-51d5-8553-802e6dafb35e',
      project: 'Sharing History - Arab-Ottoman-European relations in the 19th century.',
      className: 'mwnf-chip--AWE',
    },
    noticeItem: 'a3a7e6de-6cff-51a1-9392-ab310f7efdc7',
    dynasty: {
      item: '5aea6a37-19f3-5c61-ac76-f38f3922c376',
      name: 'Mughal',
    },
    timeline: {
      code: 'pt',
      id: 'prt',
      country: 'Portugal',
    },
    partner: {
      id: '8cde1ffe-e1cc-52a8-9261-ee16bcaac48f',
      name: 'National Museum of Romanian History',
      city: 'Bucharest',
      country: 'Romania',
      objects: 1,
    },
  },
})
