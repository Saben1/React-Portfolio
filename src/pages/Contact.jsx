import React from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "../styles/Contact.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  // const [formData, setFormData] = React.useState({
  //   name: "",
  //   email: "",
  //   message: "",
  // });
  // const [submissionStatus, setSubmissionStatus] = React.useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!formData.name || !formData.email || !formData.message) {
  //     alert("Please enter your name, email and message.");
  //     return;
  //   }
  //   setSubmissionStatus("Thank you for your submission!");
  //   // Add your submission logic here
  // };

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  return (
    <div className="contact-me-container">
      <Form className="form">
        <h2 className="portfolio-title" id="contact">
          Contact Me
        </h2>
        <FormGroup>
          <Label for="exampleName">Full Name</Label>
          <Input id="exampleName" name="text" placeholder="Please enter your name here" type="text" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input id="exampleEmail" name="Email" placeholder="Please enter your email here" type="email" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Message</Label>
          <Input id="exampleText" name="text" placeholder="Please enter your message here" type="textarea" />
        </FormGroup>
      </Form>
      <Button color="primary">Submit</Button>
    </div>
  );
};

export default Contact;
