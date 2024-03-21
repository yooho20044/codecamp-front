import { ChangeEvent, MouseEvent } from 'react'

export interface IBoardWriteProps{
    isEdit:boolean
    data?: any
  }

export interface IMyvariables{
    number:number
    title?: string 
    writer?: string
    contents?: string 
  }

export interface IBoardWriteUIProps{
    isEdit:boolean
    data?:any 
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void 
    onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void 
    onChangeContent: (event: ChangeEvent<HTMLInputElement>) => void 
    onClickSubmit: (event: MouseEvent<HTMLButtonElement>) => void 
    onClickUpdate: (event: MouseEvent<HTMLButtonElement>) => void
  }