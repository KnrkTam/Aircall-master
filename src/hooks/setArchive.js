import axios from "axios";

export function setArchive(id, status) {
  axios
    .post(`https://aircall-job.herokuapp.com/activities/${id}`, {
      is_archived: status,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

