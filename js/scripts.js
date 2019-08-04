$(".ab").countdown("2019/08/05", function(event) {$(this).text(event.strftime('%D'));});
$(".ac").countdown("2019/08/06", function(event) {$(this).text(event.strftime('%D'));});
$(".bf, .au").countdown("2019/08/17", function(event) {$(this).text(event.strftime('%D'));});
$(".ak").countdown("2019/08/18", function(event) {$(this).text(event.strftime('%D'));});
$(".ar, .ag").countdown("2019/08/22", function(event) {$(this).text(event.strftime('%D'));});
$(".aa, .as").countdown("2019/08/23", function(event) {$(this).text(event.strftime('%D'));});
$(".ai, .aj, .al, .av").countdown("2019/08/25", function(event) {$(this).text(event.strftime('%D'));});
$(".aw, .az, .bb, .bc").countdown("2019/09/02", function(event) {$(this).text(event.strftime('%D'));});
$(".ba").countdown("2019/09/04", function(event) {$(this).text(event.strftime('%D'));});
$(".af").countdown("2019/09/06", function(event) {$(this).text(event.strftime('%D'));});
$(".bh").countdown("2019/09/07", function(event) {$(this).text(event.strftime('%D'));});
$(".bg").countdown("2019/09/08", function(event) {$(this).text(event.strftime('%D'));});
$(".ah").countdown("2019/09/10", function(event) {$(this).text(event.strftime('%D'));});
$(".ax").countdown("2019/09/16", function(event) {$(this).text(event.strftime('%D'));});
$(".ay").countdown("2019/09/20", function(event) {$(this).text(event.strftime('%D'));});
$(".bk").countdown("2019/09/22", function(event) {$(this).text(event.strftime('%D'));});
$(".bi").countdown("2019/09/24", function(event) {$(this).text(event.strftime('%D'));});
$(".bj, .am").countdown("2019/09/27", function(event) {$(this).text(event.strftime('%D'));});
$(".ap").countdown("2019/09/30", function(event) {$(this).text(event.strftime('%D'));});
$(".ad").countdown("2019/10/01", function(event) {$(this).text(event.strftime('%D'));});
$(".bd, .be").countdown("2019/10/09", function(event) {$(this).text(event.strftime('%D'));});
$(".at").countdown("2019/10/19", function(event) {$(this).text(event.strftime('%D'));});
$(".an, .aq").countdown("2019/10/27", function(event) {$(this).text(event.strftime('%D'));});
$(".ao").countdown("2019/10/30", function(event) {$(this).text(event.strftime('%D'));});
$(".ae").countdown("", function(event) {$(this).text(event.strftime('%D'));});
 

function sortTable(table, order) {
    var asc   = order === 'asc',
        tbody = table.find('.tbody');
    tbody.find('.tr').sort(function(a, b) {
        if (asc) {
            return $('.deadline', a).text().localeCompare($('.deadline', b).text());
        } else {
            return $('.deadline', b).text().localeCompare($('.deadline', a).text());
        }
    }).appendTo(tbody);
}
sortTable($('#table'),'asc');

$('.search').keyup(function() {
	var nomeFiltro = $(this).val().toLowerCase();
	console.log(nomeFiltro);
	$('.tbody').find('.tr').each(function() {
		var conteudoCelula = $(this).find('.item-name, .deadline, .login').text();
		console.log(conteudoCelula);
		var corresponde = conteudoCelula.toLowerCase().indexOf(nomeFiltro) >=0;
		$(this).css('display', corresponde ? '' : 'none');
	});
});
$(".close").click(function(){
	$('.tr').show();
	$('.search').val('');
    $('.close').hide();
});
$('input').keyup(function(){
if($(this).val().length)
	$('.close').show();
    else
    $('.close').hide();
});

$(".deadline").each(function() {
     $(this).html() < 0 ? $(this).css('background-color', '#212121') : null;
     ($(this).html() >= 1 && $(this).html() < 10) ? $(this).css('background-color', '#d42650') : null;
     ($(this).html() >= 10 && $(this).html() < 20) ? $(this).css('background-color', '#ec4a4d') : null;
     ($(this).html() >= 20 && $(this).html() < 35) ? $(this).css('background-color', '#ff8246') : null;
     ($(this).html() >= 35 && $(this).html() < 55) ? $(this).css('background-color', '#ffb735') : null;
     $(this).html() >= 55 ? $(this).css('background-color', '#84ba4e') : null;
});

$(".tr").click(function() {
    var selecteder = $(this).hasClass("on");
    $(".tr").removeClass("on");
    if(!selecteder)
            $(this).addClass("on");
});

$(function(){ new Clipboard('.tracking-number');});


function alternaEstado(botao){
	if(botao.hasClass('waiting')){
		botao.text('received');
		botao.addClass('received');
		botao.removeClass('waiting');
	} else {
		botao.text('waiting');
		botao.addClass('waiting');
		botao.removeClass('received');
	}
}

$( document ).ready(function() {
	let classesBotoes = JSON.parse(localStorage.getItem("botoes"));
	if (classesBotoes === null){
		classesBotoes = [];
		$(".status").each(function(posicao){
			classesBotoes[posicao] = $(this).hasClass('waiting') ? 'waiting' : 'received';
		});
	}
	$(".status").each(function(posicao){
		let classe = classesBotoes[posicao];
		$(this).removeClass('received waiting').addClass(classe).text(classe);
	});
	$('.status').click(function(){
		alternaEstado($(this));
		let posicaoClicada = $(".status").index($(this)); 
		classesBotoes[posicaoClicada] = $(this).hasClass('waiting') ? 'waiting' : 'received';     
		localStorage.setItem("botoes", JSON.stringify(classesBotoes));
	});
});
