import React from 'react'
import Hello from './Hello'
import Gret from './Greet'
import Message from './Message'
import Counter from './Counter'
import ProductList from './ProductList'
import TodoList from './TodoList'
import DataFetch from './DataFetch'
const Home = () => {
  return (
   <div>
    <DataFetch/>
   {/* <TodoList/>*/}
    {/*<ProductList/>*/}
    {/*<Counter/>*/}
   {/* <Message/> */}
   {/* <Hello name='Raju' id='123456'>
    <p>Thsi is from section 11</p>

   </Hello>
   <Hello name='Uday' id ='32411'>
   <button>submit</button>
   </Hello>
   <Hello name='kaala' id='31077'/>
   <Great name=' kishan'  id='30208'/>
   <Great name=' Hitendra'  id='32405'/>
  <Great name=' paul'  id='31351'/> */}
   </div>
  )
}

export default Home