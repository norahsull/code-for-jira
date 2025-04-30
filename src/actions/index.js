// TODO List:
// 1. Validate input (text, date) before creating an action in add_Reminder.
// 2. Add unit tests for all three action creators.
// 3. Consider using TypeScript for better type safety.
// 4. Improve logging (e.g., include timestamps or use a logger).
// 5. Rename functions and variables for consistent camelCase style (e.g., addReminder instead of add_Reminder).

import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDERS } from '../types'

export const add_Reminder = (text, date) => {
    const action = {
        type: ADD_REMINDER,
        text,
        date
    }
    console.log("Add", action)
    return action
}

export const remove_Reminder = (id) => {
    const action = {
        type: REMOVE_REMINDER,
        id
    }
	
    console.log("Removed", action)
    return action
}

export const clear_Reminder = () => {
    const action = {
        type: CLEAR_REMINDERS
    }
    return action
}
