import { CardProps } from '@mui/material'

import { ProductType } from 'types'

export type ProductItemProps = Omit<CardProps, 'id'> & ProductType
