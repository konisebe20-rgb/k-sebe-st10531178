# Riverside Bake & Brew

A website for Riverside Bake & Brew, an artisan bakery and coffee shop on the Vaal River in Vereeniging, Gauteng.
Customers can see the menu, order ahead for collection or local delivery, contact the shop, and send wholesale enquiries.

- **Live site:** https://YOUR-USERNAME.github.io/riverside-bake-and-brew/ *(replace after deploying)*
- **Repository:** https://github.com/YOUR-USERNAME/riverside-bake-and-brew *(replace)*https://konisebe20-rgb.github.io/k-sebe-st10531178/
- **Student:** Konanani, Rosebank International (Braamfontein campus)

## Pages

| Page | What it does |
|------|--------------|
| `index.html` | Home page with hero, specials and reasons to choose us |
| `about.html` | Our story, mission, vision, ingredients, photo gallery with lightbox, FAQ accordion |
| `shop.html` | Menu loaded with JavaScript, with search, category filter and sort |
| `cart.html` | Cart, quantity changes, collection or delivery checkout with validation |
| `enquiry.html` | Wholesale enquiry form that gives a price and availability response |
| `contact.html` | Shop details, hours, interactive map, contact form that builds an email |

## Technologies

HTML5, CSS3 (`css/style.css` from Part 2 and `css/part3.css` for Part 3), JavaScript (no frameworks), Leaflet and OpenStreetMap for the map.

## Folder structure

```
/
├── index.html, about.html, shop.html, enquiry.html, contact.html, cart.html
├── robots.txt, sitemap.xml, _headers, README.md
├── css/   style.css, part3.css
├── js/    products.js, cart.js, main.js, shop.js, forms.js, map.js
└── images/  (12 compressed photos)
```

## How to run it

1. Download or clone the repository.
2. Open `index.html` in a browser. (For the best test, use the VS Code "Live Server" extension.)

## Part 3 features

**JavaScript functionality**
- Accordion (FAQ on About page) and modal (order confirmation on Cart page)
- Gallery with lightbox on the About and Shop pages (arrow keys and Esc work)
- Interactive Leaflet map on the Contact page
- Animations: hero fade-in, accordion slide, cart count bump, toast messages, result panels (all switch off for people who prefer reduced motion)
- DOM manipulation: the menu, cart table, form results and quote are built with JavaScript
- Dynamic content: the shop menu loads from `js/products.js`
- Search, category filter and sort on the shop page

**Forms and validation**
- `enquiry.html`: validates the input, then shows a cost estimate and the earliest start date
- `contact.html`: validates the input, then builds an email that the visitor sends to hello@riversidebakeandbrew.co.za
- `cart.html`: validates name, phone and delivery address
- Client-side JavaScript validation with clear error messages (phone numbers, email, dates, character lengths, minimum quantities)
- AJAX: the enquiry form is sent with `fetch()` without reloading the page. Add a free Formspree form ID to the form's `action` to turn on real sending.

**SEO**
- On-page: unique title and meta description on every page, one H1 per page with H2/H3 below, descriptive image names and alt text, clean file names, internal links, mobile-friendly layout, canonical links, Open Graph tags
- Local SEO: "Bakery" structured data (JSON-LD) with address, phone and opening hours, plus Vereeniging and Vaal keywords in the content
- Off-page plan: ask local food bloggers and Vaal community pages to link to us, list the shop on Google Business Profile and local directories, share new bakes on Facebook and Instagram, and ask happy customers for Google reviews
- `robots.txt` and `sitemap.xml` are included

**Speed and security**
- Images use `loading="lazy"` and set width and height; scripts use `defer`
- All visitor input is shown with `textContent` (no `innerHTML`), so it cannot run as code
- Map library loads with an integrity hash; external links are limited to OpenStreetMap
- `_headers` file adds security headers on Netlify; HTTPS is provided by GitHub Pages and Netlify

## Deployment

**GitHub Pages:** push the code, open the repository **Settings > Pages**, choose branch `main` and folder `/ (root)`, then save.
**Netlify:** drag the project folder onto https://app.netlify.com/drop, or connect the repository.
After deploying, replace `YOUR-USERNAME` in `sitemap.xml`, `robots.txt`, the `canonical` and `og:` tags and this README.

## Changelog

### Part 2 feedback corrections

| Date | File | Change | Reason |
|------|------|--------|--------|
| 2026-11-01 | `shop.html` | Fixed image paths. `coffee beans.jpg` (with a space) did not match the real file `Coffee_beans.jpg`, and `blueberry-muffin.jpg` did not match `Blueberry-muffin.jpg` (capital B), which fails on Netlify and GitHub Pages because file names are case-sensitive. Removed `./` from all paths. All images now have clean lowercase names: `baguetee.jpg` to `baguette.jpg`, `cinamon-roll.jpg` to `cinnamon-roll.jpg`, `cofffee.jpg` to `coffee.jpg`, `Coffee_beans.jpg` to `coffee-beans.jpg`, `Blueberry-muffin.jpg` to `blueberry-muffin.jpg`. | Feedback: broken paths |
| 2026-11-01 | `index.html`, `about.html`, `contact.html`, `wholesale.html` | These pages never loaded `cart.js`, so the cart count in the menu stayed at 0. Added the script to every page. | Feedback: broken paths / missing JavaScript |
| 2026-11-01 | `js/cart.js` | The file was linked on the shop and cart pages but did not exist. Created it (add to cart, remove, quantity, total, saved in the browser). | Feedback: missing JavaScript, broken path |
| 2026-11-01 | `wholesale.html` to `enquiry.html` | Renamed to match the Part 1 file name `enquiry.html`. Updated the navigation, footer and links on every page. | Feedback: broken paths / brief requires `enquiry.html` |
| 2026-11-01 | `cart.html` | Added the missing meta description and a link back to the menu. | SEO and navigation |
| 2026-11-01 | `about.html` | Removed an empty HTML comment (`<!---->`) left in the page. | Code clean-up |
| 2026-11-01 | `README.md` | Wrote a full README (description, pages, features, structure, deployment, changelog). | Feedback: README |
| 2026-11-01 | `README.md` | Added this changelog with a detailed entry for every change. | Feedback: changelog |
| 2026-11-01 | Git history | Made small commits with clear messages for each change (see the commit list on GitHub). | Feedback: Git evidence |

### Part 3 new features

| Date | File | Change |
|------|------|--------|
| 2026-11-01 | `images/` | Compressed all photos (for example `muffin.jpg` from 3.8 MB to 0.2 MB) to make pages load faster. Improved alt text so it describes what each photo shows (for example, `rye.jpg` shows rye grains). |
| 2026-11-01 | `css/part3.css` | New stylesheet for the Part 3 features. `style.css` was not changed. |
| 2026-11-01 | `js/products.js` | New menu data list used by the shop and the enquiry form. |
| 2026-11-01 | `js/shop.js` | Menu rendered from data, with search, category filter and sort, and lightbox on the product images. |
| 2026-11-01 | `js/main.js` | Accordion, modal, lightbox, and toast message. |
| 2026-11-01 | `js/forms.js` | Validation rules, error messages, AJAX submit, quote calculator, mailto builder, checkout. |
| 2026-11-01 | `js/map.js` | Leaflet map with a marker on the Contact page. |
| 2026-11-01 | `about.html` | Added the photo gallery and FAQ accordion. |
| 2026-11-01 | `shop.html` | Menu is now loaded by JavaScript; added the search and filter bar. |
| 2026-11-01 | `contact.html` | Added phone and message type fields, validation, email builder and map. |
| 2026-11-01 | `enquiry.html` | Added product, quantity and start date fields, validation, price and availability response. |
| 2026-11-01 | `cart.html` | Added validation, delivery address field and order confirmation modal. |
| 2026-11-01 | All pages | Added canonical link, Open Graph tags, skip link, footer navigation and internal links. `index.html` and `contact.html` also got "Bakery" structured data. |
| 2026-11-01 | `robots.txt`, `sitemap.xml` | Added for search engines (cart page is excluded). |
| 2026-11-01 | `_headers` | Added security headers for Netlify. |

## Git evidence

Commits were made in small steps, for example:

```
git add .
git commit -m "Fix broken image paths on shop page"
git commit -m "Add cart.js and load it on every page"
git commit -m "Rename wholesale.html to enquiry.html and update links"
git commit -m "Add shop search, filter and sort"
git commit -m "Add form validation and quote response"
git commit -m "Add Leaflet map to contact page"

References: 
Google for developers, 2026.SEO starter guide: The basics. [online] Available at: https://developers.google.com/search/docs/funda/mentals/seo-starter-guide [Accessed 14 August 2026].
Interaction Design Foundation, 2026. What is wireframing? [online] Available at: https://www.interactiondesign.org/literature/topics/wireframing [Accessed 14 August 2026].
Nelson Norman Group, 2026. Shopping carts, checkout and registration. [online] Available at: https://www.nngroup.com/reports/ecommerce-ux-shopping -carts-checkout-registration/ [Accessed 14 August 2026]

	                                                 
                        

git commit -m "Add robots.txt and sitemap.xml"
git commit -m "Update README and changelog"
git push
```
