'use client';

import { useState, FC, ReactNode, ChangeEvent, FormEvent } from 'react'; // Import necessary types
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

interface InfoItem {
  icon: ReactNode;
  title: string;
  description: string;
}

const info: InfoItem[] = [
  {
    icon: <FaPhoneAlt />,
    title: 'phone',
    description: '(+98)9168238775',
  },
  {
    icon: <FaEnvelope />,
    title: 'email',
    description: 'masood.m.dev@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    description: 'Tehran, Shariati, Police Street',
  },
];

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: '',
  });

  const [open, setOpen] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setOpen(true);
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: '',
      });
      setTimeout(() => {
        setOpen(false);
      }, 4000);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSubmit}
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                I&apos;m excited to collaborate on your next project! Feel free
                to reach out for inquiries, ideas, or collaborations. Let&apos;s
                bring your vision to life.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  placeholder="Firstname"
                />
                <Input
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Lastname"
                />
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                />
                <Input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                />
              </div>
              <Textarea
                className="h-[200px]"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
              />
              <Button size="md" className="max-w-40" type="submit">
                Send message
              </Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div>{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Message Sent!</DialogTitle>
            <DialogDescription>
              Your message has been successfully sent. I’ll get back to you
              soon.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </motion.section>
  );
};

export default Contact;
