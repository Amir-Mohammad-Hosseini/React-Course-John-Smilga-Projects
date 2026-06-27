import axios from "axios";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";

const Newsletter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Form className="form" method="post">
      <h4 style={{ textAlign: "center", marginTop: "2rem" }}>our newsletter</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          className="form-input"
          required
          type="text"
          name="name"
          id="name"
        />
      </div>
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          className="form-input"
          required
          type="text"
          name="lastName"
          id="lastName"
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          className="form-input"
          required
          type="email"
          name="email"
          id="email"
        />
      </div>
      <button
        type="submit"
        className="btn btn-block"
        style={{ marginTop: "0.5rem" }}
        disabled={isSubmitting}
      >
        {isSubmitting ? "submitting..." : "submit"}
      </button>
    </Form>
  );
};

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  try {
    const response = await axios.post(newsletterUrl, data);
    console.log(response);
    toast.success(response.data.msg);
    return redirect("/");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    // throw new Response(
    //   JSON.stringify({ message: error.response?.data.msg || error.response }),
    //   {
    //     status: 400,
    //     statusText:
    //       error.response.data.msg ||
    //       "Something went wrong, please try again later.",
    //   },
    // );
    return error;
  }

  return null;
};

export default Newsletter;
