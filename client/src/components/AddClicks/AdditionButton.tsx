import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';

interface props {
  style?: React.CSSProperties,
  disabled: boolean,
  amount: number,
  onClick?: any,
};

class AdditionButton extends React.Component<props, {}> {

  constructor(props:props) {
    console.log('props addition button', props)
    super(props)
  }

  render () {
    if(this.props.disabled) {
      return (
        <DisButton />
      )
    }
    return (
      <Wrapper data-css='AdditionButton'>
        <Button>
          {this.props.amount}
        </Button>
      </Wrapper>
    )
  }
}

export default AdditionButton;

const Button = styled.button`
  
`

const DisButton = styled.button`
  filter: grayscale(
    50%
  );
  &:hover {
    cursor: not-allowed;
  }
`

const Wrapper = styled.div`

`;