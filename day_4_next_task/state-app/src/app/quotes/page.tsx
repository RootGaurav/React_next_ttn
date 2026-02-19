"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotes } from "@/redux/features/quotes/quotesSlice";
import type { RootState, AppDispatch } from "@/redux/store";

export default function QuotesPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.quotes
  );

  useEffect(() => {
    dispatch(fetchQuotes());
  }, [dispatch]);

  if (loading) return <p>Loading quotes...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <main style={{ padding: 20 }}>
      <h1>Quotes (Redux Toolkit)</h1>
      <ul>
        {data.slice(0, 10).map((q) => (
          <li key={q.id} style={{ marginBottom: 12 }}>
            <p>"{q.quote}"</p>
            <small>— {q.author}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
