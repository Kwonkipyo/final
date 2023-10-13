$(document).ready(function() {
    var likeCount1 = 184;
    var likeCount2 = 257;
    var likeCount3 = 207;
    
    var thumbsUpClicked1 = false;
    var thumbsUpClicked2 = false;
    var thumbsUpClicked3 = false;
    
    $('#thumbs-up-icon1').click(function() {
        if (thumbsUpClicked1) {
            likeCount1--;
            $('#thumbs-up-icon1').removeClass('fa-solid').addClass('fa-regular');
        } else {
            likeCount1++;
            $('#thumbs-up-icon1').removeClass('fa-regular').addClass('fa-solid');
        }
        thumbsUpClicked1 = !thumbsUpClicked1;
        $('#like-count1').text(likeCount1);
    });
    $('#thumbs-up-icon2').click(function() {
        if (thumbsUpClicked2) {
            likeCount2--;
            $('#thumbs-up-icon2').removeClass('fa-solid').addClass('fa-regular');
        } else {
            likeCount2++;
            $('#thumbs-up-icon2').removeClass('fa-regular').addClass('fa-solid');
        }
        thumbsUpClicked2 = !thumbsUpClicked2;
        $('#like-count2').text(likeCount2);
    });
    $('#thumbs-up-icon3').click(function() {
        if (thumbsUpClicked3) {
            likeCount3--;
            $('#thumbs-up-icon3').removeClass('fa-solid').addClass('fa-regular');
        } else {
            likeCount3++;
            $('#thumbs-up-icon3').removeClass('fa-regular').addClass('fa-solid');
        }
        thumbsUpClicked3 = !thumbsUpClicked3;
        $('#like-count3').text(likeCount3);
    });
      });