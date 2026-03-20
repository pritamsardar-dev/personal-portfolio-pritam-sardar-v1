import React, { useEffect, useState } from "react";

const DotLoader = ({
  loading = true,
  size = 8,
  color = "#1D4ED8",
  speed = 500,
  text = "", // New prop for optional text
}) => {
  const [dots, setDots] = useState(0);

  useEffect(() => {
    if (!loading) {
      requestAnimationFrame(() => setDots(0));
      return;
    }

    const interval = setInterval(() => setDots((prev) => (prev + 1) % 4), speed);
    return () => clearInterval(interval);
  }, [loading, speed]);

  if (!loading) return null;

  return (
    <div className="flex items-center gap-1">
      {text && <span>{text}</span>} {/* Show text if provided */}
      {[...Array(dots)].map((_, i) => (
        <span
          key={i}
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            borderRadius: "50%",
            display: "inline-block",
          }}
        />
      ))}
    </div>
  );
};

export default DotLoader;