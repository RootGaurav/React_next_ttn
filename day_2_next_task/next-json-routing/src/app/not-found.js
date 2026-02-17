"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  const [time, setTime] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t - 1);
    }, 1000);

    if (time === 0) {
      router.push("/");
    }

    return () => clearInterval(interval);
  }, [time]);

  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>Redirecting to home in {time} seconds...</p>
    </div>
  );
}
