var user= "admin";
var pass= "admin";
			
		function validar(){
			
						
			var usuario= document.getElementById('usuario').value;
			var contra= document.getElementById('contrasena').value;
			
			if(usuario=="" || contra==""){
			
			if(usuario=="" && contra==""){
				alert("Ingresar datos de usuario y contraseña");
				login.usuario.focus();
			} else{
				if(usuario==""){
					alert("Ingresa Usuario");
					login.usuario.focus();
					
				}
				if(contra==""){
					alert("Ingresa contraseña");
					login.contrasena.focus();
					
				}
				
			}
			}
						
			entrar(usuario, contra);
			
			
		}
		
		function entrar(usuario, contra){
			
			if(usuario==user && contra==pass){
				alert("Bienvenido " + usuario);
				document.getElementById('login').innerHTML = "<br><br>Bienvenido " + usuario;
				//window.location = 'comentarios.html';
			} else{
				alert("Datos incorrectos");
			}
			
			
			
			
			
		}