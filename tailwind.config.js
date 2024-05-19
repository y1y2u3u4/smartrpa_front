/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "colors-background-bg-primary": "#fff",
        "colors-border-border-secondary": "#eaecf0",
        "component-colors-components-buttons-secondary-button-secondary-fg":
          "#344054",
        royalblue: "#175cd3",
        mediumvioletred: "#c11574",
        "component-colors-utility-success-utility-success-700": "#067647",
        "colors-background-bg-secondary": "#f9fafb",
        "colors-text-text-quaternary-500": "#667085",
        "component-colors-components-buttons-primary-button-primary-bg":
          "#7e56d9",
        "component-colors-components-buttons-secondary-button-secondary-border":
          "#d0d5dd",
        "component-colors-components-buttons-tertiary-button-tertiary-fg":
          "#475467",
        "component-colors-components-buttons-secondary-color-button-secondary-color-border":
          "#d6bbfb",
        "component-colors-components-buttons-secondary-color-button-secondary-color-fg":
          "#6941c6",
        "colors-text-text-primary-900": "#101828",
        "component-colors-utility-success-utility-success-600": "#079455",
      },
      spacing: {
        "container-padding-desktop": "32px",
        "spacing-3xl": "24px",
        "spacing-4xl": "32px",
        "spacing-xxs": "2px",
        "spacing-lg": "12px",
        "spacing-xs": "4px",
        "spacing-sm": "6px",
        "spacing-xl": "16px",
        "spacing-md": "8px",
        "spacing-2xl": "20px",
        "width-xxs": "320px",
      },
      fontFamily: {
        "roboto-mono": "'Roboto Mono'",
        "text-sm-semibold": "Inter",
      },
      borderRadius: {
        "9980xl": "9999px",
        "radius-xl": "12px",
        "radius-md": "8px",
        "spacing-sm": "6px",
        "radius-full": "9999px",
        "radius-sm": "6px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      lg: "18px",
      base: "16px",
      "11xl": "30px",
      inherit: "inherit",
    },
    screens: {
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
