function find_longest_word(str) {
    const words = str.split(' ');
    let longestWord = '';
  
    for (const word of words) {
      
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

function detect_data_type(value) {
    const type = typeof value;

    switch (type) {
        case 'object':
            if (value === null) {
            return 'null';
            }
            if (Array.isArray(value)) {
                return 'array';
            }
            return 'object';
        case 'boolean':
            return 'boolean';
        case 'function':
            return 'function';
        case 'number':
            if (isNaN(value)) {
                return 'NaN';
            }
            return 'number';
        case 'string':
            return 'string';
        case 'undefined':
            return 'undefined';
        default:
            return 'unknown';
    }
}

const longestWord = find_longest_word("Это пример функции для поиска самого длинного слова в строке");
console.log(`Самое длинное слово: ${longestWord}`);

const valueType = detect_data_type([1, 2, 3]);
console.log(`Тип значения: ${valueType}`);