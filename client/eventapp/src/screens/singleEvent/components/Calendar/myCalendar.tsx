import React, {useEffect, useState} from 'react';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import {MarkedDates} from 'react-native-calendars/src/types';
import {Modal, Portal} from 'react-native-paper';
import {UseI18nContext} from '../../../../context/I18n/i18n.context';
import {UseThemeContext} from '../../../../context/theme/themeToggle.context';
import {Events} from '../../../../graphql/generated';
import Loading from '../../../../layout/loading';
import {I18nContextType, ThemeContextType} from '../../../../typs';
import {styles} from './styles.myCalendar';

const MyCalendar: React.FC<{
  data: Events;
  visible: boolean;
  onDismiss: () => void;
}> = ({data, visible, onDismiss}) => {
  const {Lang} = UseI18nContext() as I18nContextType;
  const {Colors} = UseThemeContext() as ThemeContextType;
  const [days, setdays] = useState<MarkedDates | undefined>(undefined);
  const [initalDay, setinitalDay] = useState<string | undefined>(undefined);

  //Config
  LocaleConfig.locales.ar = {
    monthNames: [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'اكتوبر',
      'نوفمبر',
      'ديسمبر',
    ],
    dayNames: [
      'الآحد',
      'الإثنين',
      'الثلاثاء',
      'الآربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
    ],
    monthNamesShort: [
      'يناير',
      'فبراير',
      'مارس',
      'أبريل',
      'مايو',
      'يونيو',
      'يوليو',
      'أغسطس',
      'سبتمبر',
      'اكتوبر',
      'نوفمبر',
      'ديسمبر',
    ],
    dayNamesShort: [
      'الآحد',
      'الإثنين',
      'الثلاثاء',
      'الآربعاء',
      'الخميس',
      'الجمعة',
      'السبت',
    ],
    today: 'اليوم',
  };

  LocaleConfig.locales.en = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    monthNamesShort: [
      'Jan.',
      'Feb.',
      'Mar.',
      'Apr.',
      'May',
      'Jun.',
      'Jul.',
      'Aug.',
      'Sep.',
      'Oct.',
      'Nov.',
      'Dec.',
    ],
    dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'],
    today: 'Today',
  };
  //Config

  LocaleConfig.defaultLocale = Lang === 'en' ? 'en' : 'ar';

  useEffect(() => {
    let newDaysObject = {};
    const mydays = data.eventcalendar;

    const sort = mydays.sort((a: string, b: string) => {
      const date1 = new Date(a) as any;
      const date2 = new Date(b) as any;

      return date1 - date2;
    });
    sort.map(item => {
      newDaysObject = {
        ...newDaysObject,
        [item]: {
          selected: true,
          color: Colors.Secondary,
          textColor: Colors.OnSecondary,
        },
      };
    });

    if (sort.length >= 1) {
      setinitalDay(sort[0]);
    }

    setdays(newDaysObject);
  }, [Colors.OnSecondary, Colors.Secondary, data]);

  if (!days) {
    return <Loading />;
  }

  return (
    <Portal>
      <Modal
        visible={visible}
        contentContainerStyle={styles.container}
        onDismiss={onDismiss}>
        <Calendar
          // Initially visible month. Default = now
          initialDate={initalDay}
          markingType={'period'}
          markedDates={days}
          // Do not show days of other months in month page. Default = false
          hideExtraDays={true}
          // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
          disableAllTouchEventsForDisabledDays={true}
          // Enable the option to swipe between months. Default = false
          enableSwipeMonths={true}
          style={styles.calendar}
          theme={{
            backgroundColor: Colors.Background,
            calendarBackground: Colors.Surface,
            textSectionTitleColor: Colors.OnBackground,
            textSectionTitleDisabledColor: Colors.OnBackground,
            selectedDayBackgroundColor: Colors.Secondary,
            selectedDayTextColor: Colors.OnSecondary,
            todayTextColor: Colors.Primary,
            dayTextColor: Colors.OnBackground,
            textDisabledColor: Colors.OnBackground,
            dotColor: Colors.Primary,
            selectedDotColor: Colors.Primary,
            arrowColor: Colors.Secondary,
            monthTextColor: Colors.Primary,
            indicatorColor: Colors.Primary,
            textDayHeaderFontSize: 9,
          }}
        />
      </Modal>
    </Portal>
  );
};

export default MyCalendar;
