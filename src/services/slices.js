import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    currentQuestionIndex: 0,
    answerSelected: false,
    selectedOption: null,
    showResult: false,
  },
  reducers: {
    setCurrentQuestionIndex: (state, { payload }) => {
      state.currentQuestionIndex = payload;
    },
    setTimeLeft: (state, { payload }) => {
      state.timeLeft = payload;
    },
    setSelectedOption: (state, { payload }) => {
      state.selectedOption = payload;
    },
    setAnswerSelected: (state, { payload }) => {
      state.answerSelected = payload;
    },
    setShowResult: (state, { payload }) => {
      state.showResult = payload;
    },
  },
});

export const {
  setCurrentQuestionIndex,
  setAnswerSelected,
  setSelectedOption,
  setShowResult,
} = userSlice.actions;
export default userSlice.reducer;
