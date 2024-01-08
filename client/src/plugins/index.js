import { tr, en } from "./languages/index";

import { createI18n } from "vue-i18n";

const i18n = createI18n({
  locale: en,
  fallbackLocale: en,
  messages: {
    tr,
    en,
  },
});

export default i18n;
