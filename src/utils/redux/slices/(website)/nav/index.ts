import { createSlice } from "@reduxjs/toolkit";
import { NavState } from "types/NavState";

const initialState: NavState = {
	isNavOpen: false,
};

export const Site23Nav = createSlice({
	name: "nav",
	initialState,
	reducers: {
		toggleNav: (state) => {
			state.isNavOpen = !state.isNavOpen;
		},
	},
});

export const { toggleNav } = Site23Nav.actions;
export default Site23Nav.reducer;
