import { useEffect } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Dialog, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { projects } from "@/data/projects";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import * as React from "react";

// Custom DialogContent without the default close button
const CustomDialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));
CustomDialogContent.displayName = "CustomDialogContent";

interface ProjectModalProps {
  isOpen: boolean;
  projectId: number | null;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, projectId, onClose }: ProjectModalProps) {
  // Use ESC key to close modal
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Get project details
  const project = projectId !== null ? projects.find(p => p.id === projectId) : null;
  
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <CustomDialogContent className="bg-modalBg border border-accent/20 max-w-md p-0 card-rounded"
                        style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.25))' }}>
        <div className="border-b border-accent/20 px-4 py-3 flex justify-between items-center"
             style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.25))' }}>
          <div className="flex items-center">
            <span className="mr-2">📂</span>
            <DialogTitle className="text-base font-sequel theme-text-primary">{project.title}</DialogTitle>
          </div>
          <DialogClose asChild>
            <button 
              onClick={onClose} 
              className="opacity-50 hover:opacity-100 transition-opacity"
            >
              <X size={20} />
            </button>
          </DialogClose>
        </div>
        
        <div className="p-4">
          <div className="border border-accent/20 h-36 mb-4 overflow-hidden flex items-center justify-center card-rounded"
               style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.25))' }}>
            {project.imageUrl ? (
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-full object-cover" 
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center opacity-20">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 5h16v2H4zm0 6h16v2H4zm0 6h16v2H4z" />
                </svg>
                <span className="text-xs mt-2 font-mono">PROJECT {project.id}</span>
              </div>
            )}
          </div>
          
          <div className="text-xs mb-4 theme-text-secondary border-l-2 pl-2 font-mono"
               style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.4))' }}>
            {project.description}
          </div>
          
          <div className="mb-4">
            <div className="text-xs theme-text-primary mb-1 font-sequel">TECH STACK</div>
            {project.id === 2 ? (
              <div className="space-y-2">
                <div>
                  <div className="text-[10px] theme-text-primary mb-1 font-mono opacity-75">Frontend:</div>
                  <div className="flex flex-wrap gap-2">
                    {['Next.js', 'React', 'Tailwind CSS'].map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-[10px] font-mono px-2 py-0.5 border border-accent/40 bg-accent/5 theme-text-secondary rounded-md"
                        style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.4))' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] theme-text-primary mb-1 font-mono opacity-75">Blockchain & Wallet:</div>
                  <div className="flex flex-wrap gap-2">
                    {['MetaMask', 'Ethers.js', 'Polygon', 'Ethereum'].map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-[10px] font-mono px-2 py-0.5 border border-accent/40 bg-accent/5 theme-text-secondary rounded-md"
                        style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.4))' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] theme-text-primary mb-1 font-mono opacity-75">Smart Contracts & Identity:</div>
                  <div className="flex flex-wrap gap-2">
                    {['Solidity', 'ZK Proofs'].map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-[10px] font-mono px-2 py-0.5 border border-accent/40 bg-accent/5 theme-text-secondary rounded-md"
                        style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.4))' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] theme-text-primary mb-1 font-mono opacity-75">Storage & Security:</div>
                  <div className="flex flex-wrap gap-2">
                    {['IPFS', 'Supabase', 'ECIES encryption'].map((tech, index) => (
                      <span 
                        key={index} 
                        className="text-[10px] font-mono px-2 py-0.5 border border-accent/40 bg-accent/5 theme-text-secondary rounded-md"
                        style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.4))' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-[10px] font-mono px-2 py-0.5 border border-accent/40 bg-accent/5 theme-text-secondary rounded-md"
                    style={{ borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.4))' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
          
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block w-full text-center text-xs font-sequel py-3 bg-accent/10 hover:bg-accent/15 text-foreground border border-accent/40 transition-all duration-300 rounded-md shadow-sm hover:shadow-md"
            style={{
              borderColor: 'var(--border-accent-color, rgba(0, 117, 79, 0.4))'
            }}
          >
            <span className="flex items-center justify-center">
              <svg 
                className="w-3 h-3 mr-2 theme-text-primary" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M13 3v7h5l-6 11v-7H7l6-11z" />
              </svg>
              VIEW PROJECT
            </span>
          </a>
        </div>
      </CustomDialogContent>
    </Dialog>
  );
}
