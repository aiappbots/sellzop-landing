import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TextAction from "../components/TakeAction";

export default function Home() {
	return (
		<div className='bg-blue-800 text-white'>
			<>
				<Header />
				<TextAction />
				<Feature />
				<Footer />
			</>
		</div>
	);
}
