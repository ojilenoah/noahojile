import { useState } from "react";
import ProfileCard from "@/components/ProfileCard";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import ContactButton from "@/components/ContactButton";
import DownloadCVButton from "@/components/DownloadCVButton";
import TechStackCard from "@/components/TechStackCard";
import SkillsCard from "@/components/SkillsCard";
import WorkExperienceCard from "@/components/WorkExperienceCard";
import TestimonialsCard from "@/components/TestimonialsCard";
import ProjectModal from "@/components/ProjectModal";
import ContactModal from "@/components/ContactModal";
import Header from "@/components/Header";
import { projects } from "@/data/projects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  
  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
    setIsProjectModalOpen(true);
  };
  
  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="mx-auto p-3 md:p-4 max-w-7xl flex-1">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4">
          {/* Row 1 - Profile card takes up first column for both rows */}
          <div className="col-span-1 md:col-span-1 row-span-2 h-full">
            <ProfileCard />
          </div>
          
          {/* Projects carousel takes up rest of first row */}
          <div className="col-span-1 md:col-span-3 h-full">
            <ProjectsCarousel projects={projects} onProjectClick={handleProjectClick} />
          </div>
          
          {/* Row 2 - Skills, Experience, and Testimonial cards */}
          <div className="col-span-1 md:col-span-1 h-full">
            <SkillsCard />
          </div>
          
          <div className="col-span-1 md:col-span-1 h-full">
            <WorkExperienceCard />
          </div>
          
          <div className="col-span-1 md:col-span-1 h-full min-h-[200px]">
            <TestimonialsCard inGrid={true} />
          </div>
        </div>
        
        {/* Tech Stack - Full Width */}
        <div className="mt-4">
          <TechStackCard />
        </div>
        
        {/* Contact and Download CV Buttons */}
        <div className="mt-4 flex justify-center">
          <div className="w-full max-w-md flex space-x-3">
            <div className="flex-grow">
              <ContactButton onClick={handleContactClick} />
            </div>
            <div className="w-44"> {/* Fixed width for the Download CV button */}
              <DownloadCVButton />
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-6 border-t border-neonGreen/30 pt-3 text-center text-[10px] text-secondary">
          <p>© 2025 <span className="text-neonGreen font-mono font-bold">noah.ojile</span> • BSc Computer Science</p>
          <p className="text-neonGreen/50 mt-1 font-mono">[ React • Tailwind • TypeScript ]</p>
        </footer>
        
        {/* Modals */}
        <ProjectModal 
          isOpen={isProjectModalOpen}
          projectId={selectedProject}
          onClose={() => setIsProjectModalOpen(false)}
        />
        
        <ContactModal 
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </main>
    </div>
  );
}
