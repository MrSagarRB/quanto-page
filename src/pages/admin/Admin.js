import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Admin = () => {
  let handelCreateSuery = () => {
    let id = uuidv4();

    console.log(id);
  };

  return (
    <div className=" h-screen w-full flex items-center justify-center test ">
      <Link to="create-survey">
        <Button
          onClick={() => {
            handelCreateSuery();
          }}
        >
          Create Survey
        </Button>
      </Link>
    </div>
  );
};

export default Admin;
