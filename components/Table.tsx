import React from 'react';
import { TableData } from '../types';

interface TableProps {
  tableData: TableData;
}

const Table: React.FC<TableProps> = ({ tableData }) => {
  return (
    <div className="overflow-x-auto bg-slate-900/30 rounded-lg border border-slate-700/50">
      <table className="min-w-full text-left text-sm text-slate-300">
        {tableData.caption && <caption className="caption-bottom text-xs text-slate-500 p-3 text-center">{tableData.caption}</caption>}
        <thead className="border-b border-slate-700 font-medium text-slate-400">
          <tr>
            {tableData.headers.map((h, k) => <th key={k} scope="col" className="px-6 py-4 tracking-wider uppercase text-xs">{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {tableData.rows.map((row, r_idx) => (
            <tr key={r_idx} className="border-b border-slate-800 last:border-b-0 hover:bg-slate-800/20 transition-colors duration-200">
              {row.map((cell, c_idx) => (
                <td key={c_idx} className={`px-6 py-5 align-top ${c_idx === 0 ? 'font-semibold text-slate-200' : ''}`}>
                  {typeof cell === 'string' ? cell : cell.content}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-2 px-4 pb-2">
        {tableData.source && <p className="text-xs text-slate-500">{tableData.source}</p>}
        {tableData.exportLabel && (
          <button className="text-xs text-rose-400 hover:text-rose-300 font-semibold uppercase tracking-wider">
            {tableData.exportLabel}
          </button>
        )}
      </div>
    </div>
  );
};

export default Table;