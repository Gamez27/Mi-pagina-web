let opc=0;
let prod=0;
let carrito=0;
let ob1=0,ob2=0,ob3=0,ob4=0, ob5=0, ob6=0, ob7=0, ob8=0, ob9=0
opc=parseInt(prompt("Menu \n1)Rebajas  2)Calzado \n3)Accesorios  4)Belleza\n 5)New  6)Niños \n7)Hombres",""));
switch(opc){
	case 1: 
	do{
	prod=parseInt(prompt("Productos:\n1)Vestido azul $182\n2)Saco beige y conjunto $420\n3)Vestido blanco y saco $213\n4)Camisa con estampado $210","0"));
	if(prod==1){
		precio=182;
		carrito=carrito+precio;
		ob1++;
	}else if (prod==2){
		precio=420;
		carrito=carrito+precio;
		ob2++;
	}else if (prod==3){
		precio=213;
		carrito=carrito+precio;
		ob3++;
	}else if (prod==4){
		precio=210;
		carrito=carrito+precio;
		ob4++;
	
	}repet=parseInt(prompt("¿Desea elegir otra rebaja?\n1)Si - 2)No"));
	}while(repet==1);
	document.write("<h3>Kohl`s</h3>Nota No.6158 <br>Descripcion <br><br>Cant./U.M:<br><br>"+ob1+" Vestido azul $182<br>"+ob2+" Saco beige y conjunto----$420<br>"+ob3+"Vestido blanco y saco----$213<br>"+ob4+"Camisa con estampado------$210<br><br><br>"+"Su compra es de: $"+carrito
	+"<br><br>Pago: TA----Importe: $"+carrito);
 break;
		case 2:
			do{
				prod2=parseInt(prompt("Productos:\n1)Skate Shoes Men Shoes $900\n2)Adidas Centennial 85 $795\n3)Botas Negras $300\n4)Zapatos $500\n Mujer\n5)Sandalias de tacon $628"+
				"\n6)Rimocy shoes $450\n7)Chunky sports $561","0"));

				if (prod2==1) {
					precio=900;
					carrito=carrito+precio;
					ob1++;
				}else if (prod2==2){
					precio=745;
					carrito=carrito+precio;
					ob2++;
				}else if (prod2==3){
					precio=300;
					carrito=carrito+precio;
					ob3++;
				}else if (prod2==4){
					precio=500;
					carrito=carrito+precio;
					ob4++;
				
				}
				  else if (prod2==5){
				precio=628;
				carrito=carrito+precio;
				ob5++;
				}
				else if (prod2==6){
				precio=450;
				carrito=carrito+precio;
				ob6++; 
				}
				else if (prod2==7){
				precio=561;
				carrito=carrito+precio;
				ob7++;
				}repet=parseInt(prompt("¿Desea elegir otro calzado?\n1)Si - 2)No"));
			 	}while(repet==1);
				document.write("<h3>Kohl`s</h3>Nota No.6158 <br>Descripcion <br><br>Cant./U.M:<br><br>"+ob1+" Skate Shoes Men Shoes $900<br>"+ob2+" Adidas Centennial 85 $795<br>"+ob3+" Botas Negras $300<br>"+ob4+" Zapatos $500<br>"+ob5+" Sandalias de tacon $628<br>"+
				ob6+" Rimocy shoes $450<br>"+ob7+" Chunky sports $561<br><br>"+"Su compra es de: $"+carrito+"<br><br>Pago: TA----Importe: $"+carrito);
				break;

				case 3: 
				do{
					prod3=parseInt(prompt("Productos:\n1)Collar de planetas $135\n2)Bolsa cuadrada $100\n3)Donas para cabello con estampado $90\n4)Pinzas para cabello $49\n5)Aretes de corazon $35"+
					"\n6)Lentes Basicos $75","0"));
					if (prod3==1) {
						precio=135;
						carrito=carrito+precio;
						ob1++;
					}else if (prod3==2){
						precio=100;
						carrito=carrito+precio;
						ob2++;
					}else if (prod3==3){
						precio=90;
						carrito=carrito+precio;
						ob3++;
					}else if (prod3==4){
						precio=49;
						carrito=carrito+precio;
						ob4++;
					} else if (prod3==5){
					precio=35;
					carrito=carrito+precio;
					ob5++;
					}
					else if (prod3==6){
					precio=75;
					carrito=carrito+precio;
					ob6++; 
					}
					
					repet=parseInt(prompt("¿Desea elegir otro accesorio?\n1)Si - 2)No"));
					}while(repet==1);  
					document.write("<h3>Kohl`s</h3>Nota No.6158 <br>Descripcion <br><br>Cant./U.M:<br><br>"+ob1+" Collar de planetas---------$135<br>"+ob2+" Bolsa cuadrada------------$100<br>"+ob3+" Donas para cabello--------$90<br>"+ob4+" Pinzas para cabello--------$49<br>"+ob5+" Aretes de corazon---------$35<br>"+
					ob6+" Lentes basicos-------------$75<br>"+"Su compra es de: $"+carrito+"<br><br>Pago: TA----Importe: $"+carrito);
				break;
				
				case 4:
					do{
						prod4=parseInt(prompt("Productos:\n1)Contorno de ojos $68\n2)Serum $120\n3)Cepillo Facial $49\n4)Limpiador Facial $200\n5)Masajeador Facial $40"+
						"\n6)Paleta de rubores $130 \n7)Set de brochas $150\n8)Labial Wonka $100\n9)Paleta de sombras $230","0"));
						if (prod4==1) {
							precio=68;
							carrito=carrito+precio;
							ob1++;
						}else if (prod4==2){
							precio=120;
							carrito=carrito+precio;
							ob2++;
						}else if (prod4==3){
							precio=49;
							carrito=carrito+precio;
							ob3++;
						}else if (prod4==4){
							precio=200;
							carrito=carrito+precio;
							ob4++;
						
						}
						  else if (prod4==5){
						precio=40;
						carrito=carrito+precio;
						ob5++;
						}
						else if (prod4==6){
						precio=130;
						carrito=carrito+precio;
						ob6++; 
						}else if (prod4==7){
						precio=150;
						carrito=carrito+precio;
						ob7++; 
						}else if (prod4==8){
						precio=100;
						carrito=carrito+precio;
						ob8++; 
						}else if (prod4==9){
						precio=230;
						carrito=carrito+precio;
						ob9++; 
						}
						
						repet=parseInt(prompt("¿Desea elegir otro articulo?\n1)Si - 2)No"));
						}while(repet==1);
						document.write("<h3>Kohl`s</h3>Nota No.6158 <br>Descripcion <br><br>Cant./U.M:<br><br>"+ob1+" Contorno de ojos $68<br>"+ob2+" Serum $120<br>"+ob3+" Cepillo Facial $49<br>"+ob4+" Limpiador Facial $200<br>"+ob5+" Masajeador Facial $40<br>"+
						ob6+" Paleta de rubores $130<br>"+ob7+" Set de brochas $150<br>"+ob8+" Labial Wonka $100<br>"+ob9+" Paleta de sombras $230<br>"+"Su compra es de: $"+carrito+"<br><br>Pago: TA----Importe: $"+carrito);
						break;

						case 5:
						
							do{
								prod5=parseInt(prompt("Productos:\n1)Abrigo Vintage $300\n2)Zapatillas de tacon $430\n3)Conjunto falda y blusa $210\n4)Collar de perlas $30\n5)Uñas Press On $75"+
								"\n6)Pinzas para cabello $35 \n7)Collar de mariposa $65\n8)Sueter Oversize $245","0"));
								if (prod5==1) {
									precio=300;
									carrito=carrito+precio;
									ob1++;
								}else if (prod5==2){
									precio=430;
									carrito=carrito+precio;
									ob2++;
								}else if (prod5==3){
									precio=210;
									carrito=carrito+precio;
									ob3++;
								}else if (prod5==4){
									precio=30;
									carrito=carrito+precio;
									ob4++;
								
								}
								  else if (prod5==5){
								precio=75;
								carrito=carrito+precio;
								ob5++;
								}
								else if (prod5==6){
								precio=35;
								carrito=carrito+precio;
								ob6++; 
								}else if (prod5==7){
								precio=65;
								carrito=carrito+precio;
								ob7++; 
								}else if (prod5==8){
								precio=245;
								carrito=carrito+precio;
								ob8++; 
								}
								
								repet=parseInt(prompt("¿Desea elegir otro articulo?\n1)Si - 2)No"));
								}while(repet==1);
								document.write("<h3>Kohl`s</h3>Nota No.6158 <br>Descripcion <br><br>Cant./U.M:<br><br>"+ob1+" Abrigo Vintage $300<br>"+ob2+" Zapatillas de tacon $430<br>"+ob3+" Conjunto falda y blusa $210<br>"+ob4+" Collar de perlas $30<br>"+ob5+" Uñas Press On $75<br>"+
								ob6+" Pinzas para cabello $35<br>"+ob7+" Collar de mariposa $65<br>"+ob8+" Sueter Oversize $245<br>"+"<br>Su compra es de: $"+carrito+"<br><br>Pago: TA----Importe: $"+carrito);
								break;

								case 6:
									do{
										prod6=parseInt(prompt("Productos:\nNiñas\n1)500 gomitas $55\n2)Cojin de viaje $450\n3)Bolso de viaje $250\n4)Sandalias $150\nNiños\n5)PlayeraAzul $90"+
										"\n6)Tenis blancos $900 \n7)Mochila de dinosaurio $590\n8)Botas de dinosaurio $190","0"));
										if (prod6==1) {
											precio=55;
											carrito=carrito+precio;
											ob1++;
										}else if (prod6==2){
											precio=450;
											carrito=carrito+precio;
											ob2++;
										}else if (prod6==3){
											precio=250;
											carrito=carrito+precio;
											ob3++;
										}else if (prod6==4){
											precio=150;
											carrito=carrito+precio;
											ob4++;
										
										}
										  else if (prod6==5){
										precio=90;
										carrito=carrito+precio;
										ob5++;
										}
										else if (prod6==6){
										precio=900;
										carrito=carrito+precio;
										ob6++; 
										}else if (prod6==7){
										precio=590;
										carrito=carrito+precio;
										ob7++; 
										}else if (prod6==8){
										precio=190;
										carrito=carrito+precio;
										ob8++; 
										}
										
										repet=parseInt(prompt("¿Desea elegir otro articulo?\n1)Si - 2)No"));
										}while(repet==1);
										document.write("<h3>Kohl`s</h3>Nota No.6158 <br>Descripcion <br><br>Cant./U.M:<br><br>"+ob1+" 500 gomitas $55<br>"+ob2+" Cojin de viaje $450<br>"+ob3+" Bolso de viaje $250<br>"+ob4+" Sandalias $150<br>"+ob5+" PlayeraAzul $90<br>"+
						ob6+" Tenis blancos $900<br>"+ob7+" Mochila de dinosaurio $590<br>"+ob8+" Botas de dinosaurio $190<br>"+"<br>Su compra es de: $"+carrito+"<br><br>Pago: TA----Importe: $"+carrito);
										break;

										default:
											document.write("Es opcion no existe");

                                                                  
}
