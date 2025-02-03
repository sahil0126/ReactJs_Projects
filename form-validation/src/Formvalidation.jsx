import React from 'react'

const Formvalidation = () => {
  return (
    <>
    <form className='w-1/4 ml-2' >
        <legend className='text-3xl font-bold text-red-800 border-b-[3.5px]'  >Form Validation</legend>

        {/* REQUIRED FIELD */}
        <section className='form-group p-[1.5px]'>
            <label>Required Field</label>
            <div className='inp mt-2'>
                <input type='text' 
                placeholder='required field'
                className='border bg-slate-50 p-2 w-100%'
                />

            </div>
        </section>


        {/* Email */}
        <section className='form-group p-[1.5px]'>
            <label>Email</label>
            <div className='inp mt-2'>
                <input type='text' 
                placeholder='enter email'
                  className='border bg-slate-50 p-2 w-100%'
                />

            </div>
        </section>

        {/* Password */}
        <section className='form-group p-[1.5px]'>
            <label>Password</label>
            <div className='inp mt-2'>
                <input type='password' 
                placeholder='enter password'
                  className='border bg-slate-50 p-2 w-100%'
                />

            </div>
        </section>


        {/* Confirm Password */}
        <section className='form-group p-[1.5px]'>
          
            <div className='inp mt-2'>
                <input type='password' 
                placeholder='confirm password'
                  className='border bg-slate-50 p-2 w-100%'
                />

            </div>
        </section>

        {/* URl */}
        <section className='form-group p-[1.5px]'>
            <label>Url</label>
            <div className='inp mt-2'>
                <input type='text' 
                placeholder='enter url'
                  className='border bg-slate-50 p-2 w-100%'
                />

            </div>
        </section>

        {/* Digits */}
        <section className='form-group p-[1.5px]'>
            <label>Url</label>
            <div className='inp mt-2'>
                <input type='text' 
                placeholder='enter url'
                  className='border bg-slate-50 p-2 w-100%'
                />

            </div>
        </section>

{/* number,aplhanumeric,  */}


    </form>
    
    </>
  
  )
}

export default Formvalidation