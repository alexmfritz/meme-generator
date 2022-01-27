import React from 'react';

export default function Meme(props) {
  return (
    <section className="meme">
      <img src={props.data.randomImg} alt="meme image" />
      <h2 className="top">{props.data.topText}</h2>
      <h2 className="bottom">{props.data.bottomText}</h2>
    </section>
  )
}