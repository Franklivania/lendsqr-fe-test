import { Icon } from "@iconify/react";

export type TableColumns<T> = {
  title?: string;
  key: string;
  render: (data: T, index: number) => JSX.Element;
};

export type TableProps<T = any> = {
  columns: TableColumns<T>[];
  data: T[];
  onHeaderClick: () => void;
};

export default function Table<T>({ columns, data, onHeaderClick }: TableProps<T>) {
  const colHeaders = columns.map(({ title, key }) => (
    <th key={key} className="th" onClick={onHeaderClick}>
      <span className="th-header">
        {title}
        <Icon icon={"bx:filter"} width={20} color="#545F7D" />
      </span>
    </th>
  ));

  const tableData = data.map((data, i) => (
    <tr key={`column${i}`} className="tr-body">
      {columns.map(({ render }, id) => (
        <td key={`data${i}${id}`} className="td-body">
          {render(data, i)}
        </td>
      ))}
    </tr>
  ));

  return (
    <section id="table-container">
      <table className="table" aria-label="Table Data">
        <thead id="t-head" aria-label="Table header">
          <tr>{colHeaders}</tr>
        </thead>
        <tbody id="t-body">{tableData}</tbody>
      </table>
    </section>
  );
}
