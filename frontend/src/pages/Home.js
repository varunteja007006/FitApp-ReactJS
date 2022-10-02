import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import WorkoutDetails from "../components/WorkoutDetails";

function Home() {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch(`/api/workouts`);
      const data = await response.json();

      if (response.ok) {
        setWorkouts(data);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div>
      <Container>
        <h4 className="ms-0 mt-2 mb-2">
          <i class="fa-solid fa-dumbbell"></i> Workouts{" "}
        </h4>

        <div className="workouts-box mt-2">
          <WorkoutDetails workouts={workouts}></WorkoutDetails>
        </div>
      </Container>
    </div>
  );
}

export default Home;
