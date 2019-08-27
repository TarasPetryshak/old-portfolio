let minimizeWindow = () => {
    $('.resize-wrap').css('display', 'none');
    $('.window-resize').addClass('fixed-bottom');
    $('.window-resize').addClass('bg-dark');
    $('.window-resize').css('width', '60vw');
    $('.cont').css('height', '0vh');
    $('.list').addClass('d-flex justify-content-between');
}
let restoreWindow = () => {
    $('.resize-wrap').css('display', 'unset');
    $('.window-resize').removeClass('fixed-bottom');
    $('.window-resize').removeClass('bg-dark');
    $('.window-resize').css('width', 'unset');
    $('.cont').css('height', 'unset');
    $('.list').removeClass('d-flex justify-content-between');
}
let closeWindow = () => $('.cont').css('display', 'none');
$('.window-resize').click(() => {
    if ($(event.target).hasClass('minimize')) {
        minimizeWindow();
    } else if ($(event.target).hasClass('restore')) {
        restoreWindow();
    } else if ($(event.target).attr('id') === 'close') {
        closeWindow();
    }
})
export default {
    minimizeWindow,
    restoreWindow,
    closeWindow
}