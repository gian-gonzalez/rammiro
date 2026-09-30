import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, Instagram, Menu, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import obra02 from "@/assets/art/obra-02.jpg.asset.json";
import obra03 from "@/assets/art/obra-03.jpg.asset.json";
import obra04 from "@/assets/art/obra-04.jpg.asset.json";
import obra05 from "@/assets/art/obra-05.jpg.asset.json";
import obra06 from "@/assets/art/obra-06.jpg.asset.json";
import obra07 from "@/assets/art/obra-07.jpg.asset.json";
import obra08 from "@/assets/art/obra-08.jpg.asset.json";
import obra09 from "@/assets/art/obra-09.jpg.asset.json";
import obra10 from "@/assets/art/obra-10.jpg.asset.json";
import obra11 from "@/assets/art/obra-11.jpg.asset.json";
import obra12 from "@/assets/art/obra-12.jpg.asset.json";
import obra13 from "@/assets/art/obra-13.jpg.asset.json";
import obra14 from "@/assets/art/obra-14.jpg.asset.json";
import obra15 from "@/assets/art/obra-15.jpg.asset.json";
import obra16 from "@/assets/art/obra-16.jpg.asset.json";
import obra17 from "@/assets/art/obra-17.jpg.asset.json";
import obra18 from "@/assets/art/obra-18.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RAMMIRO — Obra original" },
      { name: "description", content: "Portfolio de RAMMIRO: pintura contemporánea nacida entre Mar del Plata y la calle." },
      { property: "og:title", content: "RAMMIRO — Obra original" },
      { property: "og:description", content: "Pintura contemporánea nacida entre Mar del Plata y la calle." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type Artwork = { src: string; title: string; size?: string; price?: string; wide?: boolean };

const artworks: Artwork[] = [
  { src: obra02.url, title: "Life", size: "80 × 118 cm", price: "$500.000" },
  { src: obra03.url, title: "Sin título", price: "$300.000" },
  { src: obra04.url, title: "Playa", size: "60 × 90 cm", price: "$400.000" },
  { src: obra05.url, title: "Mientras miro las nuevas olas", wide: true },
  { src: obra06.url, title: "Viajando" },
  { src: obra07.url, title: "Mar del Plata — Abril", size: "80 × 120 cm", price: "$500.000" },
  { src: obra08.url, title: "En la madrugada. Corpiños", wide: true },
  { src: obra09.url, title: "Todo es suave junto al mar", wide: true },
  { src: obra10.url, title: "Mejor no hablar" },
  { src: obra11.url, title: "Antes de las 8", price: "$300.000", wide: true },
  { src: obra12.url, title: "La fuente" },
  { src: obra13.url, title: "Sin título II" },
  { src: obra14.url, title: "Lay" },
  { src: obra15.url, title: "Mural", size: "154 × 154 cm", price: "$800.000", wide: true },
  { src: obra16.url, title: "Sin título III" },
  { src: obra17.url, title: "Bueno verte" },
  { src: obra18.url, title: "Sin título IV" },
];

function Index() {
  const [selected, setSelected] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = selected === null ? "" : "hidden";
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (selected === null) return;
      if (event.key === "Escape") setSelected(null);
      if (event.key === "ArrowRight") setSelected((selected + 1) % artworks.length);
      if (event.key === "ArrowLeft") setSelected((selected - 1 + artworks.length) % artworks.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected]);

  const jump = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 flex h-20 items-center justify-between border-b border-foreground/15 bg-background/90 px-5 backdrop-blur-md md:px-10">
        <button onClick={() => jump("inicio")} className="font-display text-3xl leading-none text-foreground" aria-label="Ir al inicio">RAMMIRO<span className="text-signal">*</span></button>
        <nav className="hidden items-center gap-9 text-xs font-bold uppercase md:flex">
          <button onClick={() => jump("obras")} className="nav-link">Obras</button>
          <button onClick={() => jump("manifiesto")} className="nav-link">Manifiesto</button>
          <button onClick={() => jump("contacto")} className="nav-link">Contacto</button>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          {menuOpen ? <X /> : <Menu />}
        </Button>
        {menuOpen && <nav className="absolute left-0 top-20 flex w-full flex-col border-b border-foreground bg-background px-6 py-7 text-2xl font-display md:hidden">
          <button className="py-3 text-left" onClick={() => jump("obras")}>OBRAS</button>
          <button className="py-3 text-left" onClick={() => jump("manifiesto")}>MANIFIESTO</button>
          <button className="py-3 text-left" onClick={() => jump("contacto")}>CONTACTO</button>
        </nav>}
      </header>

      <section id="inicio" className="relative flex min-h-[92svh] flex-col justify-end border-b border-foreground px-5 pb-10 pt-28 md:px-10 md:pb-14">
        <div aria-hidden="true" className="scribble scribble-one">×</div>
        <div aria-hidden="true" className="scribble scribble-two">//</div>
        <p className="mb-5 max-w-sm text-sm uppercase leading-relaxed text-muted-foreground md:ml-[51%]">Pintura contemporánea<br />Mar del Plata, Argentina</p>
        <h1 className="font-display text-[clamp(5rem,19vw,17rem)] leading-[.72]">RAMMIRO</h1>
        <div className="mt-7 flex items-end justify-between gap-6">
          <p className="max-w-xl text-xl leading-snug md:text-3xl">Crónicas visuales del mar, la noche y todo lo que sucede en el medio.</p>
          <Button variant="outline" size="icon" className="h-12 w-12 shrink-0 rounded-full border-foreground bg-transparent" onClick={() => jump("obras")} aria-label="Ver obras"><ArrowDown /></Button>
        </div>
      </section>

      <section id="obras" className="px-5 py-24 md:px-10 md:py-32">
        <div className="mb-14 flex items-end justify-between border-b border-foreground pb-4">
          <h2 className="font-display text-5xl md:text-8xl">OBRAS</h2>
          <span className="text-xs font-bold">01—17 / 2026</span>
        </div>
        <div className="art-grid">
          {artworks.map((art, index) => (
            <button key={art.src} onClick={() => setSelected(index)} className={`group artwork text-left ${art.wide ? "artwork-wide" : ""}`}>
              <div className="relative overflow-hidden bg-muted">
                <img src={art.src} alt={`Obra ${art.title} de RAMMIRO`} loading={index < 4 ? "eager" : "lazy"} className="w-full transition duration-700 group-hover:scale-[1.025]" />
                <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-signal text-sm font-black text-signal-foreground opacity-0 transition group-hover:opacity-100">↗</span>
              </div>
              <div className="mt-3 flex items-start justify-between gap-4 border-t border-foreground/60 pt-2">
                <div><h3 className="text-sm font-black uppercase">{art.title}</h3>{art.size && <p className="mt-1 text-xs text-muted-foreground">{art.size}</p>}</div>
                <span className="text-xs tabular-nums">{String(index + 1).padStart(2, "0")}</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="manifiesto" className="relative border-y border-foreground bg-ink px-5 py-24 text-paper md:px-10 md:py-36">
        <span className="absolute right-[8%] top-8 rotate-6 font-display text-8xl text-signal md:text-[12rem]">*</span>
        <p className="mb-10 text-xs font-bold uppercase text-paper/60">Manifiesto / 001</p>
        <p className="max-w-6xl font-display text-5xl leading-[.94] md:text-8xl lg:text-9xl">PINTO LO QUE VEO CUANDO NADIE ESTÁ MIRANDO.</p>
        <div className="mt-16 grid gap-8 border-t border-paper/30 pt-7 text-lg md:grid-cols-3">
          <p>La calle, el mar, los cuerpos y las palabras aparecen sin pedir permiso.</p>
          <p>Cada obra es un registro: una escena, una sensación, un fragmento que se niega a desaparecer.</p>
          <p className="font-display text-3xl text-signal">MAR DEL PLATA<br />↘ ARGENTINA</p>
        </div>
      </section>

      <footer id="contacto" className="px-5 py-20 md:px-10 md:py-28">
        <p className="text-xs font-bold uppercase text-muted-foreground">Obras disponibles / Consultas</p>
        <h2 className="mt-5 max-w-5xl font-display text-6xl leading-[.9] md:text-9xl">¿HABLAMOS DE ARTE?</h2>
        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="h-14 rounded-none px-7 text-base"><a href="https://wa.me/542236001188" target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button>
          <Button asChild variant="outline" size="lg" className="h-14 rounded-none border-foreground px-7 text-base"><a href="https://instagram.com/rammiro" target="_blank" rel="noreferrer"><Instagram /> @rammiro</a></Button>
        </div>
        <div className="mt-24 flex items-end justify-between border-t border-foreground pt-5 text-xs font-bold uppercase"><span>RAMMIRO © 2026</span><span>MDP — ARG</span></div>
      </footer>

      {selected !== null && artworks[selected] && <Lightbox artwork={artworks[selected]} index={selected} onClose={() => setSelected(null)} onMove={(step) => setSelected((selected + step + artworks.length) % artworks.length)} />}
    </main>
  );
}

function Lightbox({ artwork, index, onClose, onMove }: { artwork: Artwork; index: number; onClose: () => void; onMove: (step: number) => void }) {
  return <div className="fixed inset-0 z-50 grid bg-ink text-paper md:grid-cols-[1fr_340px]" role="dialog" aria-modal="true" aria-label={artwork.title}>
    <div className="relative flex min-h-0 items-center justify-center p-5 md:p-10">
      <img src={artwork.src} alt={artwork.title} className="max-h-[72vh] max-w-full object-contain md:max-h-[90vh]" />
      <Button variant="outline" size="icon" onClick={() => onMove(-1)} className="absolute bottom-5 left-5 rounded-full border-paper/50 bg-ink text-paper hover:bg-paper hover:text-ink md:bottom-10 md:left-10" aria-label="Obra anterior"><ArrowLeft /></Button>
      <Button variant="outline" size="icon" onClick={() => onMove(1)} className="absolute bottom-5 left-17 rounded-full border-paper/50 bg-ink text-paper hover:bg-paper hover:text-ink md:bottom-10 md:left-22" aria-label="Obra siguiente"><ArrowRight /></Button>
    </div>
    <aside className="relative border-t border-paper/20 p-6 md:border-l md:border-t-0 md:p-8">
      <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-5 top-5 text-paper hover:bg-paper hover:text-ink" aria-label="Cerrar"><X /></Button>
      <p className="text-xs text-paper/50">{String(index + 1).padStart(2, "0")} / {artworks.length}</p>
      <h2 className="mt-14 font-display text-5xl uppercase leading-none">{artwork.title}</h2>
      <div className="mt-8 space-y-2 border-t border-paper/30 pt-5 text-sm">
        {artwork.size && <p>{artwork.size}</p>}
        {artwork.price && <p className="text-signal">{artwork.price}</p>}
      </div>
      <Button asChild className="mt-8 w-full rounded-none bg-signal text-signal-foreground hover:bg-signal/85"><a href={`https://wa.me/542236001188?text=${encodeURIComponent(`Hola, consulto por la obra “${artwork.title}”`)}`} target="_blank" rel="noreferrer">Consultar obra</a></Button>
    </aside>
  </div>;
}