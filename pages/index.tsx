import { Box, Container } from '@mui/material'
import mockData from 'mock/mockData.json'
import { NextPage } from 'next'
import React from 'react'

import { ProductType } from 'types'

import { ProductItem } from 'components/atoms'

interface HomePageProps {
  products: ProductType[]
}

const Home: NextPage<HomePageProps> = ({ products }) => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={(theme) => ({
          my: 4,
          display: 'grid',
          gridGap: '1rem',
          gridTemplateColumns: `repeat(auto-fit, minmax(18rem, auto))`,
          gridAutoRows: 'minmax(18rem, auto)',
          alignItems: 'center',
        })}
      >
        {products.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </Box>
    </Container>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  /* const res = await fetch('https://.../posts')
  const posts = await res.json() */

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      products: mockData,
    },
  }
}

export default Home
