import React from "react"
import BadgeGen from "./components/BadgeGen"
function App() {
  const [formData, setFormData] = React.useState(
    {
      badges: [],

      userInput: {firstName: "",
      lastName: "",
      email: "",
      phone: "",
      food: "",
      birth: "",
      about: ""}
    })
    
  function handleChange(event) {
    const {name, value} = event.target
    setFormData(prev => {
      return {
        badges: [...prev.badges],
        userInput: {...prev.userInput, [name]: value}
      }
    })
  }
  
  // const [badges, setBadges] = React.useState({badges: []})

  function handleSubmit(event){
    event.preventDefault()
    setFormData(prev => {
      return {
        badges: [...prev.badges, formData.userInput],
        userInput: {firstName: "",
        lastName: "",
        email: "",
        phone: "",
        food: "",
        birth: "",
        about: ""}
      }
    })
  }

  const badgeElement = formData.badges.map(prev => {
    return (
      <BadgeGen  
        firstName = {prev.firstName}
        lastName = {prev.lastName}
        email = {prev.email}
        phone = {prev.phone}
        food = {prev.food}
        birth = {prev.birth}
        about = {prev.about}
      />
    )
  })

  console.log(badgeElement)
  
  return (
    <div className="App">
      <form className="input-badge" onSubmit={handleSubmit}>
        <div className="line1">
        <input placeholder="First Name" className="badge-name" name="firstName" onChange={handleChange} value={formData.userInput.firstName}/>
        <input placeholder="Last Name" className="badge-lname" name="lastName" onChange={handleChange} value={formData.userInput.lastName}/>
        </div>
        <div className="line2">
        <input placeholder="Email" className="badge-email" onChange={handleChange} name='email' value={formData.userInput.email}/>
        <input placeholder="Place of Birth" className="badge-birth" onChange={handleChange} name='birth' value={formData.userInput.birth} />
        </div>
        <div className="line3">
        <input placeholder="Phone" className="badge-number" onChange={handleChange} name='phone' value={formData.userInput.phone}/>
        <input placeholder="favorite food" className="badge-food" onChange={handleChange} name="food" value={formData.userInput.food}/>
        </div>
        <div className="line4" align="center">
        <textarea value={formData.userInput.about} placeholder="Tell me about yourself" className="badge-box" onChange={handleChange} name="about"> </textarea>
        </div>
        <button>Submit</button>
      </form>
      {badgeElement}
    </div>
  );
}

export default App;
