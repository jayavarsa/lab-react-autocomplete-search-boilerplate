import { useState } from 'react'
import countryData from '../resources/countryData.json'
import './App.css'

function App() {

  const [Text, setText] = useState("");
  const [dropDown, setdropDown] = useState([]);
  const [getSuggestion, setgetSuggestion] = useState(true)

  function handleChange(el){
    setText(el.target.value)
    setdropDown(countryData.filter((el)=>el.name.toLowerCase().startsWith(Text.toLowerCase())))
    setgetSuggestion(true)

  }
  let handleEscape=(el)=>{
    if(el.keyCode==27){
      setgetSuggestion(false)
      console.log('Escape')
    } 
  }
  return (
    <div className='main_container'>
      <h1>Search Here</h1>
      <div className="conten_container">
        <input type='text' onChange={handleChange} onKeyDown={handleEscape} list='suggest' placeholder='Type ...'/>
        <datalist  id='suggest' className={getSuggestion?'show':'hide'}>
          {getSuggestion && dropDown.map((el, i) => (<option key={i} value={el.name}></option>))}
        </datalist>
      </div>
      <button>Search</button>
    </div>
  )
}

export default App