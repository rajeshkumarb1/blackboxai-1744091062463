export const socialLinks = {
  twitter: "https://twitter.com/yourhandle",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  dribbble: "https://dribbble.com/yourprofile",
  email: "mailto:contact@example.com"
} as const;

export type SocialPlatform = keyof typeof socialLinks;