import moment from 'moment'

export const getTime = () => moment().format('LTS')

/**
 * Prints to the console using console.log, with current time prefix
 * 
 * @param {*} text 
 */
export const log = (text) => {
    const time = getTime()
    console.log(`[${time}] ${text}`)
}
