import { imageExists } from "@/lib/imageExists";
import ImageSlotView from "./ImageSlotView";

type Props = {
  name: string; // expected filename inside /public/images, e.g. "hero-waffle.jpg"
  alt: string;
  variant?: "warm" | "cool" | "dark" | "light";
  className?: string;
  priority?: boolean;
  sizes?: string;
};

// Server component: checks whether the real file has been dropped into
// /public/images yet, then hands off to the presentational ImageSlotView.
// Client Components can't use this directly (it imports node:fs via
// imageExists) — they should receive a precomputed `hasReal` boolean from a
// Server Component ancestor and render ImageSlotView themselves instead.
export default function ImageSlot({ name, alt, variant = "warm", className = "", priority, sizes }: Props) {
  return (
    <ImageSlotView
      name={name}
      alt={alt}
      variant={variant}
      className={className}
      priority={priority}
      sizes={sizes}
      hasReal={imageExists(name)}
    />
  );
}
