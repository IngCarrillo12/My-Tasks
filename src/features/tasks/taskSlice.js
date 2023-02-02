import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../utils/LocalStorage"

const initialState =getItem('tasks')||[];

export const taskSlice = createSlice({
    name:'task',
    initialState,
    reducers:{
        addTask:(state, action)=>{
           state.push(action.payload);
        },
        deleteTask: (state, action)=>{
            const taskFound = state.find(task => task.id === action.payload)
            taskFound?state.splice(state.indexOf(taskFound),1):state
        },
        editTask:(state, action)=>{
            const {id, title, description} = action.payload
            const taskFound = state.find(task => task.id === id)
            if(taskFound){
                taskFound.title = title
                taskFound.description = description
            }     
        },
    },
});
export const {addTask, deleteTask, editTask} = taskSlice.actions;
export default taskSlice.reducer;