"use client";

import { useState, useEffect } from "react";
import { useAuth } from "../_context/AuthContext";
import Button from "./Button";
import Form from "./Form";
import Input from "@/app/_components/Input";
import { db } from "../_lib/FirebaseConfig";
import {
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

function AddComment({ blogId }) {
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    content: "",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.displayName,
      }));
    }
  }, [user]);

  // Handle input changes
  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmitForm(e) {
    e.preventDefault();
    // Add code to submit the comment
    if (!user) {
      alert("Please sign in to comment.");
      return;
    }

    try {
      const blogRef = doc(db, "blogs", blogId);

      await updateDoc(blogRef, {
        comments: arrayUnion({ ...formData, user: user.uid }),
      });

      console.log("Comment submitted successfully!");

      setFormData({
        name: user?.displayName || "",
        comment: "",
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  }

  return (
    <Form onSubmit={handleSubmitForm}>
      {!user ? (
        <Button type="link" href="/login">
          Sign in to comment
        </Button>
      ) : (
        <>
          <Input label="Name:" name="name" value={formData.name} disabled />
          <Input
            type="textarea"
            label="Comment:"
            name="content"
            value={formData.content}
            onChange={handleInputChange}
          />
          <Button type="submit">Submit</Button>
        </>
      )}
    </Form>
  );
}

export default AddComment;
