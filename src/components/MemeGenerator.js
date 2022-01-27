import React, {Component} from "react"
import Meme from './Meme';

class MemeGenerator extends Component {
  constructor() {
    super()
    this.state = {
        topText: "",
        bottomText: "",
        randomImg: "http://i.imgflip.com/1bij.jpg",
        allMemeImgs: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
    .then(response => response.json())
    .then(response => {
        const {memes} = response.data
        this.setState({ allMemeImgs: memes })
    })
  }
  
  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name]: value })
  }
  
  handleSubmit(event) {
    event.preventDefault()
    const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
    const randMemeImg = this.state.allMemeImgs[randNum].url
    this.setState({ randomImg: randMemeImg })
  }
  
  render() {
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
        
            <button>Gen</button>
        </form>
        <Meme data={this.state}/>
      </section>
    )
  }
}

export default MemeGenerator