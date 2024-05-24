//separate chainning
//linear probing

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRD_PRIME + value) % this.keyMap.length
        }
        return total;
    }

    get(key) {
        const hshdKey = this._hash(key);
        if(this.keyMap[hshdKey]) {
            for (let i = 0; i < this.keyMap[hshdKey].length; i++) {
                if (this.keyMap[hshdKey][i][0] === key) {

                    return this.keyMap[hshdKey][i][1]
                }
            }
        }
        return undefined
    }

    set(key, value) {
        const hshdKey = this._hash(key);

        if( this.keyMap[hshdKey]){
            this.keyMap[hshdKey] = []
        }
        for(let i = 0; i< this.keyMap[hshdKey].length ; i++){
            if(this.keyMap[hshdKey][i][0] === key){
                this.keyMap[hshdKey][i][1] = value;
                return
            }
            this.keyMap[hshdKey].push([key,value]);
        }
    }
}