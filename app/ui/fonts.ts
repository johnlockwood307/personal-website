import { Geist, Geist_Mono, Inter, Aldrich, Sour_Gummy, Chiron_GoRound_TC } from "next/font/google";

const geistSans = Geist({
  variable: "--font-primary",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-primary",
  subsets: ["latin"],
});

const inter = Inter({
    variable: '--font-primary',
    subsets: ['latin']
});

const aldrich = Aldrich({
    variable: '--font-primary',
    subsets: ['latin'],
    weight: "400"
});

const sourGummy = Sour_Gummy({
    variable: '--font-primary',
    subsets: ['latin']
})

const chironGoRoundTC = Chiron_GoRound_TC({
    variable: '--font-primary',
    subsets: ['latin'],
    weight: "400",
    fallback: ["Arial", "sans-serif"]
})


export default chironGoRoundTC;