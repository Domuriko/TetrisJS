class Tetromino {
    constructor() {
        this.blockFields = [];
        this.color;
    }
}

class IPiece extends Tetromino {
    constructor() {
        this.blockFields = [[0, 0], [1, 0], [2, 0], [3, 0]];
    }
}

class OPiece extends Tetromino {
    constructor() {
        this.blockFields = [[0, 0], [0, 1], [1, 0], [1, 1]];
    }
}

class TPiece extends Tetromino {
    constructor() {
        this.blockFields = [[0, 1], [1, 0], [1, 1], [1, 2]];
    }
}

class SPiece extends Tetromino {
    constructor() {
        this.blockFields = [[0, 1], [0, 2], [1, 0], [1, 1]];
    }
}

class ZPiece extends Tetromino {
    constructor() {
        this.blockFields = [[0, 0], [0, 1], [1, 1], [1, 2]];
    }
}

class JPiece extends Tetromino {
    constructor() {
        this.blockFields = [[0, 1], [1, 1], [2, 0], [2, 1]];
    }
}

class LPiece extends Tetromino {
    constructor() {
        this.blockFields = [[0, 0], [1, 0], [2, 0], [2, 1]];
    }
}

export let TETROMINO = {
    I_PIECE: 0,
    O_PIECE: 1,
    T_PIECE: 2,
    S_PIECE: 3,
    Z_PIECE: 4,
    J_PIECE: 5,
    L_PIECE: 6
};