import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import moment from "moment";
import PhoneMissedIcon from "@mui/icons-material/PhoneMissed";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import PhoneCallbackIcon from "@mui/icons-material/PhoneCallback";
import VoicemailIcon from "@mui/icons-material/Voicemail";

import ActivityInfo from "./ActivityInfo.jsx";
import InfoIcon from "@mui/icons-material/Info";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import {setArchive} from "../hooks/setArchive.js"
import StarButton from "./StarBtn.jsx";


export default function ActivityDetail({ call }) {
  let date = new Date(call.created_at);
  let activityTime = moment(date).format("h:mm");
  let activityAM = moment(date).format("a").toUpperCase();
  let caller = call.from;
  let callee = call.to;
  let direction = call.direction;
  let via = call.via;

  let missedInbound = direction === "inbound" && call.call_type === "missed";
  let missedOutbound = direction === "outbound" && call.call_type === "missed";
  let answeredInbound = direction === "inbound" && call.call_type === "answered";
  let answeredOutbound = direction === "outbound" && call.call_type === "answered";
  let voiceMail = call.call_type === "voicemail";

  const [isOpen, setIsOpen] = useState(false);
  const [infoId, setInfoId] = useState(0);
  const [isArchived, setIsArchived] = useState(call.is_archived);

  const openInfo = (id) => {
    setIsOpen(!isOpen);
    setInfoId(id);
  };
  useEffect(() => {
   
  }, [isArchived])
  
 const handleoArchive = (id, is_archived) => {
   setArchive(id, !is_archived);
   setIsArchived(is_archived);
 };

  return (
    <React.Fragment>
      <Card sx={{ minWidth: 275, margin: "1%", padding: "5%" }}>
        <div className="activity-detail items-center">
          <div className="activity-icon">
            {missedInbound && <PhoneMissedIcon style={{ color: "red" }} />}
            {missedOutbound && <PhoneForwardedIcon style={{ color: "red" }} />}
            {answeredInbound && <PhoneCallbackIcon style={{ color: "grey" }} />}
            {answeredOutbound && (
              <PhoneForwardedIcon style={{ color: "grey" }} />
            )}
            {voiceMail && <VoicemailIcon style={{ color: "red" }} />}
          </div>
          <div className="flex flex-col activity-info">
            {missedInbound && (
              <span className="bold text-md text-red">{caller}</span>
            )}
            {missedOutbound && (
              <span className="bold text-md text-red">{caller}</span>
            )}
            {answeredInbound && <span className="bold text-md">{caller}</span>}
            {answeredOutbound && <span className="bold text-md">{caller}</span>}
            {voiceMail && (
              <span className="bold text-md text-red">{caller}</span>
            )}
            <span className="text-xs text-gray">{callee}</span>
            <span className="text-xs text-gray">via {via}</span>
          </div>
          <div className="activity-action text-xs text-gray">
            <div className="action-icon" onClick={() => openInfo(call.id)}>
              {isOpen && infoId ? <InfoIcon /> : <InfoOutlinedIcon />}
            </div>
            <div
              className="action-icon"
            >
              <StarButton id={call.id}/>
            </div>
          </div>
          <div className="activity-time text-gray">
            <span style={{ paddingRight: "5px" }}>{activityTime}</span>
            <div className="am-box text-gray">{activityAM}</div>
          </div>
        </div>
        <div className="flex flex-col">
          {isOpen && infoId === call.id ? <ActivityInfo call={call} /> : null}
        </div>
      </Card>
    </React.Fragment>
  );
}
