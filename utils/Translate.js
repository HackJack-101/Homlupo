export default {
    translate: (object, lang) => {
        return object.title[lang];
    },
    translateNumber: (object, lang, number) => {
        if (number > 1 && object.hasOwnProperty('plural')) {
            return object.plural[lang];
        }
        return object.singular[lang];
    }
};
