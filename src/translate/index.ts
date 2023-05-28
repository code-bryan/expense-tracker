import { I18n } from "i18n-js";

import en from './translates/en.json';

const translates = {
  en,
};

const i18n = new I18n(translates);
i18n.defaultLocale = "en";
i18n.locale = "en";


export function translate(text: string): string {
  return i18n.t(text);
}