import { GOOGLE_SIGN_IN, GOOGLE_SIGN_OUT } from "./types"

export const signInAction = (userId) => {
    return {
        type: GOOGLE_SIGN_IN,
        payload: {
            userId
        }
    }
}

export const signOutAction = () => {
    return {
        type: GOOGLE_SIGN_OUT
    }
}