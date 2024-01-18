var id_pattern =/^C\d{3}/;
var name_pattern = /^[A-Za-z]+$/;
var address_pattern = /^\d+\s[A-Za-z\s]+$/;
var salary_pattern = /^\d+$/;

$("#customer_add").click(function (event){
    event.preventDefault()

    var cust_id = $("#cust_id").val();
    var cust_name=$("#cust_name").val();
    var cust_address = $("#cust_address").val();
    var cust_salary = $("#cust_salary").val();

    let isValid = true;

    if(isValid){
        let isValid = id_pattern.test(cust_id);
        if (isValid){
            $('#cust_id').removeClass('is-invalid');
           let isValid = name_pattern.test(cust_name);
            if (isValid){
                $('#cust_name').removeClass('is-invalid');
               let isValid = address_pattern.test(cust_address);
                if (isValid){
                    $('#cust_address').removeClass('is-invalid');
                   let isValid = salary_pattern.test(cust_salary);
                    if (isValid){
                        $('#cust_salary').removeClass('is-invalid');
                            const newCust = {
                                cust_id:cust_id,
                                cust_name:cust_name,
                                cust_address:cust_address,
                                cust_salary:cust_salary
                            }

                            let customerJSON = JSON.stringify(newCust);

                            $.ajax({
                                type:"POST",
                                url:"http://localhost:8080/POS-Bootsrap/customerApi",
                                contentType:"application/json",
                                data:customerJSON,

                                success:function (response){
                                    Swal.fire(
                                        'Success!',
                                        'Customer has been saved successfully!',
                                        'success'
                                    );
                                    loadCustomers();
                                    cleanAddForm();
                                },
                                error: function(xhr, status, error){
                                    Swal.fire(
                                        'error',
                                        'Not Saved!',
                                        'Something Happened Try Again Later'
                                    );
                                }
                            })


                    }else{
                        $('#cust_salary').addClass('is-invalid');
                        Swal.fire({
                            icon: 'error',
                            title: 'Invalid Input',
                            text: 'Fill Customer Salary Correctly !'
                        });
                        return;
                    }
                }else{
                    $('#cust_address').addClass('is-invalid');
                    Swal.fire({
                        icon: 'error',
                        title: 'Invalid Input',
                        text: 'Fill Customer Address Correctly !'
                    });
                    return;
                }
            }else{
                $('#cust_name').addClass('is-invalid');
                Swal.fire({
                    icon: 'error',
                    title: 'Invalid Input',
                    text: 'Fill Customer Name Correctly !'
                });
                return;
            }
        }else{
            $('#cust_id').addClass('is-invalid');
            Swal.fire({
                icon: 'error',
                title: 'Invalid Input',
                text: 'Fill Customer ID Correctly !'
            });
            return;
        }
    }
})

$("#customer_update").click()