import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
// import Exercises from '../data';
import useSound from 'use-sound';

const ExerciseCard = ({ exercise }) => (


  <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
    <video controls width="100%"> 
        <source src={exercise.video} type="video/mp4"/>
      </video>
    <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.muscle_groups}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.equipment_required}
    </Typography>
    <Typography ml="21px" color="#000" fontWeight="bold" sx={{ fontSize: { lg: '24px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize">
      {exercise.description}
    </Typography>

    <button>

    </button>
  </Link>
);

export default ExerciseCard;




///



// "name": "Dumbbell Squats",
//       "id": "ad8c0ac7-aba7-4694-ba8a-496b22911d51",
//       "description": "Start with dumbbells at your sides and feet just outside of hip width.. Sit your hips down and back,, let your shoulders come forward,, while keeping your back flat.. Push the ground away to stand.",
//       "muscle_groups": "Quads,Glutes",
//       "equipment_required": "Dumbbell",
//       "movement_patterns": "Lower Push",
//       "synonyms": "",
//       "is_alternating": false,
//       "side": "",
//       "video": {
//         "url": "https://s3.amazonaws.com/assets.beta.future.fit/video_large/Dumbbell%20Squats.mp4",
//         "is_flipped": false
//       },
//       "audio": {
//         "url": "https://s3.amazonaws.com/assets.beta.future.fit/exercise_names/dumbbell_squats.m4a"
//       }
// //



//
// Each hash in the array has the following fields:
// `id` **REQUIRED** The exercise id
// `name` **REQUIRED** The name of the exercise
// `description` A detailed description of the exercise
// `muscle_groups` Comma-separated list of muscle groups (e.g. `Shoulders,Traps`)
// `equipment_required` Comma-separated list of equipment required if any (e.g.`Dumbells`)
// `movement_patterns` The type of movements associated with this (`Lower Pull`)
// `synonyms` Alternate names for the exercise
// `side` The side the movement is on if any (i.e. on your `left_leg` or `right_side`)
// `is_alternating` Boolean value of whether the exercises calls for you to alternate movement (i.e. lift a dumbbell with your left arm, followed by your right arm).
// `video` Hash of video of movement which contains:
// `is_flipped` Whether the video needs to be flipped to show the correct side
// `url` URL of video

// `audio` Hash of audio of movement which contains:
// `url` URL of name of audio