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

function createForm(obj){
	
}