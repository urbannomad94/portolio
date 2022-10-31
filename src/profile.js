// Change website animations
const animation = {
  // make it false to switch off fade-up animation
  animate: true,
  // animation playing duration
  duration: 750,
  // if true, animation plays only once when element comes on screen
  once: false,
};

const header = {
  name: 'Aidan',
};
const background = {
  // Options: Snow or Particle
  type: 'Particle',
};

// To update your image, go to './styles/images.css'
const section2title = 'About Me';
const about = {
  paragraph:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. ',
};

const skillsBar = [
  {
    name: 'HTML5',
    svg: 'M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z',
    faClass: 'fab fa-html5',
  },
  {
    name: 'CSS3',
    // svg: '',
    faClass: 'fab fa-css3',
  },
  {
    name: 'Javascript',
    // svg: '',
    faClass: 'fab fa-js',
  },
  {
    name: 'Node',
    // svg: '',
    faClass: 'fab fa-node',
  },
  {
    name: 'Git',
    // svg: '',
    faClass: 'fab fa-git-alt',
  },
  {
    name: 'MongoDB',
    // svg: '',
    faClass: 'fas fa-database',
  },
  {
    name: 'React',
    // svg: '',
    faClass: 'fab fa-react',
  },
  {
    name: 'Express',
    // svg: '',
    faClass: 'fab fa-etsy',
  },
  {
    name: 'SASS',
    // svg: '',
    faClass: 'fab fa-sass',
  },
];

const section3Title = 'Past Projects';
const projects = [
  {
    // Add image in './styles/images.css' in #project1
    id: 'project1',
    name: 'Project 1',
    skills: ['HTML, CSS, JS'],
    url: '',
  },
  {
    // Add image in './styles/images.css' in #project2
    id: 'project2',
    name: 'Project 2',
    skills: ['HTML, CSS, JS'],
    url: '',
  },
  {
    // Add image in './styles/images.css' in #project3
    id: 'project3',
    name: 'Project 3',
    skills: ['HTML, CSS, JS'],
    url: '',
  },
  {
    // Add image in './styles/images.css' in #project4
    id: 'project4',
    name: 'Project 4',
    skills: ['HTML, CSS, JS'],
    url: '',
  },
  {
    // Add image in './styles/images.css' in #project5
    id: 'project5',
    name: 'Project 5',
    skills: ['HTML, CSS, JS'],
    url: '',
  },
  {
    // Add image in './styles/images.css' in #project6
    id: 'project6',
    name: 'Project 6',
    skills: ['HTML, CSS, JS'],
    url: '',
  },
];

const section4Title = 'Miscellaneous';
const miscellaneous = [
  {
    // Add image in './styles/images.css' in #misc1
    id: 'misc1',
    name: 'Miscellaneous 1',
    url: 'https://github.com/kaustubhai',
  },
  {
    // Add image in './styles/images.css' in #misc2
    id: 'misc2',
    name: 'Miscellaneous 2',
    url: 'https://github.com/kaustubhai',
  },
  {
    // Add image in './styles/images.css' in #misc3
    id: 'misc3',
    name: 'Miscellaneous 3',
    url: 'https://github.com/kaustubhai',
  },
];
// Contact form text, and Formspree link(to send a submit contact through their API as in contact.js)
// To get your own jotform link, go to https://formspree.io/
// If you have the link already, paste it in the contactUrl below
const section5Title = 'Get in Touch';
const contact = {
  pitch: `Reach out and let's start a conversation!`,
  contactUrl: 'https://formspree.io/f/mrgdyorj',
};
// Upload your resume in your drive, get the shareable link and paste it in the resume section
const social = {
  github: 'https://github.com/urbannomad94',
  twitter: 'https://twitter.com/aidan_codes',
  linkedin: 'https://www.linkedin.com/in/aidan-williams123/',
  resume: 'https://novoresume.com/',
};

export {
  animation,
  header,
  background,
  about,
  skillsBar,
  projects,
  miscellaneous,
  contact,
  social,
  section2title,
  section3Title,
  section4Title,
  section5Title,
};
