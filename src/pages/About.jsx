import AnimeBackground from "../assets/10.jpg"; 

const About = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${AnimeBackground})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center p-8 md:p-16">
        <h2 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 animate-text">
          About AnimeHub
        </h2>
        <p className="text-lg md:text-xl mt-6 max-w-4xl mx-auto">
          AnimeHub is a place where anime lovers from all over the world come
          together to discover, discuss, and enjoy their favorite shows. We
          provide the latest updates, anime recommendations, and community-driven
          content to keep you engaged and excited about the world of anime.
        </p>
        <div className="mt-12">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg rounded-full shadow-lg hover:scale-105 transition-all duration-300">
            Join the Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
