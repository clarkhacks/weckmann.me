const BLOG = {
  title: 'Weckmann',
  author: 'Clark Weckmann',
  email: 'clark@weckmann.me',
  link: 'https://www.weckmann.com',
  description: 'Read some of my acticles!',
  icon: '/me_macbook.png',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#ffffff', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#18181B', // use hex value, don't forget '#'
  path: '', // leave this empty unless you want to deploy Nobelium in a folder
  since: 2014, // If leave this empty, current year will be used.
  postsPerPage: 8,
  sortByDate: true,
  showAbout: true,
  showArchive: true,
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateURL: 'https://weblense.co/s', // The link to generate OG image, don't end with a slash
  socialLink: 'https://twitter.com/theweckmann',
  seo: {
    keywords: ['Blog', 'Website', 'Notion'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: "107cd82c9e8c425987d29f350edc2b59", // DO NOT CHANGE THIS！！！
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  analytics: {
    provider: '', // Currently we support Google Analytics and Ackee, please fill with 'ga' or 'ackee', leave it empty to disable it.
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.craigary.net/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.craigary.net , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: '' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: gitalk, utterances, cusdis
    provider: 'gitalk', // leave it empty if you don't need any comment plugin
    gitalkConfig: {
      repo: 'Weckmann.me', // The repository of store comments
      owner: 'clarkhacks',
      admin: ['clarkhacks'],
      clientID: '164b7011bde644c40644',
      clientSecret: 'bff4b78b396b305bd8721332835ed58f28f47503',
      distractionFreeMode: false
    },
    utterancesConfig: {
      repo: 'https://github.com/clarkhacks/Utterances-Test'
    },
    cusdisConfig: {
      appId: '2c4651ae-8b91-4a1f-934c-fe8861099f1d', // data-app-id
      host: 'https://cusdis.com', // data-host, change this if you're using self-hosted version
      scriptSrc: 'https://cusdis.com/js/cusdis.es.js' // change this if you're using self-hosted version
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
