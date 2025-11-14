import { HeroScrollDemo } from "@/components/ui/hero-scroll-demo";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import Link from "next/link";

const coreFeatures = [
  {
    title: "AI-powered content",
    description:
      "Generate a complete suite of brand assets—from logos and color systems to copy, taglines, ad variants, and social media posts—without starting from a blank page.",
  },
  {
    title: "Social media analytics",
    description:
      "Track performance across channels and get actionable insights from a unified, intuitive dashboard.",
  },
  {
    title: "Automation workflows",
    description:
      "Connect Ad Forge to your stack and automate campaigns with built-in n8n workflows, so launch and optimization happen on autopilot.",
  },
];

const steps = [
  {
    title: "Define your brand DNA",
    description:
      "Answer a few focused questions about your vision, values, product, and target audience.",
  },
  {
    title: "AI generates your assets",
    description:
      "Our AI analyzes your inputs to generate logos, palettes, typography, messaging, campaign concepts, and more.",
  },
  {
    title: "Review, refine, and launch",
    description:
      "Fine-tune your favorite directions, export your assets, and go live with a brand that already feels established.",
  },
];

const subFeatures = [
  {
    title: "Business-tailored content making",
    description:
      "Our AI doesn’t rely on generic templates. It analyzes your positioning, audience, and tone so every asset feels on-brand and relevant.",
  },
  {
    title: "Social media analytics dashboard",
    description:
      "Go beyond vanity metrics. See which assets and messages perform best, across platforms, and optimize your strategy with real data.",
  },
  {
    title: "n8n automation workflows",
    description:
      "Trigger campaigns, send emails, or sync audiences automatically. Connect Ad Forge with tools you already use and reclaim hours every week.",
  },
  {
    title: "Human-in-the-loop polish",
    description:
      "AI is your co-pilot, not the pilot. Refine, edit, and approve every asset so your brand always reflects your creative vision.",
  },
];

const brandKitItems = [
  "Logo suite (primary, secondary, and mark)",
  "Color system with usage recommendations",
  "Typeface pairings for headings, body, and accents",
  "Social media post templates and examples",
  "Ad copy variants tailored to your audience",
  "Brand guidelines PDF for consistent usage",
];

export default function FeaturesPage() {
  return (
    <div className="relative bg-[#050505] pt-24 text-white">
      <section className="mx-auto flex max-w-5xl flex-col gap-6 px-6 pb-16 text-center">
        <span className="text-xs uppercase tracking-[0.35em] text-white/50">
          Product
        </span>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Unlock your brand’s full potential with AI
        </h1>
        <p className="mx-auto max-w-2xl text-base text-white/70">
          Discover the features inside Ad Forge that help you build a memorable brand, from first concept to launch-ready campaigns, in minutes.
        </p>
      </section>

      <HeroScrollDemo />

      <section className="mx-auto max-w-6xl space-y-12 px-6 pb-24">
        <div className="space-y-4 text-left">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Powerful features built for modern brands
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {coreFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-black/40 p-8"
              >
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            A simple path to a powerful brand
          </h2>
          <p className="max-w-3xl text-base text-white/70">
            Our streamlined process takes you from raw idea to launch-ready brand in three simple steps.
          </p>
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-black/40 p-8"
              >
                <span className="text-sm uppercase tracking-[0.2em] text-white/40">
                  Step {index + 1}
                </span>
                <h3 className="text-xl font-semibold text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 rounded-3xl border border-white/10 bg-black/40 p-10">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Everything you need in one brand kit
          </h2>
          <ul className="grid gap-4 text-sm text-white/70 md:grid-cols-2">
            {brandKitItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-white/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Powerful features, effortless control
          </h2>
          <p className="max-w-3xl text-base text-white/70">
            Ad Forge combines generative AI with real marketing workflows so you stay in control of your brand while moving faster than ever.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {subFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-black/40 p-8"
              >
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-black/60 py-20">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to build your unforgettable brand?
          </h2>
          <p className="max-w-2xl text-base text-white/70">
            Join the waitlist today and be the first to experience the future of brand creation with Ad Forge.
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
