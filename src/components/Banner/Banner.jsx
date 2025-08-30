import BannerImg from "../../assets/books.png";
const Banner = () => {
  return (
    <div className="hero bg-[#f0f0f0] h-[554px] my-10 px-10 rounded-xl">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={BannerImg} className="w-full rounded-lg shadow-2xl" />
        <div className="space-y-10">
          <h1 className="text-5xl font-bold">
            Books to freshen up your bookshelf
          </h1>

          <button className="btn text-lg font-semibold bg-[#23BE0A] text-white p-5 rounded-xl">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
