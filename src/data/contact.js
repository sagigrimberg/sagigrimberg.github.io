import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
// import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/sagigrimberg',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.facebook.com/sagi.grimberg',
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: 'https://www.linkedin.com/in/sagi-grimberg-90015123/',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://twitter.com/sagigrim',
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: 'mailto:sagi@grimberg.me',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
