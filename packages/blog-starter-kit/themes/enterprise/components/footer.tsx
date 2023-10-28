import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-20 dark:border-neutral-800">
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-14 flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-14 text-center text-xl font-semibold text-slate-900 dark:text-white md:text-4xl">
						{publication.title}
					</p>
				)}
				<div className="flex flex-col w-full gap-5">
					<div className="flex flex-col md:flex-row justify-center gap-3 items-center">
						<p className="text-base dark:text-white">Powered by</p>
						<div className="flex items-center dark:border border-2 border-gray-300 rounded-xl px-4 py-2 bg-slate-50 dark:bg-transparent dark:text-slate-100 gap-3">
							<div>
								<svg className="w-8" viewBox="0 0 337 337" fill="none">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M23.155 112.598c-30.873 30.874-30.873 80.93 0 111.804l89.443 89.443c30.874 30.873 80.93 30.873 111.804 0l89.443-89.443c30.873-30.874 30.873-80.93 0-111.804l-89.443-89.443c-30.874-30.873-80.93-30.873-111.804 0l-89.443 89.443zm184.476 95.033c21.612-21.611 21.612-56.651 0-78.262-21.611-21.612-56.651-21.612-78.262 0-21.612 21.611-21.612 56.651 0 78.262 21.611 21.612 56.651 21.612 78.262 0z" fill="#2962FF"/>
								</svg>
							</div>
							<p className="font-semibold text-base">Headless Hashnode</p>
						</div>
					</div>
					<div className="col-span-2 flex flex-col md:flex-row justify-center items-center gap-5 text-right text-slate-600 dark:text-neutral-300 md:text-left sm:mt-4">
						<SocialLinks />
						<p>&copy; 2023 Victorious Insight.</p>
						<p>
							<a href="#" className="hover:underline">
								Privacy Policy
							</a>{' '}
							·{' '}
							<a href="#" className="hover:underline">
								Terms
							</a>
						</p>
					</div>
				</div>
			</Container>
		</footer>
	);
};
