import { defineConfigWithVueless } from "@vueless/storybook";

/** @type { import('@storybook/vue3-vite').StorybookConfig } */
export default defineConfigWithVueless({
  stories: [
    "../src/**/*.stories.@(js|ts|vue)",
    "../.vueless/components/**/*.stories.@(js|ts|vue)",
  ],
  viteFinal: async (config) => {
    return {
      ...config,
      build: {
        ...config.build,
        rollupOptions: {
          ...config.build?.rollupOptions,
          external: ["storybook/internal/preview/runtime"],
        },
      },
    };
  },
});
