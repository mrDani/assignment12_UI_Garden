import React from 'react';
import styled from 'styled-components';
import { TableProps } from './Table.types';

const StyledTable = styled.table<
  Omit<TableProps, 'headers' | 'rows' | 'footer'>
>`
  width: 100%;
  border-collapse: collapse;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: ${({ disabled }) => (disabled ? '#f2f2f2' : '#ff69b4')};
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const Table: React.FC<TableProps> = ({ headers, rows, footer, disabled }) => (
  <StyledTable disabled={disabled}>
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {rows.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
    {footer && (
      <tfoot>
        <tr>
          <td colSpan={headers.length}>{footer}</td>
        </tr>
      </tfoot>
    )}
  </StyledTable>
);

export default Table;
