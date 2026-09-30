# Regenerates the branded project cover images.
#
# Four projects have no usable screenshot, so their covers are rendered from HTML
# by headless Chrome and converted to WebP:
#   garvse2, garvse1  -- carry the real GarvSe brand mark (public/garvse-logo.png)
#   enableu, kanna    -- carry a letter mark, since neither has a public brand
#
# The other covers (tinylink, techcare, cineverse, healthplus, encludo) are real
# screenshots of the live sites and are NOT generated here.
#
# Run:  python scripts/make-project-covers.py
import base64, io, os, subprocess, sys, tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(os.path.dirname(HERE), "public")

BROWSERS = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
]
BROWSER = next((p for p in BROWSERS if os.path.exists(p)), None)

GARVSE_LOGO = os.path.join(PUBLIC, "garvse-logo.png")


def data_uri(path):
    return "data:image/png;base64," + base64.b64encode(open(path, "rb").read()).decode()


TEMPLATE = """<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  html, body {{ width: 1200px; height: 600px; }}
  body {{ font-family: Inter, "Segoe UI", system-ui, sans-serif; background: {bg};
         color: #f1f5f9; display: grid; place-items: center; overflow: hidden; position: relative; }}
  .glow {{ position: absolute; width: 900px; height: 900px; border-radius: 50%;
           background: radial-gradient(circle, {glow} 0%, transparent 62%); top: -320px; right: -260px; }}
  .glow2 {{ position: absolute; width: 620px; height: 620px; border-radius: 50%;
            background: radial-gradient(circle, {glow2} 0%, transparent 65%); bottom: -300px; left: -200px; }}
  .grid {{ position: absolute; inset: 0;
    background-image: linear-gradient(rgba(255,255,255,.035) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,.035) 1px, transparent 1px);
    background-size: 56px 56px;
    mask-image: radial-gradient(circle at 50% 45%, #000 35%, transparent 78%); }}
  .wrap {{ position: relative; text-align: center; padding: 0 90px; }}
  .mark {{ width: {marksize}; height: {marksize}; margin: 0 auto 28px; border-radius: {markradius};
           display: grid; place-items: center; background: {markbg}; color: {markfg};
           font-size: 46px; font-weight: 800; letter-spacing: -.02em;
           box-shadow: 0 18px 50px -12px {glow}; }}
  .mark img {{ width: 124px; height: 124px; object-fit: contain; }}
  h1 {{ font-size: 68px; font-weight: 800; letter-spacing: -.035em; line-height: 1.02; }}
  h1 .accent {{ color: {accent}; }}
  p {{ margin-top: 20px; font-size: 27px; color: #94a3b8; font-weight: 400; }}
  .chips {{ margin-top: 36px; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }}
  .chip {{ font-size: 19px; font-weight: 600; color: {accent}; background: {chipbg};
           border: 1px solid {chipborder}; border-radius: 999px; padding: 10px 22px; }}
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
        accent="#38bdf8", markbg="#ffffff", markfg="#0b1120",
        marksize="148px", markradius="34px", logo=True,
        chipbg="rgba(56,189,248,.10)", chipborder="rgba(56,189,248,.28)",
        title='GarvSe <span class="accent">2.0</span>',
        subtitle="Monitoring, Evaluation &amp; Learning platform",
        chips=["45 centres", "10 states + 2 UTs", "WCAG 2.2 AA", "Offline-first"],
    ),
    dict(
        name="garvse1",
        bg="linear-gradient(150deg, #0b1120 0%, #141d33 55%, #0b1120 100%)",
        glow="rgba(129,140,248,.26)", glow2="rgba(56,189,248,.12)",
        accent="#a5b4fc", markbg="#ffffff", markfg="#0b1120",
        marksize="148px", markradius="34px", logo=True,
        chipbg="rgba(165,180,252,.10)", chipborder="rgba(165,180,252,.26)",
        title='GarvSe <span class="accent">1.0</span>',
        subtitle="Centre data management, live in production",
        chips=["Auth &amp; OTP", "Partner API", "Reports", "Deployments"],
    ),
    dict(
        name="enableu",
        bg="linear-gradient(150deg, #0b1120 0%, #0f1f2e 55%, #0b1120 100%)",
        glow="rgba(45,212,191,.28)", glow2="rgba(56,189,248,.14)",
        accent="#5eead4", markbg="#14b8a6", markfg="#04231f",
        marksize="104px", markradius="26px", mark="E",
        chipbg="rgba(94,234,212,.10)", chipborder="rgba(94,234,212,.26)",
        title='Enable<span class="accent">U</span>',
        subtitle="Accessibility-first learning platform",
        chips=["Dyslexia modes", "High contrast", "Gamified", "React + Node + Python"],
    ),
    dict(
        name="kanna",
        bg="linear-gradient(150deg, #0b1120 0%, #1c1330 55%, #0b1120 100%)",
        glow="rgba(232,121,249,.26)", glow2="rgba(167,139,250,.16)",
        accent="#f0abfc", markbg="rgba(240,171,252,.14)", markfg="#f0abfc",
        marksize="104px", markradius="26px", mark="K",
        chipbg="rgba(240,171,252,.10)", chipborder="rgba(240,171,252,.26)",
        title='<span class="accent">Kanna</span>',
        subtitle="On-device Android AI assistant",
        chips=["Kotlin", "Wake word", "Gemini", "Encrypted store"],
    ),
]


def render(cfg):
    from PIL import Image
    chips = "".join('<span class="chip">%s</span>' % c for c in cfg["chips"])
    mark = '<img src="%s" alt="">' % data_uri(GARVSE_LOGO) if cfg.get("logo") else cfg.get("mark", "")
    fields = {k: v for k, v in cfg.items() if k not in ("name", "chips", "logo", "mark")}
    html = TEMPLATE.format(chips=chips, mark=mark, **fields)

    tmp = tempfile.mkdtemp()
    src = os.path.join(tmp, "cover.html")
    png = os.path.join(tmp, "cover.png")
    io.open(src, "w", encoding="utf-8").write(html)
    subprocess.run(
        [BROWSER, "--headless=new", "--disable-gpu", "--no-first-run", "--hide-scrollbars",
         "--user-data-dir=" + os.path.join(tmp, "profile"),
         "--window-size=1200,600", "--screenshot=" + png,
         "--virtual-time-budget=9000", "file:///" + src.replace("\\", "/")],
        check=True, capture_output=True,
    )
    dest = os.path.join(PUBLIC, cfg["name"] + ".webp")
    Image.open(png).convert("RGB").save(dest, "WEBP", quality=88, method=6)
    print("%-14s %4d KB" % (cfg["name"] + ".webp", os.path.getsize(dest) // 1024))


if __name__ == "__main__":
    if not BROWSER:
        sys.exit("No Chrome or Edge found; cannot render covers.")
    if not os.path.exists(GARVSE_LOGO):
        sys.exit("Missing %s -- the GarvSe covers need the brand mark." % GARVSE_LOGO)
    for cfg in COVERS:
        render(cfg)
