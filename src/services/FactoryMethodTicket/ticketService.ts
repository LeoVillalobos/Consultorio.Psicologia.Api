import { TicketFactory } from "./ticketFactory"
import { ITicket, ticketType } from "./types/ticket";

export const ticketCreator = (type: ticketType): ITicket => {

  const instanceType = new TicketFactory();
  const ticket = instanceType.obtenerTicket(type);
  return ticket.generateTicket();

}
