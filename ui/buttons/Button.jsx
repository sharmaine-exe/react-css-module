import buttonStyles from './button.module.css'



function Button   ({label='ui base button', children, variant='base',  ...props}){
     return( 
         <button className={buttonStyles[variant]}>{label}</button>
     )
 }
 
 export default  Button 

 