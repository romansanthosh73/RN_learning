import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";




export const fetchproducts = createAsyncThunk("fetchproducts", async () => {
    const res = await fetch("https://fakestoreapi.com/products")
    return await res.json()
})

const productslice = createSlice({
    name: 'product',
    initialState: {
        items: [],
        loading: false,
        error: false
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchproducts.pending, state => {
            state.loading = true;
        })
        builder.addCase(fetchproducts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.loading = false;
        })
        builder.addCase(fetchproducts.rejected, (state, action) => {
            state.error = false;
        })
    },
})



export default productslice.reducer;