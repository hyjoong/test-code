import styled from "styled-components";
import { Props } from "./Button";

type ButtonProps = Omit<Props, "children">;

const COLOR = {
  BLUE: {
    color: "#fff",
    backgroundColor: "#0067A3",
  },
  RED: {
    color: "#fff",
    backgroundColor: "#FF4400",
  },
};

const BUTTON_SIZE = {
  LG: {
    fontSize: "22px",
    width: "80px",
    height: "50px",
  },
  MD: {
    fontSize: "16px",
    width: "70px",
    height: "35px",
  },
  SM: {
    fontSize: "14px",
    width: "50px",
    height: "30px",
  },
};

export const Button = styled.button<ButtonProps>(
  ({ size, color, disabled }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: disabled ? "not-allowed" : "pointer",
    border: "none",

    ...COLOR[color],
    ...BUTTON_SIZE[size],
  })
);
