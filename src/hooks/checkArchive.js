import axios from "axios";
import { useState, useEffect } from "react";

export function checkArchive(id) {
  const [callData, setCallData] = useState([]);
  const checkArchiveId = () => {
    axios
      .get(`https://aircall-job.herokuapp.com/activities/${id}`)
      .then((res) => {
      setCallData(res.data);    
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    checkArchiveId();
  }, [callData]);

          // console.log(callData);

  return callData
}
