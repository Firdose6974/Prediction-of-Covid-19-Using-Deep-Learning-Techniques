function readURL(input) {
    if (input.files && input.files[0]) {
  
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('.image-upload-wrap').hide();
  
        $('.file-upload-image').attr('src', e.target.result);
        $('.file-upload-content').show();
  
        $('.image-title').html(input.files[0].name);
        let dataURL = reader.result;
        base64Image = dataURL.replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
      };
  
      reader.readAsDataURL(input.files[0]);
      $("#result").text("");
      $("#probability").text("");
  
    } else {
      removeUpload();
    }
  }
  
  function removeUpload() {
    $('.error').hide();
    $('.result').hide();
    $('.file-upload-input').replaceWith($('.file-upload-input').clone());
    $('.file-upload-content').hide();
    $('.image-upload-wrap').show();
    $("#result").text("");
    $("#probability").text("");
  }
  $('.image-upload-wrap').bind('dragover', function () {
  $('.image-upload-wrap').addClass('image-dropping');
  });
  $('.image-upload-wrap').bind('dragleave', function () {
  $('.image-upload-wrap').removeClass('image-dropping');
  });

  