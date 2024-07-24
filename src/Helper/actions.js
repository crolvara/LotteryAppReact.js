import { getRandomNumber, getRandomColor } from "./utils";

export function registerTicket() {
    const newTicket = {
        number: getRandomNumber(),
        color: getRandomColor()
    };

    this.setState((prevState) => {
        // Създайте нов масив с новия билет добавен
        const newTickets = [...prevState.tickets, newTicket];

        return {
            tickets: newTickets,
            remainingTickets: prevState.remainingTickets - 1
        };
    });
}

export function removeTicket(index) {
    this.setState((prevState) => {
        const newTickets = prevState.tickets.filter((_, i) => i !== index);

        return {
            tickets: newTickets,
            remainingTickets: prevState.remainingTickets + 1
        };
    });
}

