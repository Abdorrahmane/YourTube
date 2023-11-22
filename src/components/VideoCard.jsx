import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

import { dumpThumbnailUrl,dumpChannelUrl, dumpChannelTitle, dumpVideoUrl, dumpVideoTitle } from "../utils/consts";

const VideoCard = ({video: { id: { videoId }, snippet }}) => {
    return (
        <Card sx={{ width: { xs: '100%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0 }}>
        <Link to={videoId ? `/video/${videoId}` : dumpVideoUrl }>
          <CardMedia image={snippet?.thumbnails?.high?.url || dumpThumbnailUrl} alt={snippet?.title} 
            sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
          />
        </Link>
        <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
          <Link to={videoId ? `/video/${videoId}` : dumpVideoUrl } >
            <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
              {snippet?.title.slice(0, 60) || dumpVideoTitle.slice(0, 60)}
            </Typography>
          </Link>
          <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : dumpChannelUrl} >
            <Typography variant="subtitle2" color="gray">
              {snippet?.channelTitle || dumpChannelTitle}
            </Typography>
          </Link>
        </CardContent>
      </Card>
    )
}


export default VideoCard;