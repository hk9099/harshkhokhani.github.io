// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'hk9099', // GitHub username
  },
  base: '/gitprofile/',
  projects: {
    github: {
      display: true,
      header: 'GitHub Projects',
      mode: 'automatic',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [],
      },
    },
    external: {
      header: 'Professional Projects',
      projects: [
        {
          title: 'KLIPPIE',
          description:
            'A custom AI-driven web application focused on enhancing user engagement through a responsive design built with Next.js and Mantine.dev, along with a REST API backend in Python.',
          imageUrl:
            './public/image.png',
          link: 'https://app.getklippie.com/',
        },
        {
          title: 'EMERGE',
          description:
            'User engagement platform leveraging Next.js, Go, and WebSockets, with features like calendar pop-ups, payment gateway integrations, and Craft.js libraries for enhanced UI experience.',
          imageUrl:
            './public/image1.png',
          link: 'https://alpha.ehr.software',
        },
        {
          title: 'GrabStore',
          description:
            'An online store management platform designed with Django, Python, and DevExtreme DataTable Library, offering real-time data updates and user-friendly dynamic tables.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://4pl.online',
        },
        {
          title: 'The Book Brief',
          description:
            'A reading platform with secure login, favorites management, and category navigation, built with Next.js, Python, and PostgreSQL for an immersive user experience.',
          imageUrl:
            './public/image2.png',
          link: 'https://thebookbrief.co',
        },
      ],
    },
  },
  seo: {
    title: 'Harsh Khokhani | Full Stack Developer Portfolio',
    description:
      'Welcome to the portfolio of Harsh Khokhani, a skilled Full Stack Developer specializing in MERN stack, Python, Django, and scalable web applications. Explore my projects and experience!',
    imageURL: 'https://res.cloudinary.com/newcloudharsh/image/upload/f_auto,q_auto/qhjhj9itlojzdrigxusy',
    keywords: [
      'Harsh Khokhani',
      'Full Stack Developer',
      'MERN Stack',
      'Python Developer',
      'Django Developer',
      'React.js',
      'Next.js',
      'Portfolio',
      'Web Developer',
      'API Development',
      'Responsive Design',
    ],
    author: 'Harsh Khokhani',
    siteUrl: 'https://example.com',
    twitterCard: 'summary_large_image',
    twitterTitle: 'Harsh Khokhani | Full Stack Developer',
    twitterDescription:
      'Explore the portfolio of Harsh Khokhani, a seasoned Full Stack Developer with expertise in React, Next.js, Python, and Django.',
    ogTitle: 'Harsh Khokhani | Full Stack Developer Portfolio',
    ogDescription:
      'Harsh Khokhani is a Full Stack Developer skilled in MERN stack, Python, Django, and API development. Discover my projects and skills.',
  },
  social: {
    linkedin: 'harsh-khokhani',
    // twitter: 'harsh_khokhani',
    // mastodon: '',
    // facebook: 'harsh.khokhani',
    // instagram: 'harsh.khokhani',
    // reddit: 'u/harshkhokhani',
    // threads: '',
    // youtube: 'harshkhokhani',
    // dev: 'hk9099',
    // stackoverflow: '1234567/harsh-khokhani',
    // medium: 'harshkhokhani',
    // dribbble: '',
    // behance: 'harsh-khokhani',
    // website: 'https://example.com',
    phone: '+91 9033236318',
    email: 'khokhaniharsh0670@gmail.com',
  },
  resume: {
    fileUrl: 'https://example.com/Harsh_Khokhani_Resume.pdf',
  },
  skills: [
    'React.js',
    'Next.js',
    'Typescript',
    'Node.js',
    'Python',
    'Django',
    'GraphQL',
    'Redux',
    'REST API',
    'PostgreSQL',
    'Git',
    'WebSockets',
    'Mantine.dev',
    'Craft.js',
    'DevExtreme DataTable Library',
  ],
  languages: ['English', 'Hindi', 'Gujarati'],
  experiences: [
    {
      company: 'EMERGE',
      position: 'Fullstack Developer',
      description:
        'Designed and implemented user interfaces, optimized state management, and built backend APIs, significantly improving user engagement and functionality.',
      from: 'September 2021',
      to: 'Present',
      companyLink: 'https://alpha.ehr.software',
    },
    {
      company: 'KLIPPIE',
      position: 'Fullstack Developer',
      description:
        'Developed responsive UIs and real-time data capabilities for an online store platform, utilizing DevExtreme DataTable Library and Django backend.',
      from: 'July 2019',
      to: 'August 2021',
      companyLink: 'https://app.getklippie.com/',
    },
  ],
  educations: [
    {
      institution: 'Red & White Multimedia Education',
      degree: 'Master of Computer Science (MCS)',
      from: '2018',
      to: '2019',
    },
  ],
  publications: [
    {
      title: 'Optimizing Web Performance with React.js and Next.js.',
      journalName: 'Dev Community',
      authors: 'Harsh Khokhani',
      link: 'https://dev.to/hk9099/optimizing-web-performance-with-reactjs-and-nextjs-1a0h',
      description:
        'Explored the benefits of using React.js and Next.js for web development, focusing on performance optimization and responsive design.',
    },
  ],
  blog: {
    source: 'dev',
    username: 'hk9099',
    limit: 5,
  },
  googleAnalytics: {
    id: 'G-XXXXXXXXXX',
  },
  hotjar: {
    id: 'XXXXXX',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'procyon',
    disableSwitch: false,
    respectPrefersColorScheme: true,
    displayAvatarRing: true,
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
      'procyon',
    ],
  },
  footer: `All rights reserved. Designed with ❤️ by Harsh Khokhani.`,

  enablePWA: true,
};

export default CONFIG;