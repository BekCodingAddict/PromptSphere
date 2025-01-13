"use client";

import Form from "@components/Form";
import { useSession } from "@node_modules/next-auth/react";
import { useState } from "react";

const CreatePrompt = () => {
  const [submitting, setSubmitting] = useState();
  const [post, setPost] = useState();

  const createPrompt = async (e) => {};
  return (
    <Form
      type="Create"
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePrompt;
