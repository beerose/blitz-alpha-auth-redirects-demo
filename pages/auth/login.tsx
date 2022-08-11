import Layout from 'app/core/layouts/Layout';
import { LoginForm } from 'app/auth/components/LoginForm';
import { useRouter } from 'next/router';
import { Routes } from '@blitzjs/next';

const LoginPage = () => {
	const router = useRouter();

	return (
		<Layout title="Log In">
			<LoginForm
				onSuccess={(_user) => {
					const next = router.query.next ? decodeURIComponent(router.query.next as string) : '/';
					return router.push(next);
				}}
			/>
		</Layout>
	);
};

LoginPage.redirectAuthenticatedTo = Routes.Home();

export default LoginPage;
