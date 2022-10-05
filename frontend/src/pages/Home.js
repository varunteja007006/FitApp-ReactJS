import React, { useEffect } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

function Home() {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`/api/workouts`);
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: data });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h4 className="ms-0 mt-2 mb-2">
              <i className="fa-solid fa-dumbbell"></i> Workouts{" "}
            </h4>
            <div className="mt-2">
              {workouts &&
                workouts.map((workout) => (
                  <WorkoutDetails workout={workout} key={workout._id} />
                ))}
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <h4 className="mt-2 mb-2">Add Workouts</h4>
            </div>
            <WorkoutForm></WorkoutForm>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
