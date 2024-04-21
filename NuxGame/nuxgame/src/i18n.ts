import en from './assets/i18n/en.json'
import ua from './assets/i18n/uk-ua.json'
import { createI18n } from 'vue-i18n'

const createi18n = (option: any) => {
    const i18n = createI18n({
        legacy: false,
        locale: option,
        messages: {
            'en-US': en,
            'uk-UA': ua
        }
    })
    return i18n
}

export default createi18n