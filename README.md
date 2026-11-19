# Rajesh Gund — Portfolio

A buildless, responsive portfolio for GitHub Pages. No package install or build is required. Google Fonts require a connection; system fonts provide an offline fallback.

## Preview locally on Windows

Run these commands in PowerShell with Python installed:

```powershell
Set-Location -LiteralPath 'L:\Portfolio_website\rgund26.github.io'
py -m http.server 8000 --bind 127.0.0.1
```

Keep that window open. Visit [the home page](http://127.0.0.1:8000/) or [the MMPT media section](http://127.0.0.1:8000/projects/pest-trap-robot/#chapter-5). Refresh after editing and press `Ctrl+C` in the PowerShell window to stop the server. If the Python launcher is unavailable, use `python` in place of `py`.

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

## Update project media

Keep original photos, CAD exports and videos in `L:\Portfolio_website\Portfolio_media`. Put web copies in this repository so GitHub Pages can serve them. The MMPT project uses:

| Media | Folder in the repository |
| --- | --- |
| Project cover, front and rear photos, isometric CAD view | `assets/img/pest-trap-robot/` |
| Video poster frames | `assets/posters/pest-trap-robot/` |
| Mobile-base demo, perception MP4 clips and GIFs | `assets/video/pest-trap-robot/` |
| CO₂ sensor cover, first prototype, KiCad layout and web app screenshot | `assets/img/ghg-sensor/` |

The MMPT gallery is defined in `projects/pest-trap-robot/index.html`. It opens with seven-second perception clips edited from the original screen recordings. The home page and project directory use the same prototype cover as the MMPT page. When replacing an export, keep its filename or update the HTML links and content inventory together. Update the image dimensions, alt text and captions if the replacement changes them.

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
- The CO₂ sensor page shows the two hardware iterations and the KiCad layout. The reported 20-day battery runtime applies to hourly sampling with 55 minutes of deep sleep per cycle.
- Expected PhD completion is not shown until confirmed. Short training dates with source conflicts are omitted.
- Reported model metrics come from the supplied handoff. Confirm evaluation split, test conditions and publication permission before launch; they are not end-to-end robot performance metrics.
- Funding, collaboration and presentation statements come from the supplied handoff and should be confirmed before public launch.
- No phone number, mailing address, or CPT/OPT eligibility claim is included.
- The original screenshot-based CV is not published; a clean, text-based draft resume is provided instead.
- The MMPT and CO₂ sensor pages use supplied project media. The site uses initials for the portrait.
- Publication records were checked against their journal pages during the profile expansion.

## Validation

Eight content pages plus a 404 page; local links/assets checked; JavaScript syntax checked; desktop visual review; mobile layout at 390px iframe width (375px content width, no horizontal overflow); mobile menu open/close; project navigation; image lightbox open/Escape close. Native dialog handles keyboard focus containment and returns focus to its opener. This is targeted functional review, not an accessibility certification.


## Expanded profile

Dedicated pages: `/about/`, `/experience/`, `/publications/`, and `/projects/`.
The project directory filters six projects by discipline. Publications have journal/DOI links, copyable citations and a BibTeX download. A sitemap, robots.txt and 404 page support normal hosting behavior.

## Media configuration

Add image/video entries to `assets/js/media-config.js`. This config works without a server-side upload service. Put actual images/posters in the assets folders, and use hosted URLs for large videos. Existing placeholders remain until an entry is supplied. Supported types: image, video, youtube. YouTube uses a click-to-load privacy-enhanced iframe; no YouTube request occurs before activation unless you explicitly use a YouTube-hosted poster URL. Alt text and captions should describe the actual hardware/test.
