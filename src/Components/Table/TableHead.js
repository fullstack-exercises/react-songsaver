import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function TableHead() {
  return (
    <thead className="border-b">
      <tr>
        <th
          scope="col"
          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
          width="20%"
        >
          <a href="#" className="group inline-flex">
            Song
            <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
              <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
            </span>
          </a>
        </th>
        <th
          scope="col"
          className="py-3.5 text-left text-sm font-semibold text-gray-900"
          width="20%"
        >
          <a href="#" className="group inline-flex">
            Artist
            {/* <span className="ml-2 flex-none rounded bg-gray-100 text-gray-900 group-hover:bg-gray-200">
              <ChevronDownIcon
                className="h-5 w-5"
                aria-hidden="true"
              />
            </span> */}
          </a>
        </th>
        <th
          scope="col"
          className="py-3.5 text-left text-sm font-semibold text-gray-900"
          width="20%"
        >
          <a href="#" className="group inline-flex">
            Genre
            <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
              <ChevronDownIcon
                className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                aria-hidden="true"
              />
            </span>
          </a>
        </th>
        <th
          scope="col"
          className="py-3.5 text-left text-sm font-semibold text-gray-900"
          width="20%"
        >
          <a href="#" className="group inline-flex">
            Rating
            <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
              <ChevronDownIcon
                className="invisible ml-2 h-5 w-5 flex-none rounded text-gray-400 group-hover:visible group-focus:visible"
                aria-hidden="true"
              />
            </span>
          </a>
        </th>
        <th
          scope="col"
          className="py-3.5 text-left text-sm font-semibold text-gray-900"
        ></th>
      </tr>
    </thead>
  );
}

export default TableHead;
