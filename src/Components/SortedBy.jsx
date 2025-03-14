function SortedBy({ onSort }) {
  const handleChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <label className="flex flex-row items-center p-2 text-xs">
      <p className="text-md font-bold">Sort By:</p>
      <select
        className="bg-neutral-800 p-2 ml-3 text-blue-500 rounded-md"
        defaultValue=""
        onChange={handleChange}
      >
        <option
          value=""
          className="disabled:text-neutral-500 border-none outline-none"
          disabled
        >
          Sorted (default)
        </option>
        <option value="oldest" className="text-sm">
          Oldest
        </option>
        <option value="newest" className="text-sm">
          Newest
        </option>
      </select>
    </label>
  );
}

export default SortedBy;
