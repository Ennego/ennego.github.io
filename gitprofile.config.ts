// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'ennego', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['ciiipreses/canopy', 'ennego/cross-program-awards-affiliations'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Ciiipreses',
          description:
            'Ciiipreses seeks to reimagine the makers, users, and patrons of illuminated manuscripts in late medieval and early modern Seville.',
          imageUrl:
            'https://ciiipreses.github.io/sanisidoro/iiif/bfhdok-affesc4mgnhlbi/c61b388a06947c8e5a833826cd5ec765/full/2000,1851/0/default.jpg',
          link: 'https://ciiipreses.github.io/canopy/',
        },
        {
          title: 'Scholars Data Project',
          description:
            'In 2025, four ARIAH member institutions contributed to a collective project to combine and analyze historical data about their scholars programs.',
          imageUrl:
            'https://storage.googleapis.com/jnl-up-j-johd-files/journals/1/articles/429/69428d6cce4ea.png',
          link: 'https://www.ariah.info/news-opportunities/scholars-data',
        },
      ],
    },
  },
  seo: { title: 'Matthew J. Westerby', description: 'Homepage – Matthew Westerby - Researcher', imageURL: '' },
  social: {
    linkedin: 'matthew-westerby-04a7258',
    website: 'https://www.mjwesterby.com',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl:
      'https://orcid.org/0000-0003-0903-8200', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'art history',
    'data-intensive research',
    'museum studies',
  ],
  experiences: [
    {
      company: 'National Gallery of Art, Center for Advanced Study in the Visual Arts',
      position: 'Digital Research Officer',
      from: '2023',
      to: 'Present',
      companyLink: 'https://www.nga.gov/research/center',
    },
    {
      company: 'National Gallery of Art, Center for Advanced Study in the Visual Arts',
      position: 'Robert H. Smith Postdoctoral Research Associate for Digital Projects',
      from: '2019',
      to: '2023',
      companyLink: 'https://www.nga.gov/research/center',
    },
    {
      company: 'Les Enluminures, Ltc.',
      position: 'Research Specialist',
      from: '2014',
      to: '2018',
      companyLink: 'https://www.lesenluminures.com/',
    },
  ],
  educations: [
    {
      institution: 'University of Wisconsin–Madison',
      degree: 'Ph.D., Art History',
      from: '2009',
      to: '2017',
    },
    {
      institution: 'University of Denver',
      degree: 'M.A., Art History',
      from: '2005',
      to: '2008',
    },
    {
      institution: 'University of Colorado at Boulder',
      degree: 'B.A., Art History',
      from: '2001',
      to: '2005',
    },
  ],
  publications: [
    {
      title: 'Africa in the World: materials without end. A Conversation with Risham Majeed and Matthew J. Westerby',
      conferenceName: '',
      journalName: 'Different Visions (2026)',
      authors: 'Risham Majeed and Matthew J. Westerby',
      link: 'https://doi.org/10.61302/FFCT8180',
      description:
        'What does it mean to call an object “African,” “Roman,” or “medieval” when its materials, makers, and meanings were never so neatly bounded? How does the Sahara function not as a barrier but as a highway? What can be revealed with reproductions that are touched, compared, and recombined freely?',
    },
    {
      title: 'Towards a Linked Open Index: Reconciling Museum Records to Wikidata for Index of American Design Constituents',
      conferenceName: '',
      journalName: 'Journal of Open Humanities Data (2026)',
      authors: 'Abigail Foster, Samantha Norling, and Matthew J. Westerby',
      link: 'https://doi.org/10.5334/johd.426',
      description:
        'Over 1,000 artists who created artwork for the IAD are represented as “constituents” in the National Gallery of Art’s Collections Management System (CMS), along with records of many more who participated as administrators and owners of objects, among other roles.',
    },
    {
      title: 'Annotating Upstream: Digital Scholars, Art History, and the Interoperable Image',
      conferenceName: '',
      journalName: 'Open Library of Humanities Journal (2024)',
      authors: 'Matthew J. Westerby',
      link: 'https://doi.org/10.16995/olh.17217',
      description:
        'Images and descriptive metadata can be used and re-used in any number of contexts, but annotations are contextual fragments of scholarly insights that do not translate easily across domains. While data models for web annotation are clearly defined in a technical sense, their implementation is socially motivated.',
    },
    {
      title: 'Advances in Automated Pigment Mapping for 15th-Century Manuscript Illuminations Using 1-D Convolutional Neural Networks and Hyperspectral Reflectance Image Cubes',
      conferenceName: '',
      journalName: 'Applied Sciences (2026)',
      authors: 'Roxanne Radpour, Tania Kleynhans, Michelle Facini, Federica Pozzi, Matthew J. Westerby, and John K. Delaney',
      link: 'https://doi.org/10.3390/app14166857',
      description:
        'This work builds upon prior investigations of 1-D spectral convolutional neural networks (CNNs), with a training set of ten illuminated manuscripts created by artists stylistically grouped under the notname “Master of the Cypresses” (15th century Seville, Spain).',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'fantasy',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
