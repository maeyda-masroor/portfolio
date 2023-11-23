import { nanoid } from 'nanoid';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: '',
    url: '',
    github: '',
    title: 'first project',
    text: 'My First Projects',
  },
  {
    id: nanoid(),
    img: '',
    url: '',
    github: '',
    title: 'second project',
    text: 'Second Project',
  },
  {
    id: nanoid(),
    img: '',
    url: '',
    github: '',
    title: 'third project',
    text: 'Third Project',
  },
];