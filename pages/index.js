
import Button from "../ui/buttons/Button"
import LoginForm from "../components/LoginForm"


function HomePage() {   
    return  (

      <>
      <header style={{textAlign:"center", marginTop:"10rem"}}>
          <Button label="basic button"/>
          <Button label="warning button"  variant="warning"/>
          <Button label="danger"  variant="danger" /> 
          <Button label="primary button"  variant="primary" /> 
      </header> 
      <LoginForm></LoginForm>
      </>

    )
}



export default HomePage
