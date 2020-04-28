import React from "react";

const Email = (props) => {
  return (
    <section className="email">
      <label>Subscribe To Our Newsletter!</label>
      <input
        type="text"
        name="email"
        placeholder="Email..."
        onChange={(e) => {
          props.handleEmail(e);
        }}
      />
      <button onClick={props.postEmail()}>Subscribe</button>
    </section>
  );
};

export default Email;
