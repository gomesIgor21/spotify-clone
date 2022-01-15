import { getProviders, signIn } from 'next-auth/react';

function Login({ providers }) {
  
	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center bg-black">
			<img className="w-52 mb-5" src="https://links.papareact.com/9xl" />
			{Object.values(providers).map((provider) => (
				<div key={provider.name}>
					<button className="text-white bg-[#18D860] p-5 rounded-full" onClick={() => signIn(provider.id, {callbackUrl: "/"})}>
						Login with {provider.name}
					</button>
				</div>
			))}
		</div>
	);
}

export default Login;

export async function getServerSideProps() {
	const providers = await getProviders();

	return {
		props: {
			providers,
		},
	};
}
