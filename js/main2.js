var content = document.getElementById('content');

function creartabla(rows, cols){

	var i = 0; //filas
	var j = 0; //columnas
	var tabla = '<table>';

	while(i < rows){
		tabla = tabla + '<tr>';
			while(j < cols){
				tabla = tabla + '<td>';
				if(j/2==i && i/2==j && i==j) { //111
					tabla = tabla + '<b> <i> <u>' + i + '-' + j + '</b> </i> </u>';//negrita,cursiva,subrayado
				}
				else if (j/2==i && i/2==j){ //110
					tabla = tabla + '<b> <i>' + i + '-' + j + '</b> </i>';//negrita,cursiva
				}
				else if (j/2==i && i==j) { //101
					tabla = tabla + '<b> <u>' + i + '-' + j + '</b> </u>';//negrita,subrayado
				}
				else if(j/2==i){ //100
					tabla = tabla + '<b>' + i + '-' + j + '</b>';//negrita
				}
				else if(i/2==j && i==j){ //011
					tabla = tabla + '<i> <u>' + i + '-' + j + '</i> </u>';//cursiva,subrayado
				}
				else if(i/2==j){ //010
					tabla = tabla + '<i>' + i + '-' + j + '</i>';//cursiva
				}
				else if(i==j){ //001
					tabla = tabla + '<u>' + i + '-' + j + '<u/>';//subrayado
				}
				else{ //000
					tabla = tabla + i + '-' + j; //nada
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