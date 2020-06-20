function InitLevel () {
	
}
let superMario = sprites.create(img`
. . . . 2 2 2 2 . . . . 
. . . 2 2 2 2 2 2 2 2 . 
. . . e e e 4 4 4 . . . 
. . e 4 e 4 4 f 4 . . . 
. . e 4 e e 4 f 4 4 4 . 
. . e e 4 4 4 4 e 4 4 4 
. . . . 4 4 4 e e e e . 
. . . . . 4 4 4 4 4 . . 
. . . . 8 2 2 2 . . . . 
. . . 2 8 2 2 8 2 . . . 
. . 2 2 8 2 2 8 2 2 . . 
. 2 2 2 8 8 8 8 2 2 2 . 
2 2 2 8 5 8 8 5 8 2 2 2 
4 4 2 8 8 8 8 8 8 2 4 4 
4 4 4 8 8 8 8 8 8 4 4 4 
4 4 8 8 8 8 8 8 8 8 4 4 
. . 8 8 8 . . 8 8 8 . . 
. e e e . . . . e e e . 
e e e e . . . . e e e e 
`, SpriteKind.Player)
controller.moveSprite(superMario, 100, 0)
