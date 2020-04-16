// 画圆形矩形，按照css规则传入rect {left, right, top, bottom, radius}
function drawCircleDash(
  ctx,
  rect,
  { length = 3, distance = 1, padding = 4 } = {}
) {
  let { left, right, top, bottom } = rect
  let r = (right - left) / 2
  let x = left + r
  let y = top + r
  ctx.save()
  ctx.beginPath()
  ctx.strokeStyle = '#fff'
  ctx.lineWidth = 1
  ctx.setLineDash([length, distance])
  ctx.arc(x, y, r + padding, 0, Math.PI * 2)
  ctx.stroke()
  ctx.restore()
}

// 画矩形虚线 ，按照css规则传入rect {left, right, top, bottom, radius}
function drawRectDash(
  ctx,
  rect,
  { length = 3, distance = 1, padding = 4 } = {}
) {
  ctx.save()
  let { left: x, right, top: y, bottom } = rect
  let w = right - x
  let h = bottom - y
  ctx.strokeStyle = '#fff'
  ctx.lineWidth = 1
  ctx.setLineDash([length, distance])
  ctx.strokeRect(x - padding, y - padding, w + 2 * padding, h + 2 * padding)
  ctx.restore()
}

// 画圆角矩形，按照css规则传入rect {left, right, top, bottom, radius}
function drawCircleRect(ctx, rect) {
  ctx.save()
  let { left: x, right, top: y, bottom, radius: r = 1 } = rect
  let w = right - x
  let h = bottom - y
  ctx.beginPath()

  // 圆角矩形算法
  ctx.moveTo(x + r, y)
  // 上
  ctx.arcTo(x + w, y, x + w, y + h, r)
  // 右
  ctx.arcTo(x + w, y + h, x, y + h, r)
  // 下
  ctx.arcTo(x, y + h, x, y, r)
  // 左
  ctx.arcTo(x, y, x + w, y, r)

  ctx.closePath()
  ctx.clip()
  ctx.clearRect(x, y, w, h)
  ctx.restore()
}
