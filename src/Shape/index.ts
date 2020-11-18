import Konva from 'konva'

import { Board } from '../Board'
import { Events } from '../Events'
import { Flip } from '../Flip'
import { History } from '../History'

export class Shape {
  /**
   *
   */
  public node: Konva.Group | Konva.Shape

  /**
   *
   */
  public transformerConfig: Konva.TransformerConfig

  /**
   *
   */
  private readonly board: Board

  /**
   *
   */
  private flip: Flip

  constructor(
    board: Board,
    events: Events,
    history: History,
    node: Konva.Group | Konva.Shape,
    transformerConfig = {}
  ) {
    this.board = board
    this.flip = new Flip(board, events, history)

    this.node = node
    this.transformerConfig = transformerConfig

    this.registerEvents()
  }

  /**
   *
   */
  public flipX() {
    this.flip.horizontal([this.node])
  }

  /**
   *
   */
  public flipY() {
    this.flip.vertical([this.node])
  }

  private registerEvents() {
    this.node.addEventListener('mouseover', () => {
      this.board.stage.getContent().style.cursor = 'move'
    })

    this.node.addEventListener('mouseout', () => {
      this.board.stage.getContent().style.cursor = 'inherit'
    })
  }
}