import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData, exercisesOptions } from "../utils/FetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";

function SearchExercises({setExercises, bodyPart, setBodyPart}) {
   const[search, setSearch] = useState('')
   const[bodyParts, setBodyParts] = useState([])


   useEffect(() =>{
    const fetchExercisesData = async() => {

      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions)

      setBodyParts(['all' , ...bodyPartData])
    }
    fetchExercisesData()
   },[])

   const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions);
  
      const searchedExercises = exercisesData.filter((exercise) =>
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
      );
  
      setExercises(searchedExercises);
    }
    setSearch('');
  }
  


      
   
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box  position="relative" mb="72px">
      <TextField 
      height="76px"
      sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '800px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
      onChange={(e) => setSearch(e.target.value.toLowerCase())}
      placeholder="Search Exercises"
      type="text"
      onClick={handleSearch}
      />
      <Button  className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '175px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} >
      search
      </Button>
      </Box>
      <Box  sx={{ position: 'relative', width: '100%', p: '20px' }}>
      <HorizontalScrollBar  data={bodyParts} bodyPart={bodyPart}  setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack>
  );
}

export default SearchExercises;
