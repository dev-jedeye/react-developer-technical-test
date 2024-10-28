import React from "react";

interface Props {
  text: string;
}

export const FullSreen = ({ text }: Props) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {text}
    </div>
  );
};
