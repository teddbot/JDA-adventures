 $(function() {
     setTimeout(function() {
         $.notify({
             // options
             icon: '',
             title: "<a href=\"https://wa.me/971507257630\" target=\"_blank\"><h4>Whatsapp Me!</h4>",
             message: "<figure><img src=\"img/whatsapp.gif\"></figure><p>New Safaris Available.</a> "
         }, {
             // settings
             icon_type: 'image',
             type: 'info',
             delay: 300000,
             timer: 3000,
             z_index: 9999,
             showProgressbar: false,
             placement: {
                 from: "bottom",
                 align: "right"
             },
             animate: {
                 enter: 'animated bounceInUp',
                 exit: 'animated bounceOutDown'
             },
         });
     }, 5000); // change the start delay
 });