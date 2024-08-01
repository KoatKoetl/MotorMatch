import { LocateFixed, Mail, Phone } from 'lucide-react';

export const contactCards = [
  {
    title: 'Phone',
    description: '+373 1234567890',
    icon: <Phone size={24} />,
  },
  {
    title: 'Email',
    description: 'anymail@gmail.com',
    icon: <Mail size={24} />,
  },
  {
    title: 'Address',
    description: '123, Main Street, Chisinau, Moldova',
    icon: <LocateFixed size={24} />,
  },
];
