import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permet l'accès depuis d'autres appareils
    port: 3000,
    strictPort: true,
    // ✅ RECOMMANDÉ : Configuration sécurisée pour Vite 5.4.12+
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '192.168.1.103', // Votre PC
      '192.168.1.104',
      '192.168.1.1',  // Votre téléphone
      '192.168.56.1',  // Interface VirtualBox/VMware
      '.local',        // Domaines .local
      // ✅ AJOUTEZ vos domaines personnalisés ici
      'dev.monapp.local',
      '.dev.local'
    ]
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  }
})
