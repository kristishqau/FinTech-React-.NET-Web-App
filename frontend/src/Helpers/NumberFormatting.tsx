export const formatLargeMonetaryNumber: any = (number: number) => {
    // If the number is negative, convert it to positive, format it, and prepend a "-" sign.
    if (number < 0) {
        return "-" + formatLargeMonetaryNumber(-1 * number)
    }
    // If the number is less than 1000, return it directly with a "$" prefix.
    if (number < 1000) {
        return "$" + number
    }
    // For numbers between 1,000 and 999,999, format it as "X.XK".
    else if (number >= 1000 && number < 1_000_000) {
        return "$" + (number / 1000).toFixed(1) + "K"
    }
    // For numbers between 1,000,000 and 999,999,999, format it as "X.XM".
    else if (number >= 1_000_000 && number < 1_000_000_000) {
        return "$" + (number / 1_000_000).toFixed(1) + "M"
    }
    // For numbers between 1 billion and 999 billion, format it as "X.XB".
    else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
        return "$" + (number / 1_000_000_000).toFixed(1) + "B"
    }
    // For numbers between 1 trillion and 999 trillion, format it as "X.XT".
    else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
        return "$" + (number / 1_000_000_000_000).toFixed(1) + "T"
    }
}

export const formatLargeNonMonetaryNumber: any = (number: number) => {
    // Same logic as above for negative numbers.
    if (number < 0) {
        return "-" + formatLargeMonetaryNumber(-1 * number)
    }
    // For numbers below 1,000, return as is.
    if (number < 1000) {
        return number
    }
    // For numbers between 1,000 and 999,999, format as "X.XK".
    else if (number >= 1000 && number < 1_000_000) {
        return (number / 1000).toFixed(1) + "K"
    }
    // For numbers between 1,000,000 and 999,999,999, format as "X.XM".
    else if (number >= 1_000_000 && number < 1_000_000_000) {
        return (number / 1_000_000).toFixed(1) + "M"
    }
    // For numbers between 1 billion and 999 billion, format as "X.XB".
    else if (number >= 1_000_000_000 && number < 1_000_000_000_000) {
        return (number / 1_000_000_000).toFixed(1) + "B"
    }
    // For numbers between 1 trillion and 999 trillion, format as "X.XT".
    else if (number >= 1_000_000_000_000 && number < 1_000_000_000_000_000) {
        return (number / 1_000_000_000_000).toFixed(1) + "T"
    }
}

export const formatRatio = (ratio: number) => {
    // Rounds the ratio to two decimal places and ensures the result has exactly two digits after the decimal.
    return (Math.round(ratio * 100) / 100).toFixed(2)
}