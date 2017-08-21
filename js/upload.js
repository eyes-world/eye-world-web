//select-省份与城市关联
var city = [[ "广州" ,"深圳"],["潍坊" ,"淄博", "威海", "烟台", "菏泽" ,"日照" ,"德州" ],
["无锡" ,"常州", "扬州", "徐州", "苏州" ,"连云港" ]];  
function changeSelect(){  
    var provinceSel = document.getElementById("province");  
    var citySel = document.getElementById("city");  
      
    clearSelect(citySel);   //清空列表框中原有数据  
      
    var index = provinceSel.selectedIndex;  
    for(var i=0;i<city[index].length;i++){  
        citySel.options[i] = new Option(city[index][i]);  
    }     
}  
function clearSelect(select) {//清空列表框中的信息  
    while(select.length > 0){  
        select.options[0] = null;   //将列表框中的第一项删除  
    }  
}  
//更改城市提交地址
function changeAction(){
	var provinceSel = document.getElementById("province");  
    var citySel = document.getElementById("city"); 
    var formAction = document.getElementById('form_city');
    formAction.action = "/upload/uploadPhoto/spots"+"/"+provinceSel.value+"/"+citySel.value;
}

//更改学校提交地址
function changeAction_School(){
	var provinceSel = document.getElementById("province_school");  
	var formAction = document.getElementById('form_school');
    formAction.action = "/upload/uploadPhoto/college"+"/"+provinceSel.value;
}
//照片预览
function previewFile_1() {
 var preview = document.querySelector('#preview_1');
 var file  = document.querySelector('#uploadFile_1').files[0];
 var reader = new FileReader();
 reader.onloadend = function () {
  preview.src = reader.result;
 }
 if (file) {
  reader.readAsDataURL(file);
 } else {
  preview.src="img/preview-picture.png";
 }
}
function previewFile_2() {
 var preview = document.querySelector('#preview_2');
 var file  = document.querySelector('#uploadFile_2').files[0];
 var reader = new FileReader();
 reader.onloadend = function () {
  preview.src = reader.result;
 }
 if (file) {
  reader.readAsDataURL(file);
 } else {
  preview.src="img/preview-picture.png";
 }
}