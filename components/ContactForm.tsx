"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    alert(data.success ? "Message Sent!" : "Failed");
  };

  return (
    <form
      onSubmit={submitForm}
      className="max-w-xl mx-auto p-6 space-y-4"
    >
      <input
        type="text"
        placeholder="Name"
        className="w-full border p-3"
        onChange={(e) =>
          setForm({ ...form, name: e.target.value })
        }
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3"
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <input
        type="text"
        placeholder="Phone"
        className="w-full border p-3"
        onChange={(e) =>
          setForm({ ...form, phone: e.target.value })
        }
      />

      <textarea
        placeholder="Message"
        className="w-full border p-3"
        onChange={(e) =>
          setForm({ ...form, message: e.target.value })
        }
      />

      <button
        className="bg-yellow-500 px-6 py-3 font-bold"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
}