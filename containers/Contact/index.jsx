/* eslint-disable @next/next/no-img-element */
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import Styles from "./styles.module.scss";

function Contact() {
  // context for theme
  const { darkMode } = useContext(ThemeContext);

  // React-Hook_Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let xhr = new XMLHttpRequest();
    let url =
      "https://api.hsforms.com/submissions/v3/integration/submit/22549698/49c001c2-c6b5-4f5f-872e-675f82e63644";
    var allData = {
      fields: [
        {
          name: "firstname",
          value: data.fullName,
        },
        {
          name: "email",
          value: data.email,
        },
        {
          name: "message",
          value: data?.detail,
        },
      ],
      context: {
        pageUri: "www.salik.dev",
        pageName: "Salik Imtiaz",
      },
    };

    var final_data = JSON.stringify(allData);

    xhr.open("POST", url);
    // Sets the value of the 'Content-Type' HTTP request headers to 'application/json'
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        toast.success(`Thank You! Form Submitted Successfully. `, {
          theme: darkMode ? "dark" : "light",
        }); // Returns a 200 response if the submission is successful.
      } else if (xhr.readyState == 4 && xhr.status == 400) {
        toast.error(xhr.responseText, { theme: darkMode ? "dark" : "light" }); // Returns a 400 error the submission is rejected.
      } else if (xhr.readyState == 4 && xhr.status == 403) {
        toast.error(xhr.responseText, { theme: darkMode ? "dark" : "light" }); // Returns a 403 error if the portal isn't allowed to post submissions.
      } else if (xhr.readyState == 4 && xhr.status == 404) {
        toast.error(xhr.responseText, { theme: darkMode ? "dark" : "light" }); //Returns a 404 error if the formGuid isn't found
      }
    };

    // Sends the request

    xhr.send(final_data);

    // const resolveLater = new Promise((resolve) => setTimeout(resolve, 2000));
    // toast.promise(
    //   resolveLater,
    //   {
    //     pending: "Sending...",
    //     success:
    //       ("Message Sent!",
    //       {
    //         icon: ({ theme, type }) => (
    //           <img src="/assets/icons/msg.svg" alt="" />
    //         ),
    //       }),
    //     error: "Message not Sent!",
    //   },
    //   { theme: darkMode ? "dark" : "light" }
    // );

    reset();
  };
  return (
    <div className="xs:px-4 lg:px-0 lg:container lg:mx-auto">
      <div className="grid grid-cols-12 xs:gap-4 lg:gap-10 items-center">
        <div className="xs:col-span-12 lg:col-span-6">
          <h2 className={Styles.contactTitle}>
            Let&apos;s Connect
            <img
              src="/assets/icons/right-arrow.svg"
              alt=""
              className="headingIcon"
            />
          </h2>
          <h2
            className={`stylishHeading -rotate-10 text-center ${
              darkMode ? "text-darkGray" : "text-gray"
            }`}
          >
            Inquiries.
          </h2>
          <h4 className=" mt-8 text-24 text-gray  mx-auto">
            <span>Email:</span>{" "}
          </h4>
          <p className=" text-20  mx-auto">
            <a
              href="mailto:r.salikimtiaz@gmail.com"
              className="hover:underline"
            >
              r.salikimtiaz@gmail.com
            </a>
            <br />
            <a href="mailto:inquiries@salik.dev" className="hover:underline">
              inquiries@salik.dev
            </a>
          </p>
        </div>
        <div className="xs:col-span-12 lg:col-span-6">
          <p className="max-w-25  mt-8 text-24 font-light  mb-10 text-center mx-auto">
            Let&apos;s make something great in web design!
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="fullName">
              Your Name
              <input
                placeholder="Jhon Doe"
                {...register("fullName", { required: true })}
                style={{ color: darkMode ? "white" : "black" }}
              />
              {errors.fullName && (
                <span className="error"> Please Enter your Name</span>
              )}
              <span className="space" />
            </label>

            <label htmlFor="email">
              Your Email Address
              <input
                placeholder="abc@example.com"
                type="email"
                {...register("email", { required: true })}
                style={{ color: darkMode ? "white" : "black" }}
              />
              {errors.email && (
                <span className="error"> Pleae Enter your Email Address</span>
              )}
              <span className="space" />
            </label>

            <label htmlFor="detail">
              Please Enter your Message (optional)
              <textarea
                rows={2}
                placeholder="Your Message..."
                {...register("detail")}
                style={{ color: darkMode ? "white" : "black" }}
              />
            </label>

            <button
              type="submit"
              className="text-24 text-primary flex items-center gap-4 mt-4 btn btn-right"
            >
              Send
              <img src="/assets/icons/right-arrow.svg" alt="" className="h-4" />
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
