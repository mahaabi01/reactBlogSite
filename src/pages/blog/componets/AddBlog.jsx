import React from "react";
import Layout from "../../../components/layout/LayOut";
import { Form } from "react-router-dom";

const AddBlog = () => {
  return (
    <div>
      <Layout>
        <Form type="Create"/>
      </Layout>
    </div>
  );
};

export default AddBlog;
