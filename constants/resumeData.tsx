import { ReactNode } from 'react';
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaFigma,
  FaJs,
  FaAngular,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiTypescript,
  SiCypress,
  SiGit,
  SiJest,
  SiThreedotjs,
  SiNodedotjs,
  SiMongodb,
  SiMongoose,
  SiExpress,
  SiMysql,
  SiNgrx,
  SiLighthouse,
  SiReactrouter,
  SiReactquery,
  SiReacthookform,
  SiReacttable,
  SiStorybook,
  SiReduxsaga,
  SiAxios,
  SiStyledcomponents,
  SiSass,
  SiFramer,
  SiI18Next,
  SiWebpack,
  SiBootstrap,
} from 'react-icons/si';

// --- INTERFACES ---

export interface InfoItem {
  filedName: string;
  fieldValue: string;
}

export interface About {
  title: string;
  description: string;
  info: InfoItem[];
}

export interface ExperienceItem {
  company: string;
  position: string;
  duration: string;
}

export interface Experience {
  icon: string;
  title: string;
  description: string;
  items: ExperienceItem[];
}

export interface EducationItem {
  university: string;
  degree: string;
  duration: string;
}

export interface Education {
  icon: string;
  title: string;
  description: string;
  items: EducationItem[];
}

export interface SkillItem {
  icon: ReactNode;
  name: string;
}

export interface Skills {
  title: string;
  description: string;
  skillList: SkillItem[];
}

// --- DATA ---

export const about: About = {
  title: 'About me',
  description:
    'I am a skilled Front-End Developer with over 3 years of experience, specializing in creating engaging, user-centric applications using React and Angular. With a strong foundation in modern web technologies like Redux-Toolkit, MUI, and Cypress, I have a proven track record of delivering high-quality, scalable solutions. My passion for learning and problem-solving, combined with effective communication skills, enables me to collaborate effectively in dynamic team environments.',
  info: [
    {
      filedName: 'Name',
      fieldValue: 'Masood Moosavi',
    },
    {
      filedName: 'Phone',
      fieldValue: '(+98) 916 823 8775',
    },
    {
      filedName: 'Experience',
      fieldValue: '3 Years',
    },
    {
      filedName: 'Nationality',
      fieldValue: 'Iranian',
    },
    {
      filedName: 'Email',
      fieldValue: 'masood.m.dev@gmail.com',
    },
    {
      filedName: 'Language',
      fieldValue: 'Persian, English',
    },
  ],
};

export const experience: Experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: `Over the past 3 years, I've honed my front-end development skills in dynamic environments, contributing to innovative projects at companies like Pendar Ideas and Bitbine. I've been deeply involved in developing complex user interfaces, integrating RESTful APIs, and optimizing application performance. My hands-on experience with React, Angular, and modern testing frameworks has allowed me to deliver robust and scalable applications`,
  items: [
    {
      company: 'Pendar Ideas',
      position: 'Front-End Developer',
      duration: '2024 - 2025',
    },
    {
      company: 'Bitbine',
      position: 'Front-End Developer',
      duration: '2023 - 2024',
    },
    {
      company: 'Immorit',
      position: 'Front-End Developer',
      duration: '2022 - 2023',
    },
    {
      company: 'Karademy',
      position: 'MERN stack Developer Intern',
      duration: '2021 - 2021',
    },
  ],
};

export const education: Education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    'My educational background in English Literature, combined with technical training in MERN stack development, has equipped me with a unique blend of communication skills and technical expertise. This combination has been instrumental in my ability to translate complex technical concepts into user-friendly applications and collaborate effectively with cross-functional teams.',
  items: [
    {
      university: 'Shahd Bahonar Kerman University',
      degree: 'English Literature',
      duration: '2017 - 2021',
    },
    {
      university: 'Karademy',
      degree: 'MERN Stack Developer',
      duration: '2021 - 2021',
    },
  ],
};

export const skills: Skills = {
  title: 'My skills',
  description:
    'I have developed a strong proficiency in front-end technologies, particularly in React.js, Angular, and Next.js. My expertise extends to state management with Redux and NGRX, UI/UX development with Material-UI and TailwindCSS, and testing with Jest and Cypress. I am also well-versed in modern JavaScript (ES6+), TypeScript, and responsive design, enabling me to build high-performing, scalable web applications.',
  skillList: [
    {
      icon: <FaHtml5 />,
      name: 'html 5',
    },
    {
      icon: <FaCss3 />,
      name: 'css 3',
    },
    {
      icon: <FaJs />,
      name: 'Javascript',
    },
    {
      icon: <SiTypescript />,
      name: 'typescript',
    },
    {
      icon: <SiSass />,
      name: 'Sass',
    },
    {
      icon: <SiTailwindcss />,
      name: 'tailwind.css',
    },
    {
      icon: <SiBootstrap />,
      name: 'Bootstrap',
    },
    {
      icon: <FaReact />,
      name: 'react.js',
    },
    {
      icon: <SiReactrouter />,
      name: 'react router',
    },
    {
      icon: <SiReactquery />,
      name: 'react query',
    },
    {
      icon: <SiRedux />,
      name: 'Redux',
    },
    {
      icon: <SiReduxsaga />,
      name: 'Redux Saga',
    },
    {
      icon: <SiCypress />,
      name: 'cypress',
    },
    {
      icon: <SiReacthookform />,
      name: 'react hook form',
    },
    {
      icon: <SiReacttable />,
      name: 'react table',
    },
    {
      icon: <SiStyledcomponents />,
      name: 'Styled components',
    },
    {
      icon: <SiFramer />,
      name: 'Framer motion',
    },
    {
      icon: <SiI18Next />,
      name: 'React-i18next',
    },
    {
      icon: <SiNextdotjs />,
      name: 'next.js',
    },
    {
      icon: <SiThreedotjs />,
      name: 'three.js',
    },
    {
      icon: <SiStorybook />,
      name: 'storybook',
    },
    {
      icon: <SiLighthouse />,
      name: 'lighthouse',
    },
    {
      icon: <SiWebpack />,
      name: 'webpack',
    },
    {
      icon: <SiAxios />,
      name: 'axios',
    },
    {
      icon: <FaAngular />,
      name: 'Angular',
    },
    {
      icon: <SiNgrx />,
      name: 'Ngrx',
    },
    {
      icon: <FaFigma />,
      name: 'figma',
    },
    {
      icon: <SiGit />,
      name: 'git',
    },
    {
      icon: <SiJest />,
      name: 'jest',
    },
    {
      icon: <SiNodedotjs />,
      name: 'node.js',
    },
    {
      icon: <SiMongodb />,
      name: 'Mongodb',
    },
    {
      icon: <SiMongoose />,
      name: 'Mongoose',
    },
    {
      icon: <SiExpress />,
      name: 'Express',
    },
    {
      icon: <SiMysql />,
      name: 'mysql',
    },
  ],
};
