// src/components/ProjectCard.jsx

import React from 'react';
import Tilt from "react-parallax-tilt";
import { motion } from 'framer-motion';

// headingLevel: cards sit under an h2 section heading normally, but under an
// extra h3 group heading when the grid is split into client/personal. Passing the
// level keeps the outline correct instead of making a card a sibling of the group
// heading that owns it (WCAG 1.3.1).
const ProjectCard = ({ project, onOpen, headingLevel = 'h3' }) => {
  const Heading = headingLevel;
  const { title, description, tags, imageUrl, liveUrl, liveLabel = 'Live', repoUrl } = project;
  const src = /^https?:/i.test(imageUrl) ? imageUrl : `${import.meta.env.BASE_URL}${imageUrl}`;

  // Cap the tag row: GarvSe 2.0 carries eleven, which reads as noise on a card.
  // The full list is always in the More info dialog.
  const TAG_LIMIT = 6;
  const shownTags = tags.slice(0, TAG_LIMIT);
  const hiddenTagCount = tags.length - shownTags.length;

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5 }}
    >
      <Tilt tiltMaxAngleX={6} tiltMaxAngleY={6} glareEnable={false} className="h-full">
        <div className="card h-full flex flex-col overflow-hidden group">
          {/* aspect-[2/1], not a fixed height: the covers are authored at 1200x600,
              so a 2:1 slot shows them whole at every width. A pixel height cannot
              stay proportional as the card widens — at 591px wide the old h-48 made
              a 3.08:1 box, which cropped the 1:1 and 1.6:1 images to a thin band.
              object-top keeps the header of a site screenshot when a crop is
              unavoidable; width/height give the browser the ratio up front so the
              card does not shift as images load. */}
          <div className="overflow-hidden aspect-[2/1] relative">
            <img
              src={src}
              // Decorative: the heading immediately below carries the same text,
              // so alt={title} made a screen reader announce every project twice.
              alt=""
              loading="lazy"
              width="1200"
              height="600"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <Heading className="text-xl font-bold text-light-gray mb-2 group-hover:text-accent transition-colors">{title}</Heading>
            <p className="text-medium-gray mb-4 text-sm flex-grow leading-relaxed">{description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {shownTags.map((tag) => (
                <span key={tag} className="bg-elevated/[0.06] border border-line/15 text-medium-gray text-xs font-medium px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
              {hiddenTagCount > 0 && (
                <span className="text-medium-gray text-xs font-medium px-1 py-1">
                  +{hiddenTagCount} more
                </span>
              )}
            </div>
            {/* Every control here is at least 44px tall. WCAG 2.2 SC 2.5.8
                (Target Size, Level AA) sets the floor at 24px; these were 17–20px. */}
            <div className="flex items-center justify-between gap-3 mt-auto">
              <button
                type="button"
                onClick={onOpen}
                aria-label={`More about ${title}`}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg px-2 -ml-2 text-sm font-semibold text-accent hover:text-accent-hover hover:bg-accent/10 transition-colors"
              >
                More info
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
              </button>
              <div className="flex items-center gap-1">
              {liveUrl && (
                <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg px-2 text-medium-gray hover:text-accent hover:bg-accent/10 transition-colors duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  <span className="text-sm group-hover:underline">{liveLabel}</span>
                </a>
              )}
              {repoUrl && (
                <a href={repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${title} source code on GitHub`} className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-medium-gray hover:text-accent hover:bg-accent/10 transition-colors duration-300 group">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform group-hover:rotate-12 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </a>
              )}
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;