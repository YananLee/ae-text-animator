import unittest
from xml.etree import ElementTree
from typemotion_art_svg import render_text

class RenderTests(unittest.TestCase):
    def test_svg(self):
        svg = render_text("Hello")
        self.assertEqual(ElementTree.fromstring(svg).tag, "{http://www.w3.org/2000/svg}svg")

if __name__ == "__main__": unittest.main()
