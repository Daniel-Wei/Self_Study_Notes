// 使用RTK来创建store
import { createSlice } from "@reduxjs/toolkit";

// 创建学校的slice
const schoolSlice = createSlice({
    name: 'school',
    initialState: {
        name: 'Monash University',
        address: 'Clayton',
        ranking: 50,
        rating: 4.5
    },
    reducers: {
        setName(state, action){
            state.name = "The University of Melbourne";
        },
        setRanking(state, action){
            state.ranking = action.payload;
        },
        setRating(state, action){
            state.rating = action.payload;
        }
    }
});

export const {setName: setSchoolName, setRanking: setSchoolRanking, setRating: setSchoolRating} = schoolSlice.actions;
export const {reducer: schoolReducer} = schoolSlice;
