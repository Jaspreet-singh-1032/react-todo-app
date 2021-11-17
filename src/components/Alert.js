import React, { useEffect } from "react";
import { Alert } from "react-bootstrap";
const MyAlert = ({ variant, message, closeAlert }) => {
  useEffect(() => {
    setTimeout(() => {
      closeAlert();
    }, 3000);
  }, []);
  return <Alert variant={variant}>{message}</Alert>;
};

export default MyAlert;
