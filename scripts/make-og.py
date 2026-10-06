"""Build the WhatsApp/Open Graph preview image for a lead.

Usage:
    python scripts/make-og.py "י.ש שיפוצים ואיטום" "האתר שלך מוכן לצפייה"

PIL here has no libraqm, so Hebrew is reordered with python-bidi before drawing.
"""

import sys
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

try:
    from bidi import get_display
except ImportError:
    from bidi.algorithm import get_display

ROOT = Path(__file__).resolve().parent.parent
HERO = ROOT / "public/demo/renovation/hero-apartment.webp"
OUT = ROOT / "src/app/d/r8m3w6zp2c/opengraph-image.jpg"
FONTS = Path(__file__).resolve().parent / "fonts"

W, H = 1200, 630
INK = (21, 25, 28)
AMBER = (242, 163, 58)
WHITE = (255, 255, 255)

name = sys.argv[1] if len(sys.argv) > 1 else "י.ש שיפוצים ואיטום"
subtitle = sys.argv[2] if len(sys.argv) > 2 else "האתר שלך מוכן לצפייה"
tagline = "שיפוצים · איטום · עבודות גמר"


def heebo(size: int, weight: int) -> ImageFont.FreeTypeFont:
    font = ImageFont.truetype(str(FONTS / "Heebo.ttf"), size)
    font.set_variation_by_axes([weight])
    return font


def rtl(draw: ImageDraw.ImageDraw, right: int, y: int, text: str, font, fill) -> int:
    shown = get_display(text)
    box = draw.textbbox((0, 0), shown, font=font)
    draw.text((right - (box[2] - box[0]) - box[0], y), shown, font=font, fill=fill)
    return box[3] - box[1]


hero = Image.open(HERO).convert("RGB")
scale = max(W / hero.width, H / hero.height)
hero = hero.resize((round(hero.width * scale), round(hero.height * scale)))
left = round((hero.width - W) * 0.15)
top = round((hero.height - H) / 2)
img = hero.crop((left, top, left + W, top + H))

shade = Image.new("L", (W, 1))
for x in range(W):
    t = x / W
    shade.putpixel((x, 0), int(255 * min(1.0, max(0.0, (t - 0.25) / 0.45)) * 0.92))
shade = shade.resize((W, H))
img = Image.composite(Image.new("RGB", (W, H), INK), img, shade)

draw = ImageDraw.Draw(img)
right = W - 64

pill_font = heebo(26, 700)
pill_text = get_display("הדמיה פרטית")
pb = draw.textbbox((0, 0), pill_text, font=pill_font)
pw, ph = pb[2] - pb[0] + 40, 48
draw.rounded_rectangle((right - pw, 60, right, 60 + ph), radius=24, fill=AMBER)
draw.text((right - pw + 20 - pb[0], 60 + (ph - (pb[3] - pb[1])) / 2 - pb[1]), pill_text, font=pill_font, fill=INK)

title_font = ImageFont.truetype(str(FONTS / "SecularOne-Regular.ttf"), 78)
y = 170
y += rtl(draw, right, y, name, title_font, WHITE) + 30
rtl(draw, right, y, subtitle, heebo(46, 600), AMBER)

draw.rectangle((0, H - 72, W, H), fill=INK)
draw.rectangle((0, H - 72, W, H - 68), fill=AMBER)
rtl(draw, right, H - 52, tagline, heebo(28, 500), (230, 230, 230))

OUT.parent.mkdir(parents=True, exist_ok=True)
img.save(OUT, "JPEG", quality=86, optimize=True)
print(f"saved {OUT} ({OUT.stat().st_size // 1024} KB)")
