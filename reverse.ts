function reverseString(stringValue?: string): ReverseString {
    if (stringValue) {
        const reverseArray: Array<string> = []
        for (let i = 0; i < stringValue.length; i++) {
            reverseArray.unshift(stringValue[i])
        }
        return reverseArray.join('')
    } else {
        stringValue = "Hello World"
        const reverseArray: Array<string> = []
        for (let i = 0; i < stringValue.length; i++) {
            reverseArray.unshift(stringValue[i])
        }
        return reverseArray.join('')  
    }
}

export default reverseString
export type ReverseString = string
