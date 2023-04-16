import { useEffect, useState, useCallback, useRef, useContext } from 'react';
import { v4 } from 'uuid';
import { socket} from './context/socket';
// import styled from 'styled-components';
import Dashboard from './Dashboard/Dashboard'

// import Form from './components/Form'; 
// import AmongCard from './components/AmongCard'; 


// const Container = styled.div`
//   margin-top: 100px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;
// `;

// const Content = styled.div`
//   margin-top: 50px;
//   width: 1500px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-wrap: wrap;
// `;

function App() {
  
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({});

  useEffect(() => {
    socket.on("new_item_scanned", (res) => {
      console.log("New Item Recived", res);
    setNewItem(res)
    });

  }, []);

  useEffect(()=>{
    if (Object.keys(newItem).length !== 0){
      setItems(items.concat([newItem]))
    }

  }, [newItem])

 

  return (
    
    <div className="App">
    <Dashboard items={items}/>
    {/* <button onClick={handleLogin}>Hello</button> */}
    </div>
   
  );
}

export default App;
