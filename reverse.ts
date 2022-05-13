function reverseString(stringValue?: string): ReverseString {
    const reverseArray: Array<string> = []
    for (let i = 0; i < stringValue.length; i++) {
        reverseArray.unshift(stringValue[i])
    }
    return reverseArray.join('')
}

export default reverseString
export type ReverseString = string
