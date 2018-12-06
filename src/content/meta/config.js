const base = {
  name: 'Rasik Jain',
  url: 'https://www.rasikjain.com',
};

const config = {
  /* meta tags */
  siteTitle: `${
    base.name
  } - Software Engineer & Architect | ReactJs | TypeScript | C#`,
  siteTitlePostfix: ` - ${base.name}`,
  siteDescription: `${
    base.name
  } - Software Engineer & Architect | ReactJs | TypeScript | C#`,
  siteImage: 'preview.jpg',
  siteLanguage: 'en',

  /* site header */
  headerTitle: `${base.name}`,
  headerSubTitle: 'Software Engineer and Architect',

  /* url */
  siteUrl: base.url,
  // pathPrefix: '',

  /* manifest */
  manifestName: `${base.name}'s Technical Blog`,
  manifestShortName: 'Rasik Jain', // max 12 characters
  manifestStartUrl: '/index.html',
  manifestBackgroundColor: '#ffffff',
  manifestThemeColor: '#ffffff',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/content/images/icon.png',

  /* Twitter */
  twitter: '', // used as content of the 'twitter:creator' meta tag
};

module.exports = config;
