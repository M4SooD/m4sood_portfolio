'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
const services = [
  {
    num: '01',
    title: 'Web Development',
    description:
      'Creating responsive, user-friendly websites using modern technologies like React.js, Angular, and Next.js. I ensure optimal performance, seamless user experience, and clean, maintainable code.',
    href: '',
  },
  {
    num: '02',
    title: 'UI/UX Design Implementation',
    description:
      'Transforming design prototypes into fully functional, visually appealing user interfaces. I work closely with designers to bring Figma and Adobe XD designs to life using HTML, CSS, SCSS, and JavaScript.',
    href: '',
  },
  {
    num: '03',
    title: 'Single Page Application (SPA) Development',
    description:
      'Developing dynamic single-page applications with React and Angular, ensuring fast load times, smooth transitions, and a highly interactive user experience.',
    href: '',
  },
  {
    num: '04',
    title: 'Performance Optimization',
    description:
      'Optimizing web applications for speed and efficiency by reducing load times, improving performance metrics, and ensuring scalability using techniques like code splitting and lazy loading.',
    href: '',
  },
];

import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px] "
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
