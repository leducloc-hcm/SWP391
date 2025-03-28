import HeroImg from '../../assets/koiImage.png'
import '../../index.css'

function Home() {
  return (
    <div className='content-homepage my-10'>
      <div className='flex flex-col lg:flex-row justify-center items-center h-full p-5'>
        <div className='flex flex-col items-center w-full lg:w-1/2 text-center'>
          <h1 className='text-4xl lg:text-5xl font-bold mb-10'>Koi Care System</h1>
          <p className='text-lg lg:text-xl text-justify font-medium mb-8'>
            The Koi Care System Web is an innovative platform designed to simplify and enhance the management of koi
            ponds. Tailored for koi enthusiasts, breeders, and pond owners, this web application offers a comprehensive
            suite of tools to monitor and maintain the health, growth, and well-being of koi fish. From tracking
            individual koi details such as length, weight, and age to managing pond environments and keeping detailed
            growth histories, the system enables users to effectively oversee their koi collection. With user-friendly
            features like growth charts, sortable lists, and role-based access, the Koi Care System is a powerful
            resource for ensuring the optimal care of these prized fish.
          </p>
        </div>
        <div className='flex flex-col justify-center items-center w-full lg:w-1/2'>
          <img
            src={HeroImg}
            alt=''
            className='animate-slow-spinn rounded-full img-shadow w-full max-w-[500px] mx-auto'
          />
        </div>
      </div>
    </div>
  )
}

export default Home
