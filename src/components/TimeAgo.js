import moment from 'moment-timezone';

const timeAgo = date => {
  // Current date via timezone
  let current_date = moment()
    .tz(process.env.TIMEZONE)
    .format('llll');
  let now = moment(current_date);

  // Difference conditions
  if (now.diff(date, 'days') === 0) {
    if (now.diff(date, 'minutes') >= 60) return now.diff(date, 'hours') + ' Hours Ago';
    else return now.diff(date, 'minutes') + ' Minutes Ago';
  } else {
    if (now.diff(date, 'days') < 7) {
      let dayStr = now.diff(date, 'days') == 1 ? ' Day Ago' : ' Days Ago';
      return now.diff(date, 'days') + dayStr;
    } else if (now.diff(date, 'days') >= 7 && now.diff(date, 'days') <= 30) {
      let weekStr = now.diff(date, 'weeks') == 1 ? ' Week Ago' : ' Weeks Ago';
      return now.diff(date, 'weeks') + weekStr;
    } else if (now.diff(date, 'days') >= 30 && now.diff(date, 'days') <= 365)
      return now.diff(date, 'months') + ' Months Ago';
    else return now.diff(date, 'years') + ' Years Ago';
  }
};

export { timeAgo };
