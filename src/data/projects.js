export const projects = [
  // ========== UI CLONES (6) ==========
  
  {
    id: 1,
    title: 'Shindu Ramadhani',
    category: 'Learn-self',
    description: 'WikiAOT is a fan-made web application inspired by the Attack on Titan series. It provides comprehensive information about characters, Titans, story arcs, and the world of the series in a clean and user-friendly interface. The project was built to practice frontend development while delivering an organized anime encyclopedia for fans.',
    techStack: ['Ketua'],
    status: 'live',
    thumbnail: '/Shin.jpeg',
    thumbnailHover: '/Shin.jpeg',
    links: {
      github: '',
    },
  },
  {
    id: 2,
    title: 'Chery Carmelita bekry',
    category: 'Learn-self',
    description: 'WikiAOT is a fan-made web application inspired by the Attack on Titan series. It provides comprehensive information about characters, Titans, story arcs, and the world of the series in a clean and user-friendly interface. The project was built to practice frontend development while delivering an organized anime encyclopedia for fans.',
    techStack: ['Seketaris'],
    status: 'live',
    thumbnail: '/chry.jpeg',
    thumbnailHover: '/chry.jpeg',
    links: {
      github: '',
    },
  },
  {
    id: 3,
    title: 'Rifan Kurniawan',
    category: 'Learn-self',
    description: 'WikiAOT is a fan-made web application inspired by the Attack on Titan series. It provides comprehensive information about characters, Titans, story arcs, and the world of the series in a clean and user-friendly interface. The project was built to practice frontend development while delivering an organized anime encyclopedia for fans.',
    techStack: ['Bendahara'],
    status: 'live',
    thumbnail: '/rpn.jpeg',
    thumbnailHover: '/rpn.jpeg',
    links: {
      github: '',
    },
  },
  {
    id: 4,
    title: 'Bagas Andriansyah',
    category: 'Learn-self',
    description: 'WikiAOT is a fan-made web application inspired by the Attack on Titan series. It provides comprehensive information about characters, Titans, story arcs, and the world of the series in a clean and user-friendly interface. The project was built to practice frontend development while delivering an organized anime encyclopedia for fans.',
    techStack: ['PDD'],
    status: 'live',
    thumbnail: '/bgs.jpeg',
    thumbnailHover: '/bgs.jpeg',
    links: {
      github: '',
    },
  },
  {
    id: 5,

    title: 'Muhammad Fawwaz Perdana',

    category: 'Learn-self',

    description: 'Mahasiswa Program Studi Informatika Universitas Muhammadiyah Metro.',

    techStack:['PDD'],

    status:'live',

    thumbnail:'/fwz.jpeg',

    thumbnailHover:'/fwz.jpeg',

    //------------------------------------------------------------------------------------------------------
    fullName:'Muhammad Fawwaz Perdana',

    role:'PDD',

    ttl:'Metro, 23 Januari 2004',

    address:'Metro, Lampung',

    major:'S1 Pendidikan bahasa inggris',

    faculty:'Fakultas Keguruan dan Ilmu Pendidikan',

    hobby:'Coding, catur',

    email:'-',

    about:
    'Mahasiswa Pendidikan Bahasa Inggris dari Universitas Muhammadiyah Metro yang memiliki minat pada pengembangan website,UI/UX, serta teknologi frontend/backend.',

    skills:[
        'React',
        'Tailwind CSS',
        'Vite',
        'JavaScript',
        'Node.js'
    ],
  },
  {
    id: 6,
    title: 'Nuur Muhammad Raafi',
    category: 'Learn-self',
    description: 'WikiAOT is a fan-made web application inspired by the Attack on Titan series. It provides comprehensive information about characters, Titans, story arcs, and the world of the series in a clean and user-friendly interface. The project was built to practice frontend development while delivering an organized anime encyclopedia for fans.',
    techStack: ['Humas','Acara'],
    status: 'live',
    thumbnail: '/rafi.jpeg',
    thumbnailHover: '/rafi.jpeg',
    links: {
      github: '',
    },
  },
  {
    id: 7,
    title: 'Fahra Salsabilla',
    category: 'Learn-self',
    description: 'WikiAOT is a fan-made web application inspired by the Attack on Titan series. It provides comprehensive information about characters, Titans, story arcs, and the world of the series in a clean and user-friendly interface. The project was built to practice frontend development while delivering an organized anime encyclopedia for fans.',
    techStack: ['Humas','Acara'],
    status: 'live',
    thumbnail: '/frh.jpeg',
    thumbnailHover: '/frh.jpeg',
    links: {
      github: '',
    },
  },
  {
    id: 8,
    title: 'Handy Ferdiansyah',
    category: 'Learn-self',
    description: 'WikiAOT is a fan-made web application inspired by the Attack on Titan series. It provides comprehensive information about characters, Titans, story arcs, and the world of the series in a clean and user-friendly interface. The project was built to practice frontend development while delivering an organized anime encyclopedia for fans.',
    techStack: ['Perlengkapan'],
    status: 'live',
    thumbnail: '/hndy.jpeg',
    thumbnailHover: '/hndy.jpeg',
    links: {
      github: '',
    },
  },
  {
    id: 9,
    title: 'Naufal Satria',
    category: 'Learn-self',
    description: 'WikiAOT is a fan-made web application inspired by the Attack on Titan series. It provides comprehensive information about characters, Titans, story arcs, and the world of the series in a clean and user-friendly interface. The project was built to practice frontend development while delivering an organized anime encyclopedia for fans.',
    techStack: ['Perlengkapan'],
    status: 'live',
    thumbnail: '/Nopal.jpeg',
    thumbnailHover: '/Nopal.jpeg',
    links: {
      github: '',
    },
  },
  {
    id: 10,
    title: 'Tasya Putri Oktaviani',
    category: 'Learn-self',
    description: 'WikiAOT is a fan-made web application inspired by the Attack on Titan series. It provides comprehensive information about characters, Titans, story arcs, and the world of the series in a clean and user-friendly interface. The project was built to practice frontend development while delivering an organized anime encyclopedia for fans.',
    techStack: ['konsumsi'],
    status: 'live',
    thumbnail: '/tasya.jpeg',
    thumbnailHover: '/tasya.jpeg',
    links: {
      github: '',
    },
  },
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ui-clone', label: 'UI Clones' },
  { id: 'games', label: 'Games' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'fullstack', label: 'Full Stack' },
];

export const statusConfig = {
  live: { label: 'Live', color: 'var(--status-live)', icon: '🟢' },
  'in-progress': { label: 'In Progress', color: 'var(--status-progress)', icon: '🟡' },
  planned: { label: 'Planned', color: 'var(--status-planned)', icon: '🔵' },
};
