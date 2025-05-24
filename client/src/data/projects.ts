export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  imageUrl?: string;
  downloadUrl?: string;
  type?: 'web' | 'mobile';
}

export const projects: Project[] = [
  {
    id: 1,
    title: "BlockVote: Blockchain Based Voting Platform",
    description: "A fully functional blockchain based voting system where elections can be conducted and new users registered so that they can be enrolled to vote. Voting is done by creating transactions on the blockchain and the system auto calculates the winners. The system is designed for anti-rigging and every transaction on the blockchain is tamper proof and transparent.",
    technologies: ["Solidity", "React", "Vue", "Web3.js", "Tailwind", "Alchemy"],
    link: "http://blockvotezero.vercel.app/",
    imageUrl: "https://api.microlink.io/?url=http://blockvotezero.vercel.app/&screenshot=true&embed=screenshot.url"
  },
  {
    id: 2,
    title: "Block ID: Decentralized Identity System",
    description: "A decentralized identity system that lets you own your identity. Create, verify, and share your identity without giving up control. Powered by blockchain, protected by encryption, and verified with zero-knowledge proofs.",
    technologies: ["Next.js", "React", "Tailwind CSS", "Solidity", "ZK Proofs", "MetaMask", "Ethers.js", "Polygon", "Ethereum", "IPFS", "Supabase", "ECIES encryption"],
    link: "https://blockidnoah.vercel.app/",
    imageUrl: "https://api.microlink.io/?url=https://blockidnoah.vercel.app/&screenshot=true&embed=screenshot.url"
  },
  {
    id: 3,
    title: "Hotel Dashboard",
    description: "A comprehensive hotel management dashboard featuring real-time analytics, room bookings, revenue tracking, and guest management. The interface provides actionable insights with visual data representations for effective hotel operations management.",
    technologies: ["Next.js", "React", "TailwindCSS", "Chart.js", "TypeScript"],
    link: "https://hotel-dashboard-noah.vercel.app/",
    imageUrl: "/images/hotel-dashboard.png"
  },
  {
    id: 4,
    title: "Workflow Builder",
    description: "A visual workflow automation builder that allows users to create custom automations by dragging and dropping nodes. Features include data processing, conditional branching, and various input/output operations for building complex business logic without coding.",
    technologies: ["Next.js", "React", "TypeScript", "React Flow", "Zod"],
    link: "https://workflow-builder-noah.vercel.app/",
    imageUrl: "/images/workflow-builder.png"
  },
  {
    id: 5,
    title: "Three In A Row",
    description: "A minimalist implementation of the classic tic-tac-toe game with a sleek dark interface. The game features a clean design, responsive gameplay, and turn tracking for an engaging user experience.",
    technologies: ["Next.js", "React", "CSS Modules", "TypeScript"],
    link: "https://three-in-a-row-noah.vercel.app/",
    imageUrl: "/images/three-in-row.png"
  },
  {
    id: 6,
    title: "TimeLink",
    description: "A personal time management application that integrates calendar events, daily routines, and weather-based outfit recommendations. The app features a streamlined interface for managing schedules and maintaining productivity habits.",
    technologies: ["Next.js", "React", "TailwindCSS", "TypeScript", "date-fns"],
    link: "https://timelink-noah.vercel.app/",
    imageUrl: "/images/timelink.png"
  },
  {
    id: 7,
    title: "Action Searchbar",
    description: "A command palette interface inspired by popular tools like Spotlight and Raycast. Users can quickly search and execute commands with keyboard shortcuts, enhancing productivity and workflow efficiency.",
    technologies: ["Next.js", "React", "TailwindCSS", "cmdk", "TypeScript"],
    link: "https://action-searchbar-noah.vercel.app/",
    imageUrl: "/images/action-searchbar.jpg"
  },
  {
    id: 8,
    title: "Animated Menu",
    description: "A responsive navigation menu with smooth animations and theme switching capabilities. Features include subtle hover effects, light/dark mode toggle, and a modern minimalist design pattern for enhanced user experience.",
    technologies: ["Next.js", "React", "Framer Motion", "TailwindCSS"],
    link: "https://animated-menu-noah.vercel.app/",
    imageUrl: "/images/animated-menu.jpg"
  },
  {
    id: 9,
    title: "Interactive Piano",
    description: "A virtual piano keyboard that allows users to play music directly in the browser. The application includes predefined songs, key highlighting, and sound synthesis for an interactive musical experience.",
    technologies: ["Next.js", "React", "Web Audio API", "TypeScript"],
    link: "https://interactive-piano-noah.vercel.app/",
    imageUrl: "/images/interactive-piano.png"
  },
  {
    id: 10,
    title: "Pong Game",
    description: "A modern implementation of the classic Pong arcade game with customizable player controls and visual settings. Features include adjustable ball speed, paddle color selection, and real-time scoring.",
    technologies: ["Next.js", "React", "Canvas API", "TypeScript"],
    link: "https://pong-game-noah.vercel.app/",
    imageUrl: "/images/pong-game.jpg"
  },
  {
    id: 11,
    title: "Coinly",
    description: "Pay Your Bills Effortlessly. Buy & Sell Crypto, Trade Gift Cards, Send and Receive Money Nationwide, Pay Utility Bills With Ease. The best payment application to manage your funds wisely.",
    technologies: ["React Native", "Expo", "TypeScript", "Crypto API"],
    link: "https://thecoinlyapp.com/ng/",
    downloadUrl: "https://expo.dev/artifacts/eas/pqa6hrJmFf8KyyVC5en6bh.apk",
    type: "mobile",
    imageUrl: "https://api.microlink.io/?url=https://thecoinlyapp.com/ng/&screenshot=true&embed=screenshot.url"
  },
  {
    id: 12,
    title: "Cheepay",
    description: "Fast & Secure Payments at Your Fingertips. Send money, pay bills, and manage your finances with our secure and reliable mobile payment solution.",
    technologies: ["React Native", "Expo", "TypeScript", "Payment API"],
    link: "https://cheepayapp.top/",
    downloadUrl: "https://expo.dev/artifacts/eas/uVyCMAzJ28DoTmxHxDP6V1.apk",
    type: "mobile",
    imageUrl: "https://api.microlink.io/?url=https://cheepayapp.top/&screenshot=true&embed=screenshot.url"
  }
];
