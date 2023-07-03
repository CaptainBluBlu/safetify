import React, { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Link from "next/link";

export const Password = (props) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  return (
    <div>
      <Form.Group>
        <InputGroup
          className="wrap-input100 validate-input"
          id="Password-toggle"
        >
          <InputGroup.Text
            id="basic-addon2"
            onClick={() => setIsPasswordShown(!isPasswordShown)}
            className="bg-white p-0"
          >
            <Link href="#" className="bg-white text-muted p-3">
              <i
                className={`zmdi ${
                  isPasswordShown ? "zmdi-eye" : "zmdi-eye-off"
                } text-muted`}
                aria-hidden="true"
              ></i>
            </Link>
          </InputGroup.Text>
          <Form.Control
            className="input100 border-start-0 ms-0"
            type={isPasswordShown ? "text" : "password"}
            placeholder="Password"
            name="password"
            onChange={(e) => props.onChange(e)}
          />
        </InputGroup>
      </Form.Group>
    </div>
  );
};

export default Password;
