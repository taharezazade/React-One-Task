import PropTypes from "prop-types";
import SortedBy from "./SortedBy";
import Status from "./Status";
import Category from "./Category";

function Navbar({ onFilter, onSort, onStatusFilter }) {
  return (
    <div>
      <div className="flex flex-col items-start justify-between w-full h-20 mb-5">
        <h1 className="text-xl font-bold text-center text-blue-500">
          My projects
        </h1>
        <div className="flex flex-row items-center justify-between flex-1 w-full mt-5">
          <Status onStatusFilter={onStatusFilter} />
          <SortedBy onSort={onSort} />
          <Category onFilter={onFilter} />
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  onFilter: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
  onStatusFilter: PropTypes.func.isRequired,
};

export default Navbar;
