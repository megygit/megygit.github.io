import ssbTaxCover from "@/assets/pub-ssb-tax.png";
import evalFrameworkCover from "@/assets/pub-eval-framework.png.asset.json";
import interimReportCover from "@/assets/pub-interim-report.png.asset.json";
import evalReposCover from "@/assets/pub-eval-repos.png.asset.json";
import fnInvestmentCover from "@/assets/pub-fn-investment.png.asset.json";
import fnWomenCover from "@/assets/pub-fn-women.png.asset.json";
import fnBus2025Cover from "@/assets/pub-fn-bus-2025.png.asset.json";
import influenzaCover from "@/assets/pub-influenza.png.asset.json";
import fnBus2022Cover from "@/assets/pub-fn-bus-2022.png.asset.json";
import empoweringHousingCover from "@/assets/pub-empowering-housing.png.asset.json";
import fnCbaCover from "@/assets/pub-fn-cba.png.asset.json";

export type Publication = {
  title: string;
  publisher: string;
  type: "Report" | "Technical Paper" | "Policy Brief" | "Journal Article";
  year: number;
  coauthors?: string;
  summary: string;
  cover: string;
  href: string;
};

export const publications: Publication[] = [
  {
    title: "Current state of the evidence on taxation of sugar-sweetened beverages",
    publisher: "Journal of Health Monitoring — in review (forthcoming)",
    type: "Journal Article",
    year: 2026,
    summary:
      "Structured review of international evidence on SSB taxation, informing the German Federal Ministry of Health's decision to adopt the measure. Currently in peer review.",
    cover: ssbTaxCover,
    href: "#",
  },
  {
    title: "Evaluation framework for the Joint Action PreventNCD",
    publisher: "Scandinavian Journal of Public Health — Sage",
    type: "Journal Article",
    year: 2025,
    coauthors: "with Loss, Thißen, Lange, Löbl, Mbodj, Mensink",
    summary:
      "A comprehensive evaluation approach for a complex, multi-layered public health project spanning 27 EU countries and 700+ partners.",
    cover: evalFrameworkCover.url,
    href: "https://journals.sagepub.com/doi/10.1177/14034948251363869",
  },
  {
    title: "Joint Action PreventNCD — Interim Evaluation Report (M1–M16)",
    publisher: "EU Joint Action PreventNCD · Robert Koch Institute",
    type: "Report",
    year: 2025,
    summary:
      "Interim evaluation of the €95M EU Joint Action's first sixteen months — assessing outputs, contribution to objectives and cross-country coordination performance.",
    cover: interimReportCover.url,
    href: "https://www.preventncd.eu/resources/deliverables/interim-evaluation-report-m1m16/",
  },
  {
    title: "Evaluation Resource Repository",
    publisher: "EU Joint Action PreventNCD",
    type: "Report",
    year: 2025,
    summary:
      "A curated repository of evaluation tools, indicators and methods to support member states in evaluating non-communicable disease prevention initiatives.",
    cover: evalReposCover.url,
    href: "https://www.preventncd.eu/resources/guides-frameworks/evaluation-resource-repository/",
  },
  {
    title: "NSW First Nations Investment Framework — Technical Appendix: Cost-Benefit Analysis",
    publisher: "NSW Treasury (TPG24-28)",
    type: "Report",
    year: 2024,
    coauthors: "lead author, Technical CBA Appendix",
    summary:
      "A guide to design, economic appraisal and evaluation of First Nations initiatives — now the NSW Government's evidence standard for investments affecting First Nations communities.",
    cover: fnInvestmentCover.url,
    href: "https://www.nsw.gov.au/nsw-government/public-sector/financial-information-for-public-entities/centre-for-economic-evidence/nsw-government-investment-framework/first-nations-investment-framework#toc-technical-appendix-cost-benefit-analysis",
  },
  {
    title: "Valuing First Nations Cultures in Cost-Benefit Analysis",
    publisher: "NSW Treasury — Research Paper",
    type: "Technical Paper",
    year: 2024,
    summary:
      "Research paper on methods for recognising and valuing First Nations cultures within cost-benefit analysis of government initiatives.",
    cover: fnCbaCover.url,
    href: "https://www.nsw.gov.au/departments-and-agencies/nsw-treasury/documents-library/valuing-first-nations-cultures-cost-benefit-analysis",
  },
  {
    title: "First Nations Women's Economic Participation Review — Pathways to Prosperity",
    publisher: "NSW Treasury — Technical Research Paper (TRP23-05)",
    type: "Technical Paper",
    year: 2023,
    summary:
      "Six-month national review engaging 200+ First Nations women, producing six policy recommendations now reflected in state policy and contributing to $10M+ in Aboriginal-led school mentoring programmes.",
    cover: fnWomenCover.url,
    href: "https://www.nsw.gov.au/departments-and-agencies/nsw-treasury/documents-library/trp23-05",
  },
  {
    title: "NSW First Nations Business Sector Report 2025",
    publisher: "NSW Treasury — Technical Research Paper",
    type: "Technical Paper",
    year: 2025,
    summary:
      "An updated evidence base on the size, composition and growth of the NSW First Nations business sector, informing procurement and industry policy.",
    cover: fnBus2025Cover.url,
    href: "https://www.nsw.gov.au/departments-and-agencies/nsw-treasury/documents-library/nsw-first-nations-business-sector-report",
  },
  {
    title: "Boosting the NSW Influenza Vaccination Rate",
    publisher: "NSW Productivity Commission",
    type: "Report",
    year: 2023,
    summary:
      "Economic analysis of the benefits of increasing influenza vaccination among healthy populations in NSW — quantifying productivity, health-system and labour-market returns.",
    cover: influenzaCover.url,
    href: "https://www.nsw.gov.au/departments-and-agencies/nsw-productivity-and-equality-commission/document-library/boosting-nsw-influenza-vaccination-rate",
  },
  {
    title: "The NSW First Nations Business Sector — A Return to Prosperity",
    publisher: "NSW Treasury — Technical Research Paper",
    type: "Technical Paper",
    year: 2022,
    summary:
      "First systematic economic profile of the NSW First Nations business sector — foundational evidence base underpinning subsequent policy and procurement reform.",
    cover: fnBus2022Cover.url,
    href: "https://www.nsw.gov.au/departments-and-agencies/nsw-treasury/documents-library/nsw-first-nations-business-sector-report",
  },
  {
    title: "Empowering First Nations Women through Secure Housing",
    publisher: "Global Voices — Policy Paper",
    type: "Policy Brief",
    year: 2023,
    summary:
      "Policy paper on supporting First Nations women through secure housing, developed as part of the UN CSW68 Australian Youth Delegation and Policy Fellowship.",
    cover: empoweringHousingCover.url,
    href: "https://www.globalvoices.org.au/post/empowering-first-nations-women-through-secure-housing",
  },
];

export type Writing = {
  title: string;
  publisher: string;
  year: number;
  href: string;
  summary: string;
};

export const writing: Writing[] = [
  {
    title:
      "Unveiling Greenwashing: CSW 2024 Insights on Women's and Indigenous Land Rights",
    publisher: "Global Voices",
    year: 2024,
    href: "https://www.globalvoices.org.au/post/unveiling-greenwashing-csw-2024-insights-on-women-s-and-indigenous-land-rights",
    summary:
      "Reflections from CSW68 on the gap between environmental commitments and lived reality for indigenous women and communities.",
  },
  {
    title: "Advocating for change: Insights from Global Voices Scholars",
    publisher: "University of Sydney",
    year: 2024,
    href: "https://www.sydney.edu.au/arts/news-and-events/news/2024/04/09/advocating-for-change-insights-from-global-voices-scholars.html",
    summary:
      "On the experience of representing Australia at the UN Commission on the Status of Women and the policy work behind it.",
  },
  {
    title:
      "Meg Yates reflects on empowering experience at UN Commission on Women",
    publisher: "The Area News",
    year: 2024,
    href: "https://www.areanews.com.au/story/8577409/meg-yates-reflects-on-empowering-experience-at-un-commission-on-women/",
    summary:
      "Local press coverage of the CSW68 delegation and the First Nations women's policy work that led to the selection.",
  },
];

export type Engagement = {
  title: string;
  client: string;
  year: string;
  summary: string;
  tags: string[];
};

export const currentEngagements: Engagement[] = [
  {
    title: "EU Joint Action Prevent NCD — Lead Evaluator",
    client:
      "Robert Koch Institute · EU Commission · German Federal Ministry of Health",
    year: "2025 — Present",
    summary:
      "Leading evaluation of a €95M EU Joint Action coordinating 700+ partners across 27 countries and 100 institutions. Designing evaluation frameworks, collecting and analysing cross-country performance data, and producing evidence-based assessment reports for EU Commission and ministerial audiences.",
    tags: ["Programme evaluation", "Public health economics", "EU multilateral"],
  },
  {
    title: "Sugar-Sweetened Beverages Tax — Policy Advisory",
    client: "German Federal Ministry of Health",
    year: "2025",
    summary:
      "Authored the policy brief on SSB taxation for the German Federal Ministry of Health, drawing on international evidence to inform the case for adoption. Germany subsequently announced adoption of the measure.",
    tags: ["Health policy", "Fiscal policy", "Ministerial advisory"],
  },
  {
    title: "Germany Representative — OECD Expert Group on Public Health Economics",
    client: "OECD · Robert Koch Institute",
    year: "2025 — Present",
    summary:
      "Representing Germany in the OECD's expert working group on public health economics — contributing to cross-country evidence synthesis and policy development on non-communicable disease prevention.",
    tags: ["Public health economics", "International representation", "OECD"],
  },
  {
    title: "First Nations Cost-Benefit Analysis Framework",
    client: "First Nations Economics (Independent Consulting)",
    year: "2024 — Present",
    summary:
      "Developing a CBA framework for government initiatives under the National Agreement on Closing the Gap — modelling costs and benefits and translating findings into ministerial-ready policy recommendations aligned with community self-determination principles.",
    tags: ["Cost-benefit analysis", "Indigenous policy", "Ministerial advice"],
  },
];

export type Experience = {
  role: string;
  org: string;
  location: string;
  period: string;
  bullets: string[];
};

export const formerRoles: Experience[] = [
  {
    role: "Policy Analyst / Economist",
    org: "NSW Treasury — Economic Evidence & Evaluation",
    location: "Sydney, Australia",
    period: "May 2021 — May 2024",
    bullets: [
      "Prepared ministerial briefings and policy papers for the NSW Treasurer, Chief Economist and Productivity Commissioner within 24–48 hour timeframes across housing, productivity, environment and First Nations policy.",
      "Led the First Nations Women's Economic Participation Review — six-month national consultation engaging 200+ women, producing recommendations now reflected in state policy and contributing to $10M+ in Aboriginal-led school mentoring programmes.",
      "Developed the NSW First Nations Investment Framework technical appendix — adopted as NSW Government evidence standard for evaluating investments affecting First Nations communities.",
      "Quality-assured 100+ regulatory impact and cost-benefit analyses each exceeding $50M; identified and halted a $1B infrastructure project on value-for-money grounds; recommendation adopted by the Minister.",
      "Selected as Australian youth delegate and policy fellow to the UN Commission on the Status of Women, New York, 2024.",
    ],
  },
  {
    role: "Business Development Executive",
    org: "Singapore Airlines — APAC Region",
    location: "Sydney, Australia",
    period: "Dec 2018 — May 2021",
    bullets: [
      "Supported Regional Vice President with strategic analysis, briefings and conference materials across Asia-Pacific.",
      "Conducted revenue performance, marketing ROI and sales analysis to inform regional strategy.",
      "Coordinated and presented at national roadshow to 8,000+ trade partners across Australia.",
    ],
  },
];

export type Education = {
  degree: string;
  institution: string;
  year: string;
  note: string;
};

export const education: Education[] = [
  {
    degree: "Master of Economics — Distinction",
    institution: "University of Sydney",
    year: "2023",
    note: "Advanced coursework in macroeconomics, econometrics and applied policy analysis.",
  },
  {
    degree: "Bachelor of Commerce and International Studies — Distinction",
    institution: "UNSW Sydney",
    year: "2014 — 2018",
    note: "Majors in Business Strategy & Economic Management and International Business; minor in German. Exchange year at Ludwig-Maximilians-Universität München, Germany (2016–17).",
  },
];

export type Speaking = {
  event: string;
  role: string;
  topic: string;
  location: string;
  year: number;
  yearLabel?: string;
};

export const speaking: Speaking[] = [
  {
    event: "EU Joint Action Prevent NCD — General Assembly",
    role: "Presenter & Panelist",
    topic:
      "Presenter on Engaging Key Actors in NCD Prevention; Panelist on Prevention Pays: The Investment Case for NCD Prevention",
    location: "Rome",
    year: 2025,
  },
  {
    event: "EU Joint Action Prevent NCD — General Assembly",
    role: "Facilitator",
    topic:
      "Facilitation of Panel on Community Health Promotion across Europe",
    location: "Katowice",
    year: 2024,
  },
  {
    event: "UN Commission on the Status of Women (CSW68)",
    role: "Australian Youth Delegate & Policy Fellow",
    topic: "First Nations women's economic development",
    location: "New York",
    year: 2024,
  },
  {
    event: "Launch of the First Nations Women's Economic Participation Review",
    role: "Speaker",
    topic: "First Nations women's economic participation",
    location: "NSW Parliament House",
    year: 2024,
  },
  {
    event: "Economic Society of Australia — National Conference",
    role: "Presenter",
    topic: "Present novel methods on capturing the value of First Nations cultures in cost-benefit analysis",
    location: "Sydney",
    year: 2023,
  },
];

export type Recognition = {
  title: string;
  detail: string;
  year: number;
};

export const recognition: Recognition[] = [
  {
    title: "Germany Representative, OECD Expert Group on Public Health Economics",
    detail:
      "Representing Germany in OECD's cross-country working group on public health economics and NCD prevention.",
    year: 2025,
  },
  {
    title: "Australian Youth Delegate & Policy Fellow, UN CSW68",
    detail:
      "Selected to represent Australia at the UN Commission on the Status of Women, New York, in recognition of work on First Nations women's economic development.",
    year: 2024,
  },
  {
    title: "NSW Treasury Culture Champion",
    detail:
      "Recognised for promoting inclusivity and positive team culture across the Economic Evidence & Evaluation portfolio.",
    year: 2023,
  },
  {
    title: "$1B Infrastructure Project — Value-for-Money Finding",
    detail:
      "Identified poor value-for-money in a >$1B proposal during quality assurance of NSW cost-benefit analyses; recommendation adopted by the Minister.",
    year: 2022,
  },
];
