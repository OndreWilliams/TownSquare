tinymce.init({
    selector: 'textarea#tinyEditTextArea',
    height: 300,
    menubar: false,
    skin: "townsquare",
    content_css: "townsquare",
    plugins: [
        'advlist autolink lists link image charmap print preview anchor',
        'searchreplace visualblocks code fullscreen',
        'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
        'bold italic backcolor | alignleft aligncenter ' +
        'alignright alignjustify | bullist numlist outdent indent | ' +
        'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
    forced_root_block : false,
    setup:function(ed) {
        ed.on('change', function(e) {
            // console.log('the event object ', e);
            // console.log('the editor object ', ed);
            // console.log('the content ', ed.getContent());
            // let content = ed.getBody().innerHTML;
            // console.log('the content ', content);
            content = ed.getContent({format : 'text'});
            // console.log('the content ', content);
            if (document.getElementById('submitQuestionForm')){
                document.getElementById('questionContent').value = content;
            }
        });
    }
});

if (document.getElementById('submitQuestionForm')){
    document.getElementById('submitQuestionButton').addEventListener('click', (event)=> {
        document.getElementById('submitQuestionForm').submit();
    })
}
