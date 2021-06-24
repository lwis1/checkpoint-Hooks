import List from './MovieList'
import Add from './MovieCard'
import Filter from './Filter'
import {useState} from 'react'
import './style.css'
const App=()=>{
  const [state,setState]=useState([{title:"First Movie ",description:" Movie 1 description",posterURL:"movie1.jpg",rating:2},{title:"Second Movie ",description:"Movie 2 description",posterURL:"movie2.jpg",rating:5},
  {title:"Third Movie",description:"Movie 3 description",posterURL:"movie3.jpg",rating:3}])
  const [filter,setFilter]=useState("")
  const [rateFilter, setRateFilter] = useState(0)
  const handleState=(newMovie)=>{setState([...state,newMovie])}
  const changeFilter=(val)=>{setFilter(val)}
  const changeRate=(val)=>{setRateFilter(val)
  }
  const filteration=(filter)=>{
    return state.filter(el=>el.title.toLowerCase().includes(filter.toLowerCase())&& el.rating>=rateFilter)
  }
  return(<div className="App">
      
  <Add handleState={handleState}/>
  <Filter changeFilter={changeFilter} changeRate={changeRate}/>
  <List state={filteration(filter)} />
  </div>)
}
export default App 