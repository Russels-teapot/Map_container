export default class ErrorRepository {
  constructor() {
    this.repository = new Map();
    this.repository.set(100, 'Длина имени должна быть меньше 10 символов');
    this.repository.set(200, 'Несуществующий класс');
  }

  translate(code) {
    if (this.repository.has(code)) {
      return this.repository.get(code);
    } return 'Unknown error';
  }
}
