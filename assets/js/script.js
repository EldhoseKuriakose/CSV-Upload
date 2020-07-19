//Search
function search(e){
    //Get search text
    let value = e.target.value.toLowerCase();

    //If search text is there then show filter info message, else remove the message
    if(value){
        $('.filterInfo').css('display', 'block')
    }else{
        $('.filterInfo').css('display', 'none')
    }

    $(".fileDetails table tbody tr").each(function() {
        let toggleValue = $(this).text().toLowerCase().indexOf(value) > -1;
        $(this).toggle(toggleValue);
    });
}

//Sorting each column
function sort(e, index){
    //Make cursor wait
    $('.mainDiv').css('cursor', 'wait');
    setTimeout(() => {
        let ascOrder = true;

        //Iterate through table headers
        $(".fileDetails table thead th").each(function(i) {
            if(i == index){
                //If sorting is not applied then start with ascending sort
                if($(e.target).hasClass('sorted')){

                    //If sorting is ascending apply descending else apply ascending 
                    if($(e.target).hasClass('asc')){
                        $(e.target).removeClass('asc')
                        $(e.target).addClass('desc')
                        ascOrder = false;
                    }else{
                        $(e.target).removeClass('desc')
                        $(e.target).addClass('asc')
                        ascOrder = true;
                    }
                }else{
                    $(e.target).addClass('sorted asc');
                    ascOrder = true;
                }
            }else{
                $(this).removeClass('sorted asc desc');
            }
        });

        let rows = $('.fileDetails tbody tr');
        let value = $($('.fileDetails tbody tr')[0]).find('td')[index].innerHTML;
        let isNumber = !isNaN(parseFloat(value));
        rows.sort(function(a, b){
            var x = $(a).find('td')[index].innerHTML;
            var y = $(b).find('td')[index].innerHTML;
            
            //Sorting
            if(isNumber) {	
                if(ascOrder) {
                    return x - y;
                } else {
                    return y - x;
                }
            } else {
                if(ascOrder) {
                    if(x < y) return -1;
                    if(x > y) return 1;
                    return 0;
                } else {		
                    if(x > y) return -1;
                    if(x < y) return 1;
                    return 0;
                }
            }
        })
        
        //Append sorted rows to table body
        $.each(rows, function(index, row) {
            $('.fileDetails tbody').append(row);
        });

        //Make cursor to default
        $('.mainDiv').css('cursor', 'unset');
    }, 1000);
}