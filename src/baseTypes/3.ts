let some: unknown;
some = 'Text';
let str: string;

if (typeof some === 'string') {
    str = some;
} else {
    throw new Error('some is not a string!');
}

export {};
