import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";

const metrics = [
  { label: "Time to first brand asset", value: "< 5 minutes" },
  { label: "Campaigns launched in month 1", value: "12+" },
  { label: "Ad spend efficiency", value: "+25%" },
  { label: "Weekly hours saved", value: "8" },
];

const audiences = [
  {
    title: "For DTC Brands",
    description:
      "Launch new campaigns faster, keep your visuals consistent, and test more creative angles without increasing headcount.",
  },
  {
    title: "For Agencies",
    description:
      "Standardize brand kits, speed up asset production, and give your team an AI copilot that still keeps clients at the center.",
  },
  {
    title: "For Creators & Solopreneurs",
    description:
      "Look like a full team is behind you—from your logo and color palette to the social posts that keep your audience engaged.",
  },
];

const benefits = [
  "Unlimited AI asset generation",
  "Brand kit and guideline management",
  "Multi-platform campaign planner",
  "Performance analytics and insights",
  "Team collaboration tools",
];

const perks = [
  "Lock in 50% off for life",
  "Priority early access",
  "1-on-1 onboarding session",
  "Influence our product roadmap",
];

export default function AboutPage() {
  return (
    <div className="bg-[#050505] pt-24 text-white">
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-16 text-center">
        <span className="text-xs uppercase tracking-[0.35em] text-white/50">
          Company
        </span>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Empower your brand with AI.
        </h1>
        <p className="mx-auto max-w-3xl text-base text-white/70">
          Ad Forge is on a mission to democratize brand building for small businesses, SMBs, and creators. Launch faster, create smarter, and grow bigger without needing a full in-house marketing team.
        </p>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-6 pb-24">
        <div className="space-y-4 text-left">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Tangible results, fast
          </h2>
          <p className="max-w-3xl text-base text-white/70">
            See the kinds of outcomes Ad Forge delivers to businesses like yours.
          </p>
          <div className="grid gap-6 md:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-black/40 p-6"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-white/40">
                  {metric.label}
                </p>
                <p className="mt-3 text-2xl font-semibold text-white">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            How Ad Forge works for you
          </h2>
          <p className="max-w-3xl text-base text-white/70">
            Tailored solutions for your specific needs, whether you’re a direct-to-consumer brand, an agency, or a solo creator.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {audiences.map((audience) => (
              <div
                key={audience.title}
                className="rounded-3xl border border-white/10 bg-black/40 p-8"
              >
                <h3 className="text-xl font-semibold text-white">
                  {audience.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/40 p-10">
          <h3 className="text-2xl font-semibold text-white">What you get</h3>
          <ul className="mt-6 grid gap-4 text-sm text-white/70 md:grid-cols-2">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/60" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-black/40 p-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Join the founders waitlist
          </h2>
          <p className="mt-4 text-base text-white/70">
            Be the first to get access and unlock exclusive early-adopter perks.
          </p>
          <ul className="mt-6 grid gap-4 text-sm text-white/70 md:grid-cols-2">
            {perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/60" />
                <span>{perk}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-white/5 bg-black/60 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Build your unforgettable brand.
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            The future of brand building is here. Get early access and be the first to know when we launch.
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
