import { Icon } from "./Icon";

const log: { text: string; className: string }[] = [
  { text: "[boot] profile.load() → Chaitanya Yelamasetty", className: "text-on-surface-variant opacity-60" },
  { text: "[role] Full Stack Developer + UI/UX Designer ... OK", className: "text-neon-cyan" },
  { text: "[focus] responsive web apps · type-safe backends", className: "text-neon-purple" },
  { text: "[shipping] EnAble India · CodeSage ... ACTIVE", className: "text-data-green" },
  { text: "> Passionate about clean, high-quality software.", className: "text-on-surface" },
  { text: "Languages: Java · Python · JavaScript · TypeScript", className: "text-on-surface-variant opacity-60 pl-4" },
  { text: "Traits: quick learner · problem solver · team player", className: "text-on-surface-variant opacity-60 pl-4" },
  { text: "Status: open to full-time & freelance.", className: "text-on-surface-variant opacity-60 pl-4" },
];

export function LiveInference() {
  return (
    <section
      id="about"
      className="px-margin-mobile md:px-margin-desktop py-24 bg-obsidian-surface/30"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 flex items-center gap-3">
            <Icon name="person" className="text-neon-cyan text-[0.8em]" />
            ABOUT_ME
          </h2>
          <p className="text-on-surface-variant mb-8 text-body-md">
            I&apos;m a Full Stack Web Developer and UI/UX Designer with a solid
            grasp of programming fundamentals and hands-on experience building
            responsive web apps with Java, Python, JavaScript and React. I love
            crafting efficient, high-quality software and untangling complex
            technical challenges — and I&apos;m always eager to pick up new
            tools.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full border border-glass-stroke flex items-center justify-center group-hover:border-neon-cyan transition-colors">
                <Icon name="bolt" className="text-neon-cyan" />
              </div>
              <div>
                <p className="text-on-surface font-bold">Quick, Enthusiastic Learner</p>
                <p className="text-on-surface-variant text-sm">
                  Adapts fast to new technologies and dynamic teams.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-full border border-glass-stroke flex items-center justify-center group-hover:border-neon-purple transition-colors">
                <Icon name="translate" className="text-neon-purple" />
              </div>
              <div>
                <p className="text-on-surface font-bold">Languages I Speak</p>
                <p className="text-on-surface-variant text-sm">
                  English (Professional) · Telugu (Native) · Hindi (Conversational)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Profile terminal */}
        <div className="glass-panel rounded-3xl overflow-hidden shadow-2xl border-neon-cyan/30">
          <div className="bg-obsidian-surface px-6 py-4 border-b border-glass-stroke flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-data-green animate-pulse flex items-center justify-center">
                <Icon
                  name="check"
                  className="text-[6px] text-obsidian-deep font-bold"
                />
              </div>
              <span className="font-label-code text-label-code text-on-surface">
                PROFILE :: CHAITANYA_Y
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-2 h-2 rounded-full bg-glass-stroke" />
              <div className="w-2 h-2 rounded-full bg-glass-stroke" />
            </div>
          </div>
          <div
            className="p-6 bg-obsidian-deep/80 font-label-code text-[12px] h-80 overflow-y-auto space-y-2 scrollbar-hide"
            aria-live="polite"
          >
            {log.map((line, i) => (
              <div key={i} className={line.className}>
                {line.text}
              </div>
            ))}
            <div className="animate-pulse text-neon-cyan pt-4">_</div>
          </div>
        </div>
      </div>
    </section>
  );
}
