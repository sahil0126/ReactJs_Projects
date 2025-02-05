import  { useState } from "react";

const Form2 = () => {
  let [formData, setFormData] = useState({
    minLength: "",
    maxLength: "",
    rangeLength: "",
    minValue: "",
    maxValue: "",
    rangeValue: "",
  });

  let { minLength, maxLength, rangeLength, minValue, maxValue, rangeValue } =
    formData;

  let handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  let [errors, setErrors] = useState({});

  let handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    //minLength
    if (minLength == "") {
      validationErrors.minLength = "*This field is mandotary";
    } else if (minLength.length < 7) {
      validationErrors.minLength = "Enter min 7 chars";
    }

    //maxLength
    if (maxLength == "") {
      validationErrors.maxLength = "*This field is mandotary";
    } else if (maxLength.length > 7) {
      validationErrors.maxLength = "Enter max 7 chars";
    }

    //rangeLength
    if (rangeLength == "") {
      validationErrors.rangeLength = "*This field is mandatory";
    } else if (rangeLength.length < 7 || rangeLength.length > 15) {
      validationErrors.rangeLength = "Enter chars between 7-15";
    }

    //minvalue
    if (minValue == "") {
      validationErrors.minValue = "*This field is mandatory";
    } else if (minValue < 18) {
      validationErrors.minValue = "min value should be 18";
    }
    //maxvalue
    if (maxValue == "") {
      validationErrors.maxValue = "*This field is mandatory";
    } else if (maxValue > 35) {
      validationErrors.maxValue = "max value should be  35";
    }
    //rangevalue
    if (rangeValue == "") {
      validationErrors.rangeValue = "*This field is mandatory";
    } else if (rangeValue < 18 || rangeValue > 35) {
      validationErrors.rangeValue = "value between 18-35";
    }

    setErrors(validationErrors)


    validationErrors == {}  &&  setFormData({
        minLength: "",
    maxLength: "",
    rangeLength: "",
    minValue: "",
    maxValue: "",
    rangeValue: "",
    })




  };


  let handleReset = (e) => {
    e.preventDefault();
    setFormData({
        minLength: "",
    maxLength: "",
    rangeLength: "",
    minValue: "",
    maxValue: "",
    rangeValue: "",
    })
  }





  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 font-mono">
        <form className="w-1/4 ml-2 justify-center ">
          <legend className="text-3xl font-bold text-red-800 border-b-[3.5px]">
            Form Validation - 2
          </legend>

          {/* MINLENGTH */}
          <section className="form-group p-[1.5px]">
            <label>MinLength</label>
            <div className="inp mt-2">
              <input
                type="text"
                placeholder="Min 7 Characters"
                className="border bg-slate-50 p-2 w-100%"
                name="minLength"
                value={minLength}
                onChange={handleChange}
              />
              <div className="form-error text-red-600 text-sm">
                {errors.minLength && <span>{errors.minLength}</span>}
              </div>
            </div>
          </section>

          {/* MAXLENGTH */}
          <section className="form-group p-[1.5px]">
            <label>MaxLength</label>
            <div className="inp mt-2">
              <input
                type="text"
                placeholder="Max 7 Characters"
                className="border bg-slate-50 p-2 w-100%"
                name="maxLength"
                value={maxLength}
                onChange={handleChange}
              />
              <div className="form-error text-red-600 text-sm">
                {errors.maxLength && <span>{errors.maxLength}</span>}
              </div>
            </div>
          </section>

          {/* RANGELENGTH */}
          <section className="form-group p-[1.5px]">
            <label>RangeLength</label>
            <div className="inp mt-2">
              <input
                type="text"
                placeholder="7-15 Characters"
                className="border bg-slate-50 p-2 w-100%"
                name="rangeLength"
                value={rangeLength}
                onChange={handleChange}
              />
              <div className="form-error text-red-600 text-sm">
                {errors.rangeLength && <span>{errors.rangeLength}</span>}
              </div>
            </div>
          </section>

          {/* MINVALUE */}
          <section className="form-group p-[1.5px]">
            <label>MinValue</label>
            <div className="inp mt-2">
              <input
                type="number"
                placeholder="MinValue 18"
                className="border bg-slate-50 p-2 w-100%"
                name="minValue"
                value={minValue}
                onChange={handleChange}
              />
              <div className="form-error text-red-600 text-sm">
                {errors.minValue && <span>{errors.minValue}</span>}
              </div>
            </div>
          </section>

          {/* MAXVALUE */}
          <section className="form-group p-[1.5px]">
            <label>MaxValue</label>
            <div className="inp mt-2">
              <input
                type="number"
                placeholder="MaxValue 35"
                className="border bg-slate-50 p-2 w-100%"
                name="maxValue"
                value={maxValue}
                onChange={handleChange}
              />
              <div className="form-error text-red-600 text-sm">
                {errors.maxValue && <span>{errors.maxValue}</span>}
              </div>
            </div>
          </section>

          {/* RANGEVALUE */}
          <section className="form-group p-[1.5px]">
            <label>RangeValue</label>
            <div className="inp mt-2">
              <input
                type="number"
                placeholder="Range 18-35"
                className="border bg-slate-50 p-2 w-100%"
                name="rangeValue"
                value={rangeValue}
                onChange={handleChange}
              />
              <div className="form-error text-red-600 text-sm">
                {errors.rangeValue && <span>{errors.rangeValue}</span>}
              </div>
            </div>
          </section>

          <button  onClick={handleSubmit}  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2">
            Submit
          </button>
          <button onClick={handleReset}  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ml-6">
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default Form2;
