"use client";
import Button from "@/app/_components/Button";
import Form from "@/app/_components/Form";
import Input from "@/app/_components/Input";
import Wrapper from "@/app/_components/Wrapper";
import { useAuth } from "@/app/_context/AuthContext";
import { use, useEffect, useState } from "react";
import { redirect } from "next/navigation";
import Image from "next/image";
import { uploadToCloudinary } from "@/app/_lib/helpers";
import { twMerge } from "tailwind-merge";
import { Timestamp } from "firebase/firestore";
import Spinner from "@/app/_components/Spinner";

function NewBlog() {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    author: "",
    title: "",
    content: "",
    tags: [],
    imageUrl: "",
  });

  const [tagInput, setTagInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");
  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    if (!user) {
      redirect("/login");
    }

    if (user) {
      setFormData((prev) => ({
        ...prev,
        author: user.displayName,
      }));
    }
  }, [user]);

  if (!user) return null;

  // Form State

  // Handle input change
  function handleChange(e) {
    setFormData((formData) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  }

  // Handle upload files
  async function handleFileUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);

    try {
      const result = await uploadToCloudinary(file);

      if (!result || !result.sucess) {
        throw new Error(result.error || "Upload failed");
      }

      setFormData((prev) => ({
        ...prev,
        imageUrl: result.url,
      }));

      setImagePreview(result.url);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  // Handle adding tags
  function handleAddTag(e) {
    e.preventDefault();
    const newTag = tagInput.trim();
    if (!newTag) return;

    if (formData.tags.length >= 5) {
      setError("Max 5 tags allowed!");
      return;
    }

    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.includes(newTag) ? prev.tags : [...prev.tags, newTag],
    }));

    setTagInput(""); // C
  }

  // Handle removing tags
  function handleRemoveTag(tag) {
    setFormData((prev) => ({
      ...prev,
      tags: prev.tags.filter((t) => t !== tag),
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // 🔹 Ensure imageUrl is not empty
    if (
      !formData.author.trim() ||
      !formData.content.trim() ||
      !formData.imageUrl.trim() ||
      formData.tags.length === 0
    ) {
      setError("All fields (author, content, image, tags) are required!");
      return;
    }

    setError(""); // Clear any previous errors

    // setFormData((prev) => ({
    //   ...prev,
    //   timestamp: Timestamp.now(),
    //   authorId: user.uid,
    // }));

    const blogData = {
      ...formData,
      timestamp: Timestamp.now(),
      authorId: user.uid,
    };

    try {
      const response = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <Wrapper>
      <Form onSubmit={handleSubmit}>
        {error && <p className="text-red-500">{error}</p>}
        <Input
          label="Author"
          name="author"
          onChange={handleChange}
          value={formData.author}
          disabled={true}
        />

        {/* Title input */}
        <Input
          label="Title"
          name="title"
          type="text"
          onChange={handleChange}
          value={formData.title}
        />

        {/* Content input */}
        <Input
          label="Content"
          name="content"
          type="textarea"
          onChange={handleChange}
          value={formData.content}
        />

        {/* File input */}
        <div className="flex items-center gap-4 rounded-lg bg-white p-4">
          <div>
            {loading ? (
              <Spinner />
            ) : (
              <Image
                src={imagePreview || "https://placehold.co/400"}
                alt="Cover Image"
                width={128}
                height={128}
                className={
                  (twMerge("mt-2 rounded-lg object-fill"),
                  loading ? "opacity-50" : "")
                }
              />
            )}
          </div>
          <Input
            label="Cover Image"
            name="coverImage"
            type="file"
            onChange={handleFileUpload}
            inputClassName="cursor-pointer focus:ring-0"
          />
        </div>

        {/* Tags Input */}

        <div className="flex items-start gap-2">
          <Input
            label="Tags"
            name="tags"
            onChange={(e) => setTagInput(e.target.value)}
            value={tagInput}
            tags={formData.tags}
            onRemoveTag={handleRemoveTag}
            containerClassName="flex-1"
          />
          <Button
            className={"self-center"}
            type="button"
            onClick={handleAddTag}
          >
            Add
          </Button>
        </div>

        <Button>Add Blog</Button>
      </Form>
    </Wrapper>
  );
}

export default NewBlog;
