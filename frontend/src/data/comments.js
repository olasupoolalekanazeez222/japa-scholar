// Dummy comments for all posts

const users = [
  "John Watson",
  "Grace Samuel",
  "Daniel Ojo",
  "Faith Wilson",
  "Victor Adams",
  "Sophia Williams",
  "Michael James",
  "Blessing Peter",
];

const messages = [
  "Thank you for sharing this information.",
  "This really helped me understand the process.",
  "Congratulations on your success.",
  "I have a similar experience.",
  "Can you explain this further?",
  "Very informative.",
  "I appreciate this post.",
  "This is exactly what I was looking for.",
  "How long did the visa process take?",
  "Thanks for the guide."
];

const comments = [];

for (let i = 1; i <= 100; i++) {

  const total = Math.floor(Math.random() * 8) + 3;

  comments[i] = [];

  for (let j = 0; j < total; j++) {

    comments[i].push({

      id: Date.now() + Math.random(),

      user: users[Math.floor(Math.random() * users.length)],

      message: messages[Math.floor(Math.random() * messages.length)],

      date: new Date().toLocaleDateString(),

      mine: false

    });

  }

}

export default comments;