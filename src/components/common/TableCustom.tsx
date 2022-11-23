type TableCustom = {
  data: any;
  titleRow: any;
  title?: string;
};

const TableCustom = ({ data, titleRow, title }: TableCustom): JSX.Element => {
  return (
    <div>
      {title && (
        <h2 className="text-white font-semibold text-2xl mb-10">{title}</h2>
      )}
      <table className="w-full table-auto">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            {titleRow.map((col: any, idx: number) => (
              <th
                className="p-3 text-sm font-semibold tracking-wide text-left text-chipo-heading"
                key={idx}
              >
                {col.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row: any, idx: number) => (
            <tr
              key={idx}
              className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}  `}
            >
              {titleRow.map((col: any, idx: number) => (
                <td className="p-3 text-sm text-gray-700" key={idx}>
                  {typeof col.field === "string" ? (
                    <div>{row[col.field]}</div>
                  ) : (
                    <div>{col.field(row)}</div>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableCustom;
