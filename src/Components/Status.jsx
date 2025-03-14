import { useState } from "react";
import PropTypes from "prop-types";

function Status({ onStatusFilter }) {
  const [selectedStatus, setSelectedStatus] = useState("ALL");

  const handleFilter = (status) => {
    setSelectedStatus(status);
    onStatusFilter(status);
  };

  return (
    <div className="flex flex-row items-center p-2 text-xs">
      <p className="text-md pr-3 font-bold">Status:</p>
      <button
        className={`px-4 pt-2 pb-1 hover:bg-blue-500 duration-300 ease-in-out hover:transition mx-1 rounded-md ${
          selectedStatus === "ALL" ? "bg-blue-500 text-white" : "bg-none"
        }`}
        onClick={() => handleFilter("ALL")}
      >
        All
      </button>
      <button
        className={`px-4 pt-2 pb-1 hover:bg-blue-500 duration-300 ease-in-out hover:transition mx-1 rounded-md ${
          selectedStatus === "OPEN" ? "bg-blue-500 text-white" : "bg-none"
        }`}
        onClick={() => handleFilter("OPEN")}
      >
        Open
      </button>
      <button
        className={`px-4 pt-2 pb-1 hover:bg-blue-500 duration-300 ease-in-out hover:transition mx-1 rounded-md ${
          selectedStatus === "CLOSED" ? "bg-blue-500 text-white" : "bg-none"
        }`}
        onClick={() => handleFilter("CLOSED")}
      >
        Closed
      </button>
    </div>
  );
}

Status.propTypes = {
  onStatusFilter: PropTypes.func.isRequired,
};

export default Status;
