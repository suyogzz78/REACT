/*function Animals() {

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        <li>Lion</li>
        <li>Cow</li>
        <li>Snake</li>
        <li>Lizard</li>
      </ul>
    </div>
  );
}*/
/*
const Animals=()=>//using an arrow function 
{
 const animals=["Lion","tiger","leopard","cat","dog","snake"]
return (
    <div>
        <h1>Animals:</h1>
        <ul>
            {animals.map((animal)=>
            {
                return(<li key={animal}>{animal}</li>)//we use map for each element in the array
            }
        
        
        )}
        </ul>

    </div>
)

}
export default Animals*/
/*
function ListItem(props)
{
  return <li>{props.animal}</li>
}



function List(props)
{

  return (
  <ul>
    {props.animals.map((animal)=>{

      return <ListItem key={animal} animal={animal}/>
    }

  )}
  </ul>
  )
}
const Animals=() =>
  {

    const animals=["Lion","tiger","leopard","cat","dog","snake","lizard"]

    return (
      <div>

      <h1>Animals</h1>
      <List animals={animals}/>
      </div>

    )




  }
  export default Animals*/



/*
const List =(props)=>{

  return (
    <ul>
    {props.ghoda.map((animal)=>{

      return animal.startsWith("L")?<li key ={animal}>{animal}</li>:null;

    }
    )
    }

    </ul>

  )

}


const Animals=() =>
  {

    const animals=["Lion","tiger","Leopard","cat","dog","snake","Lizard"]

    return (
      <div>

      <h1>Animals</h1>
      <List ghoda={animals}/>
      </div>

    )




  }
export default Animals
*/
function List(props){
  if(!props.animals)
  {
    return <div>loading.......</div>
  }

  if(props.animals.length === 0)
  {
    return <div>There are no animals in the list</div>
  }
  return (
    <ul>
      {props.animals.map((animal)=>{

        return <li key={animal}>{animal}</li>
      })}

    </ul>
  )


}

const Animals=() =>
  {

    const animals=[]

    return (
      <div>

      <h1>Animals</h1>
    
      <List />
      </div>

    )




  }
export default Animals









