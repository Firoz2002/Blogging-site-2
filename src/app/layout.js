// app/layout.js
'use client'
import { MantineProvider } from '@mantine/core';
import { useLocalStorage } from '@mantine/hooks';

import './globals.css';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function RootLayout({ children }) {
  // Get the color scheme from local storage or default to 'light'
  const [colorScheme, setColorScheme] = useLocalStorage({ key: 'color-scheme', defaultValue: 'light' });

  const toggleColorScheme = () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Next.js App with Mantine</title>
      </head>
      <body>
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
          <div>
            <Header />
              {children}
            <Footer />
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
