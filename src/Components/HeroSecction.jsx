import PropTypes from "prop-types";
function HeroSection({ onShow }) {
  return (
    <div className="Hero flex flex-col items-start justify-between w-full mb-5">
      <h1 className="text-2xl font-bold text-blue-500">List My Projects</h1>
      <button
        onClick={onShow}
        className="btn bg-neutral-800 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-950 hover:transition shadow-neutral-900 rounded-xl px-8 mx-auto mt-5 font-normal text-white duration-300 ease-in-out shadow-lg"
      >
        Show Project
      </button>
      <p className="text-neutral-600 mx-auto mt-2 text-sm">
        Click to show Table Project List
      </p>
    </div>
  );
}

HeroSection.propTypes = {
  onShow: PropTypes.func.isRequired,
};
export default HeroSection;
