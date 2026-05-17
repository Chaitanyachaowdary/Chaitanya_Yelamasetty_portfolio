import React from 'react';
import Section from './Section';
import { CLIENT_WORK } from '../constants.jsx';
import { motion } from 'framer-motion';

const ClientCard = ({ entry, index }) => {
  const { client, initial, accent, logoUrl, project, role, period, deliverables, stack, websiteUrl } = entry;
  const resolvedLogo = logoUrl && !/^https?:/i.test(logoUrl) ? `${import.meta.env.BASE_URL}${logoUrl}` : logoUrl;

  return (
    <motion.article
      className="bg-secondary/40 backdrop-blur-sm border border-secondary rounded-2xl p-6 md:p-8 hover:border-accent/50 hover:bg-secondary/60 transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
        <div className="flex items-center gap-4">
          {resolvedLogo ? (
            <img src={resolvedLogo} alt={`${client} logo`} className="h-14 w-auto max-w-[140px] object-contain" />
          ) : (
            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${accent || 'from-sky-500 to-cyan-400'} flex items-center justify-center text-primary text-2xl font-extrabold shadow-lg`}>
              {initial || client[0]}
            </div>
          )}
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-light-gray leading-tight">{client}</h3>
            <p className="text-medium-gray text-sm mt-0.5">{project}</p>
          </div>
        </div>
        <div className="text-left sm:text-right text-sm shrink-0">
          <p className="text-accent font-semibold">{role}</p>
          <p className="text-medium-gray font-mono text-xs mt-1">{period}</p>
        </div>
      </header>

      {deliverables?.length > 0 && (
        <ul className="space-y-2 mb-5">
          {deliverables.map((item) => (
            <li key={item} className="flex gap-3 text-medium-gray">
              <span className="text-accent mt-1.5 flex-shrink-0">▹</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap items-center justify-between gap-3">
        {stack?.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {stack.map((s) => (
              <span key={s} className="bg-primary/50 border border-medium-gray/20 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                {s}
              </span>
            ))}
          </div>
        )}
        {websiteUrl && (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${client} website`}
            className="text-medium-gray hover:text-accent text-sm font-semibold flex items-center gap-1 group"
          >
            <span className="group-hover:underline">Visit site</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </motion.article>
  );
};

const ClientWork = () => {
  return (
    <Section id="clients" title="Client Work">
      <div className="max-w-4xl mx-auto space-y-6">
        {CLIENT_WORK.map((entry, i) => (
          <ClientCard key={entry.client + entry.project} entry={entry} index={i} />
        ))}
      </div>
    </Section>
  );
};

export default ClientWork;
