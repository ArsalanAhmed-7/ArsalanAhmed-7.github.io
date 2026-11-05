/* =====================================================================
   EDIT YOUR PORTFOLIO HERE
   ---------------------------------------------------------------------
   Sirf is file ko edit karo. index.html aur style.css ko chhedne ki
   zarurat nahi.

   Rules:
   - Text hamesha "double quotes" ke andar rakho.
   - Har line ke end par comma (,) zaroor rakho.
   - Text ke andar double quote chahiye to \" likho.
   - Naya item add karna ho to koi purani line copy karke paste kar do
     aur uska text badal do.
   ===================================================================== */

window.SITE = {

  /* ---------- Basic info ---------- */
  name: "Arsalan Ahmed",
  initials: "AA",
  tagline: "Administrative & Operations Professional",
  location: "Thatta, Sindh",
  email: "arslankh7@gmail.com",
  linkedin: "https://www.linkedin.com/in/arslan-khushk/",
  photo: "portrait.jpg",          // photo ki file ka naam (repository mein upload karo)
  cv: "",                         // CV ki PDF ka naam, jaise "Arslan-CV.pdf" (khali = button nahi dikhega)
  photoGrayscale: false,           // true = black & white, false = colour

  /* ---------- Page title / description (Google aur browser tab ke liye) ---------- */
  pageTitle: "Arsalan Ahmed — Administration & Operations",
  pageDescription: "Arsalan Ahmed — administrative and operations professional with experience in school administration, HR, procurement, accounting and event coordination.",

  /* ---------- Top section (hero) ---------- */
  intro: "I’m an administrative and operations professional with 6+ years of experience helping an education institution run smoothly—from staff coordination and student records to procurement, HR documentation, accounting, and events.",
  currentRole: "Currently Administrative Officer at Wisdom English Academy",

  /* ---------- 3 numbers (bade numbers wali strip) ---------- */
  highlights: [
    { number: "30+",  label: "employees coordinated across daily operations" },
    { number: "500+", label: "students supported through records and parent communication" },
    { number: "10+",  label: "institutional events planned and coordinated" }
  ],

  /* ---------- "What I do" section ---------- */
  work: {
    title: "Keeping the whole operation moving.",
    description: "A cross-functional role built on dependable coordination, organized records, and clear communication.",
    cards: [
      { tag: "Operations",    title: "Day-to-day coordination",         text: "Coordinate organizational requirements, staff communication, tasks, and daily operations across a team of 30+ employees." },
      { tag: "Student admin", title: "Records for a learning community", text: "Maintain administrative records and parent communication for 500+ students, including student fee and admin records in IMS." },
      { tag: "People & HR",   title: "Employee administration",          text: "Prepare contracts, offer letters, onboarding documents, professional warnings, disciplinary records, and other employee documentation." },
      { tag: "Procurement",   title: "Purchasing & vendors",             text: "Coordinate suppliers and purchasing for stationery, books, uniforms, furniture, equipment, and other institutional needs." },
      { tag: "Finance",       title: "Accounting & fee records",         text: "Maintain fee records, daily transactions, income and expenses; support reporting, budgeting, expense monitoring, and fee recovery." },
      { tag: "Events",        title: "Events & stakeholder liaison",     text: "Plan and coordinate 10+ institutional events, and liaise with external authorities, associations, district administration, and unions." }
    ]
  },

  /* ---------- Experience section (sabse naya sabse upar) ---------- */
  experience: {
    title: "Growing with the work.",
    description: "Progressed through three roles at Wisdom English Academy, building experience from accounting into broader administration and operations.",
    jobs: [
      {
        dates: "Aug 2023 — Present",
        role: "Administrative Officer",
        org: "Wisdom English Academy",
        points: [
          "Lead day-to-day administrative and operational coordination.",
          "Supervise 30+ employees and support records and communication for 500+ students.",
          "Coordinate procurement, employee documentation, budgeting support, events, and external liaison.",
          "Support organizational IT systems, Canva, social media, branding, and video editing."
        ]
      },
      {
        dates: "Feb 2021 — Jul 2023",
        role: "Administrative Assistant",
        org: "Wisdom English Academy",
        points: [
          "Managed admissions, registrations, student records, GR registers, and official documentation.",
          "Handled parent inquiries and supported accounting, fee records, and daily operations.",
          "Prepared reports and correspondence using Microsoft Office and Excel."
        ]
      },
      {
        dates: "Apr 2019 — Jan 2021",
        role: "Accountant",
        org: "Wisdom English Academy",
        points: [
          "Managed fee records, daily transactions, income, and expenses.",
          "Prepared financial reports, supported expense and budget monitoring, and followed up on outstanding fees.",
          "Maintained accurate, organized, and confidential financial files."
        ]
      }
    ]
  },

  /* ---------- Work samples (photos, Excel trackers, designs) ----------
     Har item ek card banata hai. Fields:
       title      : card ka naam
       category   : "HR", "Procurement", "Events", "Finance", "Design" jaisi category.
                    Jitni alag categories likhoge, utne filter buttons ban jaenge.
       text       : 1-2 line ki detail
       image      : ek photo   (YA)
       images     : [ "a.jpg", "b.jpg", "c.jpg" ]  -> ek card mein kai photos, click par gallery
       link       : optional (Excel/PDF file ya Google Sheet ka link)
       linkLabel  : link ke button ka text
     Jab tak items khali hain, ye section site par nahi dikhta.
     Photos GitHub mein upload karo aur yahan unka naam likho.
     PRIVACY: bacchon ke chehre/naam, staff ki salary, phone numbers pehle blur ya hata do. */
  samples: {
    title: "A look at my work.",
    description: "Meetings, trackers, procurement records and events from day-to-day operations.",
    items: [
      // Neeche wali lines ka // hata kar apna content daalo (har item ke end par comma):
      // { title: "Monthly Staff Meeting", category: "HR", text: "Agenda, minutes and follow-up with 30+ staff.", images: ["hr-meeting-1.jpg", "hr-meeting-2.jpg"] },
      // { title: "Furniture & Stationery Purchase", category: "Procurement", text: "Vendor comparison, quotations and purchase record.", image: "procurement-1.jpg", link: "quotation-comparison.xlsx", linkLabel: "Download sample (Excel)" },
      // { title: "Fee Recovery Tracker", category: "Finance", text: "Excel tracker for monthly fee follow-up.", image: "fee-tracker.png" },
      // { title: "Annual Day", category: "Events", text: "Planned and coordinated with district guests.", images: ["event-1.jpg", "event-2.jpg", "event-3.jpg"] }
    ]
  },

  /* ---------- Skills & training section ---------- */
  skills: {
    title: "Tools, training & recognition.",
    description: "Practical administrative strengths, supported by business education, IT training, and hands-on digital content experience.",
    list: [
      "Administration & operations",
      "Procurement & vendor management",
      "HR administration",
      "Staff coordination",
      "Accounting & bookkeeping",
      "Budgeting & expense management",
      "Documentation & records",
      "Microsoft Office & Excel",
      "IMS / ERP systems",
      "Events & stakeholder liaison",
      "Canva & graphic design",
      "Social media & video editing"
    ],
    education: "BBA, Shah Abdul Latif University · 2019–2022",   // CV se year check kar lena
    languages: "English, Urdu, Sindhi, Siraiki",
    courses: [
      { title: "Diploma in Information Technology", detail: "Easytech Institute · 2024–25" },
      { title: "Advanced Excel Associate",          detail: "Easytech Institute · Nov 2025–Apr 2026" },
      { title: "Emergency Management Training",     detail: "Rescue 1122 & Government of Sindh · 2026" },
      { title: "Certificates of Appreciation",      detail: "Administrative excellence, event coordination, and institutional contribution" }
    ]
  },

  /* ---------- Contact box (neeche) ---------- */
  contact: {
    title: "Need a reliable hand with administration and operations?",
    text: "For professional opportunities and collaboration, get in touch by email or connect with me on LinkedIn."
  },

  footerText: "Administration & Operations"
};
