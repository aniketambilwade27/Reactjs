import List from './List.jsx'
function App() {
 const fruits=[{id:1,name:"apple", calories:50},{id:2,name:"banana", calories:101}, {id:3,name:"papaya", calories:105}, {id:4,name:"orange", calories:55},{id:5,name:"mango", calories:120}]
  return(
    <div>
      <List items={fruits}/>
    </div>
  );
}

export default App
