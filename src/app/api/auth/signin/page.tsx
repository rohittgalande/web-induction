'use client';

import { signIn } from 'next-auth/react';
import { FcGoogle } from 'react-icons/fc';
// import { SiMicrosoft } from 'react-icons/si';

export default function SignInPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center animate-fadeIn">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
          Welcome to <span className="text-blue-600">CynLr</span>
        </h1>
        <p className="mb-8 text-gray-500">
          Sign in to access your dashboard and tools.
        </p>

        {/* Google Sign-In */}
        <button
          onClick={() =>
            signIn('google', {
              prompt: 'select_account',
              redirect: true,
              callbackUrl: '/',
            })
          }
          className="flex items-center justify-center gap-3 w-full bg-white border border-gray-300 rounded-lg py-3 text-gray-700 font-medium shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-200 mb-4"
        >
          <FcGoogle size={24} />
          Continue with Google
        </button>

        {/* Microsoft Sign-In */}
        <button
          onClick={() =>
            signIn('azure-ad', {
              prompt: 'select_account',
              redirect: true,
              callbackUrl: '/',
            })
          }
          className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-3 font-medium shadow-md hover:shadow-lg transition-all duration-200"
        >
          {/* <SiMicrosoft size={22} /> */}
          Continue with Microsoft
        </button>

        {/* Divider */}
        <div className="mt-6 flex items-center">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        {/* Footer Text */}
        <p className="mt-6 text-xs text-gray-400">
          By signing in, you agree to our{' '}
          <a href="/terms" className="underline hover:text-gray-600">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="/privacy" className="underline hover:text-gray-600">
            Privacy Policy
          </a>.
        </p>
      </div>
    </div>
  );
}
