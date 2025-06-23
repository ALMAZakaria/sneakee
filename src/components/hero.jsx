
const Hero = () => {
  return (
    <div className="hero-content grid grid-cols-2 gap-4  min-h-screen bg-base-200">
      <div className="flex justify-center items-center">
        <img src="https://screendy-cdn.fra1.cdn.digitaloceanspaces.com/platfrom-v2/_files/file_1750430583519_WhiteWolfLogo.png" className="justify-center max-w-sm rounded-lg shadow-2xl" alt="Hero "
        />
      </div>
      <div className="text-center md:text-left text-white flex flex-col items-center md:items-start">
          <h1 className="text-5xl font-bold">Welcome to Sneakee</h1>
          <p className="py-6">
            Choose your favorite Sneekers and get them delivered to your doorstep.
          </p>
          <button className="btn btn-primary rounded-full px-8 py-4 text-smokey-white hover:text-while bg-blue-400 hover:bg-blue-500 transition duration-300 ease-in-out ">Get Sneaker</button>
      </div>
      
    </div>
  );
}
export default Hero;