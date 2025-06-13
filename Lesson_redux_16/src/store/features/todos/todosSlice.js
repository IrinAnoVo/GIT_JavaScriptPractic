import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  filterOptions: [
    { label: "All", value: "all" },
    { label: "Active", value: "active" },
    { label: "Completed", value: "completed" },
  ],
  filter: "all",
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: Date.now(),
                label: action.payload,
                completed: false,
            };
            state.todos.push(todo);
        },
        deleteTask: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTask: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },

    },
});

export default todosSlice.reducer;
export const { addTodo, deleteTask, toggleTask } = todosSlice.actions;

        /*
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        changeFilter: (state, action) => {
            state.filter = action.payload;
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter(todo => !todo.completed);
        },
        */