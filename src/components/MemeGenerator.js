import React, {Component} from "react"
import Meme from './Meme';

class MemeGenerator extends Component {
  state = {
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
    allMemeImgs: []
  }
  
  componentDidMount = () => {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
        const {memes} = response.data
        this.setState({ allMemeImgs: memes })
    })
  }
  
  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }
  
  handleSubmit = (event) => {
    event.preventDefault()
    const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randomMemeImg = this.state.allMemeImgs[randomNum].url
    this.setState({ randomImg: randomMemeImg })
  }
  
  render = () => {
    return (
      <section>
        <form className="meme-form" onSubmit={this.handleSubmit}>
            <input 
                type="text"
                name="topText"
                placeholder="Top Text"
                value={this.state.topText}
                onChange={this.handleChange}
            /> 
            <input 
                type="text"
                name="bottomText"
                placeholder="Bottom Text"
                value={this.state.bottomText}
                onChange={this.handleChange}
            /> 
        
            <button>Generate</button>
        </form>
        <Meme data={this.state}/>
      </section>
    )
  }
}

export default MemeGenerator;