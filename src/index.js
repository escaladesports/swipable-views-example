import React from 'react'
import SwipeableViews from 'react-swipeable-views'

const slides = [
	<div><img src='http://via.placeholder.com/350x150' /></div>,
	<div><img src='http://via.placeholder.com/350x150' /></div>,
	<div><img src='http://via.placeholder.com/350x150' /></div>,
	<div><img src='http://via.placeholder.com/350x150' /></div>,
]

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
					{
						slides.map((slide, index) => {
							const classes = [ 'slide' ]
							if(!index){
								classes.push('first')
							}
							if(index === slides.length - 1){
								classes.push('last')
							}
							if(this.state.index - 1 === index){
								classes.push('previous')
							}
							if(this.state.index + 1 === index){
								classes.push('next')
							}
							return <div key={`slide${index}`} className={classes.join(' ')}>
								{slide}
							</div>
						})
					}
				</SwipeableViews>
				<div className='dots'>
					{
						slides.map((slide, index) => {
							return <div
								key={`slideDots${index}`}
								className={this.activeClass(index)}
								onClick={() => this.changeSlide(index)}
								/>
						})
					}
				</div>
				<style jsx>{`
					.slide{
						padding: 15px;
						border: 1px solid #333;
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
