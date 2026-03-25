import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bridge — El puente bilingüe para su negocio en Santa Ana',
  description: 'Conecte con locales y expats. Automatización de citas y FAQ por WhatsApp con IA que detecta el idioma automáticamente.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
