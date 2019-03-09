import React from "react";
import { Container } from "react-bootstrap";

function Contact() {
  return (
    <Container className="mt-5">
      <h3>Contact:</h3>
      <p>
        Visit our
        <a
          href="https://www.facebook.com/greyleafcleaningproduct"
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Facebook{" "}
        </a>
        page or
      <a
        href="https://www.instagram.com/leafgrey/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        Instagram
      </a>
        .
      </p>
      <p>WhatApps: 019-2781910 (Cynthia)</p>
    </Container>
  );
}

export default Contact;
