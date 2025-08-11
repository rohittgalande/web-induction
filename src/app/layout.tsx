import '@/app/global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter, Roboto } from 'next/font/google';
import type { ReactNode } from 'react';
import SessionProvider from './components/SessionProvider';

const inter = Inter({
  subsets: ['latin'],
});


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <SessionProvider>
        <RootProvider  
          // search={{
          //   enabled: false,
          // }}
          >{children}</RootProvider>
        </SessionProvider>
      </body>
    </html>
  );
}


//If you want to use the other search option here is steps
  //  search={{
  //           search: algoliaSearch({
  //             appId: 'YOUR_ALGOLIA_APP_ID',
  //             apiKey: 'YOUR_ALGOLIA_API_KEY',
  //             indexName: 'YOUR_INDEX_NAME',
  //           }),
  //         }}