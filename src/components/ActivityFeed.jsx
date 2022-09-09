import React, {useState} from "react";
import ActivityDetail from "./ActivityDetail.jsx";
import moment from "moment";



export default function ActivityFeed({data}) {
  const activitiesByDate = {};

  const [isOpen, setIsOpen] = useState(false);
  const [infoId, setInfoId] = useState(0);


  data.map((call) => {
    let date = new Date(call.created_at).toDateString();
     if (activitiesByDate[date]) {
       activitiesByDate[date].push(call);
     } else {
       activitiesByDate[date] = [call];
     }
  })

  const activityFeed = Object.entries(activitiesByDate).map(([Pdate, Pcalls]) => {
    const activityDate = moment(Pcalls[0].created_at).format("ll");

    return (
      <div key={Pdate}>
        <div className="flex justify-between items-center p-2">
          <span className="dot-border"></span>
          <p className="text-center activity-date">{activityDate}</p>
          <span className="dot-border"></span>
        </div>
        {Pcalls
          ? Pcalls.map((Pcall) => (
              <ActivityDetail key={Pcall.id} call={Pcall} setIsOpen={setIsOpen} setInfoId={setInfoId} isOpen={isOpen} infoId={infoId}/>
            ))
          : null}
      </div>
    );
  });
      
  

  return (
    <div className="activity-feed">
      {activityFeed}
    </div>
  )

}
