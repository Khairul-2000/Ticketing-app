import Ticket from "@/app/_models/Ticket";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const ticketData = body.formData;

    await Ticket.create(ticketData);
    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ message: "error", err }, { status: 500 });
  }
};

export const GET = async () => {
  try {
    const tickets = await Ticket.find();

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ message: "error", err }, { status: 500 });
  }
};
