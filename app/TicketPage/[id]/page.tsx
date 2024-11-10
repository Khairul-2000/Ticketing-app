import TicketForm from "@/app/_componets/TicketForm";
import React from "react";

interface TicketPageProps {
  params: {
    id: string;
  };
}

const getTicketById = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to get ticket by id");
  }
  const data = await res.json();
  return data;
};

const TicketPage = async ({ params: { id } }: TicketPageProps) => {
  const EDITMODE = id === "new" ? false : true;
  let updateTicketData = {};
  if (EDITMODE) {
    updateTicketData = await getTicketById(id);
    updateTicketData = updateTicketData.foundTicket;
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return <TicketForm ticket={updateTicketData} />;
};

export default TicketPage;
