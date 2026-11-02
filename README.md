# Riverside Bake & Brew

A website for Riverside Bake & Brew, an artisan bakery and coffee shop on the Vaal River in Vereeniging, Gauteng.
Customers can see the menu, order ahead for collection or local delivery, contact the shop, and send wholesale enquiries.


- **Repository: https://konisebe20-rgb.github.io/k-sebe-st10531178/
- **Student:** Konanani, Rosebank International (Braamfontein campus)

- 
Organisation overview.
Brief history:
Riverside Bake and the brew started in 2020 as a small home bakery run from a kitchen in Vereeniging, selling fresh bread and pastries to neighbours during complicated economic time. Word of mouth quickly grew the customer base, and in 2021 the founder had opened along the Vaal River, adding coffee counter alongside the bakery. Over the next few years, the shop became known locally for its bread, seasonal preserves, and especially coffee, and started supplying to small number of cafes and delis around. Today, Riverside Bake and Brew works from its original riverside premises and is looking to reach customers beyond people who walk past the shop, by taking orders online for the first time.
Mission:
Riverside bake and brew came about to existence to bring honest, homemade bread, pastries and coffee to Vaal community, made fresh daily using quality local ingredients, and to make it easier for customers to order ahead or have their favourites delivered.
Vision: 
To grow from the single riverside shopfront into the most trusted name artisan baking and coffee in the Vaal region, known for quality, consistency, and genuine connection to the local community.
Target audience: 
-	People staying around Vereeniging and surrounding areas who want fresh bread, pastries, and coffee.
-	Working professionals looking to order ahead for collection to avoid queuing.
-	Small cafes, delis, and event organisers that want wholesale or bulk orders.

Website goals and objectives.
Goals:
-	Sell products online, allowing customers to order bread, pastries and a coffee bean for collection or local delivery.
-	Increase website traffic from people looking for bakeries and coffee in Vereeniging.
-	Provide valuable information like the daily menu, opening hours, and wholesale enquiries.


Key performance indicators: 
-	Number of online orders placed per month.
-	average order value.
-	Cart abandonment rate on the online ordering page.
-	Number of new wholesale/bulk order enquires sent.
-	Search ranking position for terms such as “bakery Vereeniging” and “coffee a shop Vaal River”.
Current website analysis:
Riverside bake and brew now rely only on social a social media page and does not have on a social media page and does not have a dedicated website. Customers are only able to see daily specials through social media posts, and there is no way to put an order online, which means all the orders online, which means all orders currently happen in person or on the phone. This is obvious weakness, since customers cannot check current stock or reserve items ahead of a visit, and the business has no way to track online on sales or reach customers outside its existing improvement introducing a proper online ordering system and giving business a permanent, searchable home on the web.
Proposed website features and functionality: 
-	Home page: where I introduce to the bakery, todays specials, and a call to action to order online.
-	About Us page: history, mission and vision.
-	Menu/Shop page: full product listing with prices, organised by category.
-	Online ordering and cart functionality, with a choice of collection or local delivery
-	Wholesale/Bulk orders page for cafes, delis, and event organisers to send enquiries.
-	Contact page: shop address, opening hours, phone number and email.
Design and user experience: 
Colour scheme: Warm terracotta and cream as primary colours, with a deep forest green accent reflecting the reversive side and natural ingredients.
Typography: A warm, slightly rustic serif for headings to reflect the handmade, artisan feel. Clean sans – serif for body text and the online menu.
Layout and design approach: A visually rich, image-led layout that showcases the products with a simple-column checkout flow on the mobile ordering quick and easy.
User experience consideration:
-	Clear product photography for every menu item.
-	A simple, few-step checkout process to reduce cart abondment
-	Filter options on the shop page to browse by category.

Wireframes: 

       

Technical requirements:    
-	Domain name: a.co.za domain reflecting the business name 
-	Hosting: web hosting with ecommerce and secure money 
-	Programming languages and frameworks.
Timeline:
Phase 	Milestone 	Description
1	Foundation 	Research, planning, semantic HTML structure, content, file standard
2	Visual design 	CSS styling, product imaginary layout, colour scheme, typography, responsiveness.
3	Functionally 	JavaScript -driven cart and checkout.
Budget: 
item	Estimated cost 	Notes.
Damain name registration 	R150/y	Standard.co.za domain
Web hosting 	R2400/y	Supports secure online payments
Website dev	R7500/y	One-time build costs across all these phases, including cart.
Payment gateway fees	2.5% per transaction	Standard local payments gateway rate.
Maintenance and updates	R650/m	Menu updates, security patches, and backups

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
git commit -m "Add robots.txt and sitemap.xml"
git commit -m "Update README and changelog"
git push
```

References: 
Google for developers, 2026.SEO starter guide: The basics. [online] Available at: https://developers.google.com/search/docs/funda/mentals/seo-starter-guide [Accessed 14 August 2026].
Interaction Design Foundation, 2026. What is wireframing? [online] Available at: https://www.interactiondesign.org/literature/topics/wireframing [Accessed 14 August 2026].
Nelson Norman Group, 2026. Shopping carts, checkout and registration. [online] Available at: https://www.nngroup.com/reports/ecommerce-ux-shopping -carts-checkout-registration/ [Accessed 14 August 2026]

	                                                 
                        
