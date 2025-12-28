'use client';

import { FC } from 'react';
import { Moon, Sun } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/providers/ThemeProvider';

const ThemeToggle: FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant={theme === 'dark' ? 'outline' : 'default'}
      size="icon"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className=" hover:bg-primary hover:text-accent hover:border-primary transition-all  dark:hover:bg-accent dark:hover:text-primary dark:hover:border-accent"
    >
      {theme === 'light' ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0 " />
      )}
    </Button>
  );
};

export default ThemeToggle;
