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
  linkedin: "https://www.linkedin.com/in/arsalan-khushk/",
  photo: "portrait.jpg",          // photo ki file ka naam (repository mein upload karo)
  cv: "Arsalan-Ahmed-CV.pdf",      // CV ki PDF ka naam, jaise "Arslan-CV.pdf" (khali = button nahi dikhega)
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

  /* ---------- Case studies (Problem -> What I did -> Result) ----------
     Har item ek poora case study banata hai. Fields:
       category : "Finance", "HR", "Procurement" jaisi category
       context  : chhoti line, jaise "Wisdom English Academy · 2025"
       title    : case study ka naam
       summary  : 1 line mein kya banaya
       tools    : [ "Excel Tables", "SUM / SUBTOTAL" ]  -> chhote tags
       problem  : pehle masla kya tha (text)
       action   : aapne kya kiya -> [ "point 1", "point 2" ] (list) ya ek text
       result   : nateeja -> [ "point 1", "point 2" ] ya ek text
       metrics  : optional bade numbers -> [ { number: "3", label: "linked sheets" } ]
       image / images : screenshot(s), click par bada dikhta hai
       link, linkLabel : sample file ka download button
     Jab tak items khali hain, ye section site par nahi dikhta.
     SIRF ASLI BAATEIN likho. Numbers tabhi likho jab sach mein pata hon.
     PRIVACY: sirf dummy sample files/screenshots, asli naam/salary/amount nahi. */
  caseStudies: {
    title: "Case studies.",
    description: "Selected projects from my work, each showing the problem, what I built or changed, and the result.",
    items: [
      {
        category: "Finance",
        context: "Wisdom English Academy",
        title: "Automated Monthly Account Workbook",
        summary: "An Excel workbook I built to replace the manual ledger, bringing the month's income, expenses, balances and cash into one place.",
        tools: ["Microsoft Excel", "Excel Tables", "Structured references", "INDEX / MATCH", "Conditional formatting", "Charts"],
        problem: "Monthly accounts were kept in a manual ledger. Totals had to be worked out by hand, and income, expenses, liabilities and receivables sat in separate places, so there was no single view of where the month stood.",
        action: [
          "Built a three-sheet workbook: Income, Expenses and a Main summary.",
          "Set up daily entry tables where each row totals automatically and each column sums by category or department.",
          "Linked the Main sheet to both tables so it updates on its own, showing income by category, expenses by department, liabilities, receivables and stock.",
          "Added a month-end calculation from opening balance through income and expenses to cash in hand, plus a cash denomination count to check physical cash.",
          "Built a Dashboard sheet with KPI cards, income share by category, budget vs actual by department with automatic Over / Near limit / Within budget status, the top 5 expenses, and income, expense and daily-income charts."
        ],
        result: [
          "The month-end summary is produced automatically instead of being totalled by hand from the ledger.",
          "All of the month's financial information is in one workbook, and the dashboard shows management the position and any over-budget departments at a glance."
        ],
        images: ["case-studies/case-monthly-account-dashboard.jpg", "case-studies/case-monthly-account-main.jpg", "case-studies/case-monthly-account-income.jpg"],
        link: "samples/Monthly_Account_Sample.xlsx",
        linkLabel: "Download sample (Excel)",
        note: "Sample file and screenshots use dummy figures."
      },
      {
        category: "Finance & HR",
        context: "Wisdom English Academy",
        title: "Monthly Payroll System, 31 Staff",
        summary: "A formula-driven payroll workbook that turns monthly attendance and leave records into each staff member's final salary.",
        tools: ["Microsoft Excel", "Payroll formulas", "Attendance tracking"],
        problem: "Payroll was prepared on a plain Excel sheet with no formulas. Working days, leave deductions and net salaries for every staff member were calculated by hand each month, which took time and left room for mistakes.",
        action: [
          "Built a formula-driven payroll sheet for 31 staff covering basic salary, leave with pay, leave without pay, working days, conveyance, increment, advances and deductions.",
          "Kept a separate monthly attendance tracker, printed and signed by staff, which the payroll is prepared from.",
          "Formulas calculate working days and adjust each salary for leave automatically, in line with institute policy.",
          "Deducted the 10% monthly staff security deposit and any advances to reach the net amount payable. Salaries are paid by bank transfer, with signed salary slips kept on record."
        ],
        result: [
          "Salaries are calculated automatically by the same rules for every employee, instead of by hand.",
          "Every month there is a complete, signed record of attendance, leave and payment for each staff member."
        ],
        images: ["case-studies/case-salary-sheet.jpg"],
        link: "samples/Salary_Sheet_Sample.xlsx",
        linkLabel: "Download sample (Excel)",
        note: "Sample file and screenshot use dummy names and figures."
      },
      {
        category: "Academics & Admin",
        context: "Wisdom English Academy",
        title: "Exam Marksheet & Result System",
        summary: "An Excel marksheet I built for final exams and assessments that calculates each student's total, percentage and class position automatically.",
        tools: ["Microsoft Excel", "SUM", "RANK", "IF formulas"],
        problem: "Exam marksheets were raw sheets with no formulas. Each student's total, percentage and class position had to be worked out by hand for every class, which was slow at result time and left room for mistakes.",
        action: [
          "Built one workbook with separate sheets for Pre-School, Classes 1–3 and Classes 4–8, each with its own subjects and maximum marks.",
          "Included continuous-assessment components such as class and homework, presentation and attendance alongside written subjects.",
          "Formulas calculate obtained marks, percentage and class position for every student as soon as marks are entered.",
          "Kept maximum marks in a header row so percentages adjust automatically if a subject's total changes."
        ],
        result: [
          "Totals, percentages and positions are produced automatically for each class instead of being worked out by hand.",
          "The same marksheet is reused for every exam and assessment, so results are consistent across classes."
        ],
        images: ["case-studies/case-exam-marksheet.jpg"],
        link: "samples/Exam_Marksheet_Sample.xlsx",
        linkLabel: "Download sample (Excel)",
        note: "Sample file and screenshot use dummy student names and marks."
      },
      {
        category: "HR & People",
        context: "Wisdom English Academy",
        title: "HR Documentation & Employee Lifecycle",
        summary: "An HR documentation system I designed and built, covering every stage of employment from application and contract to attendance, leave, discipline and exit.",
        tools: ["Microsoft Word", "HR policy", "Documentation", "Record keeping"],
        problem: "HR paperwork had no fixed structure. Hiring, contracts, attendance, leave and disciplinary matters were not handled in a standard format, so there was no consistent written record for each staff member.",
        action: [
          "Created a standard Employment Application Form covering personal details, education, training, languages, work history and references.",
          "Drafted the Employee Job Contract setting out the term, salary date, 10% security deposit, notice period, leave entitlement, late-arrival rules and duties.",
          "Set up a monthly Staff Attendance Register, organised by section, for 30+ staff.",
          "Introduced Leave Application and Short Leave Approval forms with incharge recommendation, leave balance and approval steps.",
          "Issued formal circulars and warning and termination letters with reference numbers, following a documented disciplinary process."
        ],
        result: ["Every stage of employment now follows one structured process with its own standard document.", "Each staff member's hiring, attendance, leave and disciplinary history is kept on written record."],
        images: ["hr/hr_employment_form_1.jpg","hr/hr_employment_form_2.jpg","hr/hr_contract_1.jpg","hr/hr_contract_2.jpg","hr/hr_attendance_1.jpg","hr/hr_leave_application.jpg","hr/hr_short_leave.jpg","hr/hr_circular.jpg","hr/hr_termination.jpg"],
        note: "Names, dates and reference numbers replaced with placeholders."
      },
      {
        category: "Procurement",
        context: "Wisdom English Academy",
        title: "Procurement & Vendor Management",
        summary: "A documented purchasing process for stationery and books, from section requisitions and vendor comparison to the annual book order and publisher account checks.",
        tools: ["Microsoft Excel", "Requisition forms", "Vendor comparison", "Reconciliation"],
        problem: "Purchasing for a school of 500+ students and 30+ staff means many separate requests from different sections, more than one supplier for each item, and a large annual book order, all of which need to be controlled and recorded.",
        action: [
          "Introduced a Stationery / Goods Requisition form so each teacher or section requests items in writing.",
          "Consolidate requisitions from Pre-Primary, Primary, Secondary and the office into one purchase list.",
          "Collect rates from two vendors and compare them item by item to choose the better quote, then take it to the owner for approval.",
          "Prepare the class-wise book list each session and build the order from student-wise demand, adding 10% extra sets for new admissions.",
          "Keep a record of book invoices and payments and check it against the publisher's account statement."
        ],
        result: [
          "Every purchase follows one route, from written request to comparison, approval and record.",
          "Book orders are planned student by student with a 10% buffer for new admissions, and supplier balances can be checked against the school's own records."
        ],
        images: ["case-studies/case-procurement-comparison.jpg", "case-studies/case-requisition-form.jpg", "case-studies/case-book-list.jpg", "case-studies/case-book-order.jpg"],
        link: "samples/Procurement_Comparison_Sample.xlsx",
        linkLabel: "Download comparison sample (Excel)",
        link2: "samples/Book_Order_Sample.xlsx",
        link2Label: "Download book order sample (Excel)",
        note: "Samples use dummy vendors, prices and quantities. Original invoices and statements are not shown."
      },
      {
        category: "Events",
        context: "Wisdom English Academy",
        title: "Event Management & Promotion",
        summary: "End-to-end planning, coordination and promotion of school events, from the first plan to edited videos on the academy's social media.",
        tools: ["Event planning", "Duty scheduling", "Canva", "CapCut", "Social media"],
        problem: "School events need many moving parts to come together on one day: a plan, decoration, staff duties, parent communication and, afterwards, coverage that shows the school's work to families and the wider community.",
        action: [
          "Organise each event with management, then prepare the full plan: programme, requirements and arrangements.",
          "Schedule staff duties so every area of the event has a clear owner on the day.",
          "Coordinate the event on the day, from decoration and stage set-up to activity and food stalls.",
          "Design the invitations and posters beforehand, then edit photos and videos and publish them on the academy's Facebook and Instagram pages.",
          "Events include Sindhi Culture Day, Winter Fest 2026, Parent–Teacher Meetings and the Picnic 2K25 trip to Karachi."
        ],
        result: [
          "Each event runs from one plan with assigned duties, and is followed by professionally edited coverage on social media.",
          "Ran the online prefect election campaign, which drew 1,800+ comments from the school community."
        ],
        metrics: [{ number: "10+", label: "institutional events planned and coordinated" }, { number: "1,800+", label: "comments on the online prefect election campaign" }],
        mediaLabel: "photos & videos",
        images: [
          "events/sindhi-culture-day-stage.jpg",
          { video: "events/sindhi-culture-day-highlights.mp4", poster: "events/sindhi-culture-day-highlights-poster.jpg" },
          "events/sindhi-culture-day-backdrop.jpg",
          "events/sindhi-culture-day-entrance.jpg",
          "events/sindhi-culture-day-stalls.jpg",
          "events/sindhi-culture-day-students.jpg",
          "designs/invitation-winter-wonderland.jpg",
          "events/winter-fest-welcome-board.jpg",
          "events/winter-fest-stage.jpg",
          "events/winter-fest-performance.jpg",
          "events/winter-fest-activity-stall.jpg",
          "events/winter-fest-display-board.jpg",
          { video: "events/picnic-2025-highlights.mp4", poster: "events/picnic-2025-highlights-poster.jpg" },
          "events/ptm-entrance.jpg",
          "events/ptm-parent-teacher-desk.jpg",
          { video: "designs/ptm-presentation-video.mp4", poster: "designs/ptm-presentation-video-poster.jpg" }
        ]
      }
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
    title: "Design & content work.",
    description: "Social media posts, print materials and videos I designed and produced for the academy in Canva. Personal details and children's faces are removed or blurred.",
    items: [
      { title: "Pre-Entry Test Notice", category: "Social media", text: "Announcement for the academy's official pages sharing the pre-entry test date for Classes I–X and the registration deadline.", image: "designs/notice-pre-entry-test.jpg" },
      { title: "Winter Holidays Announcement", category: "Social media", text: "Facebook post announcing the winter break dates in a seasonal theme with the school's branding.", image: "designs/winter-holidays-notice.jpg" },
      { title: "Ramadan Timings Notice", category: "Social media", text: "Ramadan Kareem post announcing the school's special timings for the month, with Arabic calligraphy and an Islamic-architecture theme.", image: "designs/ramadan-timings-notice.jpg" },
      { title: "School Closure Notice", category: "Social media", text: "Holiday closure announcement in a clean pinned-note layout with one clear message.", image: "designs/closure-notice-chehlum.jpg" },
      { title: "Final Exams Animated Post", category: "Video", text: "Short animated post for Facebook and Instagram announcing the final exam start date, with text that builds in step by step.", video: "designs/exams-animated-post.mp4", image: "designs/exams-animated-post-poster.jpg" },
      { title: "Parent–Teacher Meeting Presentation", category: "Video", text: "Animated presentation for the pre-school Parent–Teacher Meeting, covering the agenda, grading components, feedback and how parents can support learning at home.", video: "designs/ptm-presentation-video.mp4", image: "designs/ptm-presentation-video-poster.jpg" },
      { title: "Admission Campaign Poster (Pre-School)", category: "Marketing", text: "Admission poster for the pre-school intake, designed for print and social media, highlighting the 18-year milestone, admission offers and programme features. Children's faces blurred for privacy.", image: "designs/admission-open-preschool.jpg" },
      { title: "Admission Banner 2025–26 (Print)", category: "Marketing", text: "Large-format admission banner, Montessori to Matric, highlighting the school's facilities and 20-year milestone in the academy's navy-and-gold branding. Student photos blurred for privacy.", image: "designs/admission-banner-print.jpg" },
      { title: "Winter Wonderland Event Invitation", category: "Events", text: "Invitation for the pre-school Winter Wonderland event, inviting parents to a day of music, dance performances, food stalls and games.", image: "designs/invitation-winter-wonderland.jpg" },
      { title: "Parent–Teacher Meeting Poster", category: "Events", text: "Facebook announcement for the pre-school Parent–Teacher Meeting with date, time and venue in a warm, easy-to-read layout.", image: "designs/ptm-poster-preschool.jpg" },
      { title: "Recruitment Posts", category: "HR & Recruitment", text: "Hiring posts for the academy's official page, advertising teaching and accounts roles with clear requirements and one contact for applications.", images: ["designs/hiring-post-teachers.jpg", "designs/hiring-post-accountant-teacher.jpg"] },
      { title: "Pre-School Report Cards", category: "Print design", text: "Kid-friendly report cards for Nursery and Kindergarten: a filled annual card and two blank templates with marks, grades, grading key and sign-off. Personal details removed.", images: ["designs/report-card-preschool-annual.jpg", "designs/report-card-nursery.jpg", "designs/report-card-kindergarten.jpg"] },
      { title: "Student & Staff ID Cards", category: "Print design", text: "ID card system in the academy's branding: student card with a QR code linking to the school's contact number, and a two-sided staff card with role details and terms of use. Names replaced with placeholders.", images: ["designs/student-id-card.jpg", "designs/staff-id-card-front.jpg", "designs/staff-id-card-back.jpg"] },
      { title: "Teacher Appreciation Certificate", category: "Print design", text: "Certificate of Appreciation for teachers, recognising punctuality and dedication, in a formal gold-and-navy style. Recipient name replaced with a placeholder.", image: "designs/certificate-teacher-appreciation.jpg" },
      { title: "Summer Vacation Homework Cover", category: "Print design", text: "Printed cover for students' summer homework, kid-friendly and on-brand, with space for name, father's name, class and section.", image: "designs/summer-vacation-cover.jpg" }
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
    education: "BBA, Shah Abdul Latif University · 2019–2023",
    languages: "English, Urdu, Sindhi, Siraiki",
    courses: [
      { title: "Diploma in Information Technology", detail: "Easytech Institute · 2024–25" },
      { title: "Advanced Excel Associate",          detail: "Easytech Institute · Nov 2025–Apr 2026" },
      { title: "Emergency Management Training",     detail: "Rescue 1122 & Government of Sindh · 2026" },
      { title: "Certificates of Appreciation",      detail: "Administrative excellence, event coordination, and institutional contribution" }
    ]
  },

  /* ---------- Recommendation (letter se quote) ---------- */
  testimonial: {
    title: "In the words of my principal.",
    quote: "Throughout his service, Mr. Arsalan has shown himself to be reliable, well-organised and honest, and has handled financial and confidential matters with care. He works well with staff, parents and management, and regularly takes the initiative to improve the academy's systems.",
    by: "Principal",
    org: "Wisdom English Academy, Makli Campus",
    image: "case-studies/recommendation-letter.jpg",
    linkLabel: "View recommendation letter",
    note: "Signature and stamp blurred for the web version. Original letter available on request."
  },

  /* ---------- Contact box (neeche) ---------- */
  contact: {
    title: "Need a reliable hand with administration and operations?",
    text: "For professional opportunities and collaboration, get in touch by email or connect with me on LinkedIn."
  },

  footerText: "Administration & Operations"
};
