// TODO: write your code here

// Создайте свой класс ErrorRepository внутри которого храните Map,
// в котором ключ - это код ошибки (число), а значение - текстовое описание (человекочитаемое).

// Реализуйте метод translate(code), позволяющий по коду получить текст ошибки,
// а в случае отсутствия подобного кода возвращать строку 'Unknown error'.

export default class ErrorRepository {
  constructor() {
    this.errors = new Map([
      [404, 'Not Found'],
      [500, 'Internal Server Error'],
      [403, 'Forbidden'],
      [400, 'Bad Request'],
    ]);
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }
}
