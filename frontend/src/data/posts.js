// ======================================================
// Dummy Backend
// Simulates posts returned from an API
// ======================================================

// Countries (Categories)
export const categories = [
  "Canada",
  "United Kingdom",
  "Germany",
  "Poland",
  "Australia",
  "Ireland",
  "Netherlands",
  "Finland",
  "Norway",
  "Sweden",
  "Denmark",
  "United States"
];

// Ways to Japa (Sub Categories)
export const subcategories = [
  "Study Visa",
  "Work Visa",
  "Scholarship",
  "Employer Sponsorship",
  "Permanent Residency",
  "Masters",
  "PhD",
  "Nursing",
  "Caregiver",
  "Seasonal Work",
  "Digital Nomad",
  "Family Reunion"
];

// Dummy Users
const users = [
  "John Watson",
  "Sarah Johnson",
  "Michael James",
  "Grace Samuel",
  "Victor Adams",
  "Daniel Ojo",
  "Faith Wilson",
  "Blessing Peter",
  "David Emmanuel",
  "Sophia Williams"
];

// Sample Titles
const titles = [
  "How I Got My Visa in Four Months",
  "Everything You Need Before Applying",
  "Avoid These Common Mistakes",
  "Employer Sponsorship Explained",
  "Scholarship Opportunities You Should Know",
  "Living Cost Breakdown",
  "Finding Accommodation Abroad",
  "Visa Interview Questions",
  "My First Job Abroad",
  "Travel Checklist Before Leaving"
];

// Sample Intro
const intros = [
  "Moving abroad looked impossible until I discovered the right application process. Here are the first few things that changed everything.",
  "Many applicants fail because of small mistakes. Learn from my experience before submitting your application.",
  "If you're planning to relocate this year, this guide will save you both time and money.",
  "Employer sponsorship is becoming easier in many countries. Here is exactly how I got mine.",
  "This information can improve your chances of approval and help you avoid common errors."
];

// Full Article
const body = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Suspendisse potenti.

Vivamus condimentum justo sed lorem vulputate, non sollicitudin risus pretium.

Curabitur gravida, arcu eget tincidunt luctus, ipsum nisi dictum ipsum, sed luctus magna mauris ut nisi.

Aliquam erat volutpat.

This dummy text represents the full post that will be displayed inside the Post Details page.

Later this will come from the backend.
`;

// Helper
const random = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generate 100 Posts
const posts = [];

for (let i = 1; i <= 100; i++) {
  posts.push({
    id: i,

    user: random(users),

    avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`,

    title: random(titles),

    intro: random(intros),

    body,

    category: random(categories),

    subcategory: random(subcategories),

    views: Math.floor(Math.random() * 9000) + 100,

    comments: Math.floor(Math.random() * 100),

    date: new Date(
      2026,
      Math.floor(Math.random() * 12),
      Math.floor(Math.random() * 28) + 1
    ).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    }),

    bookmarked: false,
  });
}

export default posts;