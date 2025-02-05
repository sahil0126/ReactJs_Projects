import  { useState } from "react";

const Formvalidation = () => {
  let [formData, setFormData] = useState({
    reqfield: "",
    email: "",
    password: "",
    confirmpass: "",
    url: "",
    digits: "",
    number: "",
    alphanum: "",
    textarea: "",
  });

  let {
    reqfield,
    email,
    password,
    confirmpass,
    url,
    digits,
    number,
    alphanum,
    textarea,
  } = formData;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let [errors, setErrors] = useState({});
  console.log(errors);

  let handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    //refield
    if (reqfield == "") {
      //objectname.keyname=value
      validationErrors.reqfield = "*This field is mandatory";
    }

    //email
    //regex=regular expression
    //test = html element
    // regex.test(string)

    let regexEmail = /\S+@\S+\.\S+/;

    if (email == "") {
      validationErrors.email = "*This field is mandatory";
    } else if (!regexEmail.test(email)) {
      validationErrors.email = "This should be a valid email";
    }

    //password
    if(password==""){
      validationErrors.password="*This field is mandatory"
    }

    //confirmpass
    if(confirmpass==""){
      validationErrors.confirmpass="This field is mandatory"
    }
    else if(password!=confirmpass){
      validationErrors.confirmpass="Password not matching"

    }

    //url
    let regexUrl=/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
    if (url=="") {
      validationErrors.url="*This field is mandatory"
    }
    else if (!regexUrl.test(url)) {
      validationErrors.url="This should be a valid url"
    }

    //digits
    let regexDigit = /^[0-9]+$/ 
    if(digits==""){
      validationErrors.digits="*This field is mandatory"
    }
    else if(!regexDigit.test(digits)){
      
      validationErrors.digits="It should be a number and no decimals"

    }

    //number
    let regexNumber = /^-?\d+(?:\.\d+)?$/
    if(number==""){
      validationErrors.number="*This field is mandatory"
    }
    else if(!regexNumber.test(number)){
      
      validationErrors.number="It should be a number"

    }

    //alphanum
    let regexalphanumeric=/^[a-zA-Z0-9]+$/
    if(regexalphanumeric==""){
      validationErrors.alphanum="*This field is mandatory"
    }
    else if(!regexalphanumeric.test(alphanum)){
      validationErrors.alphanum="*only alpha-numerics are allowed"
      
    }

    //textarea
    if(textarea==""){
      validationErrors.textarea="*This field is mandatory"
    }







    setErrors(validationErrors);

    validationErrors=={} && setFormData({
      reqfield: "",
    email: "",
    password: "",
    confirmpass: "",
    url: "",
    digits: "",
    number: "",
    alphanum: "",
    textarea: ""
    })


  };

  let handleReset = (e) => {
    e.preventDefault()
    setFormData({
      reqfield: "",
    email: "",
    password: "",
    confirmpass: "",
    url: "",
    digits: "",
    number: "",
    alphanum: "",
    textarea: ""
    })

  }





  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

      <form className="w-1/4 ml-2 justify-center ">
        <legend className="text-3xl font-bold text-red-800 border-b-[3.5px]">
          Form Validation
        </legend>

        {/* REQUIRED FIELD */}
        <section className="form-group p-[1.5px]">
          <label>Required Field</label>
          <div className="inp mt-2">
            <input
              type="text"
              placeholder="required field"
              className="border bg-slate-50 p-2 w-100%"
              name="reqfield"
              value={reqfield}
              onChange={handleChange}
            />

            <div className="form-error text-red-600 text-sm">
              {errors.reqfield && <span>{errors.reqfield}</span>}
            </div>
          </div>
        </section>

        {/* Email */}
        <section className="form-group p-[1.5px]">
          <label>Email</label>
          <div className="inp mt-2">
            <input
              type="text"
              placeholder="enter email"
              className="border bg-slate-50 p-2 w-100%"
              name="email"
              value={email}
              onChange={handleChange}
            />

            <div className="form-error text-red-600 text-sm">
              {errors.email && <span>{errors.email}</span>}
            </div>
          </div>
        </section>

        {/* Password */}
        <section className="form-group p-[1.5px]">
          <label>Password</label>
          <div className="inp mt-2">
            <input
              type="password"
              placeholder="enter password"
              className="border bg-slate-50 p-2 w-100%"
              name="password"
              value={password}
              onChange={handleChange}
              />

<div className="form-error text-red-600 text-sm">
              {errors.password && <span>{errors.password}</span>}
            </div>


          </div>
        </section>

        {/* Confirm Password */}
        <section className="form-group p-[1.5px]">
          <div className="inp mt-2">
            <input
              type="password"
              placeholder="confirm password"
              className="border bg-slate-50 p-2 w-100%"
              name="confirmpass"
              value={confirmpass}
              onChange={handleChange}
              />
            <div className="form-error text-red-600 text-sm">
              {errors.confirmpass && <span>{errors.confirmpass}</span>}
            </div>
          </div>
        </section>

        {/* URl */}
        <section className="form-group p-[1.5px]">
          <label>Url</label>
          <div className="inp mt-2">
            <input
              type="text"
              placeholder="enter url"
              className="border bg-slate-50 p-2 w-100%"
              name="url"
              value={url}
              onChange={handleChange}
              />
            <div className="form-error text-red-600 text-sm">
              {errors.url && <span>{errors.url}</span>}
            </div>
          </div>
        </section>

        {/* Digits */}
        <section className="form-group p-[1.5px]">
          <label>Digits</label>
          <div className="inp mt-2">
            <input
              type="text"
              placeholder="enter digit"
              className="border bg-slate-50 p-2 w-100%"
              name="digits"
              value={digits}
              onChange={handleChange}
            />
            <div className="form-error text-red-600 text-sm">
              {errors.digits && <span>{errors.digits}</span>}
            </div>
          </div>
        </section>

        {/* Number */}
        <section className="form-group p-[1.5px]">
          <label>Number</label>
          <div className="inp mt-2">
            <input
              type="text"
              placeholder="enter number"
              className="border bg-slate-50 p-2 w-100%"
              name="number"
              value={number}
              onChange={handleChange}
            />
            <div className="form-error text-red-600 text-sm">
              {errors.number && <span>{errors.number}</span>}
            </div>
          </div>
        </section>

        {/* AlphaNumeric */}
        <section className="form-group p-[1.5px]">
          <label>Alpha Numeric</label>
          <div className="inp mt-2">
            <input
              type="text"
              placeholder="enter alpha-numeric"
              className="border bg-slate-50 p-2 w-100%"
              name="alphanum"
              value={alphanum}
              onChange={handleChange}
              />
            <div className="form-error text-red-600 text-sm">
              {errors.alphanum && <span>{errors.alphanum}</span>}
            </div>
          </div>
        </section>
        {/* Textarea */}
        <section className="form-group p-[1.5px]">
          <label>Text Area</label>
          <div className="inp mt-2">
            <input
              type="text"
              placeholder="enter text"
              className="border bg-slate-50 p-2 w-100%"
              rows={500} // Number of visible rows
              cols={1000}
              name="textarea"
              value={textarea}
              onChange={handleChange}
              />
            <div className="form-error text-red-600 text-sm">
              {errors.textarea && <span>{errors.textarea}</span>}
            </div>
          </div>
        </section>
        <button onClick={handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" >Submit</button>
      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleReset} >Reset</button>
      </form>
      <br>
      </br>

      
              </div>
    </>
  );
};

export default Formvalidation;
