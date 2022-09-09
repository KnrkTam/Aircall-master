import axios from "axios";
import { toast } from "react-hot-toast";
export function resetAPI() {
  axios
    .get("https://aircall-job.herokuapp.com/reset")
    .then((response) => {
      toast.success("Unarchived all calls");
    })
    .catch((error) => {
      console.log(error);
    });
}
