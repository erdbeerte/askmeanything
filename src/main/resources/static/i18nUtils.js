$(document).ready(function () {
    var defaultLang = 'en';
    $('[i18n]').i18n({
        defaultLang: defaultLang,
        filePath: '/i18n/',
        filePrefix: 'i18n_',
        fileSuffix: '',
        forever: true,
        callback: function () {
            console.log('i18n is ready.');
        }
    });
    $('.es').click(function () {
        $('[i18n]').i18n({
            defaultLang: 'es',
            filePath: '/i18n/'
        });
    });
    $('.en').click(function () {
        $('[i18n]').i18n({
            defaultLang: 'en',
            filePath: '/i18n/'
        });
    });
    $('.de').click(function () {
        $('[i18n]').i18n({
            defaultLang: 'de',
            filePath: '/i18n/'
        });
    });
});