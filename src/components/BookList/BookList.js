import * as React from 'react'
import IconDelete from "../../img/delete.svg";
import { HandySvg } from "handy-svg";
import s from "../BookList/Booklist.module.css"

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
  } from '@tanstack/react-table'


export default function BookList ({data, handleDelete, cellItem}) {
    
   
    const columnHelper = createColumnHelper()

    const columns = [
        columnHelper.accessor('_', {
          
            header: () => "",
              cell: () =>cellItem,
             
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
              header: () => "",
              
              cell: (info) => {
                return <button type="button" className={s.button} onClick={() => handleDelete(info.row.original.id)}> <HandySvg src={IconDelete} className = {s.svg}/></button>
              } }),
    
          ]


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })
  return (
    <div className="p-2">
      <table className={s.table}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}
            className = {s.header}>
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
        <tbody className={s.body}>
          
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                  <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
               ))}
            </tr>
            
          ))}
          <tr>
            <td>{cellItem}</td>
            <td>...</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
        </table>
      </div>
  )
}