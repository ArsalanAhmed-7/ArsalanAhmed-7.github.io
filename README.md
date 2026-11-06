# Arsalan Ahmed — Portfolio

Simple, free portfolio website (HTML + CSS + JS, koi paid service nahi).

## Files
| File | Kaam |
|---|---|
| `content.js` | **Sara text yahan hai.** Naam, email, experience, skills, sab. Sirf ise edit karo. |
| `index.html` | Page ka structure (edit karne ki zarurat nahi) |
| `style.css` | Colours aur design (optional) |
| `portrait.png` | Tumhari photo |

## GitHub par upload (pehli baar)
1. github.com par account banao, phir **New repository** → naam `arslan-portfolio` → **Public** → Create.
2. **uploading an existing file** par click karo.
3. In 4 files ko drag karke daalo: `index.html`, `style.css`, `content.js`, `portrait.png` (README optional). Folder nahi, seedhi files.
4. **Commit changes** dabao.
5. **Settings → Pages → Build and deployment → Deploy from a branch → main → /(root) → Save**.
6. 1–2 minute baad wahin link dikhega: `https://USERNAME.github.io/arslan-portfolio/`

## Baad mein edit kaise karein
1. Repository mein `content.js` kholo.
2. Upar pencil (✏️ Edit) icon dabao.
3. Text badlo, phir **Commit changes** dabao.
4. 1–2 minute mein website update ho jati hai.

Rules: text hamesha `"double quotes"` mein, har line ke end par comma `,`.
Naya experience/skill add karna ho to purani line copy karke paste karo aur badal do.

## Photo badalni ho
Nayi photo ko `portrait.png` naam se upload karo (purani replace ho jaegi). Ya kisi aur naam se upload karke `content.js` mein `photo:` ka naam badlo.

## Work samples dikhana (HR meeting photos, procurement, Excel tracker, events)
1. Photos/files ko repository mein upload karo (**Add file → Upload files**), main folder mein.
2. `content.js` mein `samples:` ke `items` ke andar ek line add karo. Examples wahin `//` ke saath likhe hain, `//` hata do aur apna naam/file daalo:
   - Ek card mein kai photos: `images: ["hr-1.jpg", "hr-2.jpg", "hr-3.jpg"]` (click par gallery khulti hai)
   - Ek photo: `image: "fee-tracker.png"`
   - Excel download: `link: "tracker.xlsx", linkLabel: "Download sample (Excel)"`
3. `category` jitni alag likhoge (HR, Procurement, Events, Finance, Design), utne filter buttons apne aap ban jaenge.
4. Commit karo. Jab tak `items` khali hai, ye section site par nahi dikhta.

## CV download button
CV ki PDF upload karo aur `content.js` mein likho: `cv: "Arslan-CV.pdf",`. Khali rakhoge to button nahi dikhega.

## Privacy
Bacchon ke chehre/naam, staff ki salary, phone numbers ya CNIC wali photos/screenshots public site par mat daalo. Blur karo ya dummy data wali copy banao.

## LinkedIn par lagana
1. Site live hone ke baad `index.html` mein `USERNAME` (4 jagah, `og:image` aur `og:url` mein) apne GitHub username se badal do, taake link share karne par photo aur title ka preview dikhe.
2. LinkedIn: **Profile → Add profile section → Featured → Add a link**, aur site ka link paste karo. Contact info mein bhi "Website" mein daal sakte ho.
3. `content.js` mein `linkedin:` aur `email:` ko apne asli LinkedIn URL aur email se match rakho.

## Naye sections (Nov 2026)

| Folder / field | Kya hai |
|---|---|
| `case-studies/` | Case study ke screenshots |
| `samples/` | Download hone wali dummy Excel files |
| `designs/` | Gallery ke designs (jpg) aur videos (mp4 + poster jpg) |
| `content.js` → `caseStudies.items` | Case studies: problem, action, result, images, link, note |
| `content.js` → `samples.items` | Gallery: `image` / `images: [...]` (set), ya `video: "x.mp4"` + `image: "poster.jpg"` |

Privacy: sirf dummy samples upload karo. Bacchon ke chehre blur, staff/students ke naam hatao.
