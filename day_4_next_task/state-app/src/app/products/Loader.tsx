"use client";
import { useLoader } from "../context/LoaderContext";

export default function Loader() {
  const { loading } = useLoader();
  if (!loading) return null;

  return (
  <div
    style={{
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      color: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "2rem",
      zIndex: 9999,
    }}
  >
    Loading...
  </div>
);

}
