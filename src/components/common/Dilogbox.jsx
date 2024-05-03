import React from "react";
import {
  Dialog,
} from "@material-tailwind/react";
 
export function DialogDefault(props) {

  return (
    <>
      <Dialog open={props.open} handler={props.handleOpen}>
      {props.children}
      </Dialog>
    </>
  );
}