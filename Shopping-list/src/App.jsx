
import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [food, setFood ] = useState('');
  const [shoppingList, setShoppingList] = useState([])
  const [bucketList, setBucketList] = useState([])

  const handleInput = (e) => {
    //console.log(e.target.value)
    setFood(e.target.value)
  }

  const fetchItems = async (food) => {
    const url = `https://api.frontendeval.com/fake/food/${food}`;
    const result = await fetch (url);
    const data = await result.json();
    //console.log(data)
    setShoppingList(data);
  }
//console.log(shoppingList)

  useEffect(()=>{
    if (food.length >= 2) {
      //make an api call
      fetchItems(food);
    }
  }, [food])


  const handleShoppingList = (e) => {
    const idx = e.target.getAttribute('data-id')
    if (idx) {
      const obj = {
      id: Date.now(),
      data: shoppingList[idx],
      isDone: false 
    }
    const copyBucketList = [...bucketList];
    copyBucketList.push(obj);
    setBucketList(copyBucketList);
  }
  setFood('');//clear input
}
console.log(bucketList)

// handle ButtonRight and Delete

  // const handleRightClick = (id) => {
  //   const copyBucketList = [...bucketList]
  //   const newBucketList = copyBucketList.map((item) => {
  //     if (item.id === id) {
  //       item.isDone = !item.isDone;
  //   }
  //   return item;
  // })
  // setBucketList(newBucketList);
  // }

  // const handleDelete = (id) => {
  //   const copyBucketList = [...bucketList];
  //   const newList = 
  //     copyBucketList.filter((item) => item.id !== id);
  //   setBucketList(newList);
  // }

//or

  const handleButtonClick = (type, id) => {
    if (type === 'toggle') {
        
        const newBucketList = bucketList.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone};
      }
      return item;
    })
    setBucketList(newBucketList);
    }
    else if (type === 'delete') {
      
       const newList = 
       bucketList.filter((item) => item.id !== id);
       setBucketList(newList);
    }
  }


  return (
    <div className="App">
      <h1>My Shopping List</h1>
      {/* input button */}
      <div>
        <input type="text" value={food} onChange={handleInput}/>
      </div>

      {/* auto suggestion */}
    {
      food.length >= 2 ? 

      <div className="shopping-list" onClick={handleShoppingList}>
      {
        shoppingList.map((item, index)=>{
          return <div 
            data-id={index}
            className='product'>
            {item}
          </div>
        })
      }
      </div> : null
}

      {/* bucket list */}

      <div className="bucket">
        {
          bucketList.map((item) => {
            return <div className='shopping-item'>
              <button onClick={()=> handleButtonClick('toggle',item.id)} >✓</button>
              <div className={item.isDone ? 'strike' : ''}>{item.data}</div>
              <button onClick={() => handleButtonClick('delete',item.id)} >X</button>
            </div>
          })
        }
        
      </div>
    </div>
      
  )
}

export default App;