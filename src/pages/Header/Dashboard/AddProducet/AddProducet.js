import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddProducet.css';

const AddProducet = () => {
    const { register, handleSubmit,reset } = useForm();
  const onSubmit = data =>{ 
      console.log(data);
      axios.post('https://frozen-inlet-69668.herokuapp.com/users',data)
      .then(res=>{
          if(res.data.insertedId){
              alert('add successfully');
              reset();
          }
      })
      
}
      
    return (
        <div className="add-producet">
            <h2>Add Producets</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input className="add-product" {...register("Name", { required: true, maxLength: 20 })} placeholder="Name"/>
      <input className="add-product" {...register("img")} placeholder="images"/>
      <input className="add-product" type="number" {...register("prices",)} placeholder="prices"/>
      <textarea {...register("descaption")} placeholder="desxaption"/>
      <input className="btns" type="submit" />
    </form>
        </div>
    );
};

export default AddProducet;