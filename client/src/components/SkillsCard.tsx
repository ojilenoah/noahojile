export default function SkillsCard() {
  return (
    <div
      className="bg-cardBg p-0 h-full overflow-hidden border border-accent/20 card-rounded"
      style={{
        borderColor: "var(--border-accent-color, rgba(0, 117, 79, 0.25))",
      }}
    >
      <div
        className="flex items-center px-4 py-2 border-b"
        style={{
          borderColor: "var(--border-accent-color, rgba(0, 117, 79, 0.25))",
        }}
      >
        <h2 className="text-base font-sequel theme-text-primary">SKILLS</h2>
      </div>

      <div className="p-4 space-y-3">
        <div
          className="border-l-2 pl-2"
          style={{
            borderColor: "var(--border-accent-color, rgba(0, 117, 79, 0.4))",
          }}
        >
          <h3 className="text-xs font-sequel">WEB DEVELOPMENT</h3>
          <p className="text-xs font-mono text-secondary">
            JavaScript, <span className="text-accent">TypeScript</span>, React,
            Node.js, FastAPI, <span className="text-accent">NextJS</span>
          </p>
        </div>

        <div
          className="border-l-2 pl-2"
          style={{
            borderColor: "var(--border-accent-color, rgba(0, 117, 79, 0.4))",
          }}
        >
          <h3 className="text-xs font-sequel">DATA & AUTOMATION</h3>
          <p className="text-xs font-mono text-secondary">
            Python, <span className="text-accent">Pandas</span>, NumPy, SciPy,
            jupyter
          </p>
        </div>

        <div
          className="border-l-2 pl-2"
          style={{
            borderColor: "var(--border-accent-color, rgba(0, 117, 79, 0.4))",
          }}
        >
          <h3 className="text-xs font-sequel">ART & DESIGN</h3>
          <p className="text-xs font-mono text-secondary">
            Drawing, Painting, <span className="text-accent">Blender 3D</span>
          </p>
        </div>
      </div>
    </div>
  );
}
