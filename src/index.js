import React from 'react'
import SwipeableViews from 'react-swipeable-views'

export default class extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			index: 0
		}
		this.changeSlide = this.changeSlide.bind(this)
		this.activeClass = this.activeClass.bind(this)
	}
	changeSlide(index){
		this.setState({ index })
	}
	activeClass(n){
		if(this.state.index === n){
			return 'active'
		}
		return ''
	}
	render(){
		return (
			<div>
				<SwipeableViews index={this.state.index} onChangeIndex={this.changeSlide}>
					<div className='slide slide1'>
						slide n°1
					</div>
					<div className='slide slide2'>
						slide n°2
					</div>
					<div className='slide slide3'>
						slide n°3
					</div>
				</SwipeableViews>
				<div className='dots'>
					<div className={this.activeClass(0)} onClick={() => this.changeSlide(0)} />
					<div className={this.activeClass(1)} onClick={() => this.changeSlide(1)} />
					<div className={this.activeClass(2)} onClick={() => this.changeSlide(2)} />
				</div>
				<style jsx>{`
					.slide{
						padding: 15px;
						min-height: 100px;
						color: #fff;
					}
					.slide1{
						background: #FEA900;
					}
					.slide2{
						background: #B3DC4A;
					}
					.slide3{
						background: #6AC0FF;
					}

					.dots{
						text-align: center;
						div{
							width: 13px;
							height: 13px;
							border: 1px solid #333;
							display: inline-block;
							border-radius: 100%;
							cursor: pointer;
							margin: 5px;
						}
					}
					.active{
						background: #333;
					}
				`}</style>
			</div>
		)
	}
}
