export const separateEvery3digit = (number: number | string, delimiter = ',') => {
    return String(number).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${delimiter}`);
}