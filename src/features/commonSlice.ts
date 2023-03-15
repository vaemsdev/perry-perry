import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/common";

export interface ToastData {
    id: string;
    title: string;
    message: string;
    autoHide: boolean;
    show: boolean
}

export interface StateType {
    isModalOpen: boolean;
    toasts: ToastData[]
}

const initialState: StateType = {
    isModalOpen: false,
    toasts: []
}

export const commonSlice = createSlice(
    {
        name: 'common',
        initialState,
        reducers: {
            setModal: (state, { payload }) => {
                state.isModalOpen = payload;
            },
            setToast: (state, { payload }) => {

                const idx = state.toasts.findIndex(x => x.id === payload);

                if (typeof payload === 'string' && idx >= 0) {
                    state.toasts.splice(idx, 1);
                } else
                    state.toasts.push(payload)

            },
        }
    }
)

export const { setModal, setToast } = commonSlice.actions;

export const selectCommon = (state: RootState) => state.common;
export default commonSlice.reducer