'use client'
import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import Swal from "sweetalert2";

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  background-color: #1a1b2bff;
  padding: 6px;
  border-top-color: #ffffff;
  border-bottom-color: #1a1b2bff;
  outline: solid;
  outline-width: 2px;
  border-radius: 32px;
`
const ContactWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
min-height: 80vh;
position: static;
bottom: 0;
width: 600px;
margin-bottom: 8px;
background: #072b36ff;
border-radius: 32px;
`

const ContactForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 600px;
width: 100%;
background: #474758ff;
padding: 25px 25px 30px;
border-radius 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 1);
color: #ffffffff;
margin: 25px;
`

const ContactHeader = styled.h1`
font-size: 30px;
text-align: center;
`

const FormWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
width: 100%;
`

const SendButton = styled.button`
width: 250px;
height: 80px;
background: #826afb;
font-size: 22px;
  &:hover {
    color: gold;
    border-color: gold;
    background: #1b94ffff;
  }
  &:active {
    color: white;
    border-color: white;
    background: #ffd500ff;
  }
`

const InputArea = styled.input`
width: 100%;
height: 32px;
font-size: 22px;
`

const MessageArea = styled.textarea`
width: 100%;
height: 200px;
font-size: 18px;
`

const ContactComponent = () => {
    const Swal = require('sweetalert2')
    const apiKey = process.env.NEXT_PUBLIC_CONTACT_API_KEY
    const [result, setResult] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", apiKey);

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
         body: formData
        });
        const data = await response.json();
        if(data.success){
            Swal.fire({
                title: "Message Sent!",
                text: "I'll get back to you as soon as possible!",
                icon: "success"
            })

        }
        setResult(data.success ? "Success!" : "Error");
  };




  return (
    <ContactWrapper>
        <ContactHeader>Contact Form</ContactHeader>
        <ContactForm onSubmit={handleSubmit}>
            <FormWrapper>
                <div>
                    <label>Full Name: </label>
                    <InputArea 
                    type="text"
                    name="name"
                    required
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <InputArea 
                    type="email"
                    name="email"
                    required
                    />
                </div>
                <div>
                    <label>Message: </label>
                    <MessageArea
                    name="message"
                    required
                    />
                </div>
            </FormWrapper>
                    <SendButton type="submit">Send Message</SendButton>
        </ContactForm>
    </ContactWrapper>
  );
}
export default ContactComponent;
