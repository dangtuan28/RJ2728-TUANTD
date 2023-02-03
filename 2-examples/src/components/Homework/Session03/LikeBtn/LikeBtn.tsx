import React, { Component } from 'react'
import { AiFillDislike, AiFillLike } from 'react-icons/ai';


type Props = {}

type State = {
    isLike: boolean;
}

class LikeBtn extends Component<Props, State> {
  state = {
    isLike: false,
  }
 handleLike = () => {
    this.setState((state) => ({
        isLike : !state.isLike,
    }));
 };
  render() {
    return (
      <div onClick={() => this.handleLike()}>{this.state.isLike ? <AiFillLike/> : <AiFillDislike/>}</div>
    )
  }
}

export default LikeBtn

