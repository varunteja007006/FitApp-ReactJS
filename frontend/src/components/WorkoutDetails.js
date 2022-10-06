import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function WorkoutDetails({ workout }) {
  const {dispatch} = useWorkoutsContext()

  const handleDelete = async () => {
    const response = await fetch(`/api/workouts/` + workout._id, {
    method: 'DELETE'
    })
    
    const data = await response.json()

    if(response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: data});
    }
}

  return (
    <ListGroup as="ol" numbered className="">
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
        <Button variant="warning" onClick={handleDelete}>
          <i className="fa-solid fa-trash-can"></i>
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default WorkoutDetails;
