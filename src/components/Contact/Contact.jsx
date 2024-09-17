import React from 'react'
import './Contact.css'
import images from '../../assets/images';



const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "780a0f49-3b51-4807-ae1e-f9f10464a1ae");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  

  return (
    <div className='contact container' >
      <div className="contact-col">
        <h3>Send us a message <img src={images.msgIcon} alt="" /> </h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et architecto cum libero consectetur hic recusandae excepturi soluta voluptate tempora quo sint, porro iste ex repudiandae impedit ea totam vero consequuntur!</p>
        <ul>
            <li> <img src={images.mailIcon} alt="" /> Contact@faiq.com</li>
            <li><img src={images.phoneIcon} alt="" /> 000000000000</li>
            <li><img src={images.locationIcon} alt="" />Contact@faiq.com</li>

        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit} >
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required ></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <img src={images.whiteArrow} alt="" /> </button>
        </form>
        <span>{result}</span>
      </div>


    </div>
  )
}

export default Contact
