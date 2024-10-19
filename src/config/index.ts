export const ToolsName = {
  BRUSH: "brush",
  RECT: "rect",
  CIRCLE: "circle",
  ERASER: "eraser",
  LINE: "line"
}

export const Config = {
  toolbar: {
    buttons: {
      left: [
        {
          id: ToolsName.BRUSH,
          icon: "brush.png"
        },
        {
          id: ToolsName.RECT,
          icon: "rect.png"
        },
        {
          id: ToolsName.CIRCLE,
          icon: "circle.png"
        },
        {
          id: ToolsName.ERASER,
          icon: "eraser.png"
        },
        {
          id: ToolsName.LINE,
          icon: "line.png"
        }
      ],
      right: [
        {
          id: "undo",
          icon: "undo.png"
        },
        {
          id: "save",
          icon: "save.png"
        },
        {
          id: "redo",
          icon: "redo.png"
        }
      ]
    }
  },
  settingsbar: {},
  canvas: {
    offset: 30
  }
}