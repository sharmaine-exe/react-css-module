
import Button from "../ui/buttons/Button"
function HomePage() {   
    return  (
      <header style={{textAlign:"center", marginTop:"10rem"}}>
           <Button label="basic button"/>
           <Button label="warning button"  variant="warning"/>
           <Button label="danger"  variant="danger"/>
      </header>


    )
}


 

export default HomePage
