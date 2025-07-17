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
    constructor(order){
        super(order);
        this.order = order;
    }
    next(){
        this.order.setState(new PreparingState(this.order));
    }
    getStatus(){
        return "Confirm";
    }
}

class PreparingState extends OrderState{
    constructor(order){
        super(order);
        this.order = order;
    }
    next(){
        this.order.setState(new ReadyState(this.order));
    }
    getStatus(){
        return "Preparing";
    }
}

class ReadyState extends OrderState{
    constructor(order){
        super(order);
        this.order = order;
    }
    next(){
        this.order.setState(new DeliverState(this.order));
    }
    getStatus(){
        return "Ready";
    }
}

class DeliverState extends OrderState{
    constructor(order){
        super(order);
        this.order = order;
    }
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
/**
 * Sets the current state of the order.
 * @param {OrderState} state - The new state to transition to.
 */

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