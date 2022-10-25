// const board = new BoardOfFame();

// board.list // `1. ... | 2. ... | 3. ...`
// board.addRecord({name: 'Cleaner-900', score: 6})
// board.addRecord({name: 'Cleaner-775', score: 16})
// board.list // `1. Cleaner-775: 16 | 2. Cleaner-900: 6 | 3. ...`
// board.addRecord({name: 'MX-56', score: 23})
// board.addRecord({name: 'Cleaner-775', score: 30})
// board.list // `1. Cleaner-775: 30 | 2. MX-56: 23 | 3. Cleaner-900: 6`

// const internationalBoard = new BoardOfFame(5);

// internationalBoard.list // `1. ... | 2. ... | 3. ... | 4. ... | 5. ...`
// Hints:
//     • число мест на доске славы сохрани в this.numberOfPlaces 
//     • для хранения роботов используй массив this.robots 
//     • сортируй весь массив this.robots в методе addRecord 
//     • за отображение роботов в нужном формате отвечает getter list

