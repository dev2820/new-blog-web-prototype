import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}>;
const Card = ({ children, onClick }: Props) => {
  return (
    <div className="card" onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;
