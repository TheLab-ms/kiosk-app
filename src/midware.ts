// import { withAuth } from 'next-auth/middleware';

// export default withAuth({
// 	callbacks: {
// 		authorized({ req, token }) {
// 			if (
// 				req.nextUrl.pathname === '/test'
// 			) {
// 				console.log('Admitting because the user is an approver');
// 				return true;
// 			}
// 			console.log('No match');
// 			return false;
// 		},
// 	},
// });

// export const config = {
// 	matcher: ['/test'],
// };