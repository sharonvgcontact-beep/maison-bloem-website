import fs from "node:fs";
import path from "node:path";

// Server-only (uses node:fs) — call this from Server Components only.
// Client Components that need image slots must have this checked upstream
// by a Server Component and receive the boolean as a prop instead.
export function imageExists(name: string): boolean {
  const realFilePath = path.join(process.cwd(), "public", "images", name);
  return fs.existsSync(realFilePath);
}
