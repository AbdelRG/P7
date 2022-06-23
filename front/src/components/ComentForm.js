import React from "react";

import { Form, Button, FloatingLabel } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import setComent from "../apiCall/setComent";

import React from "react";

const ComentForm = (props) => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await setComent(text, props.post.id);
    console.log(response);
  };
  return (
    <>
      {" "}
      <div className="comentFormContainer">
        <h5 className="comentTitle">Commentaire</h5>
        <FloatingLabel controlId="floatingTextarea2">
          <Form.Group className="position-relative mb-3">
            <Form.Control
              as="textarea"
              maxLength={"280"}
              style={{ height: "100px" }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
        </FloatingLabel>
        <Button variant="dark" className="comentButton" onClick={handleSubmit}>
          commenter
        </Button>
      </div>
    </>
  );
};

export default ComentForm;
