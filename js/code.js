$(document).ready(function(){

    var about = $('#about');
    var knowledge = $('#knowledge');
    var projects = $('#projects');
    var contact = $('#contact');
    var sections = [about, knowledge, projects, contact];
    var body = $('body');

    $('nav').on('click','div.col',function(){
        let idx = $(this).index('div.col');
        var section_clicked =  sections[idx-1];
        console.log(sections[idx-1]);

        body.scrollTop(
            section_clicked.offset().top - body.offset().top + body.scrollTop()
        );
    });
});