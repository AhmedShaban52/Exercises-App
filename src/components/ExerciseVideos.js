import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

function ExerciseVideos({exerciseVideos, name}) {
    if(!exerciseVideos.length) return 'Loading ...'
  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
    <Typography varinat="h3" mb="33px" >
    watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}> {name} </span>   exercise videos
    </Typography>
    <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
    {exerciseVideos?.slice(0, 6)?.map((item, index) => (
        <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer" 
            >
            <img style={{ borderTopLeftRadius: '20px' }} src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
            <Typography variant='h5' color="#000" >
            {item.video.title}
            </Typography>
            <Typography variant='h6' color="#000" >
            {item.video.channelName}
            </Typography>
            </Box>
            </a>
    ))}
    </Stack>
    </Box>
  )
}

export default ExerciseVideos