import * as React from 'react';
import {DatePickerModal} from 'react-native-paper-dates';

const DatePicker: React.FC<{
  onConfirmSingle: (params: any) => void;
  onDismissSingle: () => any;
  open: boolean;
  date: Date | undefined;
  saveLabel: string;
  label: string;
}> = ({onConfirmSingle, onDismissSingle, open, date, saveLabel, label}) => {
  return (
    <DatePickerModal
      locale="en"
      mode="single"
      visible={open}
      onDismiss={onDismissSingle}
      date={date}
      onConfirm={onConfirmSingle}
      saveLabel={saveLabel}
      label={label}
      animationType="slide"
    />
  );
};

export default DatePicker;
