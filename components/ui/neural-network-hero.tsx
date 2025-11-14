"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

import { useRouter } from "next/navigation";
import Link from "next/link";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ShimmerButton } from "@/components/ui/shimmer-button";

gsap.registerPlugin(useGSAP);

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  #ifdef GL_ES
    precision lowp float;
  #endif
  uniform float iTime;
  uniform vec2 iResolution;
  varying vec2 vUv;
  
  vec4 buf[8];
  
  vec4 sigmoid(vec4 x) { return 1. / (1. + exp(-x)); }
  vec4 tanh4(vec4 x) {
    vec4 e2x = exp(2.0 * x);
    return (e2x - 1.0) / (e2x + 1.0);
  }
  
  vec4 cppn_fn(vec2 coordinate, float in0, float in1, float in2) {
    vec4 x0 = vec4(coordinate, in0, 1.0);
    vec4 x1 = vec4(in1, in2, length(coordinate), dot(coordinate, coordinate));

    buf[0] = sin(vec4(x0.xy, x1.xz));
    buf[1] = cos(vec4(x0.yx, x1.yw));
    buf[2] = tanh4(vec4(x0.z, x1.yzw));
    buf[3] = sigmoid(vec4(x0.xyxy + x1));

    vec4 h1 = normalize(buf[0] + buf[1] * 0.5 + buf[2] * 0.3);
    vec4 h2 = normalize(buf[3] + buf[1].wzyx * 0.75);
    vec4 h3 = sin(h1 * 1.2 + h2 * 0.8 + vec4(iTime * 0.3));

    buf[4] = sigmoid(h3 + vec4(coordinate, in1, in2));
    buf[5] = sin(buf[4] * 3.14 + vec4(0.2, 0.4, 0.6, 0.8));
    buf[6] = normalize(buf[5] + h2);

    vec4 color = clamp(buf[6] * 0.5 + 0.5, 0.0, 1.0);
    color.rgb = mix(color.rgb, color.bgr, 0.25 + 0.25 * sin(iTime * 0.5));
    color.rgb += 0.1 * sin(vec3(1.2, 0.9, 1.5) * iTime + coordinate.xyx * 3.0);
    return clamp(color, 0.0, 1.0);
  }
  
  void main() {
    vec2 uv = vUv * 2.0 - 1.0; uv.y *= -1.0;
    gl_FragColor = cppn_fn(uv, 0.1 * sin(0.3 * iTime), 0.1 * sin(0.69 * iTime), 0.1 * sin(0.44 * iTime));
  }
`;

const CPPNShaderMaterial = shaderMaterial(
  { iTime: 0, iResolution: new THREE.Vector2(1, 1) },
  vertexShader,
  fragmentShader
);

extend({ CPPNShaderMaterial });

function ShaderPlane() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const materialRef = useRef<any>(null!);

  useFrame((state) => {
    if (!materialRef.current) return;
    materialRef.current.iTime = state.clock.elapsedTime;
    const { width, height } = state.size;
    materialRef.current.iResolution.set(width, height);
  });

  return (
    <mesh ref={meshRef} position={[0, -0.75, -0.5]}>
      <planeGeometry args={[4, 4]} />
      <cPPNShaderMaterial ref={materialRef} side={THREE.DoubleSide} />
    </mesh>
  );
}

function ShaderBackground() {
  const canvasRef = useRef<HTMLDivElement | null>(null);

  const camera = useMemo(
    () => ({
      position: [0, 0, 1] as [number, number, number],
      fov: 75,
      near: 0.1,
      far: 1000,
    }),
    []
  );

  useGSAP(
    () => {
      if (!canvasRef.current) return;

      gsap.set(canvasRef.current, {
        filter: "blur(20px)",
        scale: 1.1,
        autoAlpha: 0.7,
      });

      gsap.to(canvasRef.current, {
        filter: "blur(0px)",
        scale: 1,
        autoAlpha: 1,
        duration: 1.5,
        ease: "power3.out",
        delay: 0.3,
      });
    },
    { scope: canvasRef }
  );

  return (
    <div
      ref={canvasRef}
      className="bg-black absolute inset-0 -z-10 w-full h-full"
      aria-hidden
    >
      <Canvas
        camera={camera}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
        style={{ width: "100%", height: "100%" }}
      >
        <ShaderPlane />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
    </div>
  );
}

interface HeroProps {
  title: string;
  description: string;
  badgeText?: string;
  badgeLabel?: string;
  ctaButtons?: Array<{ text: string; href: string; primary?: boolean }>;
  microDetails?: Array<string>;
}

export default function Hero({
  title,
  description,
  badgeText = "Generative Surfaces",
  badgeLabel = "New",
  ctaButtons = [
    { text: "Get started", href: "#get-started", primary: true },
    { text: "View showcase", href: "#showcase" },
  ],
  microDetails = ["Low-weight font", "Tight tracking", "Subtle motion"],
}: HeroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const paraRef = useRef<HTMLParagraphElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const badgeRef = useRef<HTMLDivElement | null>(null);
  const microItem1Ref = useRef<HTMLLIElement | null>(null);
  const microItem2Ref = useRef<HTMLLIElement | null>(null);
  const microItem3Ref = useRef<HTMLLIElement | null>(null);
  const router = useRouter();

  useGSAP(
    () => {
      if (!headerRef.current) return;

      document.fonts.ready.then(() => {
        gsap.set(headerRef.current, {
          filter: "blur(16px)",
          yPercent: 30,
          autoAlpha: 0,
          scale: 1.06,
          transformOrigin: "50% 100%",
        });

        if (badgeRef.current) {
          gsap.set(badgeRef.current, { autoAlpha: 0, y: -8 });
        }
        if (paraRef.current) {
          gsap.set(paraRef.current, { autoAlpha: 0, y: 8 });
        }
        if (ctaRef.current) {
          gsap.set(ctaRef.current, { autoAlpha: 0, y: 8 });
        }
        const microItems = [
          microItem1Ref.current,
          microItem2Ref.current,
          microItem3Ref.current,
        ].filter(Boolean);
        if (microItems.length > 0) {
          gsap.set(microItems, { autoAlpha: 0, y: 6 });
        }

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
        });

        if (badgeRef.current) {
          tl.to(badgeRef.current, { autoAlpha: 1, y: 0, duration: 0.5 }, 0.0);
        }

        tl.to(
          headerRef.current,
          {
            filter: "blur(0px)",
            yPercent: 0,
            autoAlpha: 1,
            scale: 1,
            duration: 0.9,
          },
          0.1
        );

        if (paraRef.current) {
          tl.to(
            paraRef.current,
            { autoAlpha: 1, y: 0, duration: 0.5 },
            "-=0.55"
          );
        }
        if (ctaRef.current) {
          tl.to(
            ctaRef.current,
            { autoAlpha: 1, y: 0, duration: 0.5 },
            "-=0.35"
          );
        }
        if (microItems.length > 0) {
          tl.to(
            microItems,
            { autoAlpha: 1, y: 0, duration: 0.5, stagger: 0.1 },
            "-=0.25"
          );
        }
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-screen overflow-hidden"
    >
      <ShaderBackground />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pb-24 pt-36 sm:gap-8 sm:pt-44 md:px-10 lg:px-16">
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm"
        >
          <span className="text-[10px] font-light uppercase tracking-[0.08em] text-white/70">
            {badgeLabel}
          </span>
          <span className="h-1 w-1 rounded-full bg-white/40" />
          <span className="text-xs font-light tracking-tight text-white/80">
            {badgeText}
          </span>
        </div>

        <h1
          ref={headerRef}
          className="max-w-2xl text-left text-5xl font-extralight leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          {title}
        </h1>

        <p
          ref={paraRef}
          className="max-w-xl text-left text-base font-light leading-relaxed tracking-tight text-white/75 sm:text-lg"
        >
          {description}
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center gap-3 pt-2">
          {ctaButtons.map((button, index) => {
            if (button.primary) {
              return (
                <ShimmerButton
                  key={index}
                  onClick={() => router.push(button.href)}
                  className="bg-white/90 text-black hover:text-white hover:[background:rgba(255,255,255,0.15)]"
                >
                  <span className="text-sm font-medium tracking-tight">
                    {button.text}
                  </span>
                </ShimmerButton>
              );
            }

            return (
              <Link
                key={index}
                href={button.href}
                className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-light tracking-tight text-white/80 transition-colors hover:bg-white/5"
              >
                {button.text}
              </Link>
            );
          })}
        </div>

        <ul className="mt-8 flex flex-wrap gap-6 text-xs font-extralight tracking-tight text-white/60">
          {microDetails.map((detail, index) => {
            const refMap = [microItem1Ref, microItem2Ref, microItem3Ref];
            return (
              <li
                key={index}
                ref={refMap[index]}
                className="flex items-center gap-2"
              >
                <span className="h-1 w-1 rounded-full bg-white/40" /> {detail}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
    </section>
  );
}

declare module "@react-three/fiber" {
  interface ThreeElements {
    cPPNShaderMaterial: any;
  }
}
