import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSortDown, FaSortUp, FaSort } from "react-icons/fa";
import "./style.scss";

export const Table = ({ head, body, searchable }) => {
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState(false);
  console.log(body);
  const filteredData =
    body &&
    body
      .filter((items) =>
        items.some((item) =>
          (item?.key || item?.props?.searchableText || item)
            .toString()
            .toLocaleLowerCase("TR")
            .includes(search.toLocaleLowerCase("TR"))
        )
      )
      .sort((a, b) => {
        if (sorting?.orderBy === "asc") {
          return a[sorting.key].toString().localeCompare(b[sorting.key]);
        }
        if (sorting?.orderBy === "desc") {
          return b[sorting.key].toString().localeCompare(a[sorting.key]);
        }
      });

  if (!body || body?.length === 0) {
    return <div className="">No results</div>;
  }
  return (
    <>
      {searchable && (
        <div className="control-buttons">
          <div className="left-button">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search"
              className=""
            />
            {sorting && (
              <button onClick={() => setSorting(false)} className="list-btn">
                Cancel Order
              </button>
            )}
          </div>
          <div className="right-button">
            <div className="add-product-button">
              <Link to="/admin/add-product">
                <button className="list-btn">Create</button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <table>
        <thead>
          <tr>
            {head.map((header, key) => (
              <th width={header?.width} key={key}>
                <div className="">
                  {header.name}
                  {header.sortable && (
                    <button
                      onClick={() => {
                        if (sorting?.key === key) {
                          setSorting({
                            key,
                            orderBy: sorting.orderBy === "asc" ? "desc" : "asc",
                          });
                        } else {
                          setSorting({
                            key,
                            orderBy: "asc",
                          });
                        }
                      }}
                    >
                      {sorting?.key === key &&
                        (sorting.orderBy === "asc" ? (
                          <FaSortDown size={14} />
                        ) : (
                          <FaSortUp size={14} />
                        ))}
                      {sorting?.key !== key && <FaSort size={14} />}
                    </button>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData.map((items, key) => (
            <tr key={key}>
              {items.map((item, key) => (
                <td key={key}>
                  {Array.isArray(item) ? <div className="">{item}</div> : item}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
