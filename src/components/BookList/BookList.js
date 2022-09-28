import * as React from 'react'

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'

const defaultData = [
    {
      Title: 'Book',
      Author: 'Author',
      Year: 2021,
      pages: 100,
    },
    {
      Title: 'Book',
      Author: 'Author',
      Year: 2021,
      pages: 101,
    },
    {
      Title: 'Book',
      Author: 'Author',
      Year: 2021,
      pages: 102,
    }]

    const columnHelper = createColumnHelper()

 const columns = [
    columnHelper.accessor('Icon', {
        cell: info => info.getValue(),
     }),
        columnHelper.accessor('Title', {
            header: () => <span>Назва</span>,
          cell: info => info.getValue(),
         }),
        columnHelper.accessor(row => row.Author, {
          id: 'Author',
          cell: info => <i>{info.getValue()}</i>,
          header: () => <span>Автор</span>,
          
        }),
        columnHelper.accessor('Year', {
          header: () => <span>Рік</span>,
          cell: info => info.renderValue(),
       
        }),
        columnHelper.accessor('pages', {
          header: () => <span>Стор.</span>,
        }),
        columnHelper.accessor('Delete', {
        
            cell: info => info.getValue(),
           }),
      ]

export default function BookList () {
    const [data, setData] = React.useState(() => [...defaultData])
  

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <div className="p-2">
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
               ))}
            </tr>
          ))}
        </tbody>
        </table>
      
    </div>
  )
}