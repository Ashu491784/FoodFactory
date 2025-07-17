import { useState } from "react";
class OrderState {
    constructor(foodmakeFactory){
        this.foodmakeFactory = foodmakeFactory;
    }

    nextState(){
        return new Error("Next method must be import");
    }

    getStatus(){
        throw new Error("getStatus method must be import");
    }
}

//status create
class ConfirmStatus extends OrderState{
    next(){
        rhis.order.setState(new PreparingState(this.order));
    }
    getStatus(){
        return "Confirm";
    }
}

class PreparingState extends OrderState{
    next(){
        this.order.setState(new ReadyState(this.order));
    }
    getStatus(){
        return "Preparing";
    }
}

class ReadyState extends OrderState{
    next(){
        this.order.setState(new DeliverState(this.order));
    }
    getStatus(){
        return "Ready";
    }
}

class DeliverState extends OrderState{
    next(){
        this.order.setState(new DeliverState(this.order));
    }
    getStatus(){
        return "Deliver";
    }
}

class Order {
    constructor(){
        this.setState(new ConfirmStatus(this));
    }
    setState(state){
        this.state = state;
    }
    nextState(){
        this.state.next();
    }
    getStatus(){
        return this.state.getStatus();
    }
}

export {OrderState, ConfirmStatus, PreparingState, ReadyState, DeliverState, Order};