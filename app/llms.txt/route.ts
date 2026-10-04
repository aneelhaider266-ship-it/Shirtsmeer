export const dynamic = "force-static";

export async function GET() {
  const content = `# ShirtsMeer
> Precision men's shirt and pant color matching matrices, tailored menswear styling guides, and honest clothing brand reviews.

## Foundational Styling Guides
- [What Color Shirt Goes with Grey Pants?](https://shirtsmeer.com/blog/what-color-shirt-goes-with-grey-pants): Complete outfit matrix, contrast ratios, and leather shoe pairings.
- [What Color Shirt to Wear with Navy Pants?](https://shirtsmeer.com/blog/what-color-shirt-goes-with-navy-pants): Formal and smart casual navy trousers matching formulas.
- [What Color Shirt Goes with Brown Pants?](https://shirtsmeer.com/blog/what-color-shirt-goes-with-brown-pants): Earth tone combinations and leather footwear guide.
- [What Color Shirt Goes with Khaki Pants?](https://shirtsmeer.com/blog/what-color-shirt-goes-with-khaki-pants): Chino rules and business casual combinations.
- [What Color Shirt with Olive Green Pants?](https://shirtsmeer.com/blog/what-color-shirt-goes-with-olive-green-pants): Modern military green trouser outfit ideas.

## Brand Reviews & Comparisons
- [Collars & Co Review](https://shirtsmeer.com/blog/collars-and-co-dress-collar-polo-review): Review of the firm dress collar polo under sweaters and blazers.
- [Charles Tyrwhitt vs Kamakura](https://shirtsmeer.com/blog/charles-tyrwhitt-vs-kamakura-dress-shirts): Non-iron twill vs Japanese single-needle dress shirts compared.
- [Untuckit Sizing & Fit Guide](https://shirtsmeer.com/blog/untuckit-shirts-sizing-and-fit-guide): Shirt hem length proportions and styling untucked shirts.
- [Criquet Shirts Review](https://shirtsmeer.com/blog/criquet-shirts-retro-polo-review): Vintage 4-button player polo breakdown.
- [Comfort Colors 1717 vs Gildan 5000](https://shirtsmeer.com/blog/comfort-colors-1717-vs-gildan-5000-review): Heavyweight blank t-shirts compared for quality and fit.

## Technical Shirt Guides
- [10 Men's Shirt Collar Types](https://shirtsmeer.com/blog/mens-shirt-collar-types-guide): Spread, point, button-down, and Cuban collars explained.
- [Poplin vs Twill vs Oxford Cloth](https://shirtsmeer.com/blog/poplin-vs-twill-vs-oxford-shirt-fabrics): Comprehensive fabric weaves and seasonality guide.
- [How to Style Cuban Collar Shirts](https://shirtsmeer.com/blog/how-to-style-cuban-camp-collar-shirts): Resort wear and summer styling rules.
- [How a Dress Shirt Should Fit](https://shirtsmeer.com/blog/how-a-dress-shirt-should-fit-guide): 5 anatomical fit checkpoints for dress shirts.
`;

  return new Response(content, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
