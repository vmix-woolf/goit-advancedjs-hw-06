/*
  Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення.
  Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const pair1: KeyValuePair<string, number> = {
  key: 'id',
  value: 1001
};

const pair2: KeyValuePair<number, boolean> = {
  key: 42,
  value: false
};

export {};
