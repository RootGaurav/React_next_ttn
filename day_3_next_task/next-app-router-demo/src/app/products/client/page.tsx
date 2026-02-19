"use client";

import styled from "styled-components";
import { useEffect, useState } from "react";

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;

  th, td {
    border: 1px solid #e5e7eb;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #111827;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f3f4f6;
  }

  tr:hover {
    background-color: #e5e7eb;
  }
`;

export default function ClientProducts() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=5")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div style={{ padding: 24 }}>
      <h1>Client Products (Styled Components)</h1>

      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.title}</td>
              <td>₹{p.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
