import Image from "next/image";

import logo from "../public/new_logo.webp";
// import kwesforms from "kwesforms";

const navigation: any = [
	// { name: "About", href: "#" },
	// { name: "Features", href: "#" },
	// // { name: "Docs", href: "#" },
	// { name: "Company", href: "#" },
];

export default function Header() {
	return (
		<header className='bg-gray-800 m-0'>
			<nav className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8' aria-label='Top'>
				<div className='flex w-full items-center justify-between border-b border-indigo-500 py-6 lg:border-none'>
					<div className='flex items-center'>
						<a href='#'>
							<span className='sr-only'>SellZop</span>
							<Image className='h-6' width='100' src={logo} alt='logo' />
						</a>
						<div className='ml-10 hidden space-x-8 lg:block'>
							{navigation.map((link: any) => (
								<a
									key={link.name}
									href={link.href}
									className='text-base font-medium text-white hover:text-indigo-50'>
									{link.name}
								</a>
							))}
						</div>
					</div>
				</div>
				<div className='flex flex-wrap justify-center space-x-6 py-4 lg:hidden'>
					{navigation.map((link: any) => (
						<a
							key={link.name}
							href={link.href}
							className='text-base font-medium text-white hover:text-indigo-50'>
							{link.name}
						</a>
					))}
				</div>
			</nav>
		</header>
	);
}
