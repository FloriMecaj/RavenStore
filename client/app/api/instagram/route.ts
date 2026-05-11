import { NextResponse } from "next/server";
import { fallbackGallery } from "@/lib/data";

type PublicPost = {
  id: string;
  image: string;
  title: string;
};

function classify(title: string) {
  const lower = title.toLowerCase();
  if (lower.includes("coffee") || lower.includes("dessert") || lower.includes("cafe")) return "Cafe" as const;
  if (lower.includes("event") || lower.includes("night")) return "Events" as const;
  return "Products" as const;
}

function extractPublicPosts(html: string): PublicPost[] {
  const matches = [...html.matchAll(/"display_url":"(.*?)".*?"accessibility_caption":"(.*?)"/g)];

  return matches.slice(0, 12).map((match, index) => ({
    id: `ig-${index}`,
    image: match[1].replaceAll("\\u0026", "&").replaceAll("\\/", "/"),
    title: match[2].replaceAll("\\n", " ").slice(0, 90) || `Raven Store post ${index + 1}`
  }));
}

export async function GET() {
  try {
    const response = await fetch("https://www.instagram.com/ravenstore.al/", {
      headers: {
        "User-Agent": "Mozilla/5.0",
        Accept: "text/html"
      },
      cache: "no-store"
    });

    if (!response.ok) throw new Error("Instagram fetch failed");

    const html = await response.text();
    const posts = extractPublicPosts(html);

    if (posts.length === 0) throw new Error("No public posts parsed");

    return NextResponse.json({
      source: "instagram",
      items: posts.map((post) => ({
        id: post.id,
        image: post.image,
        title: post.title,
        category: classify(post.title),
        href: "https://www.instagram.com/ravenstore.al/"
      }))
    });
  } catch {
    return NextResponse.json({
      source: "fallback",
      items: fallbackGallery
    });
  }
}
