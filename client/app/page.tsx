import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ChevronDown,
  Coffee,
  Gem,
  MapPin,
  MoonStar,
  Sparkles,
  Star,
} from "lucide-react";
import { ParticleField } from "@/components/ParticleField";
import { ProductCard } from "@/components/ProductCard";
import { ReviewCard } from "@/components/ReviewCard";
import { CountUp } from "@/components/CountUp";
import { fallbackGallery, menu, products, reviews, site } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata = {
  title: "Home",
  description: "Anime jewelry and café atmosphere in a crimson gothic world.",
};

export default function HomePage() {
  const featuredProducts = products.slice(0, 3);
  const galleryPreview = fallbackGallery.slice(0, 4);
  const menuPreview = [
    menu.cocktails[0],
    menu.hotDrinks[0],
    menu.desserts[0],
    menu.snacks[0],
  ];

  return (
    <div>
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[48%] md:block">
          <Image
            src="/images/image1.jpg"
            alt="Raven Store jewelry background"
            fill
            priority
            className="object-cover object-center opacity-20 mix-blend-screen"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,4,5,1)_0%,rgba(10,4,5,0.92)_22%,rgba(10,4,5,0.55)_52%,rgba(10,4,5,0.14)_78%,rgba(10,4,5,0)_100%)]" />
          <div className="absolute inset-y-0 left-0 w-32 bg-[radial-gradient(circle_at_left,rgba(10,4,5,0.95),rgba(10,4,5,0)_72%)] blur-2xl" />
          <div className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(180deg,rgba(10,4,5,0)_0%,rgba(10,4,5,0.78)_68%,rgba(10,4,5,1)_100%)] blur-xl" />
        </div>
        <div className="hero-fog absolute inset-0" />
        <ParticleField />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-7xl flex-col justify-center px-5 py-20 md:px-8">
          <div className="max-w-4xl">
            <Badge
              variant="outline"
              className="mb-8 gap-3 px-4 py-2 tracking-[0.3em]"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--accent-crimson)] shadow-glow" />
              4.9 / 5 on Google · 287 reviews
            </Badge>
            <h1 className="glitch font-cinzel text-5xl uppercase leading-none tracking-[0.16em] text-white md:text-8xl">
              RAVEN STORE
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--text-muted)] md:text-xl">
              Anime Jewelry & Café · Tirana, Albania. A midnight coffee, and
              cinematic calm.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/shop">
                  <Gem size={16} />
                  Explore Jewelry
                </Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href="/cafe">
                  <Coffee size={16} />
                  Visit the Café
                </Link>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 text-sm uppercase tracking-[0.22em] text-[var(--text-muted)] md:grid-cols-3">
              <p>{site.address}</p>
              <p>{site.hours}</p>
              <p>{site.priceRange}</p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[var(--accent-crimson)]">
          <ChevronDown />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-[var(--border-subtle)] bg-mist p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
              Why it feels alive
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {[
                {
                  icon: Sparkles,
                  title: "Curated drops",
                  text: "Jewelry, shirts, stickers, and small relics that feel selected, not mass-posted.",
                },
                {
                  icon: MoonStar,
                  title: "Late café mood",
                  text: "Desserts, coffee, and red-light atmosphere built for slow nights and long conversations.",
                },
                {
                  icon: MapPin,
                  title: "Real place, real scene",
                  text: "A little gem in Tirana with regulars, event nights, and a recognizable visual identity.",
                },
              ].map(({ icon: Icon, title, text }) => (
                <Card key={title} className="rounded-[1.5rem] p-5">
                  <Icon className="text-[var(--accent-crimson)]" size={18} />
                  <p className="mt-4 font-cinzel text-lg text-white">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                    {text}
                  </p>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            <Card className="p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">
                Rating
              </p>
              <p className="mt-3 font-cinzel text-5xl text-white">
                <CountUp value={4.9} decimals={1} suffix="★" />
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">
                Reviews
              </p>
              <p className="mt-3 font-cinzel text-5xl text-white">
                <CountUp value={287} suffix="+" />
              </p>
            </Card>
            <Card className="p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">
                Night energy
              </p>
              <p className="mt-3 font-cinzel text-3xl text-white">
                Open until 11 PM
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
              Featured products
            </p>
            <h2 className="mt-3 font-cinzel text-3xl uppercase tracking-[0.12em] text-white md:text-5xl">
              Pieces with actual presence
            </h2>
          </div>
          <Link
            href="/shop"
            className="hidden items-center gap-2 text-sm uppercase tracking-[0.24em] text-[var(--accent-gold)] md:inline-flex"
          >
            View full shop
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative overflow-hidden rounded-[2.25rem] border border-[var(--border-subtle)] min-h-[520px]">
            <Image
              src="/images/food3.jpg"
              alt="Lotus dessert"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,4,5,0.88))]" />
            <div className="absolute inset-x-0 bottom-0 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
                Café spotlight
              </p>
              <h2 className="mt-3 font-cinzel text-3xl uppercase tracking-[0.12em] text-white">
                Dessert, coffee, and a slower pulse
              </h2>
              <p className="mt-4 max-w-md text-sm leading-7 text-[var(--text-muted)]">
                The café side should feel visible from the first scroll, not
                hidden behind another route.
              </p>
              <Link
                href="/cafe"
                className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.24em] text-[var(--accent-gold)]"
              >
                Open café page
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {menuPreview.map((item) => (
              <Card key={item.name} className="rounded-[1.75rem] p-6">
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent-gold)]">
                  {item.price}
                </p>
                <p className="mt-3 font-cinzel text-xl text-white">
                  {item.name}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="mb-8 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
              Gallery preview
            </p>
            <h2 className="mt-3 font-cinzel text-3xl uppercase tracking-[0.12em] text-white md:text-5xl">
              Frames from the store
            </h2>
          </div>
          <Link
            href="/gallery"
            className="hidden items-center gap-2 text-sm uppercase tracking-[0.24em] text-[var(--accent-gold)] md:inline-flex"
          >
            Open gallery
            <ArrowUpRight size={16} />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {galleryPreview.map((item) => (
            <Link
              key={item.id}
              href="/gallery"
              className="group relative block min-h-[320px] overflow-hidden rounded-[1.75rem] border border-[var(--border-subtle)]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,4,5,0.88))]" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-cinzel text-lg text-white">{item.title}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.24em] text-[var(--text-muted)]">
                  {item.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-16">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
            What people say
          </p>
          <h2 className="mt-3 font-cinzel text-3xl uppercase tracking-[0.12em] text-white md:text-5xl">
            Atmosphere people actually mention
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-20">
        <Card className="rounded-[2.5rem] bg-mist p-8 md:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-muted)]">
                Plan the visit
              </p>
              <h2 className="mt-3 font-cinzel text-3xl uppercase tracking-[0.12em] text-white md:text-5xl">
                More than a hero banner. More like a scene.
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-muted)]">
                Shop the jewelry, stay for dessert, and keep the address saved.
                This page should invite action, not just look dramatic.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="secondary">
                <Link href="/about">
                  <Star size={16} />
                  About Raven
                </Link>
              </Button>
              <Button asChild>
                <Link href="/contact">
                  <MapPin size={16} />
                  Contact & Visit
                </Link>
              </Button>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
