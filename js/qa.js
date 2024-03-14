 $(document).ready(function() {
     var decimal_places = 1;
     var decimal_factor = decimal_places === 0 ? 1 : decimal_places * 10;
     var questionNumber = 0;
     var fades = $('.bxslider').children()
     $.each(fades, function(index, fade) {
         if (index > 0) $(fade).css("display", "none");
     })

     function nextQuestion() {
         if (questionNumber >= 5) return;
         $(fades[questionNumber++]).fadeOut(400, function() {
             $(fades[questionNumber]).fadeIn()
         })
     }

     // next button
     $('.nextBtn').bind("click", nextQuestion)

     // $('.nextBtn').click(function() {

        
     //     $('.qa_2_line').animateNumber({
     //             number: 40 * decimal_factor,
     //             numberStep: function(now, tween) {
     //                 var floored_number = Math.floor(now) / decimal_factor,
     //                     target = $(tween.elem);
     //                 if (decimal_places > 1) {
     //                     floored_number = floored_number.toFixed(decimal_places);
     //                 }
     //                 target.text(floored_number + '%');
     //             }
     //         },
     //         2000
     //     );

     //     $('.qa_3_line').animateNumber({
     //             number: 60 * decimal_factor,
     //             numberStep: function(now, tween) {
     //                 var floored_number = Math.floor(now) / decimal_factor,
     //                     target = $(tween.elem);
     //                 if (decimal_places > 1) {
     //                     floored_number = floored_number.toFixed(decimal_places);
     //                 }
     //                 target.text(floored_number + '%');
     //             }
     //         },
     //         2000
     //     );
     //     $('.qa_4_line').animateNumber({
     //             number: 80 * decimal_factor,
     //             numberStep: function(now, tween) {
     //                 var floored_number = Math.floor(now) / decimal_factor,
     //                     target = $(tween.elem);
     //                 if (decimal_places > 1) {
     //                     floored_number = floored_number.toFixed(decimal_places);
     //                 }
     //                 target.text(floored_number + '%');
     //             }
     //         },
     //         2000
     //     );

     //     $('.qa_5_line').animateNumber({
     //             number: 100 * decimal_factor,
     //             numberStep: function(now, tween) {
     //                 var floored_number = Math.floor(now) / decimal_factor,
     //                     target = $(tween.elem);
     //                 if (decimal_places > 1) {
     //                     floored_number = floored_number.toFixed(decimal_places);
     //                 }
     //                 target.text(floored_number + '%');
     //             }
     //         },
     //         2000
     //     );

     // })


     $('#qa_go').click(function() {
         $('#content').removeClass('off').addClass('on');
         // $('.qa_1_line').animateNumber({
         //         number: 20 * decimal_factor,
         //         numberStep: function(now, tween) {
         //             var floored_number = Math.floor(now) / decimal_factor,
         //                 target = $(tween.elem);
         //             if (decimal_places > 1) {
         //                 floored_number = floored_number.toFixed(decimal_places);
         //             }
         //             target.text(floored_number + '%');
         //         }
         //     },
         //     2000
         // );

     })

     //qa
    for (var i = 1; i < 6; ++i) {
         $('#yes_' + i + ',#no_' + i).click(function() {
             var qid = $(this).attr('id').split('_')[1];
             $('.qa_' + qid).removeClass('off').addClass('on animated zoomIn');
             $('.line_' + qid).removeClass('off').addClass('on animated zoomIn');

         });

     }

     $('.lottery_go').click(function() {
         $('.footer_control').removeClass('off').addClass('on animated fadeIn');

     })


 });
