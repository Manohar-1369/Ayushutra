module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        foreground: "#1a1a1a",
        background: "#ffffff",
        // Wellness color palette
        "wellness-green": "hsl(155, 65%, 35%)",
        "wellness-blue": "hsl(200, 80%, 45%)",
        "wellness-amber": "hsl(45, 85%, 65%)",
        "wellness-soft": "hsl(155, 25%, 95%)",
        "wellness-soft/30": "hsl(155, 25%, 95%, 0.3)",
        "wellness-soft/20": "hsl(155, 25%, 95%, 0.2)",
        "wellness-green/20": "hsl(155, 65%, 35%, 0.2)",
        "wellness-green/10": "hsl(155, 65%, 35%, 0.1)",
        "wellness-blue/20": "hsl(200, 80%, 45%, 0.2)",
        "wellness-amber/20": "hsl(45, 85%, 65%, 0.2)",
      },
    },
  },
  plugins: [],
};
