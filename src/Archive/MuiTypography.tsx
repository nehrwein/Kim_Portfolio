import React from 'react'
import { Typography } from '@mui/material'

const MuiTypography = () => {
  return (
    <div>
      <Typography variant='h1'>h1 Heading</Typography>
      <Typography variant='h2'>h2 Heading</Typography>
      <Typography variant='h3'>h3 Heading</Typography>
      <Typography variant='h4' gutterBottom>h4 Heading</Typography>
      <Typography variant='h5'>h5 Heading</Typography>
      <Typography variant='h6'>h6 Heading</Typography>

      <Typography variant='subtitle1'>Subtitle 1</Typography>
      <Typography variant='subtitle2'>Subtitle 2</Typography>

    {/* body1 is the default value of the variant prop */}
      <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nihil, exercitationem non pariatur voluptatibus labore? Numquam officia nobis quam qui excepturi rerum placeat facilis voluptatem vitae, dolorem ipsum impedit amet.</Typography>
      <Typography variant='body2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste voluptatibus fugiat alias nobis, totam velit temporibus. Illo tenetur non libero est officiis quae, asperiores placeat, hic ea eius at animi.</Typography>
    </div>
  )
}

export default MuiTypography