import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFreelancers = createAsyncThunk(
	'freelancer/fetchFreelancers',
	async (fetch = true, { rejectWithValue }) => {
		try {
			const { data } = await axios.get(
				'https://api.terawork.com/service-categories/sellers-services/computer-software-development'
			);
			return data.data.service_search_results.hits;
		} catch (error) {
			return rejectWithValue('An error occurred while fetching freelancers');
		}
	}
);

const initialState = {
	freelancers: [],
	favorites: [],
	loading: false,
	error: '',
};

const freelancerSlice = createSlice({
	name: 'freelancer',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchFreelancers.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchFreelancers.fulfilled, (state, action) => {
				state.freelancers = action.payload;
				state.loading = false;
			})
			.addCase(fetchFreelancers.rejected, (state, action) => {
				state.error = action.payload;
				state.loading = false;
			});
	},
});

export default freelancerSlice.reducer;
