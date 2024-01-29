import React, { useState } from "react";


export default function Form(params) {

    // const [firstName , setFirstName] = useState("")
    // const [lastName, setLastName] = useState("")
    // above code is lengthy as we need to mention every property seperately
    // thus we are going to use form objects

    const [formData, setFormData] = useState(
        {firstName:"",lastName:""}
    )

    console.log(formData)


    function handleForm(event){
        console.log(event.target.value)

        setFormData(preFormData => {
            return {
                ...preFormData,
                [event.target.name]: event.target.value
            }
        })

    }
    


   



    // function handleChange(event){
    //     // console.log(event.target.value)
    //     // setFirstName(event.target.value) // here we are directly changine state because we don't
    //     // have top worry what previous state was.
    // }
   
    return (

        <form>
            <input type="text"
            placeholder="First Name"
            onChange={handleForm}  // very important eventlistener Note
            name="firstName"  //better to give same name as in usestate
            />
            <input type="text"
            placeholder="Last Name"
            onChange={handleForm}  // very important eventlistener Note
            name="lastName"
            />
        </form>
    )
    
};
