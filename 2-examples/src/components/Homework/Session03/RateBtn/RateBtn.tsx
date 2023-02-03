import React, { Component } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

type Props = {}

type State = {
    numStar : number,
}
const MAX_NUMBER = 5
class RateBtn extends Component<Props, State> {
  state = {
    numStar : 0
  }
  handleRate = (star: number) =>{
    this.setState((state) => ({
        numStar : star,
    }))
  }

  render() {
    return (
        <div >
        {[...Array(MAX_NUMBER)].map((item, index )=>(
            <span key={index} onClick={() => this.handleRate(index+1)}>
                {index < this.state.numStar ? <AiFillStar/> : <AiOutlineStar/>}

                           
            </span>
        ))}
       
      </div>
    )
  }
}

export default RateBtn