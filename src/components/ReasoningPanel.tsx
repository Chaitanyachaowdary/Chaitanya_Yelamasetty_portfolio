import { Icon } from "./Icon";

const certs = [
  {
    title: "Full Stack Web Development",
    org: "MSR ENDUSOFT PVT LTD",
    year: "2023",
    href: "https://drive.google.com/file/d/1Ni4-hhE8TZjpelseP5GWZ6f-BHl67ASQ/view?usp=drive_link",
  },
  {
    title: "Python for Data Science",
    org: "NPTEL",
    year: "2024",
    href: "https://drive.google.com/file/d/1cFgstzBjGiNNHoiJt01L9L9ayqPo6chHvl/view?usp=drive_link",
  },
  {
    title: "Python (Basic)",
    org: "HackerRank",
    year: "2024",
    href: "https://drive.google.com/file/d/1x9y99GIxaGXKF8w0FS58c0YuDcmU2RP0/view?usp=drive_link",
  },
];

const education = [
  {
    degree: "B.Tech — Electronics & Communication Engineering",
    org: "JNTU Anantapur (SVPCET) · Puttur, Tirupati",
    period: "Dec 2021 – Apr 2025",
    gpa: "GPA 7.2",
  },
  {
    degree: "Intermediate (Maths, Physics, Chemistry)",
    org: "Vijayawada Nalanda Junior College · Anantapur",
    period: "Jun 2019 – May 2021",
    gpa: "GPA 6.6",
  },
  {
    degree: "SSC (10th, General)",
    org: "Loyola E.M High School · Hindupur",
    period: "Jun 2018 – Apr 2019",
    gpa: "GPA 8.2",
  },
];

export function ReasoningPanel() {
  return (
    <section
      id="credentials"
      className="px-margin-mobile md:px-margin-desktop py-24"
    >
      <div className="max-w-5xl mx-auto glass-panel rounded-3xl overflow-hidden shadow-2xl">
        <div className="bg-obsidian-surface px-6 py-4 border-b border-glass-stroke flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-data-green animate-pulse flex items-center justify-center">
              <Icon
                name="check"
                className="text-[6px] text-obsidian-deep font-bold"
              />
            </div>
            <span className="font-label-code text-label-code text-on-surface">
              CREDENTIALS :: VERIFIED
            </span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-error/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-tertiary-container/40" />
            <div className="w-2.5 h-2.5 rounded-full bg-data-green/40" />
          </div>
        </div>

        <div className="p-8 bg-obsidian-deep/40 grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Certifications */}
          <div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-neon-cyan mb-6 flex items-center gap-3">
              <Icon name="verified" /> Certifications
            </h3>
            <div className="space-y-4">
              {certs.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block glass-panel p-4 rounded-xl border-glass-stroke hover:border-neon-cyan/40 transition-all group"
                >
                  <div className="flex justify-between items-start gap-3">
                    <div>
                      <p className="text-on-surface font-bold">{c.title}</p>
                      <p className="text-on-surface-variant text-body-sm">
                        {c.org}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="font-status-telemetry text-status-telemetry text-neon-purple">
                        {c.year}
                      </span>
                      <Icon
                        name="open_in_new"
                        className="text-[16px] text-on-surface-variant group-hover:text-neon-cyan transition-colors"
                      />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-neon-purple mb-6 flex items-center gap-3">
              <Icon name="school" /> Education
            </h3>
            <div className="space-y-4">
              {education.map((e) => (
                <div
                  key={e.degree}
                  className="glass-panel p-4 rounded-xl border-glass-stroke"
                >
                  <div className="flex justify-between items-start gap-3 mb-1">
                    <p className="text-on-surface font-bold">{e.degree}</p>
                    <span className="font-label-code text-[11px] text-data-green flex-shrink-0">
                      {e.gpa}
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-body-sm">{e.org}</p>
                  <p className="font-status-telemetry text-status-telemetry text-on-surface-variant opacity-60 mt-1">
                    {e.period}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
