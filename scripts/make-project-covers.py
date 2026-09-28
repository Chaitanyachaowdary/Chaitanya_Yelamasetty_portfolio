# Generates the project cover images for the three EnAble India / Purple Aware cards.
# Renders HTML with headless Edge, then converts to WebP.
# Run:  python scripts/make-project-covers.py
import io, os, subprocess, tempfile, sys

HERE = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(os.path.dirname(HERE), "public")

EDGE_CANDIDATES = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
]
EDGE = next((p for p in EDGE_CANDIDATES if os.path.exists(p)), None)

TEMPLATE = """<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  html, body {{ width: 1200px; height: 600px; }}
  body {{
    font-family: Inter, "Segoe UI", system-ui, sans-serif;
    background: {bg};
    color: #f1f5f9;
    display: grid;
    place-items: center;
    overflow: hidden;
    position: relative;
  }}
  .glow {{
    position: absolute; width: 900px; height: 900px; border-radius: 50%;
    background: radial-gradient(circle, {glow} 0%, transparent 62%);
    top: -320px; right: -260px;
  }}
  .glow2 {{
    position: absolute; width: 620px; height: 620px; border-radius: 50%;
    background: radial-gradient(circle, {glow2} 0%, transparent 65%);
    bottom: -300px; left: -200px;
  }}
  .grid {{
    position: absolute; inset: 0;
    background-image: linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(circle at 50% 45%, #000 35%, transparent 78%);
  }}
  .wrap {{ position: relative; text-align: center; padding: 0 90px; }}
  .mark {{
    width: 104px; height: 104px; margin: 0 auto 30px; border-radius: 26px;
    display: grid; place-items: center;
    background: {markbg}; color: {markfg};
    font-size: 46px; font-weight: 800; letter-spacing: -.02em;
    box-shadow: 0 18px 50px -12px {glow};
  }}
  h1 {{ font-size: 68px; font-weight: 800; letter-spacing: -.035em; line-height: 1.02; }}
  h1 .accent {{ color: {accent}; }}
  p {{ margin-top: 20px; font-size: 27px; color: #94a3b8; font-weight: 400; }}
  .chips {{ margin-top: 38px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }}
  .chip {{
    font-size: 19px; font-weight: 600; color: {accent};
    background: {chipbg}; border: 1px solid {chipborder};
    border-radius: 999px; padding: 10px 22px;
  }}
</style></head><body>
<div class="glow"></div><div class="glow2"></div><div class="grid"></div>
<div class="wrap">
  <div class="mark">{mark}</div>
  <h1>{title}</h1>
  <p>{subtitle}</p>
  <div class="chips">{chips}</div>
</div></body></html>"""

COVERS = [
    dict(
        name="garvse2",
        bg="linear-gradient(150deg, #0b1120 0%, #101a2e 55%, #0b1120 100%)",
        glow="rgba(56,189,248,.30)", glow2="rgba(34,211,238,.16)",
        accent="#38bdf8", markbg="#38bdf8", markfg="#0b1120",
        chipbg="rgba(56,189,248,.10)", chipborder="rgba(56,189,248,.28)",
        mark="G", title='GarvSe <span class="accent">2.0</span>',
        subtitle="Monitoring, Evaluation &amp; Learning platform",
        chips=["45 centres", "10 states + 2 UTs", "WCAG 2.2 AA", "Offline-first"],
    ),
    dict(
        name="garvse1",
        bg="linear-gradient(150deg, #0b1120 0%, #141d33 55%, #0b1120 100%)",
        glow="rgba(129,140,248,.26)", glow2="rgba(56,189,248,.12)",
        accent="#a5b4fc", markbg="rgba(165,180,252,.14)", markfg="#a5b4fc",
        chipbg="rgba(165,180,252,.10)", chipborder="rgba(165,180,252,.26)",
        mark="G", title='GarvSe <span class="accent">1.0</span>',
        subtitle="Centre data management, live in production",
        chips=["Auth &amp; OTP", "Partner API", "Reports", "Deployments"],
    ),
    dict(
        name="encludo",
        bg="linear-gradient(150deg, #0b1120 0%, #171334 55%, #0b1120 100%)",
        glow="rgba(115,49,243,.34)", glow2="rgba(167,139,250,.16)",
        accent="#b9a7ff", markbg="#7331f3", markfg="#ffffff",
        chipbg="rgba(185,167,255,.10)", chipborder="rgba(185,167,255,.26)",
        mark="&#9782;", title='<span class="accent">Encludo</span>',
        subtitle="Accessibility for any site, in one line of code",
        chips=["WCAG 2.2 AA", "Under 50 KB", "21 languages", "Privacy-first"],
    ),
]


def render(cfg):
    chips = "".join(f'<span class="chip">{c}</span>' for c in cfg["chips"])
    html = TEMPLATE.format(chips=chips, **{k: v for k, v in cfg.items() if k not in ("name", "chips")})
    with tempfile.TemporaryDirectory() as tmp:
        src = os.path.join(tmp, "cover.html")
        png = os.path.join(tmp, "cover.png")
        io.open(src, "w", encoding="utf-8").write(html)
        subprocess.run(
            [EDGE, "--headless=new", "--disable-gpu", "--hide-scrollbars",
             "--window-size=1200,600", f"--screenshot={png}",
             "--virtual-time-budget=4000", "file:///" + src.replace("\\", "/")],
            check=True, capture_output=True,
        )
        from PIL import Image
        out = os.path.join(PUBLIC, cfg["name"] + ".webp")
        Image.open(png).convert("RGB").save(out, "WEBP", quality=88, method=6)
        print(f"{cfg['name']}.webp  {os.path.getsize(out) // 1024} KB")


if __name__ == "__main__":
    if not EDGE:
        sys.exit("Microsoft Edge not found; cannot render covers.")
    for cfg in COVERS:
        render(cfg)
