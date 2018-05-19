import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			betsPlaced: new Array(),
			currentBet: undefined
		}
	}
	placeBet = () => {
		const betAmount = document.getElementById('betAmount').value
		this.setState({
			currentBet: betAmount
		})
	}
  render() {
		const { betsPlaced } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Roulette</h1>
        </header>
        <div className="App-intro">
					<div className='bets'>
						{
							betsPlaced.length > 0
							? betsPlaced.map(value => {return <div className='bet'>{value}</div>})
							: 'No bet was placed yet.'
						}
					</div>
					<div className='balance'>
						Balance: 1.00 ETH
					</div>
					<div className='currentBet'>
						Your current bet: {this.state.currentBet}
					</div>
					<div className='placeBet'>
						<input id='betAmount' className='currentBet' placeholder='Your bet' />
						<br />
						<button onClick={this.placeBet}>Place bet</button>
					</div>
        </div>
				<div className='rouletteTable'>
					<div className='sectionOne'>
						<div className='field field1'>
							1
						</div>
						<div className='field field2'>
							2
						</div>
						<div className='field field3'>
							3
						</div>
						<div className='field field4'>
							4
						</div>
						<div className='field field5'>
							5
						</div>
						<div className='field field6'>
							6
						</div>
						<div className='field field7'>
							7
						</div>
						<div className='field field8'>
							8
						</div>
						<div className='field field9'>
							9
						</div>
						<div className='field field10'>
							10
						</div>
						<div className='field field11'>
							11
						</div>
						<div className='field field12'>
							12
						</div>
					</div>
					<div className='sectionTwo'>
						<div className='field field13'>
							13
						</div>
						<div className='field field14'>
							14
						</div>
						<div className='field field15'>
							15
						</div>
						<div className='field field16'>
							16
						</div>
						<div className='field field17'>
							17
						</div>
						<div className='field field18'>
							18
						</div>
						<div className='field field19'>
							19
						</div>
						<div className='field field20'>
							20
						</div>
						<div className='field field21'>
							21
						</div>
						<div className='field field22'>
							22
						</div>
						<div className='field field23'>
							23
						</div>
						<div className='field field24'>
							24
						</div>
					</div>
					<div className='sectionThree'>
						<div className='field field25'>
							25
						</div>
						<div className='field field26'>
							26
						</div>
						<div className='field field27'>
							27
						</div>
						<div className='field field28'>
							28
						</div>
						<div className='field field29'>
							29
						</div>
						<div className='field field30'>
							30
						</div>
						<div className='field field31'>
							31
						</div>
						<div className='field field32'>
							32
						</div>
						<div className='field field33'>
							33
						</div>
						<div className='field field34'>
							34
						</div>
						<div className='field field35'>
							35
						</div>
						<div className='field field36'>
							36
						</div>
					</div>
				</div>
      </div>
    );
  }
}

export default App;
