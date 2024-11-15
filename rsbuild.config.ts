import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'luminsign_producer',
      exposes: {
        './DocumentList': './src/producers/DocumentList',
      },
    }),
  ],
  server: {
    port: 3107,
  },
});