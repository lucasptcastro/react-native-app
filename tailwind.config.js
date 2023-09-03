/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./src/*.{js,jsx,ts,tsx}",
    "./App.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: "Roboto_400Regular",
        body: "Roboto_700Bold",
        alt: "Nunito_400Regular",
        // title: "Nunito_700Bold",
        // title: "Comfortaa_400Regular",
        // title: "Comfortaa_700Bold",
        // title: "Poppins_400Regular",
        // title: "Poppins_700Bold",
      },
    },
  },
  plugins: [],
};
