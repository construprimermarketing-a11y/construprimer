from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent / "public"
ROUTES = {"/", "/empresa", "/fundador", "/servicos", "/projetos", "/processo", "/manifesto", "/contato"}


class SiteHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def do_GET(self):
        requested = unquote(urlsplit(self.path).path)
        local_file = (ROOT / requested.lstrip("/")).resolve()
        try:
            local_file.relative_to(ROOT.resolve())
        except ValueError:
            self.send_error(404)
            return

        if local_file.is_file():
            return super().do_GET()
        if requested in ROUTES:
            self.path = "/index.html"
            return super().do_GET()
        self.send_error(404)

    def log_message(self, format, *args):
        print(f"{self.address_string()} - {format % args}")


if __name__ == "__main__":
    port = int(__import__("os").environ.get("PORT", "3000"))
    server = ThreadingHTTPServer(("0.0.0.0", port), SiteHandler)
    print(f"Construprime preview listening on 0.0.0.0:{port}", flush=True)
    server.serve_forever()
