import { Rocket, Store, Landmark, BriefcaseBusiness, Users } from 'lucide-react';

// Editable content. Each `support` item is shown as a labelled row on the Industries page.
export const industries = [
  {
    slug: 'startups-and-entrepreneurs',
    title: 'Startups and Entrepreneurs',
    icon: Rocket,
    summary: 'Setting up the business correctly and building finance habits that scale.',
    intro:
      'Early decisions about structure, records and compliance are hard to change later. We help founders get them right without slowing the business down.',
    support: [
      { area: 'Accounting', text: 'Clean books from the first invoice, with simple tracking of expenses, cash and runway.' },
      { area: 'Taxation', text: 'Clarity on GST, TDS and income tax obligations as soon as the business starts earning or paying.' },
      { area: 'Compliance', text: 'Incorporation, registrations and the annual ROC filings that follow.' },
      { area: 'Advisory', text: 'Choice of entity, budgeting, and preparing financial information for lenders or investors.' },
    ],
  },
  {
    slug: 'small-and-medium-businesses',
    title: 'Small and Medium Businesses',
    icon: Store,
    summary: 'Dependable accounting and compliance for owner-run businesses.',
    intro:
      'Owners of small and medium businesses carry many roles. We take on the accounting and compliance work so that you can focus on running the business.',
    support: [
      { area: 'Accounting', text: 'Regular bookkeeping, reconciliations and monthly reports that show how the business is performing.' },
      { area: 'Taxation', text: 'Income tax, TDS and advance tax planning, with timely filing and documentation.' },
      { area: 'Compliance', text: 'GST returns, input tax credit reconciliation and applicable statutory registrations.' },
      { area: 'Advisory', text: 'Costing, working capital planning and support with bank loan applications.' },
    ],
  },
  {
    slug: 'corporate-businesses',
    title: 'Corporate Businesses',
    icon: Landmark,
    summary: 'Audit, statutory compliance and reporting for companies with larger structures.',
    intro:
      'Companies with multiple stakeholders need dependable reporting and a tight compliance calendar. We work with finance teams to support both.',
    support: [
      { area: 'Accounting', text: 'Support with periodic closing, financial statements and management reporting.' },
      { area: 'Taxation', text: 'Corporate tax computation, TDS compliance, transfer pricing coordination where relevant and assessment support.' },
      { area: 'Compliance', text: 'ROC filings, board and general meeting documentation, and statutory registers.' },
      { area: 'Audit and advisory', text: 'Statutory and internal audit support, and a review of finance processes and controls.' },
    ],
  },
  {
    slug: 'professionals-and-consultants',
    title: 'Professionals and Consultants',
    icon: BriefcaseBusiness,
    summary: 'Tax and record-keeping support for doctors, lawyers, designers, freelancers and consultants.',
    intro:
      'Professionals often have variable income, mixed personal and business expenses and specific tax rules. We help keep this organised and compliant.',
    support: [
      { area: 'Accounting', text: 'Simple records of receipts and expenses, kept in a form that is ready for tax filing.' },
      { area: 'Taxation', text: 'Return filing, advance tax planning and guidance on the presumptive and regular tax options available.' },
      { area: 'Compliance', text: 'GST registration and returns where applicable, and TDS on payments you make.' },
      { area: 'Advisory', text: 'Choosing between practising individually or through a firm, LLP or company, and planning for variable income.' },
    ],
  },
  {
    slug: 'individuals-and-families',
    title: 'Individuals and Families',
    icon: Users,
    summary: 'Tax filing and financial planning for households.',
    intro:
      'Personal finances involve tax, investments, property and family goals at once. We help you see the whole picture and plan with it.',
    support: [
      { area: 'Accounting', text: 'Help organising income, investment and expense records for the year.' },
      { area: 'Taxation', text: 'Return filing, capital gains computation, and guidance on income from property, investments and abroad.' },
      { area: 'Compliance', text: 'Responding to notices and keeping your tax profile, such as PAN and filings, in order.' },
      { area: 'Advisory', text: 'Goal-based planning for education, home purchase and retirement, and guidance on estate planning.' },
    ],
  },
];
