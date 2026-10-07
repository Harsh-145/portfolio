import { ImageResponse } from "next/og";
export const alt = "Harsh Yadav — Software development & machine learning";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#f7f8f4",
        color: "#152523",
        display: "flex",
        width: "100%",
        height: "100%",
        padding: "68px",
        flexDirection: "column",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 28,
        }}
      >
        <span>HY.</span>
        <span>SOFTWARE DEVELOPMENT / MACHINE LEARNING</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: 108,
            fontWeight: 700,
            letterSpacing: -5,
          }}
        >
          Harsh Yadav<span style={{ color: "#357660" }}>.</span>
        </div>
        <div style={{ fontSize: 38, marginTop: 16 }}>
          Turning data into useful applications.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          borderTop: "2px solid #ccd8cf",
          paddingTop: 24,
          fontSize: 24,
        }}
      >
        Computer Science & Engineering · Class of 2027 · Gujarat, India
      </div>
    </div>,
    size,
  );
}
