import PropTypes from "prop-types";

function Category({ onFilter }) {
  const handleChange = (e) => {
    onFilter(e.target.value);
  };

  return (
    <label className="flex flex-row items-center p-2 text-xs">
      <p className="text-md font-bold">Tags:</p>
      <select
        className="bg-neutral-800 p-2 ml-3 text-blue-500 rounded-md"
        defaultValue=""
        onChange={handleChange}
      >
        <option value="">All Tags</option>
        <option value="Ui/UX">Ui/UX</option>
        <option value="Design">ِDesign</option>
        <option value="web development">web development</option>
      </select>
    </label>
  );
}

Category.propTypes = {
  onFilter: PropTypes.func.isRequired,
};

export default Category;
