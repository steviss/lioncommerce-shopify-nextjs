import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

import { ProductItemProps } from './ProductItem.interface'

const ProductItem: React.FC<ProductItemProps> = ({ id, name, image, sku, quantity_remaining, sold, price, ...props }) => {
  return (
    <Card {...props}>
      <CardHeader title={name} subheader={`${sold} sold/${quantity_remaining} remaining`} />
      <CardMedia component="img" height="250" image={image} alt={name} />
      <CardContent>
        <Typography variant="body2">
          This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along
          with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart">
          <AddShoppingCartIcon />
        </IconButton>
        <Typography component="span">{price}</Typography>
      </CardActions>
    </Card>
  )
}

export default ProductItem
