'use client';

import { signIn } from 'next-auth/react';

export default function SignInPage() {
  return (
     <>
            <h1 className="text-2xl font-bold mb-4">Welcome to CynLr</h1>
            <p className="mb-6 text-gray-600">You are not signed in.</p>
            <button
              onClick={() =>
                signIn('google', {
                  prompt: 'select_account',
                  redirect: true,
                  callbackUrl: '/',
                })
              }
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
            >
              Sign in with Google
            </button>

            <button
              onClick={() =>
                signIn('azure-ad', {
                  prompt: 'select_account',
                  redirect: true,
                  callbackUrl: '/',
                })
              }
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
            >
              Sign in with Microsoft
            </button>
          </>
  );
}
