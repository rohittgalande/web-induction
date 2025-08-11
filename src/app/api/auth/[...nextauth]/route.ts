import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import AzureADProvider from "next-auth/providers/azure-ad";
// Ensure environment variables are defined (you can enhance this with zod or joi for validation)
  const clientId = process.env.AZURE_AD_CLIENT_ID!    // ✅ Correct key name
  const clientSecret = process.env.AZURE_AD_CLIENT_SECRET! // ✅ Correct key name
  const tenantId = process.env.AZURE_AD_TENANT_ID!

// const azureClientId = process.env.AZURE_AD_CLIENT_ID
// const azureTenantId = process.env.AZURE_AD_TENANT_ID
// const azureAdSecret = process.env.AZURE_AD_CLIENT_SECRET

if (!clientId || !clientSecret || !tenantId) {
  throw new Error("Missing required environment variables for authentication.");
}

export const authOptions: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId,
    //   clientSecret,
    //   authorization: {
    //     params: {
    //       prompt: "select_account",
    //       access_type: "offline",
    //       response_type: "code",
    //     },
    //   },
    // }),

     AzureADProvider({
      clientId,
      clientSecret,
      tenantId
  }),
  ],
  secret: clientSecret,
  pages: {
    signIn: '/auth/signin', // 👈 custom sign-in page path
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
