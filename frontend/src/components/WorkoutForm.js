import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function WorkoutForm() {
  const { dispatch } = useWorkoutsContext();
  
  const [title, setTitle] = useState("");
  const [reps, setReps] = useState("");
  const [load, setLoad] = useState("");
  const [error, setError] = useState("");

  const handlesubmit = async (e) => {
    e.preventDefault();
    const workout = { title, reps, load };

    const response = await fetch(`/api/workouts`, {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      setError(data.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      dispatch({ type: "CREATE_WORKOUT", payload: data });
    }
  };

  return (
    <div className="form p-3">
      <Form onSubmit={handlesubmit}>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Situps, Pushups, etc..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Reps</Form.Label>
          <Form.Control
            type="text"
            placeholder="1 or 10 or so..."
            value={reps}
            onChange={(e) => {
              setReps(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label className="fw-bold">Load</Form.Label>
          <Form.Control
            type="text"
            placeholder="1 or 10 or so..."
            value={load}
            onChange={(e) => {
              setLoad(e.target.value);
            }}
          />
        </Form.Group>
        <div className="text-center">
          <Button type="submit" className="submit-btn mb-2" variant="success">
            Add
          </Button>
          {error && (
            <Alert variant="danger m-2">
              <i className="fa-sharp fa-solid fa-triangle-exclamation"></i>{" "}
              {error}
            </Alert>
          )}

        </div>
      </Form>
    </div>
  );
}

export default WorkoutForm;
