export default class Team {
  constructor(...characters) {
    this.characters = characters;
  }

  [Symbol.iterator]() {
    const list = this.characters;
    let current = 0;
    const last = this.characters.length - 1;
    return {
      next() {
        if (current > last) {
          return {
            done: true,
          };
        }
        current += 1;
        return {
          done: false,
          value: list[current - 1],
        };
      },
    };
  }
}
