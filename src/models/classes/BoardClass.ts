import { ListInterface } from "../interfaces/listInterface"
import { BoardInterface } from "../interfaces/boardInterface"

export class Board implements BoardInterface {
  userId: string
  boardId: string
  title: string
  lists: Array<ListInterface>

  constructor(props: BoardInterface) {
    if (!props.boardId) throw new Error('Board must have boardId.')
    this.userId = props.userId
    this.boardId = props.boardId
    this.title = props.title || 'Default Task Board'
    this.lists = props.lists
  }
}