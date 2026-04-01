import Reveal from "@/components/Reveal";

type Manifesto = { line: string; emphasis?: boolean };
type Sequence = { no: string; title: string; body: string; detail: string };
type Stat = { label: string; value: string };

const manifesto: Manifesto[] = [
  { line: "Interfaces became noisy." },
  { line: "Media became dashboards." },
  { line: "Streamyfin restores cinema to personal libraries.", emphasis: true },
  { line: "Quiet confidence. Precise control." },
];

const sequence: Sequence[] = [
  {
    no: "01",
    title: "Playback with gravity",
    body: "Controls fade when they should. Metadata appears when it matters. The frame stays primary.",
    detail: "4K HDR • adaptive bitrate • subtitle discipline",
  },
  {
    no: "02",
    title: "A library that reads editorial",
    body: "Posters feel like material, not thumbnails. Collections remain legible at speed and at distance.",
    detail: "Smart rows • expressive type • seamless resume",
  },
  {
    no: "03",
    title: "One session across every screen",
    body: "Start on TV. Continue on handheld. Cast to the room in seconds. Keep momentum, not menu friction.",
    detail: "TV • tablet • phone • casting",
  },
];

const stats: Stat[] = [
  { label: "Focus", value: "Design-led" },
  { label: "Ecosystem", value: "Jellyfin-native" },
  { label: "Built", value: "Open source" },
  { label: "Feel", value: "Cinematic" },
];

export default function HomePage() {
  return (
    <main className="site">
      <header className="hero panel" id="top">
        <div className="heroTop">
          <p className="meta">Streamyfin / Jellyfin Client / 2026</p>
          <nav aria-label="Section navigation">
            <a href="#experience">Experience</a>
            <a href="#community">Community</a>
          </nav>
        </div>

        <Reveal>
          <h1>
            WATCH
            <span>LIKE IT</span>
            MATTERS
          </h1>
          <p className="heroCopy">
            A modern Jellyfin client for self-hosters, developers, and media obsessives who care about how playback feels.
          </p>
        </Reveal>
      </header>

      <section className="ticker" aria-label="Typographic motif">
        <div>STREAMYFIN — STREAM WITH INTENTION — STREAMYFIN — STREAM WITH INTENTION — STREAMYFIN —</div>
      </section>

      <section className="manifesto panel">
        <Reveal>
          <p className="kicker">Manifesto</p>
          {manifesto.map((m) => (
            <p key={m.line} className={`manifestoLine ${m.emphasis ? "isEmphasis" : ""}`}>
              {m.line}
            </p>
          ))}
        </Reveal>
      </section>

      <section className="stats panelCompact" aria-label="Positioning facts">
        {stats.map((item) => (
          <article key={item.label}>
            <p>{item.label}</p>
            <h2>{item.value}</h2>
          </article>
        ))}
      </section>

      <section id="experience" className="sequence" aria-label="Product experience sequence">
        <p className="stickyLabel">Experience</p>
        <div className="chapters">
          {sequence.map((item) => (
            <article className="chapter" key={item.no}>
              <Reveal>
                <p className="chapterIndex">{item.no}</p>
                <h3>{item.title}</h3>
                <p className="chapterCopy">{item.body}</p>
                <p className="chapterDetail">{item.detail}</p>
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

      <section className="context panel">
        <Reveal>
          <p className="kicker">Usage context</p>
          <h4>
            COUCH.
            <br />
            COMMUTE.
            <br />
            COMMAND + K.
          </h4>
          <p>
            Built for calibrated TV nights, fast train playback, and keyboard-native control from your desk.
          </p>
        </Reveal>
      </section>

      <section id="community" className="community panelCompact">
        <Reveal>
          <p className="kicker">Community layer</p>
          <p>Open-source. Jellyfin-native. Built in public with developers, self-hosters, and media people.</p>
        </Reveal>
      </section>

      <footer className="closing panel">
        <Reveal>
          <p className="kicker">Streamyfin</p>
          <h5>THE CINEMATIC CLIENT.</h5>
          <p className="closingSub">Designed to be felt. Built to be trusted.</p>
          <a className="cta" href="#top">
            Request early access
          </a>
        </Reveal>
      </footer>
    </main>
  );
}
