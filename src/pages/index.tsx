import DefaultLayout from "@/layouts/default";
import React from "react";

export default function App() {
  return (
    <DefaultLayout>
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vQIVSUaGvNw2cjEoAhuo71u1K2aGYYKePMBgSHbxbl-NnAPxjAF3IzhrK4p0J0Qgd_A6otsJ79-lG_6/embed?start=true&loop=true&delayms=3000"
        style={{ width: "100%", height: "100%", padding: 0, margin: 0 }}
      />
    </DefaultLayout>
  );
}
