import { ReactNode } from "react";

const Button = ({
  disabled,
  children,
  onClick,
}: {
  disabled: boolean;
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: disabled ? "red" : "blue",
        padding: 10,
        color: "white",
        fontWeight: 800,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
