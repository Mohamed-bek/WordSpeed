import React, { forwardRef } from "react";

const InputBox = forwardRef(({ value, onChange }, ref) => (
  <input
    ref={ref}
    type="text"
    value={value}
    onChange={(e) => onChange(e.target.value)}
    placeholder="Type the word here"
  />
));

export default InputBox;
