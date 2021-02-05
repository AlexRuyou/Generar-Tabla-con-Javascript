var content = document.getElementById('content');

function creartabla(rows, cols){

	var i = 0; //filas
	var j = 0; //columnas
	var tabla = '<table>';

	while(i < rows){
		tabla = tabla + '<tr>';
			while(j < cols){
				tabla = tabla + '<td>';
				if(i==j){
					tabla = tabla + '<b>' + i + '-' + j + '</b>'; //negrita
				}
				else if ((i==j && i/2==j) || (i/2==j && i==j)){
					tabla = tabla + '<b>' + '<i>' + i + '-' + j + '</i>' + '</b>'; //negrita, cursiva || cursiva, negrita
				}
				else if ((i==j && j/2==i) || (j/2==i && i==j)){
					tabla = tabla + '<b>' + '<u>' + i + '-' + j + '</u>' + '</b>'; //negrita, subrayado || subrayado, negrita
				}
				else if(i/2==j){
					tabla = tabla + '<i>' + i + '-' + j + '</i>'; //cursiva
				}
				else if((i/2==j && j/2==i) || (j/2==i && i/2==j)){
					tabla = tabla + '<i>' + '<u>' + i + '-' + j + '</u>' + '</i>'; //cursiva, subrayado || subrayado cursiva
				}
				else if(j/2==i){
					tabla = tabla + '<u>' + i + '-' + j + '</u>'; //subrayado
				}
				else{
					tabla = tabla + i + '-' + j;
				}

				
				tabla = tabla + '</td>';
				j++;
			}
		tabla = tabla + '</tr>';
		i++;
		j = 0;
	}
	tabla = tabla + '</table>';
	return tabla;


}
content.innerHTML = creartabla(30,15); //(rows,cols)