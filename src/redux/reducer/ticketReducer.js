export default function (state = {data:[]}, action) {
    console.log(action);
    switch (action.type) {
        case 'ticketList':
            console.log(action)
            return {
                type: action.type,
                data: action.payload,
            }
    }
    return state;
}
