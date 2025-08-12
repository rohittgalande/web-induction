"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import type { Session } from "next-auth";
import type { FC } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "../layout.config";
import { FaGoogle, FaMicrosoft, FaSignOutAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const HomePage: FC = () => {
  const { data: session } = useSession() as { data: Session | null };

  return (
    <HomeLayout {...baseOptions}>
      <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
        <motion.div
          className="bg-white shadow-lg hover:shadow-2xl rounded-2xl p-8 max-w-md w-full text-center transform transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          {!session ? (
            <>
              <h1 className="text-3xl font-extrabold mb-2 text-gray-800">
                Welcome to CynLr 🚀
              </h1>
              <p className="mb-8 text-gray-600">
                Sign in to access your dashboard
              </p>

              <div className="flex flex-col gap-4">
                {/* <button
                  onClick={() =>
                    signIn('google', {
                      prompt: 'select_account',
                      redirect: true,
                      callbackUrl: '/',
                    })
                  }
                  className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition duration-200"
                >
                  <FaGoogle size={18} /> Sign in with Google
                </button> */}

                <button
                  onClick={() =>
                    signIn("azure-ad", {
                      prompt: "select_account",
                      redirect: true,
                      callbackUrl: "/",
                    })
                  }
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition duration-200"
                >
                  <FaMicrosoft size={18} /> Sign in with Microsoft
                </button>
              </div>
            </>
          ) : (
            <>
              <motion.h1
                className="text-2xl font-bold mb-4"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                Welcome, {session.user?.name} 🎉
              </motion.h1>
              <p className="mb-4 text-gray-700">{session.user?.email}</p>

              {session.user?.image && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    width={80}
                    height={80}
                    className="rounded-full mx-auto mb-4 border-4 border-blue-200 shadow-sm"
                  />
                </motion.div>
              )}

              <p className="mb-6 text-gray-600">You are now signed in.</p>

              <button
                onClick={() => {
                  signOut({ redirect: false }).then(() => {
                    window.location.href =
                      "https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=" +
                      encodeURIComponent(window.location.origin);
                  });
                }}
                className="flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-lg shadow-md transform hover:scale-105 transition duration-200"
              >
                <FaSignOutAlt size={18} /> Sign out
              </button>
            </>
          )}
        </motion.div>
      </main>
    </HomeLayout>
  );
};

export default HomePage;
