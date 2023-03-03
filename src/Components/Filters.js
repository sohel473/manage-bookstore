import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { statusChange } from "../redux/Filters/actions";

export default function Filters() {
  const filters = useSelector((state) => state.filters);

  const { status } = filters;

  const dispatch = useDispatch();

  const handleStatusChange = (e) => {
    dispatch(statusChange(e.target.innerText));
  };

  return (
    <>
      <div className="flex items-center space-x-4">
        <button
          className={`filter-btn ${status === "All" && "active-filter"}`}
          id="lws-filterAll"
          onClick={handleStatusChange}
        >
          All
        </button>
        <button
          className={`filter-btn ${
            status === "Featured" && "active-filter"
          }`}
          id="lws-filterFeatured"
          onClick={handleStatusChange}
        >
          Featured
        </button>
      </div>
    </>
  );
}
