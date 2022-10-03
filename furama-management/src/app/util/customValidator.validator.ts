import {AbstractControl, ValidationErrors} from '@angular/forms';

export function validatorAge(control: AbstractControl): ValidationErrors | null {
  const dateValue = new Date(control.value);
  const dateNow = Math.floor(new Date().getFullYear());
  const dateOfBirth = Math.floor(dateValue.getFullYear());
  if (((dateNow - dateOfBirth) < 18) || ((dateNow - dateOfBirth) > 100)) {
    return {dateOfBirth: true};
  }
  return null;
}

export function checkDateStart(contractDate: AbstractControl) {
  const now = new Date();

  const dateStart = new Date(contractDate.value);
  return dateDiff(dateStart, now) > 0 ? null : {dateStartError: true};
}

export function checkDateStop(contractDate: AbstractControl) {
  const now = new Date();
  const dateStop = new Date(contractDate.value);
  return dateDiff(dateStop, now) > 0 ? null : {dateStopError: true};
}

export function checkDate(contractDate: AbstractControl) {
  const dateStart = new Date(contractDate.value.startDate);

  const dateStop = new Date(contractDate.value.endDate);
  return dateDiff(dateStart, dateStop) > 0 ? null : {dateContractError: true};
}

function dateDiff(first, second) {
  return Math.round((second - first) / (1000 * 60 * 60 * 24));
}
