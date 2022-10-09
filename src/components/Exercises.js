import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from "./Loader";
import ReactPlayer from "react-player";
// import  "../data.json";
import "../App.css";
export const Exercises = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  // const [exercisesPerPage] = useState(6);

  // useEffect(() => {
  //   const fetchExercisesData = async () => {
  //     let exercisesData = [];

  //     if (bodyPart === "all") {
  //       exercisesData = await fetchData(
  //         "https://exercisedb.p.rapidapi.com/exercises",
  //         exerciseOptions
  //       );
  //     } else {
  //       exercisesData = await fetchData(
  //         `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
  //         exerciseOptions
  //       );
  //     }

  //     setExercises(exercisesData);
  //   };

  //   fetchExercisesData();
  // }, [bodyPart]);

  // // Pagination
  // const indexOfLastExercise = currentPage * exercisesPerPage;
  // const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  // const currentExercises = exercises.slice(
  //   indexOfFirstExercise,
  //   indexOfLastExercise
  // );

  // const paginate = (event, value) => {
  //   setCurrentPage(value);

  //   window.scrollTo({ top: 1800, behavior: "smooth" });
  // };

  // if (!currentExercises.length) return <Loader />;
  const [data, setData] = useState(null);

  fetch("./data.json")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      setData(data);
    })
    .catch(function (err) {
      console.log(err, "error");
    });

  return (
    <>
      {/* <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      > */}
      <HomePageHeader />
      <div className="excercise-container">
        {data
          ? data.workouts.map(function (data) {
              return (
                <div id={data.id}>
                  <h4>Name: {data.name}</h4>
                  <h4>Equipment needed: {data.equipment_required}</h4>
                  <h4>Description: {data.description}</h4>
                  <h4>Muscle Groups: {data.muscle_groups}</h4>
                  <h4>{data.synonyms}</h4>
                  <h4>{data.is_alternating}</h4>
                  <h4>{data.side}</h4>
                  <h4>{data.is_flipped}</h4>
                  
                  <video controls src={data.video}  width="750" height="500" type="video/mp4"  >
                      Sorry your browser doesn't support embedded videos but dont worry you can <a href={data.url}>Download it </a>
                        and watch it with your favorite video player
                  </video>
                  {/* <ReactPlayer src={data.video} /> */}
                </div>
              );
            })
          : ""}
      </div>

      {/* <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {data.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack> */}
      {/* <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack> */}
      {/* </Box> */}
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Excerise Tracker</h2>
    </header>
  );
};

const Exercise = ({
  name,
  equipment_required,
  description,
  muscle_groups,
  synonyms,
  is_alternating,
  side,
  is_flipped,
  video,
}) => {
  if (!name) return <div />;

  return (
    <table>
      <tdbody>
        <tr>
          <td>
            <h5>{name}</h5>
          </td>
          <td>
            <h5>{equipment_required}</h5>
          </td>
          <td>
            <h4>{muscle_groups}</h4>
          </td>

          <td>
            <h5>{is_alternating}</h5>
          </td>
          <td>
            <h5>{side}</h5>
          </td>
          <td>
            <h4>{is_flipped}</h4>
          </td>
          <td>
            <p>{synonyms}</p>
          </td>

          <td>
            <video src={video} />
          </td>
          <td>
            <p>{description}</p>
          </td>
        </tr>
      </tdbody>
    </table>
  );
};

// {data.name +
//   ", " + data.equipment_required
//   + ", " + data.description
//   + ", " + data.muscle_groups
//   + ", " + data.synonyms
//   + ", " + data.is_alternating
//   + ", " + data.side
//   + ", " + data.is_flipped
//   }

// export default Exercises;
