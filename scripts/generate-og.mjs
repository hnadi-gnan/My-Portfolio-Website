/**
 * Renders assets/og-card.svg to public/og.png (1200x630) for social sharing.
 * Run: npm run og   (also runs automatically before `npm run build`)
 *
 * A committed public/og.png already exists, so if `sharp` is unavailable in the
 * build environment this step logs a warning and exits 0 rather than failing.
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

try {
  const { default: sharp } = await import("sharp");
  const svg = await readFile(path.join(root, "assets", "og-card.svg"));
  const png = await sharp(svg, { density: 144 })
    .resize(1200, 630, { fit: "cover" })
    .png()
    .toBuffer();
  await writeFile(path.join(root, "public", "og.png"), png);
  console.log("Wrote public/og.png", png.length, "bytes");
} catch (err) {
  console.warn(
    "[generate-og] Skipped regenerating og.png (" +
      (err?.message ?? err) +
      "). Using the committed public/og.png.",
  );
}
