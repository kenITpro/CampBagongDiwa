$(document).ready(function(){

 load_json_data('City');

 function load_json_data(id, parent_id)
 {
  var html_code = '';
  $.getJSON('data/zipcode.json', function(data){

   html_code += '<option value="">Select '+id+'</option>';
   $.each(data, function(key, value){
    if(id == 'City')
    {
     if(value.parent_id == '0')
     {
      html_code += '<option value="'+value.id+'">'+value.name+'</option>';
     }
    }
    else
    {
     if(value.parent_id == parent_id)
     {
      html_code += '<option value="'+value.id+'">'+value.name+'</option>';
     }
    }
   });
   $('#'+id).html(html_code);
  });

 }

 $(document).on('change', '#City', function(){
  var country_id = $(this).val();
  if(country_id != '')
  {
   load_json_data('Municipality', country_id);
  }
  else
  {
   $('#Municipality').html('<option value="">Select Municipality</option>');
   $('#zipcode').html('<option value="">Select zipcode</option>');
  }
 });
 $(document).on('change', '#Municipality', function(){
  var state_id = $(this).val();
  if(state_id != '')
  {
   load_json_data('zipcode', state_id);
  }
  else
  {
   $('#zipcode').html('<option value="">Select zipcode</option>');
  }
 });
});