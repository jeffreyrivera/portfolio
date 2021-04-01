import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const ContactForm = () => {

    const { register, errors, handleSubmit, reset } = useForm();

    const toastifySuccess = () => {
        toast('Form sent, Talk to you soon!', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,  
          draggable: true,
          className: 'submit-feedback',
          toastId: 'notifyToast'
        });
    };


    const onSubmit = async (data) => {

        
        try {
            const templateParams = {
              name: data.name,
              email: data.email,
              subject: data.subject,
              message: data.message
            };
      
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                templateParams,
                process.env.REACT_APP_USER_ID
            );
      
            
            toastifySuccess();
            reset();
        } catch (e) {
            console.log(e);
        }

    };


    let buttonText = "Let's Talk"
    return (      
        <div>
        <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
            <div>
                <h1>Contact me</h1>
            <label htmlFor="name">Name:</label>
            <input
                type='text'
                name='name'
                ref={register({
                required: { value: true, message: 'Please enter your name' },
                maxLength: {
                    value: 35,
                    message: 'Please use 35 characters or less'
                }
                })}

            ></input>
            {errors.name && 
                <div className="error-message">
                    <strong>{errors.name.message}</strong>
                </div>
            }
            </div>

            <div>
            <label htmlFor="email">Email:</label>
            <input
                type='email'
                name='email'
                ref={register({
                    required: true,
                    pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                  })}

            ></input>
            {errors.email && 
                <div className="error-message">
                    <strong>Please enter a valid email address</strong>
                </div>
            }
            </div>

            <div>
            <label htmlFor="subject">Subject:</label>
            <input
                type='text'
                name='subject'
                ref={register({
                required: { value: true, message: 'Please enter a subject' },
                maxLength: {
                    value: 75,
                    message: 'Subject cannot exceed 75 characters'
                  }
                })}

            ></input>
            {errors.subject && 
                <div className="error-message">
                    <strong>{errors.subject.message}</strong>
                </div>
            }
            </div>            

            <div>
            <label htmlFor="message">Message:</label>
            <textarea
                id="message"
                name='message'
                ref={register({
                    required: true
                })}
            ></textarea>
            {errors.message && 
                <div className="error-message">
                    <strong>Please enter a message!</strong>
                </div>
            }
            </div>
            <button type="submit">{buttonText}</button>
        </form>
        <ToastContainer/> 
        </div>
    );
}

export default ContactForm;