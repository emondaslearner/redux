import { createStore } from "redux";
import reducer from "../Reduser/Reduser";

export const store = createStore(reducer);