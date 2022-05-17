import * as Styled from "./Button.styles";

export interface Props
  extends Pick<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "disabled" | "onClick" | "children" | "type"
  > {
  size: "SM" | "MD" | "LG";
  color: "BLUE" | "RED";
}

const Button = ({
  disabled,
  onClick,
  size,
  color,
  children,
  type = "button",
}: Props) => {
  return (
    <Styled.Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      size={size}
      color={color}
    >
      {children}
    </Styled.Button>
  );
};

export default Button;
