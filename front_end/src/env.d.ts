interface ImportMetaEnv {
  MODE: string
  BASE_URL: string
  // EmailJS Configuration
  VITE_EMAILJS_SERVICE_ID: string
  VITE_EMAILJS_TEMPLATE_ID: string
  VITE_EMAILJS_PUBLIC_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
} 