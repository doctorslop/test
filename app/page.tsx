import Reveal from "@/components/Reveal";

type Chapter = {
  number: string;
  title: string;
  body: string;
  note: string;
};

type Feature = {
  label: string;
  statement: string;
};

const manifestoLines = [
  "Interfaces became noisy.",
  "Media got flattened into dashboards.",
  "Streamyfin restores cinema to personal libraries.",
  "Quiet confidence. Precise control.",
];

const chapters: Chapter[] = [
  {
    number: "01",
    title: "Playback with gravity",
    body: "Controls fade when they should. Metadata appears when it matters. The frame always stays the protagonist.",
    note: "4K HDR • adaptive bitrate • subtitle discipline",
  },
  {
    number: "02",
    title: "A library that reads editorial",
    body: "Posters are not thumbnails; they are material. Collections feel curated, scan fast, and stay legible at distance.",
    note: "Smart rows • expressive typography • frictionless resume",
  },
  {
    number: "03",
    title: "One session across every screen",
    body: "Start on TV. Continue on handheld. Cast to the room in seconds. Streamyfin preserves momentum, not just progress.",
    note: "TV • tablet • phone • casting",
  },
];

const features: Feature[] = [
  { label: "Design-led", statement: "Interface decisions made with visual intent." },
  { label: "Jellyfin-native", statement: "Built for the ecosystem, not layered on top." },
  { label: "Developer-credible", statement: "Open-source workflow, pragmatic architecture." },
  { label: "Performance-first", statement: "Fast navigation, stable playback, low friction." },
];

export default function HomePage() {
  return (
    <main className="site">
      <header className="hero panel">
        <div className="heroTop">
          <p className="meta">Streamyfin / Jellyfin client / Edition 2026</p>
          <a href="#community" className="topLink" aria-label="Jump to community section">
            Open source
          </a>
        </div>

        <Reveal>
          <h1>
            WATCH
            <span>LIKE IT</span>
            MATTERS
          </h1>
          <p className="heroCopy">
            A design-led Jellyfin client for self-hosters, developers, and people who care about how media feels.
          </p>
        </Reveal>
      </header>

      <section className="ticker" aria-label="repetitive typographic motif">
        <div>
          STREAMYFIN — STREAM WITH INTENTION — STREAMYFIN — STREAM WITH INTENTION — STREAMYFIN — STREAM WITH
          INTENTION —
        </div>
      </section>

      <section className="manifesto panel">
        <Reveal>
          <p className="kicker">Manifesto</p>
          {manifestoLines.map((line) => (
            <p key={line} className="manifestoLine">
              {line}
            </p>
          ))}
        </Reveal>
      </section>

      <section className="sequence" aria-label="product experience sequence">
        <div className="stickyLabel">Experience</div>
        <div className="chapters">
          {chapters.map((chapter) => (
            <article className="chapter" key={chapter.number}>
              <Reveal>
                <p className="chapterIndex">{chapter.number}</p>
                <h2>{chapter.title}</h2>
                <p className="chapterCopy">{chapter.body}</p>
                <p className="chapterDetail">{chapter.note}</p>
              </Reveal>

              <div className="deviceObject" aria-hidden="true">
                <div className="deviceGlow" />
                <div className="deviceFrame">
                  <div className="deviceScrim" />
                  <div className="deviceBar" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="featureNarrative panel">
        <Reveal>
          <p className="kicker">Feature narrative</p>
          <div className="featureGrid">
            {features.map((feature) => (
              <article key={feature.label} className="featureItem">
                <p className="featureLabel">{feature.label}</p>
                <p>{feature.statement}</p>
              </article>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="context panel">
        <Reveal>
          <p className="kicker">Usage context</p>
          <h3>
            COUCH.
            <br />
            COMMUTE.
            <br />
            COMMAND+K.
          </h3>
          <p>
            Built for nights in front of calibrated OLED, quick train playback, and keyboard-native control at your desk.
          </p>
        </Reveal>
      </section>

      <section id="community" className="community panelCompact">
        <Reveal>
          <p className="kicker">Community layer</p>
          <p>
            Open-source, Jellyfin-native, and built in public. Credible by code, not slogans.
          </p>
        </Reveal>
      </section>

      <footer className="closing panel">
        <Reveal>
          <p className="kicker">Streamyfin</p>
          <h4>THE CINEMATIC CLIENT.</h4>
          <p className="closingSub">Designed to be felt. Built to be trusted.</p>
          <a className="cta" href="#" aria-label="Get Streamyfin early access">
            Request early access
          </a>
        </Reveal>
      </footer>
    </main>
  );
}
