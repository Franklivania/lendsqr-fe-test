import { title } from "process";

export type TableColumns<T> = {
  title?: string,
  key: string;
  render: (data: T, index: number) => JSX.Element
}

export type TableProps<T = any> = {
  columns: TableColumns<T>[];
  data: T[];
}

export default function Table({columns, data}:TableProps) {
  const colHeaders = columns.map(({title, key}) => (
    <th key={key} className="th">
      <span className="th-header">{title}</span>
    </th>
  ))

  const tableData = data.map((data, i) => {
    return (
      <tr key={`column${i}`} className="tr">
        {columns.map(({ render }, id) => (
          <td key={`data${i}${id}`}>
            {render (data, i)}
          </td>
        ))}
      </tr>
    )
  })

  return (
    <section id="table-container">
      <table className="table">
        <thead id="t-head">
          <tr>{colHeaders}</tr>
        </thead>
        <tbody id="t-body">{tableData}</tbody>
      </table>
    </section>
  )
}
