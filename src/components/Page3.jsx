import React from 'react'
import Page1 from './Page1'
import Title from './Title'

const Page3 = () => {
  return (
    <div>
      <Title title="my title" />
      <p>above, remove this and Page1 looses statrkke</p>
      <Page1 />
      <p>below, remove this and Page1 keeps state</p>
    </div>
  )
}

export default Page3
