import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "aiapaec tech",
    short_name: "aiapaec",
    description: "Soluciones de Inteligencia Artificial y desarrollo tecnológico.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0f172a",
    icons: [
      { src: "/favicon.ico", type: "image/x-icon", sizes: "16x16 32x32 48x48" },
      { src: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { src: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { src: "/icon-192-maskable.png", type: "image/png", sizes: "192x192", purpose: "maskable" },
      { src: "/icon-512-maskable.png", type: "image/png", sizes: "512x512", purpose: "maskable" },
    ],
  }
}
