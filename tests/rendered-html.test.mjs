import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

test("exports a complete Korean AIR CLEANSING landing page", async () => {
  const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8");

  assert.match(html, /<html[^>]+lang="ko"/i);
  assert.match(html, /<title>AIR CLEANSING \| 피톤치드 스페이스 케어<\/title>/i);
  assert.match(html, /향으로 덮기보다/);
  assert.match(html, /C3 COLLOID DISPERSION/);
  assert.match(html, /흔들고, 가볍게 분사하고/);
  assert.match(html, /공간에서 시작해/);
  assert.match(html, /mobile-section-nav/);
  assert.match(html, /air-cleansing-hero\.jpg/);
  assert.match(html, /air-cleansing-studio\.webp/);
  assert.match(html, /AROMA PROFILE/);
  assert.match(html, /ingredients-botanical\.webp/);
  assert.match(html, /technology-dispersion\.webp/);
  assert.match(html, /ingredient-bergamot-botanical\.webp/);
  assert.match(html, /use-bathroom\.webp/);
  assert.match(html, /use-car-interior\.webp/);
  assert.match(html, /feature-dispersion\.webp/);
  assert.match(html, /howto-shake\.webp/);
  assert.doesNotMatch(html, /product-atmosphere|spray-plume|spray-haze|mist-particle|wind-trace/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("exports required public assets", async () => {
  await Promise.all([
    access(new URL("../out/favicon.png", import.meta.url)),
    access(new URL("../out/images/air-cleansing-hero.jpg", import.meta.url)),
    access(new URL("../out/images/air-cleansing-bottle.jpg", import.meta.url)),
    access(new URL("../out/images/air-cleansing-studio.webp", import.meta.url)),
    access(new URL("../out/images/ingredients-botanical.webp", import.meta.url)),
    access(new URL("../out/images/technology-dispersion.webp", import.meta.url)),
    access(new URL("../out/images/ingredient-hinoki-water-botanical.webp", import.meta.url)),
    access(new URL("../out/images/ingredient-hinoki-oil-botanical.webp", import.meta.url)),
    access(new URL("../out/images/ingredient-pine-oil-botanical.webp", import.meta.url)),
    access(new URL("../out/images/ingredient-bergamot-botanical.webp", import.meta.url)),
    access(new URL("../out/images/ingredient-vitamins-botanical.webp", import.meta.url)),
    access(new URL("../out/images/use-bedding.webp", import.meta.url)),
    access(new URL("../out/images/use-bedroom-wardrobe.webp", import.meta.url)),
    access(new URL("../out/images/use-shoe-cabinet.webp", import.meta.url)),
    access(new URL("../out/images/use-sofa-furniture.webp", import.meta.url)),
    access(new URL("../out/images/use-bathroom.webp", import.meta.url)),
    access(new URL("../out/images/use-kitchen-sink.webp", import.meta.url)),
    access(new URL("../out/images/use-child-room.webp", import.meta.url)),
    access(new URL("../out/images/use-car-interior.webp", import.meta.url)),
    access(new URL("../out/images/feature-space-care.webp", import.meta.url)),
    access(new URL("../out/images/feature-fabric.webp", import.meta.url)),
    access(new URL("../out/images/feature-dispersion.webp", import.meta.url)),
    access(new URL("../out/images/howto-shake.webp", import.meta.url)),
    access(new URL("../out/images/howto-spray.webp", import.meta.url)),
    access(new URL("../out/images/howto-dry.webp", import.meta.url)),
    access(new URL("../out/images/ingredient-hinoki-water.webp", import.meta.url)),
    access(new URL("../out/images/ingredient-hinoki-oil.webp", import.meta.url)),
    access(new URL("../out/images/ingredient-pine-oil.webp", import.meta.url)),
    access(new URL("../out/images/ingredient-bergamot.webp", import.meta.url)),
    access(new URL("../out/images/ingredient-vitamins.webp", import.meta.url)),
    access(new URL("../out/images/story-bedroom.jpg", import.meta.url)),
    access(new URL("../out/images/story-daily-spray.jpg", import.meta.url)),
    access(new URL("../out/images/story-aroma.jpg", import.meta.url)),
    access(new URL("../out/images/story-ingredients.jpg", import.meta.url)),
    access(new URL("../out/images/story-colloid.jpg", import.meta.url)),
    access(new URL("../out/images/story-forest.jpg", import.meta.url)),
  ]);
});

test("keeps database and server-runtime dependencies out of the site", async () => {
  const packageJson = await readFile(new URL("../package.json", import.meta.url), "utf8");

  assert.doesNotMatch(packageJson, /drizzle|sqlite|vinext|wrangler|cloudflare\/vite-plugin/i);
  assert.doesNotMatch(packageJson, /db:generate/i);
});

test("exports a secure static-hosting header baseline", async () => {
  const headers = await readFile(new URL("../out/_headers", import.meta.url), "utf8");

  assert.match(headers, /X-Content-Type-Options:\s*nosniff/i);
  assert.match(headers, /X-Frame-Options:\s*DENY/i);
  assert.match(headers, /frame-ancestors\s+'none'/i);
  assert.match(headers, /Permissions-Policy:/i);
  assert.doesNotMatch(headers, /unsafe-inline|unsafe-eval/i);
});
