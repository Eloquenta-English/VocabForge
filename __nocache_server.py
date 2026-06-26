#!/usr/bin/env python
"""Tiny static file server that disables caching - for dev only."""
import http.server, socketserver, os, sys

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
ROOT = sys.argv[2] if len(sys.argv) > 2 else r"C:\Users\irieb\Documents\William's Projects\web-apps\VocabForge"

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

os.chdir(ROOT)
with socketserver.TCPServer(('127.0.0.1', PORT), NoCacheHandler) as httpd:
    print(f"serving {ROOT} at http://127.0.0.1:{PORT} (no-cache)")
    httpd.serve_forever()
