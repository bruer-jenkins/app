"use client";
import "./style.css";
import { useState, ChangeEvent, FormEvent } from "react";

type FormVals = {
  name: string;
  email: string;
  password: string;
};
export default function Signup() {
  const [formVals, setFormVals] = useState<FormVals>({
    name: "",
    email: "",
    password: "",
  });

  const [res, setRes] = useState<FormVals>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormVals({ ...formVals, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api", {
        method: "POST",
        body: JSON.stringify(formVals),
      });
      const data = await response.json();
      setRes(data);
    } catch (error) {
      //build out error handling
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signup-form">
      <input
        name="name"
        type="text"
        onChange={handleChange}
        value={formVals.name}
        placeholder="name"
      />
      <input
        name="email"
        type="email"
        onChange={handleChange}
        value={formVals.email}
        placeholder="email"
      />
      <input
        name="password"
        type="password"
        onChange={handleChange}
        value={formVals.password}
        placeholder="password"
      />
      <button type="submit">submit</button>
      {res.name && `Hello ${res.name}, from the server!`}
    </form>
  );
}
