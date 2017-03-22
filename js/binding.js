function changeVal(element, val){
    $("#"+element).val(val)
}
$('#inv-campo-form').on('change', 'input', function() {
	changeVal('tot-dias-inv-lote', Math.round($('#num-entv-lote').val() / $('#product-lote').val()))
	changeVal('no-inv-lote', Math.round($('#tot-dias-inv-lote').val() / $('#duracion-dias-lote').val()))
	changeVal('tot-dias-cap-lote', Math.round($('#dias-cap-lote').val() * $('#no-inv-lote').val()))
	changeVal('tot-dias-ad-lote', Number($('#no-inv-lote').val()) * Number($('#dias-ad-lote').val()))
	changeVal('tot-dias-inv-es-lote', Number($('#tot-dias-cap-lote').val()) + Number($('#tot-dias-inv-lote').val()) + Number($('#tot-dias-ad-lote').val()))
	changeVal('tot-cost-inv-lote', Number($('#tot-dias-inv-es-lote').val()) * Number($('#tarif-dia-inv-lote').val()) +"$")
})

function createForm(id, obj){
	var container = $('<div>', {id: obj.id, class: 'col-xs-6 col-sm-4 col-md-4 col-lg-4'})

	container.append('<h4>'+obj.name+'</h4>')

	var form = $('div', {id: obj.id+"-form", class: 'form-horizontal'})
	
	$.each(obj.inputs, function(i, input){
		console.log(obj.inputs)
		switch(input.type){
			case "obligatory":
			console.log("XD")
				form.append('<div class="form-group form-group-sm">'+
								'<label for="'+input.id+'" class="col-xs-7 col-sm-8 col-md-8 col-lg-8 control-label obligatory">'+input.name+'</label>'+
								'<div class="col-xs-offset-1 col-xs-4 col-sm-offset-1 col-sm-3 col-md-offset-1 col-md-3 col-lg-offset-1 col-lg-3">'+
									'<input class="form-control obligatory" type="text" id="'+input.id+'">'+
								'</div>'+
							'</div>')
				break;
			case "formula":
				form.append('<div class="form-group form-group-sm">'+
							'<label for="'+input.id+'" class="col-xs-7 col-sm-8 col-md-8 col-lg-8 control-label">'+input.name+'</label>'+
							'<div class="col-xs-offset-1 col-xs-4 col-sm-offset-1 col-sm-3 col-md-offset-1 col-md-3 col-lg-offset-1 col-lg-3">'+
								'<input class="form-control" type="text" id="'+input.id+'" value="0'+input.format+'" data-formula="'+input.formula+'" readonly>'+
							'</div>'+
						'</div>')
				break;
			case "optional":
				form.append('<div class="form-group form-group-sm">'+
								'<label for="'+input.id+'" class="col-xs-7 col-sm-8 col-md-8 col-lg-8 control-label optional">'+input.name+'</label>'+
								'<div class="col-xs-offset-1 col-xs-4 col-sm-offset-1 col-sm-3 col-md-offset-1 col-md-3 col-lg-offset-1 col-lg-3">'+
									'<input class="form-control optional" type="text" id="'+input.id+'" value="'+input.default_val+'">'+
								'</div>'+
							'</div>')
				break;
			default:
				throw "Not defined"
		}
	})
	container.append(form)
	$("#"+id).append(container)
}

var invCamp = {
	name: 'Investigadores/Auditores Campo',
	id: 'inv-camp',
	inputs:[
		{
			name: 'Productividad diaria promedio',
			id: 'prod-inv',
			type: 'obligatory'
		}
	]
}

$(document).ready(function(){
	createForm('mano-obra', invCamp)
})

