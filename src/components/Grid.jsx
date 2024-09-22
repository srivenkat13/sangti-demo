import { Fragment, useState } from "react";

const Grid = () => {
  const [expandedRow, setExpandedRow] = useState([]);

  const rowData = [
    {
      id: 1,
      make: "Tesla",
      model: "Model Y",
      price: 64950,
      electric: true,
      description:
        "A fully electric, spacious SUV with cutting-edge technology and advanced safety features.",
    },
    {
      id: 2,
      make: "Ford",
      model: "F-Series",
      price: 33850,
      electric: false,
      description:
        "A durable and powerful pickup truck known for its towing capacity and reliability.",
    },
    {
      id: 3,
      make: "Toyota",
      model: "Corolla",
      price: 29600,
      electric: false,
      description:
        "A compact and fuel-efficient sedan, perfect for daily commuting with a reputation for reliability.",
    },
  ];

  const toggleExpand = (id) => {
    setExpandedRow((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  return (
    <div className="container w-[90%] mx-auto mt-10 mb-10">
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 ">
            <th className="border px-4 py-2">Make</th>
            <th className="border px-4 py-2">Model</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Electric</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rowData.map((row) => (
            <Fragment key={row.id}>
              <tr className="hover:bg-gray-100 text-center">
                <td className="border px-4 py-2">{row.make}</td>
                <td className="border px-4 py-2">{row.model}</td>
                <td className="border px-4 py-2">{row.price}</td>
                <td className="border px-4 py-2">
                  {row.electric ? (
                    <input type="checkbox" checked readOnly/>
                  ) : (
                    <input type="checkbox"disabled />
                  )}
                </td>
                <td className="border px-4 py-2">
                  <button
                    onClick={() => toggleExpand(row.id)}
                    className="text-blue-400 hover:text-blue-500"
                  >
                    {expandedRow.includes(row.id)? "Collapse" : "Expand"}
                  </button>
                </td>
              </tr>
              {expandedRow.includes(row.id) && (
                <tr className="bg-gray-100">
                  <td colSpan="5" className="px-4 py-2 text-center">
                    <p>{row.description}</p>
                  </td>
                </tr>
              )}
            </Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Grid;
