// import { render } from '@testing-library/react';
import React,{ useState } from 'react'
import MainPageLayout from '../components/MainPageLayout'
import { apiGet } from '../components/misc/config';

const Home =()=>{
  const [input,setInput]= useState('');
  const [results,setResults]= useState(null);
  const [searchOption,setSearchOPtion]= useState('shows');
  const isShowsSearch =searchOption ==="shows";
  const onSearch= () =>{

    apiGet(`search/$(searchOption)?q=$(input)`).then(r =>r.json())
    .then(result =>{
      setResults(result);
      // console.log(result);
    // https://api.tvmaze.com/search/shows?q=girls
    

    })
   }

const onInputChange = ev =>{
  setInput(ev.target.value);
 }
 
const onKeyDown=(ev) =>{
  if(ev.keyCode===13){
   onSearch()
  }
// console.log(ev.keyCode);
}
const onRadioChange =( ev) =>{
 setSearchOPtion(ev.target.value);
}

console.log(searchOption);



const renderResults =()=>{
  if(results && results.length ===0){
    return <div>No results </div>
  }
  if(results && results.length>0){
    return  results[0].shows ? results.map(item =>(
    <div key={item.show.id}>{item.show.name}</div> 
    )): results.map(item =>(
      <div key={item.person.id}>{item.person.name}</div>
    ));
  }
  return null;

}


  return (
    <MainPageLayout>
      <input type="text"
       onChange={onInputChange} 
       onKeyDown={onKeyDown} 
       value={input} 
        placeholder="search for something"/>
<div>
<label htmlFor="shows-search">
  Shows
  <input id='shows-search' type="radio" value="shows" onChange={onRadioChange} checked={isShowsSearch}/>
</label>

<label htmlFor="actors-search">
  Actors
  <input id='actors-search' type="radio" value="people" onChange={onRadioChange} checked={!isShowsSearch}/>
</label>


</div>

      <button type='button' onClick={onSearch}>Search</button>
      {renderResults()}
    </MainPageLayout>
  )
}

export default Home