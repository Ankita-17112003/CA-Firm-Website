import { Calculator, ReceiptText, ClipboardCheck, BookOpenText, Building2, Scale, TrendingUp, Briefcase } from 'lucide-react';

// Editable content. Wording is deliberately general: confirm scope, forms and statutory references with the firm before publishing.
export const services = [
  {
    slug: 'taxation-and-tax-planning',
    title: 'Taxation & Tax Planning',
    icon: Calculator,
    summary: 'Income tax return filing, advance tax, TDS and planning for individuals and businesses.',
    overview:
      'Support with income tax compliance and planning, so that returns are filed accurately and tax decisions are made with the full picture in view.',
    includes: [
      'Income tax return (ITR) preparation and filing',
      'Advance tax computation and payment reminders',
      'TDS and TCS calculation, deposit and return support',
      'Tax planning for individuals, partnership firms and companies',
      'Help with notices, assessments and departmental responses',
    ],
    benefits: [
      'Salaried individuals with more than one source of income',
      'Business owners, partnership firms and companies',
      'Professionals and freelancers',
      'Non-resident Indians with income in India',
    ],
    assist:
      'We review your income, investments and expenses, explain the options available under the prevailing law, and handle the filing and documentation. If you receive a notice, we help you understand what is being asked and prepare the response.',
  },
  {
    slug: 'gst-registration-and-compliance',
    title: 'GST Registration and Compliance',
    icon: ReceiptText,
    summary: 'GST registration, return filing, input tax credit reconciliation and notice support.',
    overview:
      'End-to-end help with Goods and Services Tax, from getting registered to filing returns on time and keeping your input tax credit in order.',
    includes: [
      'GST registration and amendments to registration details',
      'Preparation and filing of periodic returns such as GSTR-1 and GSTR-3B, and annual return support',
      'Input tax credit (ITC) reconciliation with GSTR-2B and books',
      'Guidance on e-invoicing and e-way bills',
      'Support with notices, refunds and registration cancellation or revocation',
    ],
    benefits: [
      'New businesses applying for GST registration',
      'Traders, manufacturers and service providers',
      'Online sellers and businesses supplying across states',
      'Businesses that have received a GST notice or mismatch alert',
    ],
    assist:
      'We set up a simple compliance routine around your invoicing and purchase records, file returns within the due dates, and flag mismatches early so they can be fixed before they turn into notices.',
  },
  {
    slug: 'audit-and-assurance',
    title: 'Audit & Assurance',
    icon: ClipboardCheck,
    summary: 'Statutory, tax and internal audit support with clear reporting.',
    overview:
      'Independent review of financial records that builds confidence for owners, lenders, regulators and other stakeholders.',
    includes: [
      'Statutory audit support for companies and LLPs',
      'Tax audit where required under Section 44AB of the Income Tax Act',
      'Internal audit and review of processes and controls',
      'Audits and certifications required for banks, lenders or regulatory purposes',
      'Audit of trusts, societies and other entities where applicable',
    ],
    benefits: [
      'Companies and LLPs with a statutory audit requirement',
      'Businesses and professionals whose turnover or receipts call for a tax audit',
      'Owners who want an independent view of internal controls',
      'Entities that need audited statements or certificates for a loan',
    ],
    assist:
      'We agree the scope and timeline up front, ask for documents in a clear checklist, and share findings and recommendations in plain language along with the formal report.',
  },
  {
    slug: 'accounting-and-bookkeeping',
    title: 'Accounting and Bookkeeping',
    icon: BookOpenText,
    summary: 'Accurate books, periodic financial statements and MIS reporting.',
    overview:
      'Reliable day-to-day accounting that keeps your records audit-ready and gives you numbers you can actually use.',
    includes: [
      'Regular bookkeeping and voucher entry using accounting software suited to your business',
      'Bank, debtor and creditor reconciliations',
      'Preparation of Profit & Loss account, Balance Sheet and cash flow statements',
      'Payroll and statutory deduction support such as PF, ESI and professional tax, where applicable',
      'Monthly or quarterly MIS reports',
    ],
    benefits: [
      'Startups and small businesses without an in-house accountant',
      'Growing businesses whose records have become hard to track',
      'Professionals who want clean records for tax filing',
      'Businesses preparing for an audit or a loan application',
    ],
    assist:
      'We take over the routine accounting work or review what your team maintains, and give you regular summaries so you always know where cash, receivables and expenses stand.',
  },
  {
    slug: 'company-registration-and-business-setup',
    title: 'Company Registration and Business Setup',
    icon: Building2,
    summary: 'Private limited, LLP and proprietorship setup with the required registrations.',
    overview:
      'Help choosing the right structure for your business and completing the registrations needed to start operating properly.',
    includes: [
      'Formation of private limited companies, LLPs, one person companies, partnership firms and proprietorships',
      'PAN, TAN, GST and Udyam (MSME) registration',
      'Digital signature certificate and director identification number assistance',
      'Drafting of MoA, AoA, LLP agreements and partnership deeds',
      'Guidance on shop and establishment, professional tax and similar local registrations',
    ],
    benefits: [
      'First-time entrepreneurs and startup founders',
      'Professionals moving from individual practice to a firm or company',
      'Family businesses formalising their structure',
      'Foreign or non-resident founders setting up in India',
    ],
    assist:
      'We explain how each structure differs in liability, compliance load and taxation, help you choose, and then manage the paperwork so the business is registered correctly from the start.',
  },
  {
    slug: 'corporate-compliance',
    title: 'Corporate Compliance',
    icon: Scale,
    summary: 'Annual filings, ROC compliance and statutory record maintenance.',
    overview:
      'Ongoing support with the filings and records that companies and LLPs are required to maintain under company and LLP law.',
    includes: [
      'Annual filings with the Registrar of Companies, such as AOC-4 and MGT-7',
      'Director KYC and event-based filings for changes in directors, capital or registered office',
      'Annual filings for LLPs, such as Form 11 and Form 8',
      'Preparation of notices, agendas and minutes for board and general meetings',
      'Maintenance of statutory registers and records',
    ],
    benefits: [
      'Private limited companies and LLPs',
      'Startups that have been incorporated but have no compliance routine yet',
      'Companies with changing shareholding or board composition',
      'Businesses that have missed filings and need to regularise them',
    ],
    assist:
      'We maintain a compliance calendar for your entity, prepare the required documents ahead of each due date, and help bring overdue filings up to date where needed.',
  },
  {
    slug: 'financial-planning-and-advisory',
    title: 'Financial Planning and Advisory',
    icon: TrendingUp,
    summary: 'Goal-based planning and structured guidance on cash flow, savings and investments.',
    overview:
      'Structured guidance that connects your income, savings and goals, for individuals, families and business owners.',
    includes: [
      'Goal-based planning for education, home purchase, retirement and other milestones',
      'Cash flow review and budgeting',
      'Review of existing investments and protection needs in the context of your goals',
      'Tax-aware planning of investments and withdrawals',
      'Guidance on succession and estate planning, in coordination with legal professionals',
    ],
    benefits: [
      'Families planning for major expenses',
      'Business owners separating personal and business finances',
      'Professionals with irregular or variable income',
      'People approaching retirement or a major life change',
    ],
    assist:
      'We start by understanding your goals and current position, then set out a clear plan and review it periodically. Where a recommendation involves regulated investment products, it will be made only as permitted under applicable regulations.',
  },
  {
    slug: 'business-consulting',
    title: 'Business Consulting',
    icon: Briefcase,
    summary: 'Practical advice on costing, budgeting, controls and growth decisions.',
    overview:
      'Practical, numbers-led advice for owners who want to make better decisions about pricing, spending, funding and growth.',
    includes: [
      'Costing and pricing review',
      'Budgeting, forecasting and cash flow planning',
      'Review of internal controls and finance processes',
      'Preparation of project reports and support with bank loan documentation',
      'Management reports and dashboards for regular review',
    ],
    benefits: [
      'Owners planning to expand, add a product line or open a new location',
      'Businesses applying for a loan or external funding',
      'Companies seeing growth without matching profit',
      'Management teams that want better financial visibility',
    ],
    assist:
      'We work with your team to understand how the business earns and spends, identify where the numbers point to a problem or an opportunity, and agree on practical next steps.',
  },
];
