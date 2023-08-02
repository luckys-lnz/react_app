import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";

function App() {
  let items = ["item 1", "item 2", "item 3", "item 4", "item 5"];
  
  const handleSelectItem = (item: string) => {
    console.log(item)
  }
  
  const [alertShow, setAlertShow] = useState(false);
  
  return (
    <div><ListGroup items={items} heading="itemz" onSelectItem={handleSelectItem} />
      {/*we could make this line better by converting the component into an html like tag
       <Alert text="Great, Youre learning FAST"/>*/}
      {alertShow && <Alert onClose={()=>setAlertShow(false)}><h1>Hello Alert</h1></Alert>}
      <Button
        onClick={() => setAlertShow(true)}
      >Success</Button>
      
    </div>
  
  )
}
export default App;