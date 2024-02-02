import { Form } from "react-bootstrap";
import "./style.scss";

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
  size,
  errorMessage,
  isInvalid,
  min,
  max,
  maxLength,
  disabled,
  onBlur,
  required,
 
}) => {
  return (
    <Form.Group className={`form-group mt-1 ${size}`} controlId={name}>
      <div className="position">
        {label &&   <Form.Label id={name}>
          {label} {required ? <span className="requried">*</span> : null}
        </Form.Label>}
      
        <Form.Control
          required={required}
          type={type}
          name={name}
          value={value}
          isInvalid={isInvalid}
          placeholder={placeholder}
          onChange={onChange}
          min={min}
          max={max}
          maxLength={maxLength}
          disabled={disabled}
          autoComplete="off"
          onBlur={onBlur}
         
        />

        <Form.Control.Feedback type="invalid">
          {errorMessage}
        </Form.Control.Feedback>
      </div>
    </Form.Group>
  );
};

export default Input;