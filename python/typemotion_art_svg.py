"""Animated text SVG for TypeMotion.Art workflows."""
from html import escape
import math
import re


def render_text(text, *, width=800, height=300, color="#222222", duration=1.5):
    if not isinstance(text, str) or not text.strip() or len(text) > 120:
        raise ValueError("text must contain 1 to 120 characters")
    if not isinstance(width, int) or width < 200 or not isinstance(height, int) or height < 100 or not isinstance(duration, (int, float)) or not math.isfinite(duration) or duration <= 0 or not re.fullmatch(r"#[0-9a-fA-F]{6}", color):
        raise ValueError("invalid options")
    safe = escape(text, quote=True)
    return f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-label="{safe}"><rect width="100%" height="100%" fill="#ffffff"/><text x="50%" y="55%" text-anchor="middle" font-family="Arial,sans-serif" font-size="52" fill="{color}" opacity="0">{safe}<animate attributeName="opacity" from="0" to="1" dur="{duration}s" fill="freeze"/></text></svg>'
