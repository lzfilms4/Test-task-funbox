import { useState } from 'react'
import catImg from './assets/img/cat.png'
import './App.scss'
import Card from './components/Card'

function App() {

  return (
    <div className="App">
      <div className="title">Ты сегодня покормил кота?</div>
      <div className="cards">
        <Card company={"Сказочное заморское яство"} title={"Нямушка"} taste={"с фуа-гра"} giftItems={[<><b>10</b> порций</>, <>мышь в подарок</>]} imgPath={catImg} weightCount={"0,5"} weightType={"кг"} disabled={false}/>
        <Card company={"Сказочное заморское яство"} title={"Нямушка"} taste={"с рыбой"} giftItems={[<><b>40</b> порций </>, <>мышь в подарок</>]} imgPath={catImg} weightCount={"0,5"} weightType={"кг"} disabled={false}/>
        <Card company={"Сказочное заморское яство"} title={"Нямушка"} taste={"с рыбой"} giftItems={[<><b>40</b> порций </>, <>мышь в подарок</>]} imgPath={catImg} weightCount={"0,5"} weightType={"кг"} disabled={true}/>
      </div>
    </div>
  )
}

export default App
