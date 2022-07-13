import React,{Fragment,useState} from 'react'
import { FoodForm,Input,Button,Select } from './Form.styled';
import { ToastContainer, toast } from 'react-toastify';
const Form = (props) => {
  const {meal, enteredQuery}=props;
  const [query,setQuery]=useState("");
  const [mealType,setmealType]=useState("");


  
  const handleSubmit=(e)=>{
    e.preventDefault();

    if(mealType==="" || query===""){
      toast.warn('Please fill blanks!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    
      return
    }

enteredQuery(query);
meal(mealType)
      setQuery("")

  }
  return (
    <Fragment>
        <FoodForm onSubmit={handleSubmit}
           data-aos="fade-left"
           data-aos-anchor="#example-anchor"
           data-aos-offset="500"
           data-aos-duration="1000"
        >
        <Input type="text"  placeholder='Search your favorite dish..' value={query} onChange={e=>setQuery(e.target.value)}/>
        <Button type='search'>Search</Button>
        <Select name="cars" id="cars" onChange={e=>setmealType(e.target.value)}>
          <option value="" >Select</option>
          <option value="Breakfast" >Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Snack">Snack</option>
          <option value="Teatime">Teatime</option>
        </Select>
        </FoodForm>
        <ToastContainer />
    </Fragment>
  )
}

export default Form