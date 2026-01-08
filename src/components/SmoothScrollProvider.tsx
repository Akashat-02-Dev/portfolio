"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import type { ReactNode } from "react";

type SmoothScrollProviderProps = {
  children: ReactNode;
};

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const Lenis = ReactLenis as unknown as (props: {
    children?: ReactNode;
    root?: boolean;
    options?: Record<string, unknown>;
  }) => JSX.Element;

  return (
    <Lenis
      root
      options={{
        lerp: 0.1,
        duration: 1.5,
        smoothWheel: true,
        smoothTouch: false,
      }}
    >
      {children}
    </Lenis>
  );
}
