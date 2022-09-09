import React, { useEffect } from 'react';
import { checkArchive } from "../hooks/checkArchive.js";
import { setArchive } from "../hooks/setArchive.js";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import { toast } from "react-hot-toast";
export default function StarButton ({id}) {
  // Check call archive status
  const callDetail = checkArchive(id);

  // create user-to-post relationship
  const addArchive =  () => {
    setArchive(id, true)
    toast.success("Call archived")
  };

  // remove user-to-post relationship
  const removeArchive =  () => {
     setArchive(id, false);
    toast.success("Call unarchived");

  };

  return callDetail.is_archived ? (
    <div onClick={removeArchive}>
      <StarRoundedIcon style={{ color: "#ffcd3c" }} />
    </div>
  ) : (
    <div onClick={addArchive}>
      <StarBorderRoundedIcon />
    </div>
  );
}