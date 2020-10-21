import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import AdditionButton from './AdditionButton';

interface props {
  style?: React.CSSProperties,
  amount: number,
  changeAddition: (amount: number) => void,
  addClicks: VoidFunction,
};

interface state {
  clicks: number,
}

class AddClicks extends React.Component<props, state> {

  constructor(props : props) {
    super(props)
    this.state = {
      clicks: 0,
    }
  }

  click() {
    this.props.changeAddition(this.props.amount);
    this.props.addClicks();
  }

  render () {
    if(this.props.amount < 1){
      return (
        <Button amount={this.props.amount} disabled={true} />
      )
    }
    return (
      <Button amount={this.props.amount} disabled={false} 
        onClick={()=>this.click}
      />
    )
  }
}

export default AddClicks;


const Wrapper = styled.div`

`;

const Button = styled(AdditionButton)`

`