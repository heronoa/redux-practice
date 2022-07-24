import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

// The slice is a part os out main store a slice of all we have stored here.

const initialState = [
    { id: "1", title: "Learning Redux Toolkit", content: "I've heard good things" },
    { id: "2", title: "Slices...", content: "The more I say slice, the more i want pizza." }
]

// Define the selector where to not repeat in several components

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    // The reducer is a pre-programmed action to interaction with our slice
    reducers: {
        postAdded: {
            reducer(state, action: PayloadAction<any>) {
                state.push(action.payload)
            },
            //Prepare is a formating function to be called before the reducer
            prepare(title, content, userId) {
                const id = nanoid()
                return {
                    payload: {
                        id,
                        title,
                        content,
                        userId,
                    }
                }
            }
        }
    }
})

export const selectAllPosts = (state: any) => state.posts;

export const { postAdded } = postsSlice.actions

export default postsSlice.reducer;