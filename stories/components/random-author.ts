const firstNames = [
  'John',
  'Emily',
  'Michael',
  'Sarah',
  'David',
  'Jessica',
  'Robert',
  'Jennifer',
  'William',
  'Elizabeth',
];
const lastNames = ['Smith', 'Johnson', 'Brown', 'Davis', 'Miller', 'Wilson', 'Moore', 'Taylor', 'Anderson', 'Thomas'];
const companies = [
  { name: 'TechCo', location: 'San Francisco' },
  { name: 'InnovateCorp', location: 'New York' },
  { name: 'DataTech', location: 'Los Angeles' },
  { name: 'ConnectX', location: 'Seattle' },
  { name: 'AlphaSoft', location: 'Chicago' },
  { name: 'ByteSys', location: 'Austin' },
  { name: 'NexGen', location: 'Boston' },
  { name: 'FusionTech', location: 'Atlanta' },
  { name: 'EcoSolutions', location: 'Denver' },
  { name: 'GlobalSoft', location: 'Miami' },
];

const getRandomAuthor = () => {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const authorName = `${firstName} ${lastName}`;
  const companyInfo = companies[Math.floor(Math.random() * companies.length)];
  const { name, location } = companyInfo;
  return { name: authorName, company: `${name}, ${location}` };
};

export default getRandomAuthor;
