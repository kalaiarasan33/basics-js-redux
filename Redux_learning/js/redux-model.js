// Redux Lifecycle

// Action Creator -> Action -> Dispatch -> reducer -> Redux store

// Action Creator 
// Person who is submitting the form

const newBooking = (name,amount)=>{
    return{
        type:"NEW_BOOKING",
        payload:{
            name,
            amount
        },
    };
};


const cancelBooking = (name,refundamount)=>{
    return{
        type:"CANCEL_BOOKING",
        payload:{
            name,
            refundamount
        },
    };
};

// Reducers

const reservationHistory = (oldReservationHistory=[],action)=>{
    if (action.type=="NEW_BOOKING"){
        return [...oldReservationHistory,action.payload]
    }else if (action.type=="CANCEL_BOOKING"){
        return oldReservationHistory.filter(record =>{
            return record !== action.payload.name;
        });
    }
    return oldReservationHistory;
}

const cancellationHistory = (oldReservationHistory=[],action)=>{
    if (action.type=="CANCEL_BOOKING"){
        return [...oldReservationHistory,action.payload];
    }
    return oldReservationHistory;
}

const accounting = (totalMoney=100,action)=>{
    if (action.type=="NEW_BOOKING"){
        return totalMoney + action.payload.amount;
    }else if (action.type=="CANCEL_BOOKING"){
        return totalMoney - action.payload.refundamount;
    }
    return totalMoney;
}


// Redux store

console.log(Redux);

const {createStore,combineReducers} = Redux;

const railwaycentralstore = combineReducers({
    accounting:accounting,
    reservationHistory:reservationHistory,
    cancellationHistory:cancellationHistory,
});

const store = createStore(railwaycentralstore);

store.dispatch(newBooking("kalai",200));
store.dispatch(newBooking("hardhik",200));
store.dispatch(cancelBooking("chandru",300));
console.log(store.getState());

