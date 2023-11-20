import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'


const  initialValues={
    name:'',
    email:'',
    channel:''
}
const onSubmit=values=>{console.log("field data ",values);}
const validate=values=>{
    let errours={}
    if(!values.name){
        errours.name='Required'
    }

    if(!values.email){
        errours.email='Required'
    }
     else if( !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(values.email)){
        errours.email='Invalid email.format'
     }
    if(!values.channel){
        errours.channel='Required'
    }
    return errours
}
const validationSchema=Yup.object({
    name: Yup.string().required('REquired!'),
    email:Yup.string().email('invalid email email').required('Required'),
    channel:Yup.string().required('REquired!')
})
function YoutubeForm() {
    const formik=useFormik({
       initialValues,
        onSubmit,
        validationSchema
    })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input 
        type='text'
         id='name' 
         name='name'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
         value={formik.values.name}/>
        {formik.touched.name?<div  id="errors">{formik.errors.name}</div>:null}

        <label htmlFor='email'>E-mail</label>
        <input type='email'
        id='email'
        name='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
         value={formik.values.email}
         />
        {formik.touched.email?<div  id="errors">{formik.errors.email}</div>:null}

        <label htmlFor='channel'>Channel</label>
       <input type='text' 
       id='channel'
        name='channel' 
        onChange={formik.handleChange}
        onBlur={formik.handleBlur} 
        value={formik.values.channel}
        />
      {formik.touched.channel?
      <div id="errors">{formik.errors.channel}</div>:null}
      <button>Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm
