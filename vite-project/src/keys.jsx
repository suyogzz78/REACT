
/*const dogs=[
    {task:"eat your food ", id:crypto.randomUUID()},
    {task:"bark ", id:crypto.randomUUID()},
    {task:"Play with ball ", id:crypto.randomUUID()},

];

const Keys=() =>
{
    return (
        <ul>    
            {dogs.map((dog)=>(

                <li key={dog.id}>{dog.task}</li>



            )           
            )}
        </ul>
    );


}
export default Keys*/

/*
import React from "react";
const tasks = [
  { id: 1, task: "Eat" },
  { id: 2, task: "Play" },
  { id: 3, task: "Sleep" }
];

const Keys = () => {
  const [items, setItems] = React.useState(tasks);

  const handleRemove = () => {
    // Remove the first item
    setItems((prev) => prev.slice(1));
  };

  return (
    <div>
      <button onClick={handleRemove}>Remove First</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.task}</li> 
        ))}
      </ul>
    </div>
  );
};
export default Keys*/

const months=['January','February','March','April','June']

const Keys=() =>{


    return(

        <ul>
            {months.map((month,index)=>
            (
                    <li key={index}>{month}</li>


            ))}
        </ul>
    )



}
export default Keys
