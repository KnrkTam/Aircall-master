import React, { useEffect } from 'react';
import { checkArchive } from "../hooks/checkArchive.js";
import { setArchive } from "../hooks/setArchive.js";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function StarButton ({id}) {
  // Listen to call archive

  const callDetail = checkArchive(id);

  // const [heartDoc] = useDocument(heartRef);

  // create user-to-post relationship
  const addArchive =  () => {
    setArchive(id, true)
  };

  // remove user-to-post relationship
  const removeArchive =  () => {

     setArchive(id, false);
  };

  return callDetail.is_archived ? (
    <div onClick={removeArchive}>
      <StarRateIcon style={{ color: "#ffcd3c" }} />
    </div>
  ) : (
    <div onClick={addArchive}>
      <StarOutlineIcon />
    </div>
  );
}