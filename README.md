# Rajesh Gund — Portfolio

A buildless, responsive portfolio for GitHub Pages. Open `index.html` directly to preview, or serve this directory with any static HTTP server. No package install or build is required. Google Fonts require a connection; system fonts provide an offline fallback.

## Pages

- `index.html`: introduction, featured projects, expertise, experience, education, publications and contact.
- `projects/pest-trap-robot/index.html`: Autonomous Pest Trap Service Robot.
- `projects/ghg-sensor/index.html`: CO2 sensing hardware, telemetry and testing.
- `projects/earlier-work/index.html`: earlier projects, internships and selected training.
- `assets/docs/Rajesh_Gund_Resume.pdf`: a newly prepared, concise resume based on supplied material. Review before applications.

## GitHub Pages

The connected username is `rgund26`. The normal user-site repository is `rgund26.github.io`.
The site is published from the `main` branch, root directory. The `.nojekyll` file is included. Relative links also work under a project repository subpath.

Website: https://rgund26.github.io/

GitHub Pages reference: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Updating content

Edit the relevant HTML directly. CSS is in `assets/css/`, behavior in `assets/js/main.js`. `data/rajesh_gund_portfolio_content.json` is an accompanying content inventory; changing it alone does NOT regenerate the static pages. Keep it consistent when editing HTML. There are no API keys or backend dependencies.

## Replace media placeholders

Each placeholder has `data-placeholder="true"`. Replace its figure with a real photograph or video; remove that attribute. Use descriptive alt text, a short caption and explicit dimensions. Store images in `assets/img/`. Use WebP or optimized JPEG. Preserve the `data-lightbox` button pattern used on the diagram figures for images you want visitors to enlarge.

Example on a project page:

```html
<figure class="diagram">
  <button class="zoom" data-lightbox aria-label="Enlarge robot prototype">
    <img src="../../assets/img/pest-trap-robot-01.webp"
         alt="Actual pest trap service robot prototype in the laboratory"
         width="1600" height="1000" loading="lazy">
  </button>
  <figcaption>Describe this real prototype and its stage of development.</figcaption>
</figure>
```

For videos, host large files outside the repository (for example as GitHub Release assets). Replace a video placeholder with:

```html
<figure>
  <video controls preload="none" playsinline
         poster="../../assets/posters/pest-trap-demo.webp"
         style="width:100%;height:auto">
    <source src="YOUR_HOSTED_MP4_URL" type="video/mp4">
    <track kind="captions" src="../../assets/captions/pest-trap-demo.vtt"
           srclang="en" label="English" default>
    Your browser does not support embedded video.
  </video>
  <figcaption>Actual prototype demonstration, date and test conditions.</figcaption>
</figure>
```

Replace every example path with real files. Do not commit large MP4/MOV files. No video automatically plays. For YouTube, use a privacy-enhanced embed loaded only after the visitor clicks a poster, and supply a descriptive iframe title.

## Content decisions for review

- The project name is **Autonomous Pest Trap Service Robot**, following Rajesh's latest correction. The former name is removed from pages and content paths.
- Initial GC comparisons and response-time testing are completed; further validation and soil-incubation testing remain planned. No claim of certified accuracy or completed field validation is made.
- A corrected vector GHG diagram replaces the supplied illustration's misleading "20-Day Deep Sleep" label. It means reported battery runtime at one-hour sampling. Original supplied robot and SRI conceptual diagrams remain, with captions distinguishing them from prototype evidence.
- Expected PhD completion is not shown until confirmed. Short training dates with source conflicts are omitted.
- Reported model metrics come from the supplied handoff. Confirm evaluation split, test conditions and publication permission before launch; they are not end-to-end robot performance metrics.
- Funding, collaboration and presentation statements come from the supplied handoff and should be confirmed before public launch.
- No phone number, mailing address, or CPT/OPT eligibility claim is included.
- The original screenshot-based CV is not published; a clean, text-based draft resume is provided instead.
- Photos, videos and a portrait still need to be supplied. These are explicitly labeled draft placeholders, not fabricated media. Replace or remove unused placeholders before launch.
- Publication links and bibliographic details were carried from supplied documents; external links were not independently checked during this build.

## Validation

Four static pages; local links/assets checked; JavaScript syntax checked; desktop visual review; mobile layout at 390px iframe width (375px content width, no horizontal overflow); mobile menu open/close; project navigation; image lightbox open/Escape close. Native dialog handles keyboard focus containment and returns focus to its opener. This is targeted functional review, not an accessibility certification.
