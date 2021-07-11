import { ADD } from "../Action/Action";

const initial = {
    cart:[],
    product:[{
        "id": 1,
        "name": "Allspice - Jamaican"
      }, {
        "id": 2,
        "name": "Soup - Campbells Mushroom"
      }, {
        "id": 3,
        "name": "Vodka - Hot, Lnferno"
      }, {
        "id": 4,
        "name": "Bouq All Italian - Primerba"
      }, {
        "id": 5,
        "name": "Cucumber - Pickling Ontario"
      }, {
        "id": 6,
        "name": "Bandage - Fexible 1x3"
      }, {
        "id": 7,
        "name": "Maple Syrup"
      }, {
        "id": 8,
        "name": "Coffee - Decaffeinato Coffee"
      }, {
        "id": 9,
        "name": "Mushroom - Shitake, Fresh"
      }, {
        "id": 10,
        "name": "Shrimp - 16/20, Iqf, Shell On"
      }]
}

const reducer = (state = initial,action) => {
    switch(action.type){
        case ADD:
                const newCart = [...state.cart,action.id];
                return{product:state.product,cart:newCart}
            break;
        default:
            return state;
    }
}

export default reducer;