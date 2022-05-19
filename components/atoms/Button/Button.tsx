import * as Styled from "./Button.styles";

export interface Props
  extends Pick<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "disabled" | "onClick" | "children" | "type"
  > {
  size: "SM" | "MD" | "LG";
  color: "BLUE" | "RED" | "GREY";
}

const Button = ({ onClick, children, type = "button", ...rest }: Props) => {
  return (
    <Styled.Button onClick={onClick} type={type} {...rest}>
      {children}
    </Styled.Button>
  );
};

export default Button;
