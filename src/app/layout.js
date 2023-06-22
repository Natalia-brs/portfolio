import './globals.css';
import StyledJsxRegistry from './registry';
import Header from '../app/components/Header';
import { Philosopher, Nunito } from 'next/font/google';

const philosopher = Philosopher({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--philopher-font',
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['300'],
  variable: '--nunito-font',
});

export const metadata = {
  title: 'Portfolio - Natália Brasil ',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html className={`${philosopher.variable} ${nunito.variable}`} lang='en'>
      <body suppressHydrationWarning={true}
      >
        <Header />
        <StyledJsxRegistry>{children}</StyledJsxRegistry>
      </body>
    </html>
  );
}
