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
            state.todos = state.todos.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }
                return todo;
            })
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter(todo => !todo.completed);
        },
        changeFilter: (state, action) => {
            state.filter = action.payload;  // 'all', 'completed', 'active'
        },
    }
});

export const { addTodo, deleteTask, toggleTask, clearCompleted, changeFilter } = todosSlice.actions;
export default todosSlice.reducer;