import React from "react";
import { Form } from "@/commons/components";

const FormComponentLayout = ({
  title,
  onSubmit,
  vas,
  formFields,
  itemsEvents,
}) => {
  return (
    <Form title={title} onSubmit={onSubmit}>
      {vas}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {formFields.map((field, index) => (
          <div key={index}>{field}</div>
        ))}
      </div>
      <div className="card-actions col-end-3 justify-end">{itemsEvents}</div>
    </Form>
  );
};

export default FormComponentLayout;
