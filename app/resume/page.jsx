'use client';

import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaFigma,
  FaNodeJs,
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

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';

import { motion } from 'framer-motion';

const about = {
  title: 'About me',
  description:
    '    I am a skilled Front-End Developer with over 3 years of experience, specializing in creating engaging, user-centric applications using React and Angular. With a strong foundation in modern web technologies like Redux-Toolkit, MUI, and Cypress, I have a proven track record of delivering high-quality, scalable solutions. My passion for learning and problem-solving, combined with effective communication skills, enables me to collaborate effectively in dynamic team environments.',
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
      fieldValue: 'm4sood.m@gmail.com',
    },
    {
      filedName: 'Language',
      fieldValue: 'Persian, English',
    },
  ],
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My experience',
  description: `Over the past 3 years, I've honed my front-end development skills in dynamic environments, contributing to innovative projects at companies like Pendar Ideas and Bitbine. I've been deeply involved in developing complex user interfaces, integrating RESTful APIs, and optimizing application performance. My hands-on experience with React, Angular, and modern testing frameworks has allowed me to deliver robust and scalable applications`,
  items: [
    {
      company: 'Pendar Ideas',
      position: 'Front-End Developer',
      duration: '2023 - 2024',
    },
    {
      company: 'Bitbine',
      position: 'Front-End Developer',
      duration: '2022 - 2023',
    },
    {
      company: 'Karademy',
      position: 'MERN stack Developer Intern',
      duration: '2021 - 2022',
    },
  ],
};
const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My education',
  description:
    '    My educational background in English Literature, combined with technical training in MERN stack development, has equipped me with a unique blend of communication skills and technical expertise. This combination has been instrumental in my ability to translate complex technical concepts into user-friendly applications and collaborate effectively with cross-functional teams.',
  items: [
    {
      Univercity: 'Shahd Bahonar Kerman Univercity',
      degree: 'English Literature',
      duration: '2017 - 2021',
    },
    {
      Univercity: 'Karademy',
      degree: 'MERN Stack Developer',
      duration: '2021 - 2022',
    },
  ],
};

const skills = {
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
    ,
    {
      icon: <SiSass />,
      name: 'Styled components',
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
      name: 'react table',
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

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl-:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[183px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[183px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.Univercity}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="mx-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.filedName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
