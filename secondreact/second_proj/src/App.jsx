import Card from './Card.jsx'
import Student from './Student.jsx';

function App() {
  
return(
  <div>
    <Card/>
    <Student name="Aniket" age={22} isstudent={true}/>
    
    <Student name="panda" age={21} isstudent={true}/>
    <Student/>
    <Student name="Jejus" age={9999} isstudent={false}/>
  </div>
);
  
}

export default App
