$(document).ready(function () {
    window.selectedLan = 'en';
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
        window.selectedLan = 'es';
    });
    $('.en').click(function () {
        $('[i18n]').i18n({
            defaultLang: 'en',
            filePath: '/i18n/'
        });
        window.selectedLan = 'en';
    });
    $('.de').click(function () {
        $('[i18n]').i18n({
            defaultLang: 'de',
            filePath: '/i18n/'
        });
        window.selectedLan = 'de';
    });
});