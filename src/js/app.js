class Team {
  constructor(...characters) {
    this.characters = characters;
  }
  [Symbol.iterator]() {
    let list = this.characters;
    let current = 0;
    let last = this.characters.length - 1;
    return {
      next(){
        console.log(current, last);
        if( current > last ) {
          return {
            done: true,
          };
        } else {
          return {
            done: false,
            value: list[current++],
          };
        }
      }
    }
  }
}
