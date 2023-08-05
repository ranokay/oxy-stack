import Particles from './components/particles'

const Home = () => {
	return (
		<div className='flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black'>
			<Particles
				className='absolute inset-0 -z-10 animate-fade-in'
				quantity={100}
			/>
			<h1 className='z-10 text-4xl text-transparent duration-1000 bg-gray-200 cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text '>
				Coming Soon
			</h1>
		</div>
	)
}

export default Home
