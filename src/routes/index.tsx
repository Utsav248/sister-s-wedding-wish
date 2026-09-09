import { createFileRoute } from "@tanstack/react-router";
import { Heart, X } from "lucide-react";
import { useEffect, useState } from "react";

import heroPhoto from "../assets/sisters-hero.jpg";
import dancePhoto from "../assets/memory-dance.jpg";
import cakePhoto from "../assets/memory-cake.jpg";
import roadtripPhoto from "../assets/memory-roadtrip.jpg";
import fortPhoto from "../assets/memory-fort.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "For My Sister, On Your Wedding Day" },
      {
        name: "description",
        content: "A heartfelt wedding-day letter and scrapbook, sent with love from across the world.",
      },
      { property: "og:title", content: "For My Sister, On Your Wedding Day" },
      {
        property: "og:description",
        content: "A heartfelt wedding-day letter and scrapbook, sent with love from across the world.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const gallery = [
  { src: dancePhoto, alt: "Two sisters dancing together in the kitchen", caption: "Our kitchen dance parties" },
  { src: roadtripPhoto, alt: "Two sisters laughing on a seaside road trip", caption: "The trip with no map" },
  { src: fortPhoto, alt: "Two sisters laughing under a blanket fort", caption: "Still the best hiding place" },
  { src: cakePhoto, alt: "Two sisters laughing over a birthday cake", caption: "Cake first. Always." },
];

const memories = [
  {
    src: dancePhoto,
    title: "The kitchen concert",
    text: "When one song turned into a full tour, complete with wooden-spoon microphones. The neighbors survived.",
  },
  {
    src: roadtripPhoto,
    title: "That tiny wrong turn",
    text: "You said, “I know a shortcut.” Three hours later, we had no signal, two snacks, and the best story.",
  },
  {
    src: fortPhoto,
    title: "Blanket-fort rules",
    text: "No grown-ups, no bedtime, and absolutely no finishing the snacks without saving me some.",
  },
];

function Index() {
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof gallery)[number] | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!selectedPhoto) return;
    const close = (event: KeyboardEvent) => event.key === "Escape" && setSelectedPhoto(null);
    document.body.classList.add("overflow-hidden");
    window.addEventListener("keydown", close);
    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("keydown", close);
    };
  }, [selectedPhoto]);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section className="relative min-h-[92svh] border-b border-border">
        <img
          src={heroPhoto}
          alt="Two sisters sharing a joyful hug at golden hour"
          width={1600}
          height={1200}
          className="absolute inset-0 size-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 bg-hero-wash" />
        <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-end px-5 pb-16 sm:px-10 sm:pb-20 lg:items-center lg:px-16 lg:pb-0">
          <div className="hero-copy max-w-xl animate-fade-in">
            <p className="mb-5 font-body text-xs font-bold uppercase tracking-[0.22em] text-hero-ink/70">
              A little love letter, from far away
            </p>
            <h1 className="font-hand text-5xl leading-[0.98] text-hero-ink sm:text-7xl lg:text-8xl">
              To my favorite sister, on your wedding day
            </h1>
            <p className="mt-7 max-w-md font-body text-lg leading-relaxed text-hero-ink/80 sm:text-xl">
              Sending every bit of my love from across the world.
            </p>
            <div className="mt-8 flex items-center gap-3 font-hand text-2xl text-accent-strong">
              <span className="h-px w-12 bg-accent-strong/50" />
              always with you
              <Heart className="size-5 fill-current" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="paper-texture px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="letter-title">
        <div className="reveal mx-auto max-w-3xl">
          <p className="section-kicker">Open me when you have a quiet minute</p>
          <article className="letter-paper relative mt-10 px-7 py-12 sm:px-16 sm:py-16">
            <span className="tape tape-left" aria-hidden="true" />
            <span className="tape tape-right" aria-hidden="true" />
            <h2 id="letter-title" className="font-hand text-5xl text-accent-strong sm:text-6xl">
              My dearest sister,
            </h2>
            <div className="mt-8 space-y-5 font-body text-[1.05rem] leading-8 text-ink-soft sm:text-lg">
              <p>
                If I could teleport for one day, I would already be there—probably crying before you even walked into the room, fixing something that did not need fixing, and making sure everyone knew I was your sister.
              </p>
              <p>
                I hate that there are oceans between us today. But distance has never made you feel far away. You are in every ridiculous story I tell, every song I turn up too loudly, and every moment when I need someone who understands me without an explanation.
              </p>
              <p>
                I am so proud of the woman you are: brave, generous, wildly funny, and somehow still willing to answer my calls. Watching you find someone who sees all that goodness in you—and loves you for every bit of it—is such a beautiful thing.
              </p>
              <p>
                So today, carry a little piece of me with you. I will be cheering, happy-crying, and raising a glass from here. I love you more than all the miles between us.
              </p>
            </div>
            <p className="mt-10 rotate-[-2deg] font-hand text-3xl leading-tight text-foreground">
              Your forever partner in chaos,
              <br />
              me xx
            </p>
          </article>
        </div>
      </section>

      <section className="bg-table px-4 py-24 sm:px-8 sm:py-32" aria-labelledby="gallery-title">
        <div className="mx-auto max-w-6xl">
          <div className="reveal text-center">
            <p className="section-kicker">A handful of us</p>
            <h2 id="gallery-title" className="mt-3 font-hand text-6xl sm:text-7xl">The good old days</h2>
            <p className="mt-3 font-body text-sm text-muted-foreground">Tap a photo to hold it closer.</p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 sm:mt-20 sm:gap-10 lg:grid-cols-4">
            {gallery.map((photo, index) => (
              <button
                key={photo.caption}
                type="button"
                onClick={() => setSelectedPhoto(photo)}
                className={`reveal polaroid polaroid-${index + 1} group cursor-zoom-in text-left`}
                aria-label={`View ${photo.caption}`}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" width={1000} height={1000} className="aspect-square w-full object-cover" />
                <span className="block px-1 pb-1 pt-3 text-center font-hand text-xl text-foreground sm:text-2xl">{photo.caption}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-texture px-5 py-24 sm:px-8 sm:py-32" aria-labelledby="memories-title">
        <div className="mx-auto max-w-5xl">
          <div className="reveal max-w-xl">
            <p className="section-kicker text-left">Things I will never let you forget</p>
            <h2 id="memories-title" className="mt-3 font-hand text-6xl leading-none sm:text-7xl">Our little stories</h2>
          </div>
          <div className="mt-14 divide-y divide-border border-y border-border">
            {memories.map((memory, index) => (
              <article key={memory.title} className="reveal grid gap-6 py-8 sm:grid-cols-[9rem_1fr] sm:items-center sm:gap-10">
                <img
                  src={memory.src}
                  alt=""
                  loading="lazy"
                  width={1000}
                  height={1000}
                  className={`aspect-[4/3] w-full object-cover shadow-photo sm:aspect-square ${index === 1 ? "sm:rotate-2" : "sm:-rotate-2"}`}
                />
                <div>
                  <p className="font-hand text-3xl text-accent-strong">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 font-hand text-4xl text-foreground">{memory.title}</h3>
                  <p className="mt-3 max-w-2xl font-body leading-7 text-ink-soft">{memory.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative bg-footer px-5 py-24 text-center text-footer-foreground sm:py-32">
        <div className="reveal mx-auto max-w-3xl">
          <Heart className="mx-auto size-7 fill-current text-footer-accent" aria-hidden="true" />
          <p className="mt-7 font-hand text-5xl leading-tight sm:text-7xl">Can’t wait to hug you both.</p>
          <p className="mt-4 font-hand text-3xl text-footer-accent sm:text-4xl">Have a slice of cake for me!</p>
          <p className="mt-12 font-body text-xs uppercase tracking-[0.2em] text-footer-foreground/60">Made with all my love · from far away</p>
        </div>
      </footer>

      {selectedPhoto && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-modal-backdrop p-5" role="dialog" aria-modal="true" aria-label={selectedPhoto.caption} onClick={() => setSelectedPhoto(null)}>
          <button type="button" onClick={() => setSelectedPhoto(null)} className="absolute right-5 top-5 grid size-11 place-items-center rounded-full bg-background text-foreground shadow-photo" aria-label="Close photo">
            <X className="size-5" aria-hidden="true" />
          </button>
          <figure className="modal-photo max-w-3xl bg-card p-3 pb-6 shadow-photo sm:p-5 sm:pb-8" onClick={(event) => event.stopPropagation()}>
            <img src={selectedPhoto.src} alt={selectedPhoto.alt} width={1000} height={1000} className="max-h-[72svh] w-full object-contain" />
            <figcaption className="pt-4 text-center font-hand text-3xl text-foreground">{selectedPhoto.caption}</figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}