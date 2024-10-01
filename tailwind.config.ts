import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./context/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        discord: "url('/discord.png')",
        gradient: "linear-gradient(to bottom, #0f8783, #09af56);",
      },
      // colors: {
      //   primary: "#50b1ae",
      //   secondary: "#54b48c",
      //   danger: "#f04265",
      //   tradewind: {
      //     "50": "#f3fafa",
      //     "100": "#d6f1ee",
      //     "200": "#ace3dd",
      //     "300": "#7bcdc8",
      //     "400": "#50b1ae",
      //     "500": "#369694",
      //     "600": "#297878",
      //     "700": "#255e60",
      //     "800": "#214d4e",
      //     "900": "#1f4242",
      //     "950": "#0d2526",
      //   },
      //   "silver-tree": {
      //     "50": "#effaf4",
      //     "100": "#d9f2e4",
      //     "200": "#b6e4cd",
      //     "300": "#86cfae",
      //     "400": "#54b48c",
      //     "500": "#319871",
      //     "600": "#227959",
      //     "700": "#1b6149",
      //     "800": "#184d3b",
      //     "900": "#144032",
      //     "950": "#0a241d",
      //   },
      //   "radical-red": {
      //     "50": "#fff1f2",
      //     "100": "#fee5e7",
      //     "200": "#fdced5",
      //     "300": "#fba6b3",
      //     "400": "#f8748b",
      //     "500": "#f04265",
      //     "600": "#dd2150",
      //     "700": "#ba1643",
      //     "800": "#9c153e",
      //     "900": "#85163b",
      //     "950": "#4a071c",
      //   },
      // },
    },
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          primary: "#50b1ae",
          secondary: "#54b48c",
          error: "#f04265",
          "base-300": "#7a8aa0",
        },
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          primary: "#50b1ae",
          secondary: "#54b48c",
          error: "#f04265",
          "base-100": "#1d232a",
          "base-200": "#191e24",
          "base-300": "#15191e",
          "neutral": "#2a323c",
          "base-content": "#d6d6d6",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
export default config;
