import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

async function generateOgImage() {
  const width = 1200
  const height = 630

  const svgImage = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#0F172A;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1E293B;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#06B6D4;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#1E40AF;stop-opacity:1" />
        </linearGradient>
      </defs>

      <!-- Background -->
      <rect width="${width}" height="${height}" fill="url(#bg)" />

      <!-- Decorative circles -->
      <circle cx="100" cy="100" r="200" fill="#1E40AF" opacity="0.1" />
      <circle cx="1100" cy="530" r="250" fill="#06B6D4" opacity="0.08" />

      <!-- Grid pattern -->
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#334155" stroke-width="0.5" opacity="0.3" />
      </pattern>
      <rect width="${width}" height="${height}" fill="url(#grid)" />

      <!-- Logo box -->
      <rect x="520" y="140" width="160" height="80" rx="20" fill="url(#accent)" />
      <text x="600" y="195" font-family="Arial, sans-serif" font-size="42" font-weight="bold" fill="#0F172A" text-anchor="middle">EIP</text>

      <!-- Title -->
      <text x="600" y="290" font-family="Arial, sans-serif" font-size="48" font-weight="bold" fill="#FFFFFF" text-anchor="middle">정보처리 학습센터</text>

      <!-- Subtitle -->
      <text x="600" y="350" font-family="Arial, sans-serif" font-size="22" fill="#94A3B8" text-anchor="middle">정보처리기사 · 산업기사 · 프로그래밍기능사</text>
      <text x="600" y="385" font-family="Arial, sans-serif" font-size="22" fill="#94A3B8" text-anchor="middle">필기/실기 종합학습 플랫폼</text>

      <!-- Feature badges -->
      <rect x="180" y="430" width="160" height="44" rx="22" fill="#1E293B" stroke="#334155" stroke-width="1" />
      <text x="260" y="458" font-family="Arial, sans-serif" font-size="16" fill="#06B6D4" text-anchor="middle">CBT 모의시험</text>

      <rect x="370" y="430" width="160" height="44" rx="22" fill="#1E293B" stroke="#334155" stroke-width="1" />
      <text x="450" y="458" font-family="Arial, sans-serif" font-size="16" fill="#06B6D4" text-anchor="middle">코딩 실습</text>

      <rect x="560" y="430" width="160" height="44" rx="22" fill="#1E293B" stroke="#334155" stroke-width="1" />
      <text x="640" y="458" font-family="Arial, sans-serif" font-size="16" fill="#06B6D4" text-anchor="middle">SQL 연습</text>

      <rect x="750" y="430" width="180" height="44" rx="22" fill="#1E293B" stroke="#334155" stroke-width="1" />
      <text x="840" y="458" font-family="Arial, sans-serif" font-size="16" fill="#06B6D4" text-anchor="middle">온라인 강의</text>

      <!-- Bottom bar -->
      <rect x="0" y="560" width="${width}" height="70" fill="#1E293B" />
      <text x="600" y="602" font-family="Arial, sans-serif" font-size="18" fill="#64748B" text-anchor="middle">eip.dreamitbiz.com</text>
    </svg>
  `

  await sharp(Buffer.from(svgImage))
    .png()
    .toFile(join(__dirname, '..', 'public', 'og-image.png'))

  console.log('OG image generated successfully: public/og-image.png')
}

generateOgImage().catch(console.error)
