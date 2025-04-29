import { 
  FaJs, 
  FaPython, 
  FaReact, 
  FaCss3, 
  FaNodeJs, 
  FaCube, 
  FaBook, 
  FaMarkdown,
  FaRobot,
  FaBrain,
  FaCodeBranch,
  FaGithub,
  FaBookOpen,
  FaEthereum
} from "react-icons/fa";

// Tech item component
const TechItem = ({ icon, name }: { icon: React.ReactNode, name: string }) => (
  <div 
    className="tech-item flex items-center px-3 py-2 mr-4 border whitespace-nowrap card-rounded"
    style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.3))' }}
  >
    <span className="mr-2 text-base text-[currentColor]">{icon}</span>
    <span className="text-xs font-mono text-secondary">{name}</span>
  </div>
);

export default function TechStackCard() {
  const technologies = [
    { icon: <FaJs className="text-yellow-400" />, name: "JavaScript" },
    { icon: <FaPython className="text-blue-500" />, name: "Python" },
    { icon: <FaReact className="text-cyan-400" />, name: "React" },
    { icon: <FaEthereum className="text-purple-600" />, name: "Solidity" },
    { icon: <FaCss3 className="text-blue-600" />, name: "Tailwind" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <FaCube className="text-orange-500" />, name: "Blender" },
    { icon: <FaBook className="text-green-400" />, name: "Jupyter" },
    { icon: <FaMarkdown className="text-blue-400" />, name: "Markdown" },
    { icon: <FaRobot className="text-purple-400" />, name: "ChatGPT" },
    { icon: <FaBrain className="text-indigo-400" />, name: "ClaudeAI" },
    { icon: <FaCodeBranch className="text-yellow-500" />, name: "HuggingFace" },
    { icon: <FaGithub className="text-gray-400" />, name: "GitHub" },
    { icon: <FaBookOpen className="text-purple-500" />, name: "Obsidian" },
  ];

  return (
    <div className="bg-transparent p-0 h-auto overflow-hidden card-rounded">
      <div className="relative overflow-hidden h-[36px] flex items-center">
        {/* Add a background and z-index to the STACK label so it covers scrolling items */}
        <div className="absolute left-0 top-0 h-full bg-background z-10 flex items-center">
          <h2 
            className="text-base font-sequel theme-text-primary pr-3 mr-3 border-r" 
            style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.3))' }}
          >STACK</h2>
        </div>
        <div className="tech-scroll absolute left-[80px] flex animate-scroll" style={{ width: "max-content" }}>
          {technologies.map((tech, index) => (
            <TechItem key={`tech-${index}`} icon={tech.icon} name={tech.name} />
          ))}
          {/* Duplicate items for seamless scrolling */}
          {technologies.map((tech, index) => (
            <TechItem key={`tech-dup-${index}`} icon={tech.icon} name={tech.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
