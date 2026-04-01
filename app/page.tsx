import Reveal from "@/components/Reveal";

const manifesto = [
  "Most media clients optimize for settings.",
  "We optimized for atmosphere.",
  "Streamyfin is for people who notice spacing, timing, and texture.",
  "Not louder. Sharper.",
];

const narratives = [
  {
    id: "playback",
    title: "PLAYBACK, COMPOSED",
    body: "Every control sits where your hand expects it. Every overlay arrives with restraint. Nothing jumps. Nothing shouts.",
    metric: "4K HDR, tone-mapped with intent",
  },
  {
    id: "library",
    title: "LIBRARY, REFRAMED",
    body: "Posters, metadata, and progress lines are treated like editorial material. Your collection reads like a curated archive.",
    metric: "Fast indexing across serious libraries",
  },
  {
    id: "sync",
    title: "DEVICES, IN SYNC",
    body: "Start on the TV. Continue on handheld. Cast without friction. Streamyfin keeps your place and your pace.",
    metric: "Context continuity across couch, desk, and transit",
  },
];

export default function HomePage() {
  return (
    <main className="page">
      <section className="hero poster">
        <p className="eyebrow">Streamyfin / Jellyfin Client / 2026</p>
        <h1>
          WATCH
          <span>WITH</span>
          INTENTION
        </h1>
        <p className="hero-sub">
          A cinematic interface for people who self-host with taste.
        </p>
      </section>

      <section className="marquee" aria-label="typographic motif">
        <div>
          STREAMYFIN — MODERN JELLYFIN CLIENT — STREAMYFIN — MODERN JELLYFIN
          CLIENT —
        </div>
      </section>

      <section className="manifesto poster">
        <Reveal>
          <p className="label">MANIFESTO</p>
          {manifesto.map((line) => (
            <p key={line} className="manifesto-line">
              {line}
            </p>
          ))}
        </Reveal>
      </section>

      <section className="experience">
        {narratives.map((item, idx) => (
          <article key={item.id} className={`exp-card exp-${idx + 1}`}>
            <Reveal>
              <p className="label">0{idx + 1}</p>
              <h2>{item.title}</h2>
              <p>{item.body}</p>
              <p className="metric">{item.metric}</p>
            </Reveal>
          </article>
        ))}
      </section>

      <section className="devices poster">
        <Reveal>
          <p className="label">USAGE CONTEXT</p>
          <h3>
            BIG SCREEN.
            <br />
            SMALL SCREEN.
            <br />
            SAME MOOD.
          </h3>
          <p>
            Built for night sessions on a calibrated TV, morning catch-up on a
            handheld, and instant casting when people arrive.
          </p>
        </Reveal>
      </section>

      <section className="community">
        <Reveal>
          <p className="label">COMMUNITY LAYER</p>
          <p>
            Open-source at heart. Native to the Jellyfin ecosystem. Built in
            public with developers, self-hosters, and obsessive movie people.
          </p>
        </Reveal>
      </section>

      <section className="closing poster">
        <Reveal>
          <p className="label">STREAMYFIN</p>
          <h4>DESIGNED TO BE FELT.</h4>
          <a href="#" className="cta" aria-label="Get Streamyfin">
            GET EARLY ACCESS
          </a>
        </Reveal>
      </section>
    </main>
  );
}
