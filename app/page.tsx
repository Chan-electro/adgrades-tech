import Hero from "@/components/ui/neural-network-hero";
import { GlowingEffectDemo } from "@/components/ui/glowing-effect-demo";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-[#050505]">
      <Hero
        badgeLabel="New"
        badgeText="AI-Powered Brand Director"
        title="Your AI-powered brand director. Go from idea to iconic in minutes."
        description="Ad Forge generates logos, color palettes, brand copy, and a complete brand kit so you can move from first idea to launch-ready brand without hiring an agency."
        ctaButtons={[
          {
            text: "Join the waitlist",
            href: "/waitlist",
            primary: true,
          },
          {
            text: "View features",
            href: "/features",
          },
        ]}
        microDetails={[
          "Instant brand foundations",
          "AI + analytics combined",
          "Built for SMBs and creators",
        ]}
      />

      <section className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-24 pt-24 md:pt-32">
        <div className="space-y-4 text-left">
          <p className="text-sm uppercase tracking-[0.2em] text-white/50">
            Build faster
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Build a brand you'll love, instantly
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            Our AI-driven tools streamline the entire branding process, giving you everything you need to launch and grow without getting stuck in design or copy loops.
          </p>
        </div>
        <GlowingEffectDemo />
      </section>

      <section className="relative isolate overflow-hidden border-y border-white/5 bg-black/60 py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <h3 className="text-2xl font-semibold text-white">
            Create a brand you love.
          </h3>
          <ShimmerButton
            asChild
            className="bg-white/90 text-black hover:text-white hover:[background:rgba(255,255,255,0.2)]"
          >
            <Link
              href="/waitlist"
              className="inline-flex items-center justify-center"
            >
              <span className="text-sm font-medium tracking-tight">
                Join the early access waitlist
              </span>
            </Link>
          </ShimmerButton>
        </div>
      </section>
    </div>
  );
}
