import { ICustomer } from './Customer'

export interface IInvitee {
    name: string
    email: string
}

export interface IPollAnswer {
    answer?: string
    invitee?: IInvitee
}

export interface IPollQuestion {
    name: string
    hint?: string
    answers: Array<IPollAnswer>
}

export interface IPollData {
    id: string
    name: string
    questions: Array<IPollQuestion>
    createdBy: ICustomer
    startDate: string
    endDate?: string
    createdAt?: any
    archived?: boolean
}
