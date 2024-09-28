import Link from 'next/link';

import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaTelegram,
  FaGitlab,
} from 'react-icons/fa';

const socials = [
  { icon: <FaGithub />, path: 'https://github.com/M4SooD' },
  { icon: <FaGitlab />, path: 'https://gitlab.com/M4SooD' },
  {
    icon: <FaLinkedinIn />,
    path: 'https://www.linkedin.com/in/masood-moosavi/',
  },
  { icon: <FaTwitter />, path: 'https://x.com/Mas_Morale' },
  { icon: <FaTelegram />, path: 'https://t.me/M4SooD' },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            className={iconStyles}
            target="_blank"
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};
export default Social;
