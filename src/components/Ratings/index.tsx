import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { Typography } from '@mui/material';
import { RatingProps } from '../../store/product/types';

const HoverRating:React.FunctionComponent<RatingProps>=(props) =>{

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={props.count}
        precision={props.rate}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      <Typography fontFamily="Inter" color="secondary.main" marginLeft={3}>Reviews ({props.count})</Typography>
    </Box>
  );
}

export default HoverRating;
