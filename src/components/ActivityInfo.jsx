import React from "react";
import moment from "moment";

export default function ActivityInfo(data) {
  // console.log(data.call)
  const call = data.call
  return (

    <div id="info">
      <span>
        <strong>Time: </strong>
        {moment(call.created_at).format("MMMM DD, YYYY h:mmA")}
      </span>
      <span>
        <strong>From: </strong>
        {call.from ? call.from : "Unknown"}
      </span>
      <span>
        <strong>To: </strong>
        {call.to ? call.to : "Unknown"}
      </span>
      <span>
        <strong>Via: </strong>
        {call.via}
      </span>
      <span>
        <strong>Duration: </strong>
        {call.duration} seconds
      </span>
      <span>
        <strong>Call Type: </strong>
        {`${call.call_type.charAt(0).toUpperCase()}${call.call_type.slice(1)}`}
      </span>
    </div>
  );
}



