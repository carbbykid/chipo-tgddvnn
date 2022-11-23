module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screen: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "chipo-heading": "#374048",
        "chipo-blue": "#0084ff",
        "chipo-text": "#4e575f",
        "chipo-bg-second": "#f8fbfd",
        "chipo-gray-blur": "#eee",
        "chipo-orange": "#f62",
      },
      backgroundImage: {
        "contact-bg": "url('/images/home/mobile-ap-bg.jpeg')",
        "hero-shop":
          "url('https://res.cloudinary.com/duv7awivc/image/upload/v1668759173/shop/bg-shop_bhtavi_kgaeel.webp')",
        "hero-home": "url('/images/home/hero-background.jpeg')",
      },
    },
  },
  plugins: [],
};
