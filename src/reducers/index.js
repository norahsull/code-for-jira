import { ADD_REMINDER, REMOVE_REMINDER, CLEAR_REMINDERS } from '../types';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminders = (state = [], action) => {
  // Load state from cookies
  const currentState = read_cookie('reminders') || [];

  let updatedReminders;

  switch (action.type) {
    case ADD_REMINDER:
      updatedReminders = [
        ...currentState,
        { text: action.text, date: action.date, id: Math.random() }
      ];
      break;

    case REMOVE_REMINDER:
      updatedReminders = currentState.filter(reminder => reminder.id !== action.id);
      break;

    case CLEAR_REMINDERS:
      updatedReminders = [];
      break;

    default:
      return currentState;
  }

  bake_cookie('reminders', updatedReminders);
  return updatedReminders;
};

export default reminders;
