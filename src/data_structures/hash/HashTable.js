//separate chainning
//linear probing

class HashTable {
    constructor(size = 53) {
        this.size = size;
        this.keyMap = new Array(size);
    }
    /**
     * Custom hash function used within the class.
     * @param {string} key - The key to be hashed.
     * @returns {number} The index in the hash table.
     */
    hash(key) {

        return this._hash(strKey) % this.size;
    }
    _keyToString(key) {
        let strKey;
        if (typeof key === 'string') {
            strKey = key;
        } else if (typeof key === 'object' && key !== null) {
            strKey = JSON.stringify(key);
        } else if (typeof key === 'number') {
            strKey = key.toString();
        } else if (typeof key === 'function') {
            strKey = key.toString();
        } else {
            throw new Error('Unsupported key type');
        }
        return strKey;

    }
    _hash(key) {
        let total = 0;
        const PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * PRIME + value)
        }
        return total;
    }

    get(key) {
        const hshdKey = this.hash(key);
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