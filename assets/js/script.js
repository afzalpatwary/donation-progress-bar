/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - Afzal Patwary
 * @created_by  - Afzal Patwary
 * @created_at  - 2021
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

// $(window).on('load', function () {

//     // code should be execute here

// });



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {

    // testimonial-active
    $(function () {
        if ($('.testimonials-active').length) {
            $(".testimonials-active").owlCarousel({
                items: 3,
                margin: 30,
                nav: true,
                loop: true,
                autoplay: true,
                autoplayTimeout: 2500,
                animateOut: 'fadeOut',
                smartSpeed: 2500,
                navText: ["<img src='assets/img/arrow-left.svg' class='img-fluid' />", "<img src='assets/img/arrow-right-s.svg' class='img-fluid' />"],
                dots: false,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    767: {
                        items: 2
                    },
                    1200: {
                        items: 3
                    }
                }
            });
        }
    });

    // datepicker init
    $(function () {
        if ($('.datepicker').length) {
            $('.datepicker').datepicker({
                numberOfMonths: 1,
                changeYear: true,
                changeMonth: true,
                dateFormat: 'dd MM',
                monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            });
        }
    });




    // pass show hide
    $(function () {
        $("#show_hide_password a").on('click', function (event) {
            event.preventDefault();
            if ($('#show_hide_password input').attr("type") == "text") {
                $('#show_hide_password input').attr('type', 'password');
                $('#show_hide_password i').addClass("fa-eye-slash");
                $('#show_hide_password i').removeClass("fa-eye");
            } else if ($('#show_hide_password input').attr("type") == "password") {
                $('#show_hide_password input').attr('type', 'text');
                $('#show_hide_password i').removeClass("fa-eye-slash");
                $('#show_hide_password i').addClass("fa-eye");
            }
        });

    })




    // Select2
    $(function () {
        if ($(".select-2-init").length) {
            $(".select-2-init").select2({
                width: 'resolve' // need to override the changed default
            });
        }
    });




    // wow js init
    $(function () {
        var wow = new WOW({
            animateClass: 'animated',
            mobile: true
        });
        wow.init();
    });



    // donation progress bar
    const num = document.querySelector('#number')
    const bar = document.querySelector('.current')
    const goalInput = document.querySelector('#goal')
    const goalText = document.querySelector('#goal-text')

    let goal = 1000
    let val = 500

    num.value = val
    goalInput.value = goal

    const updateView = (percentage) => {
        bar.style.width = `${Math.floor(percentage * 100)}%`
        goalText.innerHTML = `$${goal}`
    }

    num.addEventListener('keyup', e => {
        const val = parseInt(e.target.value)
        updateView(val / goal)
    })

    goalInput.addEventListener('keyup', e => {
        goal = parseInt(e.target.value)
        updateView(val / goal)
    })

    updateView(val / goal)




});

