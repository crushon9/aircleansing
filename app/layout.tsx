import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://lecella.co.kr"),
  title: "AIR CLEANSING | 피톤치드 스페이스 케어",
  description:
    "편백과 베르가못의 산뜻함을 담은 AIR CLEANSING 피톤치드 스페이스 케어를 소개합니다.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "AIR CLEANSING | 피톤치드 스페이스 케어",
    description:
      "향으로 덮기보다, 공기를 클렌징하다. 편백과 베르가못을 담은 일상 공간 케어.",
    url: "https://lecella.co.kr",
    siteName: "AIR CLEANSING",
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: "/images/air-cleansing-hero.jpg",
        width: 900,
        height: 900,
        alt: "편백과 베르가못 사이의 AIR CLEANSING 제품",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIR CLEANSING | 피톤치드 스페이스 케어",
    description: "향으로 덮기보다, 공기를 클렌징하다.",
    images: ["/images/air-cleansing-hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
