'use client';

import { FC } from 'react';
import CountUp from 'react-countup';

interface StatItem {
  num: number | string;
  text: string;
}

const stats: StatItem[] = [
  { num: 3, text: 'years of experience' },
  { num: 12, text: 'Projects Compeleted' },
  { num: 14, text: 'Technologies Mastered' },
  { num: '+' + 500, text: 'Code Commits' },
];

const Stats: FC = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item) => {
            let endValue: number;
            if (typeof item.num === 'string') {
              endValue = parseInt(item.num.replace('+', ''));
            } else {
              endValue = item.num;
            }

            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-center"
                key={item.text}
              >
                <CountUp
                  end={endValue} // This line will cause an error until you solve TODO #3
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                  suffix={item.text === 'Code Commits' ? '+' : ''}
                />
                <p
                  className={`${
                    item.text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Stats;
