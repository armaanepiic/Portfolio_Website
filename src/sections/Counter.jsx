// components/Counter.jsx
// ─────────────────────────────────────────────
// Counts up from 0 to `target` on mount.
// Falls back gracefully for non-numeric values.
//
// Props:
//   target  (number | string)  – end value
//   suffix  (string)           – appended after count, e.g. "+"
// ─────────────────────────────────────────────

import { useEffect, useState } from "react";

export default function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const num = parseInt(target);
    if (isNaN(num)) { setCount(target); return; }

    let current = 0;
    const step = Math.ceil(num / 60);
    const timer = setInterval(() => {
      current += step;
      if (current >= num) {
        setCount(num);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
}
