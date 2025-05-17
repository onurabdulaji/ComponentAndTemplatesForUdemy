import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(tickedData: { title: string; text: string }) {
    const ticker: Ticket = {
      title: tickedData.title,
      request: tickedData.text,
      id: Math.random().toString(),
      status: 'open',
    };
    this.tickets.push(ticker);
  }

  onCloseTicket(tickedId: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === tickedId) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
