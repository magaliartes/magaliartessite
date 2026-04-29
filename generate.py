import base64

# lê logo
with open("assets/logo.png", "rb") as f:
    logo_b64 = base64.b64encode(f.read()).decode()

logo_src = f"data:image/png;base64,{logo_b64}"

# lê html template
with open("index.html", "r", encoding="utf-8") as f:
    html = f.read()

# substitui placeholder
html = html.replace("{{LOGO}}", logo_src)

# salva versão final
with open("final.html", "w", encoding="utf-8") as f:
    f.write(html)

print("✅ Site gerado: final.html")
