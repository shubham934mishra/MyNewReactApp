//@flow

export type State = {
    userName : {}
}

export type UpdateUserName = {
    userName : {},
    type : string
}

export type UserNameAction = 
    | UpdateUserName
