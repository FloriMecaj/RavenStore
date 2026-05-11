"use client";

import { ExternalLink, Instagram, Phone } from "lucide-react";
import { site } from "@/lib/data";
import { Button } from "@/components/ui/button";

const googleMapsUrl =
  "https://www.google.com/maps?q=Raven+Store,+Rruga+Pjet%C3%ABr+Bogdani,+Tiran%C3%AB+1015&ftid=0x13503159ad7e7633:0xaa786da45df6d6e5&entry=gps&lucs=,47071704,47069508,94218641,94203019,47084304,94208458,94208447&g_ep=CAISEjI1LjE5LjEuNzU0OTg3NTEyMBgAINeCAyo_LDQ3MDcxNzA0LDQ3MDY5NTA4LDk0MjE4NjQxLDk0MjAzMDE5LDQ3MDg0MzA0LDk0MjA4NDU4LDk0MjA4NDQ3QgJBTA%3D%3D&skid=e6281b04-f443-487b-acaf-af2166901d84&g_st=ic";

export function ContactPageClient() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-16 md:px-8">
      <div className="space-y-6">
        <div className="rounded-[2rem] border border-[var(--border-subtle)] bg-mist p-8">
          <p className="text-sm uppercase tracking-[0.32em] text-[var(--text-muted)]">Contact</p>
          <h1 className="mt-4 font-cinzel text-4xl uppercase tracking-[0.12em] text-white">Visit the shop</h1>
          <p className="mt-4 max-w-md text-sm leading-7 text-[var(--text-muted)]">{site.address}</p>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-[var(--border-subtle)]">
          <iframe
            title="Raven Store location"
            src="https://www.google.com/maps?q=Raven+Store,+Rruga+Pjet%C3%ABr+Bogdani,+Tiran%C3%AB+1015&z=17&output=embed"
            className="h-[320px] w-full"
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
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-[2rem] border border-[var(--border-subtle)] p-8 transition-transform hover:-translate-y-1"
          >
            <Instagram className="text-[var(--accent-crimson)]" />
            <p className="mt-4 font-cinzel text-xl text-white">Instagram</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">@ravenstore.al</p>
          </a>
          <a href={`tel:${site.phone}`} className="rounded-[2rem] border border-[var(--border-subtle)] p-8 transition-transform hover:-translate-y-1">
            <Phone className="text-[var(--accent-crimson)]" />
            <p className="mt-4 font-cinzel text-xl text-white">Phone</p>
            <p className="mt-2 text-sm text-[var(--text-muted)]">{site.phone}</p>
          </a>
        </div>
      </div>
    </div>
  );
}
