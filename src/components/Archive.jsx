import React from "react";
import ActivityDetail from "./ActivityDetail.jsx";
import moment from "moment";

export default function Archive({ data }) {
  const activitiesByDate = {};

  data.map((call) => {
    let date = new Date(call.created_at).toDateString();
    if (call.is_archived) {
      if (activitiesByDate[date]) {
        activitiesByDate[date].push(call);
      } else {
        activitiesByDate[date] = [call];
      }
    }
  });

  const activityFeed = Object.entries(activitiesByDate).map(
    ([Pdate, Pcalls]) => {
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
                  <ActivityDetail key={Pcall.id} call={Pcall} />
                ))
              : null}
          </div>
      );
    }
  );

  return (
    <React.Fragment>
      {
        <div className="text-center mt-10">
          {!activityFeed.length ? (
            <span className="text-gray text-bold">No Archive Available</span>
          ) : null}
        </div>
      }
      <div className="activity-feed">
        {activityFeed.length ? activityFeed : null}
      </div>
      <div className="remove-btn-container">
        {activityFeed.length ? (
          <button className="remove-archive">Remove All Archive calls</button>
        ) : null}
      </div>
    </React.Fragment>
  );
}
