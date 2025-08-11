'use client';

import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/react';
import type { Session } from 'next-auth';
import type { FC } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '../layout.config';

const HomePage: FC = () => {
  const { data: session } = useSession() as { data: Session | null };

  return (
    <HomeLayout {...baseOptions}>
      <main className="flex items-center justify-center min-h-screen text-gray-800 px-4">
        <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
          {!session ? (
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

              {/* <button
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
              </button> */}
            </>
          ) : (
            <>
              <h1 className="text-2xl font-bold mb-4">
                Welcome, {session.user?.name}
              </h1>
              {session.user?.image && (
                <Image
                  src={session.user.image}
                  alt="Profile"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
              )}
              <p className="mb-6 text-gray-600">You are now signed in.</p>
              <button
                onClick={() => signOut()}
                className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-200"
              >
                Sign out
              </button>
            </>
          )}
        </div>
      </main>
    </HomeLayout>
  );
};

export default HomePage;
