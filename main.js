$(document).ready(() => {

    const displayResults = (res) => {
        const successMessage = $('.alert-success');
        const errorMessage = $('.alert-danger');

        if(res.smtp_check) {
            successMessage.show();
        } else {
            errorMessage.show();
        }
    }

    const checkEmailExist = () => {            
        const email = $('#email').val();

        $.ajax({
            method: "POST",
            url: 'http://apilayer.net/api/check?access_key=ad84164f3b685d849e153c7e0568eff4&email=' + email,
            dataType: "json"
        }).done((res) => {
            $('.loading').hide();
            displayResults(res);
        });
    }

    $('#check-email').on('submit', (e) => {
        e.preventDefault();
        
        $('.alert').hide();
        $('.loading').show();

        checkEmailExist();
    });
    
})