import axios from 'axios';
import { useState } from 'react';
import ListDetails from './ListDetails';
import './Dict.css';
function Dict() {

  const [keyWord, setkeyWord] = useState("");
  const [result, setResult] = useState(null);

  const api = "https://api.dictionaryapi.dev/api/v2/entries/en"; 

  async function handleSearch() {
    try {
      const res = await axios.get(`${api}/${keyWord}`);
      console.log(res, "res");
      setResult(res.data[0]);
    } catch (e) {
      console.log({e});
    }
  }
  
  function handleClear(e){
    setkeyWord("");
    setResult("");
    e.prevent.default();
  }
  return (
   
   <div className='mainclass'>
<h2>Dictionary app</h2>
<input className='inputfield'  onChange={(e)=> setkeyWord(e.target.value)}/>
<button className='button' onClick={handleSearch}
type="submit" >Search</button>

<button className='button'   disabled={!result}
 type="submit" onClick={handleClear}>Clear</button>

{/* <h2>{keyWord}</h2> */}

<div>
{result && <ListDetails {...{ result }} />}
</div>
    </div>
  )
}

export default Dict;