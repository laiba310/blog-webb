"use client";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState, ChangeEvent, FormEvent } from "react";

export default function Comment() {
  const [name, SetName] = useState<string>("");
  const [comment, SetComment] = useState<string>("");
  const [comments, SetComments] = useState<string[]>([]);

  const input = (e: ChangeEvent<HTMLInputElement>) => {
    SetName(e.target.value);
  };

  const inputComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
    SetComment(e.target.value);
  };

  const handlesubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      SetComments((prevComments: string[]) => [
        ...prevComments,
        `${name}: ${comment}`,
      ]);
      SetName("");
      SetComment("");
    }
  };

  return (
    <div className=" min-h-screen py-4">
      <div className="max-w-3xl mx-auto space-y-10">
        {/* Recent Comments Section */}
        <div className=" shadow-md rounded-lg p-6">
          <h2 className="font-bold text-3xl text-gray-800 mb-4">Recent Comments</h2>
          <ul className="space-y-4">
            {comments.map((item, index) => (
              <li
                key={index}
                className="bg-gray-0 p-4 rounded-lg shadow-sm text-gray-700 border-l-4 border-gray-500"
              >
                {item}
              </li>
            ))}
          </ul>
          {comments.length === 0 && (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
        </div>

        {/* Leave a Comment Section */}
        <div className="shadow-md rounded-lg p-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Leave a Comment</h1>
          <form onSubmit={handlesubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name:
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={input}
                className="mt-2 w-full bg-gray-200 border-gray-200 focus:ring-gray-500 focus:border-gray-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="comment" className="block text-lg font-medium text-gray-700">
                Comment:
              </label>
              <Textarea
                id="comment"
                value={comment}
                onChange={inputComment}
                rows={5}
                className="mt-2 w-full  bg-gray-200 border-gray-300 focus:ring-gray-500 focus:border-gray-500"
                placeholder="Write your comment"
              />
            </div>
            <Button
              variant={"secondary"}
              type="submit"
              className="text-white font-medium px-6 py-3 bg-black hover:bg-gray-600 rounded-md shadow-lg"
            >
              Post Comment
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
