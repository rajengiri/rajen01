export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  displayDate: string;
  readingTime: string;
  featured?: boolean;
  content: { heading?: string; paragraphs?: string[]; bullets?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "practical-ai-marketing-plan-small-business",
    title: "How to Build a Practical AI Marketing Plan for a Small Business",
    excerpt: "A clear way to choose useful AI opportunities without adding more tools, complexity, or busywork.",
    category: "AI Marketing",
    date: "2026-10-15",
    displayDate: "October 15, 2026",
    readingTime: "7 min read",
    featured: true,
    content: [
      { paragraphs: ["Demo article — replace or update before launch. AI can help a small business move faster, but only when it supports a clear marketing goal. Start with the customer problem and the business outcome—not the newest tool."] },
      { heading: "Start with one measurable bottleneck", paragraphs: ["Look at where your marketing currently loses momentum. Perhaps content production is inconsistent, enquiries are not followed up quickly, or your team cannot see which campaigns create qualified opportunities."], bullets: ["Choose one priority linked to leads, customers, or efficiency", "Document the current process before changing it", "Decide what a meaningful improvement would look like"] },
      { heading: "Choose the smallest useful AI application", paragraphs: ["The best first use case is usually narrow. Use AI to accelerate research, create a first draft, summarize customer feedback, or prepare follow-up suggestions—while keeping human review where judgment and brand voice matter."] },
      { heading: "Build a repeatable workflow", paragraphs: ["A tool becomes valuable when it fits a process your team can repeat. Define the inputs, review steps, owner, and outcome. Then test the workflow on a small scale before expanding it."] },
    ],
  },
  {
    slug: "turn-website-traffic-into-qualified-leads",
    title: "Five Ways to Turn More Website Traffic into Qualified Leads",
    excerpt: "Practical conversion improvements that help the right visitors understand your value and take the next step.",
    category: "Lead Generation",
    date: "2026-10-08",
    displayDate: "October 8, 2026",
    readingTime: "6 min read",
    content: [
      { paragraphs: ["Demo article — replace or update before launch. More traffic does not automatically create more sales opportunities. A strong website makes the next step clear, useful, and easy for the right visitor."] },
      { heading: "Clarify the outcome on the first screen", paragraphs: ["Visitors should quickly understand who you help, the problem you solve, and what they can do next. Replace broad claims with specific customer outcomes and simple language."] },
      { heading: "Match the offer to buying readiness", bullets: ["Offer a consultation for high-intent visitors", "Provide a useful guide for visitors still researching", "Use service pages to answer specific decision questions", "Reduce unnecessary fields and friction", "Follow up while the enquiry is still relevant"] },
      { heading: "Measure quality, not just quantity", paragraphs: ["Track which pages and messages create conversations with good-fit prospects. A smaller number of qualified enquiries is often more valuable than a large number of weak leads."] },
    ],
  },
  {
    slug: "marketing-automation-without-losing-human-touch",
    title: "Marketing Automation Without Losing the Human Touch",
    excerpt: "How to save time, improve follow-up, and still make every customer interaction feel considered.",
    category: "Marketing Automation",
    date: "2026-10-01",
    displayDate: "October 1, 2026",
    readingTime: "5 min read",
    content: [
      { paragraphs: ["Demo article — replace or update before launch. Good automation removes delays and repetitive tasks. It should make customer communication more relevant and dependable—not more robotic."] },
      { heading: "Automate the handoffs, not the relationship", paragraphs: ["Use automation to capture information, route enquiries, schedule reminders, and prepare context. Keep people involved when empathy, negotiation, or specialist judgment is important."] },
      { heading: "Design from the customer's point of view", bullets: ["Acknowledge enquiries immediately", "Set honest expectations for the next response", "Use customer context to personalize useful information", "Make it easy to reach a real person", "Review automation performance regularly"] },
      { heading: "Keep the system simple", paragraphs: ["A small, reliable workflow is better than a complex system nobody trusts. Start with the most costly delay, test it, and expand only after the process works."] },
    ],
  },
];

export const blogCategories = ["All", "AI Marketing", "Digital Marketing", "Lead Generation", "SEO", "Content Marketing", "Marketing Automation", "Business Growth"];

export function getPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
