import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";

const socialPosts = [
  {
    title: "Instagram post example",
    description:
      "Image and text combinations that stop the scroll and drive engagement.",
  },
  {
    title: "LinkedIn update sample",
    description:
      "Authoritative and informative content tailored for a professional audience.",
  },
  {
    title: "Twitter/X ad snippet",
    description:
      "Short, punchy copy designed to capture attention and spark conversation.",
  },
  {
    title: "Facebook promotion idea",
    description:
      "Compelling ad copy paired with eye-catching visuals for higher conversion.",
  },
];

export default function ShowcasePage() {
  return (
    <div className="bg-[#050505] pt-24 text-white">
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-16 text-center">
        <span className="text-xs uppercase tracking-[0.35em] text-white/50">
          Showcase
        </span>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Crafted by AI, perfected for your brand.
        </h1>
        <p className="mx-auto max-w-2xl text-base text-white/70">
          Explore real, unedited-style examples of the kinds of social posts, emails, ads, and landing page copy Ad Forge can generate for your brand.
        </p>
      </section>

      <section className="mx-auto max-w-5xl space-y-6 px-6 pb-16">
        <div className="flex flex-wrap justify-center gap-3 text-xs font-medium uppercase tracking-[0.25em] text-white/60">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2">
            Social Posts
          </span>
          <span className="rounded-full border border-white/10 px-4 py-2">
            Email Campaigns
          </span>
          <span className="rounded-full border border-white/10 px-4 py-2">
            Ad Variants
          </span>
          <span className="rounded-full border border-white/10 px-4 py-2">
            Landing Pages
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {socialPosts.map((post) => (
            <div
              key={post.title}
              className="flex h-full flex-col justify-between gap-4 rounded-3xl border border-white/10 bg-black/40 p-8"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {post.description}
                </p>
              </div>
              <div className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-4 text-xs uppercase tracking-[0.3em] text-white/40">
                Visual concept preview
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 pb-24 text-left">
        <div className="rounded-3xl border border-white/10 bg-black/40 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Email Campaigns
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            AI-generated email sequences for launches, promotions, and lifecycle campaigns, written in your brand voice.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/40 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Ad Variants
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Multiple headline and body variants designed to test different angles, hooks, and offers across paid channels.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-black/40 p-8">
          <h2 className="text-2xl font-semibold text-white">
            Landing Pages
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white/70">
            Above-the-fold hero copy, benefit sections, and CTAs that match your brand kit and speak directly to your ideal customer.
          </p>
        </div>
      </section>

      <section className="border-t border-white/5 bg-black/60 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to forge your brand?
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            Be the first to access Ad Forge and start building a brand that converts.
          </p>
          <ShimmerButton
            asChild
            className="bg-white/90 text-black hover:text-white hover:[background:rgba(255,255,255,0.2)]"
          >
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center"
            >
              <span className="text-sm font-medium tracking-tight">
                Join the waitlist
              </span>
            </Link>
          </ShimmerButton>
        </div>
      </section>
    </div>
  );
}
