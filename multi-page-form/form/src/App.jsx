import { useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import FormDetails from './components/FormDetails'

function App () {
  //const [forms, setForms] = useState(data)
  const [index, setIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    password: '',
  })
  const[isFormSubmitted, setIsFormSubmitted] = useState(false)

  const data = [
    {
      id : "name",
      label: "Name",
      inputType: "text",
      buttonName: "Next",
      placeholder: "Your Name..."
    },
    {
      id : "email",
      label: "Email",
      inputType: "email",
      buttonName: "Next",
      placeholder: "Your Email..."
    },
    {
      id : "dob",
      label: "DOB",
      inputType: "date",
      buttonName: "Next",
      placeholder: ""
    },{
      id : "password",
      label: "Password",
      inputType: "password",
      buttonName: "Submit",
      placeholder: "password"
    }
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if(index === data.length - 1)
      {
        setIsFormSubmitted(true)
        console.log("Form Submitted")
      }else{
        setIndex((idx) => idx + 1)
    }
  } 

  const handleBack = (e) => {
    e.preventDefault()
    setIndex((index) => index - 1)
  }

  const handleInputChange = (e) => {
      const id = e.target.id
      const val = e.target.value
      
      const copyFormData = {...formData}
      copyFormData[id] = val
      console.log(copyFormData)
      setFormData(copyFormData)
  }
  
  return (
      <div className="App">
        {!isFormSubmitted ? 
          <UserForm 
            data={data}
            index = {index}
            handleSubmit = {handleSubmit}
            handleBack = {handleBack}
            formData = {formData}
            handleInputChange = {handleInputChange}
           />
        :
          <FormDetails formData = {formData}/>

        }
      </div>
  )
  
}

export default App;
