import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { increment,decrement,reset,countWithNum } from './Redux/reduxSlice';
function Counter() {
    const [num,setNum] = useState(0)
    const count = useSelector((state=>state.counterReducer.counter))
    console.log(count);

    const dispatch = useDispatch()
  return (
    <>
        <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
            <div className='w-75 border border-2 shadow border-light p-5'>
                <h2 className='text-danger text-center'></h2>
                <h2 className='text-light text-center'>{count}</h2>
                <div className='d-flex justify-content-center p-5'>
                    <button className='btn btn-success me-3' onClick={()=>{dispatch(increment())}}>+ Increment</button>
                    <button className='btn btn-danger me-3' onClick={()=>{dispatch(decrement())}}>- Decrement</button>
                    <button className='btn btn-info px-4' onClick={()=>{dispatch(reset())}}>Reset</button>
                </div>
                <div className='d-flex justify-content-between'>
                  <input type="number" placeholder='Enter a Number' onChange={(e)=>{setNum(e.target.value)}} className='form-control' />
                  <button className='btn btn-info' onClick={()=>{dispatch(countWithNum(num))}}>Count</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Counter