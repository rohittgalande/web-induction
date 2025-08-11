import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {

  nav: {
    title: (
      <>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Logo"
        >
          
        </svg>
        CynLr
      </>
    ),

    
  },
  // see https://fumadocs.dev/docs/ui/navigation/links
   links: [
    {
      text: 'Onbording Kit',
      url: '/docs',
      active: 'nested-url',
    },

    {
      text: 'Policies',
      url: '/policies',
      active: 'nested-url',
    }
  ],
};



// import { Home, FileText } from "lucide-react";
// import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

// export const baseOptions: BaseLayoutProps = {
//   nav: {
//     title: (
//       <>
//         <svg width="24" height="24" aria-label="Logo"></svg>
//         CynLr
//       </>
//     ),
//   },
//   links: [
//     {
//       text: (
//         <span className="flex items-center gap-2 border px-3 py-1 rounded-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
//           <Home size={16} /> Onboarding Kit
//         </span>
//       ),
//       url: "/docs",
//       active: "nested-url",
//     },
//     {
//       text: (
//         <span className="flex items-center gap-2 border px-3 py-1 rounded-lg transition-all hover:bg-gray-100 dark:hover:bg-gray-800">
//           <FileText size={16} /> Documentation
//         </span>
//       ),
//       url: "/more",
//     },
//   ],
// };
