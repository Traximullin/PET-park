import { type Dispatch, type SetStateAction, type HTMLAttributes } from "react"

export interface IModal extends HTMLAttributes<HTMLDivElement> {
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
}
