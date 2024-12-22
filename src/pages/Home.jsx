import videoBg from "../assets/11.mp4";
const Home = () => {
  return (
    <div className="relative h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
      />
      <div className="relative z-10 flex items-center justify-center h-full text-center text-white bg-black bg-opacity-50">
        <h1 className="text-4xl md:text-6xl font-bold">Welcome to Anime World</h1>
      </div>
    </div>
  );
};

export default Home;
