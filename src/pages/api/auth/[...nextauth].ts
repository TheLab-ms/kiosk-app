import NextAuth, { NextAuthOptions } from 'next-auth';
import KeycloakProvider from 'next-auth/providers/keycloak';


const {
	KEYCLOAK_BASE_URL,
	KEYCLOAK_CLIENT_ID,
	KEYCLOAK_CLIENT_SECRET,
	KEYCLOAK_REALM,
} = process.env;

export const authOptions: NextAuthOptions = {
	providers: [
		KeycloakProvider({
			issuer: `${KEYCLOAK_BASE_URL}/realms/${KEYCLOAK_REALM}`,
			clientId: KEYCLOAK_CLIENT_ID,
			clientSecret: KEYCLOAK_CLIENT_SECRET,
			name: 'TheLab.ms',
		}),
	],
	theme: {
		colorScheme: 'light',
	},
	callbacks: {
		async jwt({ token, user, profile }) {
			// if (user && user.email && !token.picture) {
			// 	const emailHash = md5(user.email, { encoding: 'binary' });
			// 	token.picture = `https://www.gravatar.com/avatar/${emailHash}?d=mp`;
			// }
			if (profile && profile.groups) {
				token.groups = profile?.groups || [];
			}
			if (user) {
				token.uid = user.id;
			}
			if (profile?.discord) {
				token.discord = profile.discord;
			}

			return token;
		},
		async session({ session, token }) {
			if (session?.user) {
				session.user.id = token.uid as string;
			}
			if (!session.user.groups) {
				session.user.groups = token.groups || [];
			}
			if (token.discord) {
				session.user.discord = token.discord;
			}
			return session;
		},
	},
};

export default NextAuth(authOptions);