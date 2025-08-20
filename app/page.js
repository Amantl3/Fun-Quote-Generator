 "use client";

import { useState } from "react";
import { motion } from "framer-motion";

const quotes = [
  "Happiness depends upon ourselves. — Aristotle",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "It always seems impossible until it's done. — Nelson Mandela",
  "Turn your wounds into wisdom. — Oprah Winfrey",
  "Simplicity is the ultimate sophistication. — Leonardo da Vinci",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "In the middle of every difficulty lies opportunity. — Albert Einstein",
  "What you get by achieving your goals is not as important as what you become by achieving your goals. — Zig Ziglar",
  "Happiness is not something ready made. It comes from your own actions. — Dalai Lama",
  "Act as if what you do makes a difference. It does. — William James",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "Everything you can imagine is real. — Pablo Picasso",
  "Whatever you are, be a good one. — Abraham Lincoln",
  "Dream big and dare to fail. — Norman Vaughan",
  "What we think, we become. — Buddha",
  "Strive not to be a success, but rather to be of value. — Albert Einstein",
  "Life is really simple, but we insist on making it complicated. — Confucius",
  "Keep your face always toward the sunshine—and shadows will fall behind you. — Walt Whitman",
  "You miss 100% of the shots you don’t take. — Wayne Gretzky",
  "It does not matter how slowly you go as long as you do not stop. — Confucius",
  "Quality is not an act, it is a habit. — Aristotle",
  "Do not wait to strike till the iron is hot, but make it hot by striking. — William Butler Yeats",
  "Everything has beauty, but not everyone sees it. — Confucius",
  "All our dreams can come true, if we have the courage to pursue them. — Walt Disney",
  "The best way to predict your future is to create it. — Peter Drucker",
  "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
  "The secret of getting ahead is getting started. — Mark Twain",
  "A journey of a thousand miles begins with a single step. — Lao Tzu",
  "Perseverance is not a long race; it is many short races one after the other. — Walter Elliot",
  "Fall seven times and stand up eight. — Japanese Proverb",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "Hardships often prepare ordinary people for an extraordinary destiny. — C.S. Lewis",
  "Do not let what you cannot do interfere with what you can do. — John Wooden",
  "Start where you are. Use what you have. Do what you can. — Arthur Ashe",
  "With the new day comes new strength and new thoughts. — Eleanor Roosevelt",
  "Failure is simply the opportunity to begin again, this time more intelligently. — Henry Ford",
  "Opportunities don't happen. You create them. — Chris Grosser",
  "Act as if what you do makes a difference. It does. — William James",
  "Setting goals is the first step in turning the invisible into the visible. — Tony Robbins",
  "If you can dream it, you can do it. — Walt Disney",
  "The only way to do great work is to love what you do. — Steve Jobs",
  "Don’t let yesterday take up too much of today. — Will Rogers",
  "Little by little, one travels far. — J.R.R. Tolkien",
  "Don’t count the days, make the days count. — Muhammad Ali",
  "I never dreamed about success, I worked for it. — Estee Lauder",
  "Courage is grace under pressure. — Ernest Hemingway",
  "Life is 10% what happens to us and 90% how we react to it. — Charles R. Swindoll",
  "An unexamined life is not worth living. — Socrates",
  "Knowing yourself is the beginning of all wisdom. — Aristotle",
  "He who has a why to live can bear almost any how. — Friedrich Nietzsche",
  "Don’t be pushed by your problems. Be led by your dreams. — Ralph Waldo Emerson",
  "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
  "Go confidently in the direction of your dreams. Live the life you have imagined. — Henry David Thoreau",
  "Happiness is not by chance, but by choice. — Jim Rohn",
  "Be yourself; everyone else is already taken. — Oscar Wilde",
  "To live is the rarest thing in the world. Most people exist, that is all. — Oscar Wilde",
  "Without music, life would be a mistake. — Friedrich Nietzsche",
  "To love oneself is the beginning of a lifelong romance. — Oscar Wilde",
  "Imagination is more important than knowledge. — Albert Einstein",
  "A friend to all is a friend to none. — Aristotle",
  "Not life, but good life, is to be chiefly valued. — Socrates",
  "Man is the measure of all things. — Protagoras",
  "The only true wisdom is in knowing you know nothing. — Socrates",
  "Well begun is half done. — Aristotle",
  "Time is money. — Benjamin Franklin",
  "Energy and persistence conquer all things. — Benjamin Franklin",
  "Do not go where the path may lead, go instead where there is no path and leave a trail. — Ralph Waldo Emerson",
  "That which does not kill us makes us stronger. — Friedrich Nietzsche",
  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Aristotle",
  "Life isn’t about finding yourself. It’s about creating yourself. — George Bernard Shaw",
  "In three words I can sum up everything I’ve learned about life: It goes on. — Robert Frost",
  "If you want to live a happy life, tie it to a goal, not to people or things. — Albert Einstein",
  "Keep going. Be all in. — Bryan Hutchinson",
  "What we achieve inwardly will change outer reality. — Plutarch",
  "We must not allow other people’s limited perceptions to define us. — Virginia Satir",
  "You can’t cross the sea merely by standing and staring at the water. — Rabindranath Tagore",
  "When you arise in the morning, think of what a precious privilege it is to be alive. — Marcus Aurelius",
  "Limit your ‘always’ and your ‘nevers’. — Amy Poehler",
  "Nothing is impossible, the word itself says ‘I’m possible’! — Audrey Hepburn",
  "The purpose of our lives is to be happy. — Dalai Lama",
  "Get busy living or get busy dying. — Stephen King",
  "You only live once, but if you do it right, once is enough. — Mae West",
  "Many of life’s failures are people who did not realize how close they were to success when they gave up. — Thomas Edison",
  "Money and success don’t change people; they merely amplify what is already there. — Will Smith",
  "Not how long, but how well you have lived is the main thing. — Seneca",
  "If life were predictable it would cease to be life, and be without flavor. — Eleanor Roosevelt",
  "The big lesson in life, baby, is never be scared of anyone or anything. — Frank Sinatra",
  "Curiosity about life in all of its aspects, I think, is still the secret of great creative people. — Leo Burnett",
  "Life is not a problem to be solved, but a reality to be experienced. — Søren Kierkegaard",
  "The unexamined life is not worth living. — Socrates",
  "Turn your wounds into wisdom. — Oprah Winfrey",
  "Live for each second without hesitation. — Elton John",
  "Life is short, and it is here to be lived. — Kate Winslet",
  "Keep smiling, because life is a beautiful thing and there’s so much to smile about. — Marilyn Monroe"
];

export default function Home() {
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);

  const getNewQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === quote);
    setQuote(newQuote);
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      textAlign: "center"
    }}>
      <h1 style={{
        fontSize: "2rem",
        marginBottom: "30px",
        color: "#333"
      }}>
        Long day? Get a quote to cheer you up!
      </h1>

      <motion.div
        key={quote}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          maxWidth: "600px",
          background: "#fff",
          padding: "30px",
          borderRadius: "20px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          fontSize: "1.2rem",
          color: "#555"
        }}
      >
        {quote}
      </motion.div>

      <button
        onClick={getNewQuote}
        style={{
          marginTop: "30px",
          padding: "12px 25px",
          fontSize: "1rem",
          borderRadius: "10px",
          border: "none",
          background: "#ff6b81",
          color: "#fff",
          cursor: "pointer",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          transition: "background 0.3s"
        }}
        onMouseEnter={e => e.target.style.background = "#ff4757"}
        onMouseLeave={e => e.target.style.background = "#ff6b81"}
      >
        New Quote
      </button>
    </div>
  );
}
