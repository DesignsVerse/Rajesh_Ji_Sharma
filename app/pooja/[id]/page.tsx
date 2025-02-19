import React from "react";

interface Props {
  params: { id: any };
}

const New = ({ params }: Props) => {
  return (
    <div className="h-[100vh] flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold">Service ID: {params.id}</h1>
      <p className="text-lg text-gray-600">This is the details of service {params.id}</p>
    </div>
  );
};

export default New;
