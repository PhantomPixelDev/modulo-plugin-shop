// Builds resources/dist/plugin.js: an ES module whose React, Inertia and
// @modulo/ui imports stay bare, so the core's single copies are used (the
// same preset as @modulo/plugin-sdk, inlined because it isn't published).
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const SHARED = ['react', 'react-dom', 'react/jsx-runtime', '@inertiajs/react', '@modulo/ui'];

export default defineConfig({
    plugins: [react()],
    define: { 'process.env.NODE_ENV': JSON.stringify('production') },
    build: {
        outDir: 'resources/dist',
        emptyOutDir: true,
        lib: { entry: 'resources/js/index.tsx', formats: ['es'], fileName: () => 'plugin.js' },
        rollupOptions: {
            external: (id) => SHARED.includes(id) || SHARED.some((shared) => id.startsWith(`${shared}/`)),
        },
    },
});
