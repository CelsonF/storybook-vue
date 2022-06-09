module.exports = {
  //backup - stories: ["../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  stories: ["../../src/stories/**/*.stories.@(js|jsx|ts|tsx|mdx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-docs",
  ],
  framework: "@storybook/vue",
};
