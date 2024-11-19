import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice(
    {
        name:'counter',
        initialState:0,
        reducers:{
            increase(state){
                    return state+1
            },
            decrease(state){
                return state > 0 ? state -1 : state
            }
        },
    }
)
const {actions,reducer}= counterSlice
export const {increase,decrease}= actions; // name export

export default reducer // default