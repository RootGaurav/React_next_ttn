"use client";
import { useEffect, useReducer, useState } from "react";
import { productReducer } from "../reducers/productReducer";
import styles from "./ProductManager.module.css";
import { useLoader } from "../context/LoaderContext";

export default function ProductManager() {
  const [products, dispatch] = useReducer(productReducer, []);
  const [title, setTitle] = useState("");
  const { setLoading } = useLoader(); // 👈 global loader

  async function fetchProducts() {
    try {
      setLoading(true); // show global loader
      const res = await fetch("https://dummyjson.com/products?limit=5");
      const data = await res.json();
      dispatch({ type: "SET_PRODUCTS", payload: data.products });
    } finally {
      setLoading(false); // hide loader
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  function addProduct() {
    if (!title.trim()) return;

    dispatch({
      type: "ADD_PRODUCT",
      payload: { id: Date.now(), title },
    });
    setTitle("");
  }

  function deleteProduct(id: number) {
    dispatch({ type: "DELETE_PRODUCT", payload: id });
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Products (useReducer)</h1>

      <div className={styles.inputRow}>
        <input
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter product title..."
        />
        <button className={styles.addBtn} onClick={addProduct}>
          Add
        </button>
      </div>

      <ul className={styles.list}>
        {products.map((p) => (
          <li key={p.id} className={styles.item}>
            <span className={styles.title}>{p.title}</span>
            <button
              className={styles.deleteBtn}
              onClick={() => deleteProduct(p.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
