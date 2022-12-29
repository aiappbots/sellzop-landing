import {
	BoltIcon,
	ChatBubbleLeftRightIcon,
	DevicePhoneMobileIcon,
	DocumentTextIcon,
	GlobeAltIcon,
	LifebuoyIcon,
	ScaleIcon,
} from "@heroicons/react/24/outline";

const features = [
	{
		name: "AI Powered Product Editor",
		description:
			"Creates compelling product descriptions to help businesses showcase their offerings and drive sales.",
		icon: DocumentTextIcon,
	},
	{
		name: "Real Time Product Chat",
		description:
			"A real-time chat option for products to help you increase your store's customer service and engagement.",
		icon: ChatBubbleLeftRightIcon,
	},
	{
		name: "Built-in SEO and social media optimization tools.",
		description:
			"AI-powered SEO to make it easier for potential customers to find your store and products online.",
		icon: BoltIcon,
	},
	{
		name: "Multi-Language and Payment Support",
		description:
			"Sell in any language and currency to increase sales for a greater audience, all over the world.",
		icon: LifebuoyIcon,
	},
];

export default function Feature() {
	return (
		<div className='bg-white py-24 sm:py-32 lg:py-40'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='sm:text-center'>
					<h2 className='text-lg font-semibold leading-8 text-indigo-600'>
						Just some of our features
					</h2>
					<p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
						An easier way to sell products and cars online.
					</p>
					<p className='mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600'>
						Our e-commerce platform is a comprehensive online store builder that
						allows you to sell products and cars.
					</p>
				</div>

				<div className='mt-20 max-w-lg sm:mx-auto md:max-w-none'>
					<div className='grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16'>
						{features.map((feature) => (
							<div
								key={feature.name}
								className='relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row'>
								<div className='flex h-12 w-12 items-center justify-center rounded-xl bg-gray-800 text-white sm:shrink-0'>
									<feature.icon className='h-8 w-8' aria-hidden='true' />
								</div>
								<div className='sm:min-w-0 sm:flex-1'>
									<p className='text-lg font-semibold leading-8 text-gray-900'>
										{feature.name}
									</p>
									<p className='mt-2 text-base leading-7 text-gray-600'>
										{feature.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
