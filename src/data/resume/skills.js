const skills = [
  {
    title: 'C',
    competency: 5,
    category: ['Linux', 'Kernel', 'Languages', 'Realtime'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Linux', 'Languages', 'Realtime'],
  },
  {
    title: 'Linux Kernel',
    competency: 5,
    category: ['Kernel', 'Linux', 'Realtime'],
  },
  {
    title: 'Device Drivers',
    competency: 5,
    category: ['Kernel', 'Linux', 'Realtime', 'System Engineering'],
  },
  {
    title: 'Bash',
    competency: 5,
    category: ['Tools', 'Linux', 'Languages'],
  },
  {
    title: 'MongoDB',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'SQL/PostgreSQL/SQLite',
    competency: 3,
    category: ['Cloud', 'Databases', 'Languages'],
  },
  {
    title: 'Prometheus/PromQL',
    competency: 4,
    category: ['Cloud', 'Databases', 'Languages'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 3,
    category: ['Virtualization', 'System Engineering'],
  },
  {
    title: 'Openstack',
    competency: 3,
    category: ['Virtualization', 'System Engineering'],
  },
  {
    title: 'AWS',
    competency: 3,
    category: ['Tools', 'Web Development', 'Cloud'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Virtualization'],
  },
  {
    title: 'AWS Lambda',
    competency: 3,
    category: ['Tools', 'Web Development', 'Cloud'],
  },
  {
    title: 'Python',
    competency: 4,
    category: ['Languages', 'Tools'],
  },
  {
    title: 'GraphQL',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'KVM/Qemu',
    competency: 4,
    category: ['Virtualization', 'Linux', 'System Engineering'],
  },
  {
    title: 'RDMA/RoCE/Infiniband',
    competency: 5,
    category: ['Networking', 'Realtime', 'Protocols'],
  },
  {
    title: 'TCP/IP',
    competency: 5,
    category: ['Networking', 'Realtime', 'Protocols'],
  },
  {
    title: 'NVMe',
    competency: 5,
    category: ['Storage', 'Realtime', 'Protocols'],
  },
  {
    title: 'SCSI',
    competency: 4,
    category: ['Storage', 'Realtime', 'Protocols'],
  },
  {
    title: 'File Systems',
    competency: 3,
    category: ['Storage', 'Realtime', 'System Engineering'],
  },
  {
    title: 'S3',
    competency: 3,
    category: ['Storage', 'Protocols', 'Web Development', 'Cloud'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
