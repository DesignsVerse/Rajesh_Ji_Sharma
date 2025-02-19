"use client";
import React from "react";
import { useRouter } from "next/navigation";

const services = [
  { id: 1, name: "Open Service 1", color: "bg-blue-500" },
  { id: 2, name: "Open Service 2", color: "bg-green-500" },
];

function Index() {
  const router = useRouter();

  const handleClick = (id: number) => {
    router.push(`/pooja/${id}`);
  };

  return (
    <section className="h-screen flex flex-col gap-4 p-4">
      <h1 className="text-2xl font-bold">This is all our services</h1>
      {services.map((service) => (
        <button
          key={service.id}
          onClick={() => handleClick(service.id)}
          className={`px-4 py-2 ${service.color} bg-black text-white rounded`}
        >
          {service.name}
        </button>
      ))}
    </section>
  );
}

export default Index;
