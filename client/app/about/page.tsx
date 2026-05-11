import { ExternalLink, MapPin, Phone, Star } from "lucide-react";
import { CountUp } from "@/components/CountUp";
import { ReviewCard } from "@/components/ReviewCard";
import { reviews, site } from "@/lib/data";
import { Button } from "@/components/ui/button";

const googleMapsUrl =
  "https://www.google.com/maps?q=Raven+Store,+Rruga+Pjet%C3%ABr+Bogdani,+Tiran%C3%AB+1015&ftid=0x13503159ad7e7633:0xaa786da45df6d6e5&entry=gps&lucs=,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjE5LjEuNzU0OTg3NTEyMBgAINeCAyo_LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0LDk0MjA4NDU4LDk0MjA4NDQ3QgJBTA%3D%3D&skid=e6281b04-f443-487b-acaf-af2166901d84&g_st=ic";

export const metadata = {
  title: "About",
  description: "The story behind Raven Store, its community, and its atmosphere."
};

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-[var(--border-subtle)]">
        <div className="hero-fog absolute inset-0" />
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
          <p className="text-sm uppercase tracking-[0.32em] text-[var(--text-muted)]">A little gem in Tirana</p>
          <h1 className="mt-4 max-w-4xl font-cinzel text-4xl uppercase tracking-[0.12em] text-white md:text-6xl">
            A hidden stop for anime lovers, jewelry collectors, and night café regulars.
          </h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] border border-[var(--border-subtle)] p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">Rating</p>
            <p className="mt-3 font-cinzel text-5xl text-white"><CountUp value={4.9} suffix="★" decimals={1} /></p>
          </div>
          <div className="rounded-[2rem] border border-[var(--border-subtle)] p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">Reviews</p>
            <p className="mt-3 font-cinzel text-5xl text-white"><CountUp value={287} suffix="+" /></p>
          </div>
          <div className="rounded-[2rem] border border-[var(--border-subtle)] p-8">
            <p className="text-sm uppercase tracking-[0.24em] text-[var(--text-muted)]">Happy Customers</p>
            <p className="mt-3 font-cinzel text-5xl text-white"><CountUp value={500} suffix="+" /></p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6 rounded-[2rem] border border-[var(--border-subtle)] p-8">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-[var(--accent-crimson)]" />
              <div>
                <p className="font-cinzel text-xl text-white">Find Raven Store</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">{site.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-[var(--accent-crimson)]" />
              <div>
                <p className="font-cinzel text-xl text-white">Call</p>
                <a href={`tel:${site.phone}`} className="mt-2 block text-sm leading-7 text-[var(--text-muted)] hover:text-white">
                  {site.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Star className="mt-1 text-[var(--accent-crimson)]" />
              <div>
                <p className="font-cinzel text-xl text-white">Atmosphere</p>
                <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
                  Jewelry, café comfort, and anime mood without breaking the illusion.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--border-subtle)]">
              <iframe
                title="Raven Store map"
                src="https://www.google.com/maps?q=Raven+Store,+Rruga+Pjet%C3%ABr+Bogdani,+Tiran%C3%AB+1015&z=17&output=embed"
                className="h-[420px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div>
              <Button asChild variant="secondary">
                <a href={googleMapsUrl} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} />
                  Open in Google Maps
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
