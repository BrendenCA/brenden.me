import React from "react";

export const Description = ({ desc }) => (
  <div className="experience__description">{!!desc ? <><i className='bx bxs-circle' ></i><div>{desc}</div></> : ''}</div>
);
