import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Description(props) {
    const id= useParams();
    const item=props.mouvie[id.id]
  return (
    <div>

{item.descr}
<br></br>
<br></br>
<iframe src={item.video}>

</iframe>
            </div>
  )
}

export default Description
