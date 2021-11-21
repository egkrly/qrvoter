export interface IPollDataError {
    message: string
}

export interface IPollData {
    id?: string
    publicId?: string
    name: string
    startDate: string
    endDate?: string
    createdAt?: any
    archived?: boolean
    error?: IPollDataError
}