import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
export const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmited, setIsSubmited] = useState(false);
    const [isError, setIsError] = useState(false);
    return (
        <>
        <div className="relative flex items-top justify-center mt-24 dark:bg-gray-900 sm:items-center sm:pt-0 mb-12">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
            <div className="mt-1 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 mr-2 border bg-off-base shadow-md sm:w-auto rounded-xl">
                        <h1 className="text-3xl sm:text-5xl  dark:text-white font-extrabold tracking-tight">
                            Contact information
                        </h1>
                        <p className="text-muted-hover text-lg sm:text-2xl font-medium  mt-2">
                            Fill in the form to start a conversation
                        </p>

                        <div className="flex items-center mt-8 text-gray-600 ">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-muted-hover">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                            </svg>
                            <div className="ml-4 text-muted-hover tracking-wide font-semibold w-40 md:w-60">
                                Brasil, Av Dr.Jose Athanasio, Charqueadas,
                                96745000
                            </div>
                        </div>

                        <div className="flex items-center mt-4 text-muted-hover  ">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-muted-hover">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                +55 5199771645
                            </div>
                        </div>

                        <div className="flex w-50 items-center mt-2 text-muted-hover ">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-muted-hover">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                            </svg>
                            <div className="ml-4 text-md tracking-wide sm:break-normal break-words   font-semibold w-40">
                                cfonsecacomas@gmail.com
                            </div>
                        </div>
                    </div>
        <Formik
        initialValues={{ email: '', name: '', message: '' }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Enter a valid email').required('Required'),
          name: Yup.string()
            .min(8, 'This field must be have 8 characters')
            .required('Required'),
          message: Yup.string()
            .min(8, 'This field must be at least 8 characters')
            .required('Required'),
        })}
        onSubmit={(values, {resetForm}) => {
            setIsLoading(true);
            fetch('http://cristianfonseca.com/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    message: values.message,
                    })
                })
                    .then(async (response) => {
                        await response.ok ? setIsSubmited(true) : setIsError(true)
                        resetForm()
                        setIsLoading(false)
                        setTimeout(() => {
                            setIsError(false)
                        }, 4000)
                        setTimeout(() => {
                            setIsSubmited(false)
                        }, 4000)
                        
                    }).catch((error) => {})
        }}
      >
        {({
          values,
          touched,
          errors,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
                    <form id='form' className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
                        {isError && (
                            <div className="bg-red-400 border-t-4 border-red-100 rounded-md text-gray-100 px-4 py-3 shadow-md" role="alert">
                            <div className="flex">
                              <div className="py-1"><svg className=" h-6 w-6 text-teal-500 mr-4" fill="#cc0000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                              <div>
                                <p className="font-bold">Our privacy policy has changed</p>
                                <p className="text-sm">Make sure you know how these changes affect you.</p>
                              </div>
                            </div>
                          </div>
                        )}
                        {isSubmited && (
                            <div className="bg-green-300 border-t-4 border-green-100 rounded-md text-white px-4 py-3 shadow-md" role="alert">
                            <div className="flex">
                              <div className="py-1"><svg className=" h-6 w-6 text-teal-500 mr-4" fill="#42ba96" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
                              <div>
                                <p className="font-bold">Our privacy policy has changed</p>
                                <p className="text-sm">Make sure you know how these changes affect you.</p>
                              </div>
                            </div>
                          </div>
                        )}
                        <div className="flex flex-col">
                            <input type="name" name="name" id="name" placeholder="Full Name" value={values.name} onChange={(e) => {handleChange(e)}} className="w-100 mt-2 py-3 px-3 rounded-lg bg-base border border-gray-400  text-base font-semibold focus:border-indigo-500 focus:outline-none" required/>
                            {errors && errors.name && (
                                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                    This is a required field, make sure it has more than 8 characters in it.
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col mt-2">
                            <input type="email" name="email" id="email" placeholder="Email" value={values.email} onChange={(e) => {handleChange(e)}} className="w-100 mt-2 py-3 px-3 rounded-lg bg-base border border-gray-400  text-base font-semibold focus:border-indigo-500 focus:outline-none" required/>
                            {errors && errors.email && (
                                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                    This is a required field, make sure it is an email that I enter in it.
                                </span>
                            )}
                        </div>
                        
                        <div className="flex flex-col mt-2"> 
                            <textarea  name="message" id="message" placeholder="Describe your message" value={values.message} onChange={(e) => {handleChange(e)}} className="w-full h-28 px-3 py-2 rounded-lg bg-base  border  border-gray-400  text-base placeholder-font-semibold focus:outline-none focus:border-indigo-500" required />
                            {errors && errors.message && (
                                <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                                    This is a required field, make sure it has more than 8 characters in it.
                                </span>
                            )}
                        </div>
                        <button type="submit" className="md:w-36 flex items-center justify-center bg-secondary border shadow-lg text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-primary transition ease-in-out duration-300">
                            {
                                isLoading && (
                                    <svg className="animate-spin -ml-1   mr-3 h-auto w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                )
                            }
                            {
                                isLoading ? 'Sending' : 'Send'
                            }                            
                            
                        </button>
                    </form>
        )}
                    </Formik>
                    </div>
                </div>
            </div>
        </div>
      </>
        
    )
}
