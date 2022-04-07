import React from "react";

export const Description = ({ desc }) => (
  <p className="experience__description">{!!desc ? <><i class='bx bxs-circle' ></i><div>{desc}</div></> : ''}</p>
);
