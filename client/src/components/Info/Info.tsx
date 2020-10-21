import React, { PropsWithChildren, Component } from 'react';
import styled from '@emotion/styled';
import AddClicks from '../AddClicks/indsex';

interface props {
  style?: React.CSSProperties,
};

interface state {
  clicks : number,
  message : string,
  clicksToAdd : number,
}

class Info extends Component<props, state> {

  constructor(props : {}) {
    super(props)
    this.state = {
      clicks: 0,
      message: "not mounted",
      clicksToAdd: 0,
    }
  }

  changeAddition = (amount : number) => {
    console.log('amount', amount)
    this.setState({
      ...this.state,
      clicksToAdd: amount,
    })
  }

  addClicks = () => {
    console.log('this.state', this.state)
    this.setState((prev: state) => {
      console.log('prev', prev)
      return ({ 
      clicks: prev.clicks + prev.clicksToAdd,
      message: "clicked",
      clicksToAdd: 0,
    })
  });
    // this.setState({
    //   clicks: this.state.clicks + this.state.clicksToAdd,
    //   message: "clicked",
    //   clicksToAdd: 0,
    // })
    setInterval(() => this.setState({...this.state, message: ""}), 500);
  }
  
  componentWillUnmount() {
    this.setState({
      clicks: 0,
      message: "",
      clicksToAdd: 0,
    })
  }

  componentDidUpdate(prevProps : props, prevState : state) {
    if(this.state.clicks != prevState.clicks){
      console.log('test3')
      this.render()
    }
  }

  componentDidMount() {
    console.log('this.state', this.state)
    this.setState({
      clicks: 0,
      message: "Mounted",
      clicksToAdd: 0,
    })
  }

  render() {
    return (
      <Wrapper data-css='Info'>
        <h2>Message: { this.state.message }</h2>
        <h3>Clicks: { this.state.clicks }</h3>
        <button onClick={(e) => {
          this.changeAddition(1);
          this.addClicks();
        }}>
          + 1
        </button>
        <div>
          <h4>custom addition</h4>
          <label>
            Add clicks?
            <input type="number" onChange={(e) => this.changeAddition(parseInt(e.target.value))}
              value={this.state.clicksToAdd.toString().replace(/^0+/, '')}
            />
          </label>
          <button onClick={() => this.addClicks()}>
            ADD
          </button>
        </div>
        <AddClicks amount={2} changeAddition={this.changeAddition} addClicks={this.addClicks}/>
      </Wrapper>
    )
  }
}

export default Info;

const Wrapper = styled.div`

`;