import {Link} from "react-router-dom"; 
import  logo from '../Images/images.png';

const Navbar = ()=> {
  const [searchVisiblity , visiblity] = useState(false)
  return(
    <>
 <nav>
  <div className={" flex md:flex p-1 bg-white w-full h-full py-4 px-[5vw] md:border-0 md:block md:inset-0 md:relative "+ (searchVisiblity?"show":"hide")}>

  <img  src={logo} alt="" className=" mt-3 border rounded-lg w-10 h-10 border-radius pt-1 "/>

 
    <input type="text" placeholder="search"  className="bg-stone-200 border-none rounded-full p-2 m-3 w-full md:w-auto pl-6 pr=[30%]  md:pr-4  "/>
    
  


  </div>
   <button onClick={}></button>
</nav>

</>
  )
}

export default Navbar;