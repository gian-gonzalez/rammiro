import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Instagram, Menu, MessageCircle, X } from "lucide-react";
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
    <main className="bg-background text-foreground">
      <header className="sticky inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b-2 border-foreground bg-background px-4 md:h-20 md:px-10">
        <button onClick={() => jump("inicio")} className="font-display text-2xl font-black uppercase leading-none text-foreground md:text-3xl" aria-label="Ir al inicio">Rammiro</button>
        <nav className="hidden items-center gap-8 text-xs font-bold uppercase md:flex">
          <button onClick={() => jump("obras")} className="nav-link">Obras</button>
          <button onClick={() => jump("manifiesto")} className="nav-link">Perfil</button>
          <button onClick={() => jump("contacto")} className="nav-link">Contacto</button>
        </nav>
        <Button variant="ghost" size="icon" className="rounded-none md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú">
          {menuOpen ? <X /> : <Menu />}
        </Button>
        {menuOpen && <nav className="absolute left-0 top-16 flex w-full flex-col border-b-2 border-foreground bg-background px-5 py-5 font-display text-2xl font-bold uppercase md:hidden">
          <button className="py-3 text-left" onClick={() => jump("obras")}>OBRAS</button>
          <button className="py-3 text-left" onClick={() => jump("manifiesto")}>PERFIL</button>
          <button className="py-3 text-left" onClick={() => jump("contacto")}>CONTACTO</button>
        </nav>}
      </header>

      <section id="inicio" className="mx-auto max-w-[1500px] px-4 pt-10 md:px-10 md:pt-16">
        <div className="flex items-end justify-between gap-8 border-b-4 border-foreground pb-7">
          <div>
            <p className="mb-4 text-xs font-bold uppercase">Volumen 01 / Portfolio</p>
            <h1 className="font-display text-[clamp(4rem,13vw,12rem)] font-black uppercase leading-[.78]">Rammiro</h1>
          </div>
          <div className="hidden h-28 w-28 shrink-0 bg-foreground md:block" aria-hidden="true" />
        </div>
        <div className="grid grid-cols-2 border-x-4 border-b-4 border-foreground">
          <p className="border-r-2 border-foreground p-4 text-xs font-bold uppercase md:p-5">Pintura contemporánea</p>
          <p className="p-4 text-xs font-bold uppercase md:p-5">Mar del Plata / ARG</p>
        </div>
      </section>

      <section id="obras" className="mx-auto max-w-[1500px] px-4 py-20 md:px-10 md:py-28">
        <div className="mb-6 flex items-end justify-between border-b-2 border-foreground pb-3">
          <h2 className="font-display text-4xl font-black uppercase md:text-6xl">Obras</h2>
          <span className="text-xs font-bold uppercase">Archivo 01—17</span>
        </div>
        <div className="grid grid-cols-2 border-l-2 border-t-2 border-foreground md:grid-cols-3 lg:grid-cols-4">
          {artworks.map((art, index) => (
            <button key={art.src} onClick={() => setSelected(index)} className="group min-w-0 border-b-2 border-r-2 border-foreground bg-background text-left">
              <div className="relative aspect-square overflow-hidden bg-muted p-3 md:p-5">
                <img src={art.src} alt={`Obra ${art.title} de RAMMIRO`} loading={index < 4 ? "eager" : "lazy"} className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.02]" />
                <span className="absolute left-0 top-0 bg-foreground px-2 py-1 text-[10px] font-bold text-background">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="min-h-24 border-t-2 border-foreground p-3 md:min-h-28 md:p-4">
                <h3 className="break-words font-display text-sm font-bold uppercase leading-tight md:text-base">{art.title}</h3>
                <div className="mt-2 flex flex-wrap gap-x-3 text-[10px] uppercase text-muted-foreground">
                  {art.size && <span>{art.size}</span>}{art.price && <span>{art.price}</span>}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section id="manifiesto" className="border-y-4 border-foreground bg-foreground text-background">
        <div className="mx-auto grid max-w-[1500px] md:grid-cols-[1fr_2fr]">
          <div className="border-b-2 border-background p-5 md:border-b-0 md:border-r-2 md:p-10">
            <p className="text-xs font-bold uppercase">Perfil / 001</p>
          </div>
          <div className="p-5 md:p-10">
            <p className="max-w-4xl font-display text-4xl font-black uppercase leading-[.95] md:text-7xl">Pinto lo que veo cuando nadie está mirando.</p>
            <div className="mt-12 grid gap-6 border-t border-background pt-6 text-sm md:grid-cols-2">
              <p>La calle, el mar, los cuerpos y las palabras aparecen sin pedir permiso.</p>
              <p>Cada obra es una escena, una sensación, un fragmento que se niega a desaparecer.</p>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacto" className="mx-auto max-w-[1500px] px-4 py-16 md:px-10 md:py-24">
        <p className="text-xs font-bold uppercase">Obras disponibles / Consultas</p>
        <h2 className="mt-5 max-w-5xl font-display text-5xl font-black uppercase leading-[.9] md:text-8xl">Hablemos de arte.</h2>
        <div className="mt-10 flex flex-col gap-2 sm:flex-row">
          <Button asChild size="lg" className="h-14 rounded-none px-7 text-base"><a href="https://wa.me/542236001188" target="_blank" rel="noreferrer"><MessageCircle /> WhatsApp</a></Button>
          <Button asChild variant="outline" size="lg" className="h-14 rounded-none border-foreground px-7 text-base"><a href="https://instagram.com/rammiro" target="_blank" rel="noreferrer"><Instagram /> @rammiro</a></Button>
        </div>
        <div className="mt-20 flex items-end justify-between border-t-2 border-foreground pt-4 text-xs font-bold uppercase"><span>RAMMIRO © 2026</span><span>MDP — ARG</span></div>
      </footer>

      {selected !== null && artworks[selected] && <Lightbox artwork={artworks[selected]} index={selected} onClose={() => setSelected(null)} onMove={(step) => setSelected((selected + step + artworks.length) % artworks.length)} />}
    </main>
  );
}

function Lightbox({ artwork, index, onClose, onMove }: { artwork: Artwork; index: number; onClose: () => void; onMove: (step: number) => void }) {
  const navButton = "h-12 w-12 rounded-none border-background/50 bg-foreground text-background hover:bg-background hover:text-foreground md:h-10 md:w-10";
  return <div className="fixed inset-0 z-50 flex h-[100dvh] flex-col bg-foreground text-background md:grid md:grid-cols-[1fr_340px]" role="dialog" aria-modal="true" aria-label={artwork.title}>
    <div className="flex shrink-0 items-center justify-between border-b border-background/20 px-4 py-2 md:hidden">
      <p className="text-xs text-background/50">{String(index + 1).padStart(2, "0")} / {artworks.length}</p>
      <Button variant="ghost" size="icon" onClick={onClose} className="h-12 w-12 rounded-none text-background hover:bg-background hover:text-foreground" aria-label="Cerrar"><X className="size-6" /></Button>
    </div>
    <div className="relative flex min-h-0 flex-1 items-center justify-center p-4 md:p-10">
      <img src={artwork.src} alt={artwork.title} className="max-h-full max-w-full object-contain md:max-h-[90vh]" />
      <div className="absolute bottom-10 left-10 hidden gap-2 md:flex">
        <Button variant="outline" size="icon" onClick={() => onMove(-1)} className={navButton} aria-label="Obra anterior"><ArrowLeft /></Button>
        <Button variant="outline" size="icon" onClick={() => onMove(1)} className={navButton} aria-label="Obra siguiente"><ArrowRight /></Button>
      </div>
    </div>
    <aside className="relative max-h-[45dvh] shrink-0 overflow-y-auto border-t border-paper/20 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] md:max-h-none md:border-l md:border-t-0 md:p-8">
      <Button variant="ghost" size="icon" onClick={onClose} className="absolute right-5 top-5 hidden rounded-none text-background hover:bg-background hover:text-foreground md:inline-flex" aria-label="Cerrar"><X /></Button>
      <p className="hidden text-xs text-background/50 md:block">{String(index + 1).padStart(2, "0")} / {artworks.length}</p>
      <div className="flex items-start justify-between gap-4 md:block">
        <div className="min-w-0">
          <h2 className="break-words font-display text-2xl font-black uppercase leading-none md:mt-14 md:text-5xl">{artwork.title}</h2>
          {(artwork.size || artwork.price) && <div className="mt-2 flex flex-wrap gap-x-3 text-xs md:mt-8 md:block md:space-y-2 md:border-t md:border-background/30 md:pt-5 md:text-sm">
            {artwork.size && <p>{artwork.size}</p>}
            {artwork.price && <p>{artwork.price}</p>}
          </div>}
        </div>
        <div className="flex shrink-0 gap-2 md:hidden">
          <Button variant="outline" size="icon" onClick={() => onMove(-1)} className={navButton} aria-label="Obra anterior"><ArrowLeft /></Button>
          <Button variant="outline" size="icon" onClick={() => onMove(1)} className={navButton} aria-label="Obra siguiente"><ArrowRight /></Button>
        </div>
      </div>
      <Button asChild className="mt-4 h-12 w-full rounded-none bg-background text-foreground hover:bg-background/85 md:mt-8 md:h-9"><a href={`https://wa.me/542236001188?text=${encodeURIComponent(`Hola, consulto por la obra “${artwork.title}”`)}`} target="_blank" rel="noreferrer">Consultar obra</a></Button>
    </aside>
  </div>;
}
