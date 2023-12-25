import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Skeleton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoThumbnailUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from '../utils/constants';
const VideoCard = ({ video: { id: { videoId }, snippet } }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <Card sx={{
        width: { xs: '320px', sm: '358px', md: '300px' },
        boxShadow: '1px 1px 2px black',
        borderRadius: 4,}}
    >
      <Link to={videoId ? `/video/${videoId}` : '/video/cV2gBU6hKfY'}>
        <CardMedia
          image={isVideoLoaded ? snippet?.thumbnails?.high?.url || demoThumbnailUrl : undefined}
          alt={snippet?.title}
          sx={{ width: { xs: '100%', sm: '358px' }, height: 180 }}
        >
          {!isVideoLoaded && <Skeleton animation="wave" variant="rect" sx={{ width: '100%', height: '100%' }} />}
        </CardMedia>
      </Link>
      <CardContent sx={{ background: ' #fb173f', height: '90px' }}>
        <Link to={videoId ? `/video/${videoId}` : '/video/cV2gBU6hKfY'}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {isVideoLoaded ? snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60) : <Skeleton />}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant="subtitle2" color="white">
            {isVideoLoaded ? (
              <>
                {snippet?.channelTitle || demoChannelTitle}
                <CheckCircleIcon sx={{ fontSize: '12px', color: 'white', ml: '5px' }} />
              </>
            ) : (
              <Skeleton width={100} />
            )}
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
