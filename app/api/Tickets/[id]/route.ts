import Ticket from "@/app/_models/Ticket";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    const { id } = params;

    const foundTicket = await Ticket.findOne({
      _id: id,
    });

    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "error", err }, { status: 500 });
  }
};

export const DELETE = async (req, { params }) => {
  try {
    const { id } = params;
    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "error", err }, { status: 500 });
  }
};
export const PUT = async (req: Request, { params }) => {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;

    await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });
    return NextResponse.json({ Message: "Ticket updated" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "error", err }, { status: 500 });
  }
};
