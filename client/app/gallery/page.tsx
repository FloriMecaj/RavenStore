import { InstagramGrid } from "@/components/InstagramGrid";
import { fallbackGallery } from "@/lib/data";

export const metadata = {
  title: "Gallery",
  description: "Recent visual drops from Raven Store, from jewelry to café scenes and community nights."
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <div className="mb-12 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.32em] text-[var(--text-muted)]">Visual Archive</p>
        <h1 className="mt-4 font-cinzel text-4xl uppercase tracking-[0.12em] text-white md:text-6xl">Recent frames from the raven feed</h1>
        <p className="mt-5 text-base leading-8 text-[var(--text-muted)]">
          Products, desserts, late-night corners, and event scenes pulled from the public Instagram surface when available.
        </p>
      </div>
      <InstagramGrid fallback={fallbackGallery} />
    </div>
  );
}
