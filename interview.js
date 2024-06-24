//

function censor(string) {
    const stringArray = string.split(' ');
    let str = '';
    for (let i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > 4) {
            str = str + ' ' + Array.from({length: stringArray[i].length})
                .fill('*') //
                .join('');
        } else {
            str += ' ' + stringArray[i];
        }
    }

    return str;
}

const strToCensor = "Two plus three is five"
console.log(censor(strToCensor));