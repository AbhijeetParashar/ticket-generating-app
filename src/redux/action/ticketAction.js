export const dispatchTicketList = (response) => {
    console.log(response)
    return {
        type: 'ticketList',
        payload: response
    }
};