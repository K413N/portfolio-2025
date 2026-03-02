'use client'
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Swal from "sweetalert2";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 80vh;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  padding: 40px 16px;
  animation: ${fadeIn} 0.6s ease-out;
`;

const ContactHeader = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #fff;
  margin-bottom: 8px;
  text-align: center;
`;

const ContactSubtext = styled.p`
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.45);
  text-align: center;
  margin-bottom: 32px;
  max-width: 380px;
  line-height: 1.5;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  background: rgba(15, 16, 36, 0.75);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  padding: 36px 32px 40px;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset;
`;

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.4);
`;

const inputStyles = `
  width: 100%;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  padding: 14px 16px;
  outline: none;
  transition: all 0.25s ease;
  font-family: inherit;

  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.18);
    background: rgba(255, 255, 255, 0.07);
  }

  &:focus {
    border-color: rgba(130, 106, 251, 0.6);
    background: rgba(130, 106, 251, 0.06);
    box-shadow: 0 0 0 3px rgba(130, 106, 251, 0.15);
  }
`;

const InputArea = styled.input`${inputStyles}`;

const MessageArea = styled.textarea`
  ${inputStyles}
  min-height: 160px;
  resize: vertical;
  line-height: 1.5;
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const SendButton = styled.button`
  align-self: stretch;
  padding: 16px 32px;
  margin-top: 8px;
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  cursor: pointer;
  color: #fff;
  background: linear-gradient(135deg, #826afb 0%, #6a5acd 50%, #826afb 100%);
  background-size: 200% auto;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(130, 106, 251, 0.3);

  &:hover {
    background-position: right center;
    box-shadow: 0 6px 28px rgba(130, 106, 251, 0.45);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0) scale(0.98);
    box-shadow: 0 2px 12px rgba(130, 106, 251, 0.3);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 480px) {
    flex-direction: column;
  }

  & > ${FieldGroup} {
    flex: 1;
  }
`;

const ContactComponent = () => {
  const apiKey = process.env.NEXT_PUBLIC_CONTACT_API_KEY;
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSending(true);

    const formData = new FormData(event.target);
    formData.append("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Message Sent!",
          text: "I'll get back to you as soon as possible!",
          icon: "success",
          background: "#0f1024",
          color: "#fff",
          confirmButtonColor: "#826afb",
        });
        event.target.reset();
      } else {
        Swal.fire({
          title: "Oops!",
          text: "Something went wrong. Please try again.",
          icon: "error",
          background: "#0f1024",
          color: "#fff",
          confirmButtonColor: "#826afb",
        });
      }
    } catch {
      Swal.fire({
        title: "Network Error",
        text: "Please check your connection and try again.",
        icon: "error",
        background: "#0f1024",
        color: "#fff",
        confirmButtonColor: "#826afb",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <ContactWrapper>
      <ContactHeader>Get In Touch</ContactHeader>
      <ContactSubtext>
        Have a question or want to work together? Drop me a message and I'll get back to you soon.
      </ContactSubtext>
      <ContactForm onSubmit={handleSubmit}>
        <Row>
          <FieldGroup>
            <Label htmlFor="name">Full Name</Label>
            <InputArea
              id="name"
              type="text"
              name="name"
              placeholder="John Doe"
              required
            />
          </FieldGroup>
          <FieldGroup>
            <Label htmlFor="email">Email</Label>
            <InputArea
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              required
            />
          </FieldGroup>
        </Row>
        <FieldGroup>
          <Label htmlFor="message">Message</Label>
          <MessageArea
            id="message"
            name="message"
            placeholder="Send me a message here!"
            required
          />
        </FieldGroup>
        <SendButton type="submit" disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </SendButton>
      </ContactForm>
    </ContactWrapper>
  );
};

export default ContactComponent;