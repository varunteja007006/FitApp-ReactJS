import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function WorkoutDetails({ workouts }) {
  return (
    <ListGroup as="ol" numbered className="p-2">
      {workouts &&
        workouts.map((workout) => (
          <ListGroup.Item
            as="li"
            key={workout._id}
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{workout.title}</div>
              <div className="">Reps : {workout.reps}</div>
              <div className="">Load (kg): {workout.load}</div>
              <div className="text-muted">Date: {workout.createdAt}</div>
            </div>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
}

export default WorkoutDetails;
