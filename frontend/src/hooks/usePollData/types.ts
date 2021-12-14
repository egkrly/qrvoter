import { IPollQuestion, ICustomer } from "~/types"

export interface IPollDataError {
    message: string
}

export interface IPollDataResponse {
    id: string
    name: string
    questions: Array<IPollQuestion>
    createdBy: ICustomer
    isLoading: boolean
    startDate: string
    endDate?: string
    createdAt?: any
    archived?: boolean
    error?: IPollDataError
}
