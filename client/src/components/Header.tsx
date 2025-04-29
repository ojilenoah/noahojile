import LiveClock from './LiveClock';
import ThemeSwitch from './ThemeSwitch';

export default function Header() {
  return (
    <header className="w-full py-2 border-b theme-border">
      <div className="max-w-5xl mx-auto flex justify-between items-center px-4">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-sequel">
            Noah <span className="text-foreground/75 dark:text-foreground/90">Ojile</span>
          </h1>
          <div className="text-xs font-mono text-secondary border-l theme-border pl-2 ml-1">
            BSc Computer Science (2025)
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <LiveClock />
          <ThemeSwitch />
        </div>
      </div>
    </header>
  );
}