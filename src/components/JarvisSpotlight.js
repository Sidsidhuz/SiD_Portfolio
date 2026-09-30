import React from 'react';

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8 5.5v13l10-6.5z" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

const media = [
  {
    source: 'Mathrubhumi',
    date: '23 Nov 2023',
    title: 'Jarvis featured in the Chengannur newspaper edition',
    image: `${process.env.PUBLIC_URL}/jarvis-mathrubhumi.jpg`,
    href: 'https://ibb.co/M5tw7ZDN',
    type: 'Newspaper',
  },
  {
    source: 'Janam TV',
    date: '24 Nov 2023',
    title: 'Jarvis becomes the centre of attention on campus',
    image: 'https://i.ytimg.com/vi/WvWuOOA3j-Q/hqdefault.jpg',
    href: 'https://youtu.be/WvWuOOA3j-Q',
    type: 'Watch report',
    video: true,
  },
  {
    source: 'WE1',
    date: '25 Nov 2023',
    title: 'A closer look at the college-built robot Jarvis',
    image: 'https://i.ytimg.com/vi/rAf8nRzG-Ug/hqdefault.jpg',
    href: 'https://youtu.be/rAf8nRzG-Ug',
    type: 'Watch report',
    video: true,
  },
];

function JarvisSpotlight() {
  return (
    <section className="jarvis-section" id="jarvis">
      <div className="jarvis-heading">
        <div>
          <p className="section-eyebrow">2023 · ROBOTICS SPOTLIGHT</p>
          <h2 className="section-title">Meet <span>Jarvis</span></h2>
        </div>
        <p className="jarvis-heading-copy">
          A college experiment that learned our story, moved through the physical world,
          and found its way onto television and into print.
        </p>
      </div>

      <div className="jarvis-stage">
        <div className="jarvis-visual">
          <img
            className="jarvis-main-photo"
            src={`${process.env.PUBLIC_URL}/jarvis-college-1.jpg`}
            alt="Jarvis with the student builders and college faculty"
          />
          <div className="jarvis-photo-shade" />
          <div className="jarvis-visual-label">
            <span className="jarvis-live-dot" />
            BUILT AT ST. THOMAS COLLEGE
          </div>
          <div className="jarvis-year-mark" aria-hidden="true">'23</div>
        </div>

        <article className="jarvis-story">
          <p className="jarvis-kicker">FROM WORKSHOP TO NEWSROOM</p>
          <h3>A locally grounded robot that could crawl and talk.</h3>
          <p>
            Jarvis was created for our college environment. A Python and Ollama-powered
            conversational layer was grounded in curated information about our college,
            its creators, and its purpose—allowing the robot to answer questions with
            relevant local context.
          </p>
          <p>
            Its physical movement used Raspberry Pi-based remote control and heavy-duty
            servo motors, bringing the digital assistant out of the screen and into a
            moving robotic body.
          </p>
          <div className="jarvis-tags" aria-label="Jarvis technologies">
            {['Python', 'Ollama', 'Raspberry Pi', 'Servo robotics', 'Grounded AI'].map(tag => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="jarvis-team">
            <img src={`${process.env.PUBLIC_URL}/jarvis-college-2.jpg`} alt="SJF Technology team: Sidharth TV, Fayaz PM and Joe Paul" />
            <div>
              <span>BUILT AS A TEAM</span>
              <strong>Sidharth TV · Fayaz PM · Joe Paul</strong>
              <small>St. Thomas College of Engineering &amp; Technology</small>
            </div>
          </div>
        </article>
      </div>

      <div className="jarvis-engineering-grid">
        <article>
          <span>01</span>
          <div><strong>Problem</strong><p>Give the college an embodied assistant that could answer campus-specific questions and move through a physical space.</p></div>
        </article>
        <article>
          <span>02</span>
          <div><strong>My contribution</strong><p>I built the Python and Ollama knowledge layer and the Raspberry Pi remote-control path for heavy-duty servo locomotion.</p></div>
        </article>
        <article>
          <span>03</span>
          <div><strong>Technology choices</strong><p>Local Ollama kept curated college knowledge self-contained, while Raspberry Pi offered practical, accessible motor control.</p></div>
        </article>
        <article>
          <span>04</span>
          <div><strong>Hardest challenge</strong><p>Coordinating grounded conversation with high-torque physical movement in a stable, presentable campus robot.</p></div>
        </article>
      </div>

      <div className="jarvis-press-heading">
        <div><p className="section-eyebrow">IN THE PRESS</p><h3>Three days. Three stories.</h3></div>
        <p>Independent coverage from newspaper and television media.</p>
      </div>

      <div className="jarvis-media-grid">
        {media.map(item => (
          <a className="jarvis-media-card" href={item.href} target="_blank" rel="noreferrer" key={item.source}>
            <div className="jarvis-media-image">
              <img src={item.image} alt={`${item.source} coverage of Jarvis`} />
              {item.video && <span className="jarvis-play"><PlayIcon /></span>}
            </div>
            <div className="jarvis-media-copy">
              <div className="jarvis-media-meta"><span>{item.source}</span><time>{item.date}</time></div>
              <strong>{item.title}</strong>
              <span className="jarvis-media-action">{item.type} <ArrowIcon /></span>
            </div>
          </a>
        ))}
      </div>

      <p className="jarvis-source-note">
        Team affiliation is also documented by the{' '}
        <a href="https://www.stthomascollege.ac.in/life-stc/incubation-cell/sjf-technology/" target="_blank" rel="noreferrer">
          official college incubation page <ArrowIcon />
        </a>
      </p>
    </section>
  );
}

export default JarvisSpotlight;
