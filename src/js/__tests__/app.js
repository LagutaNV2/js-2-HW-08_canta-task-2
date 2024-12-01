import ErrorRepository from '../app';

let errorRepo;

beforeEach(() => {
  errorRepo = new ErrorRepository();
});

test('Метод translate: возвращает текст ошибки по коду', () => {
  const result = errorRepo.translate(404);
  expect(result).toBe('Not Found');
});

test('Метод translate: возвращает "Unknown error" для неизвестного кода', () => {
  const result = errorRepo.translate(123);
  expect(result).toBe('Unknown error');
});
