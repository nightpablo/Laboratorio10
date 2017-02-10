/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
		document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
		
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
		
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
	
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
		
		this.funcionLaboratorio10();
		console.log(navigator.notification);	
	},
	funcionLaboratorio10: function(){
		var contadorTareas=0;
		$("#btnAddTarea").click(
			function(){
								/*----------------------------------------Variable str---------------------------------------------
								*		<a href="#" class="list-group-item" data-id-tarea="contadorTareas">
								*			<h4 class="list-group-item-heading"> tareaNombre.val()
								*			</h4>
								*			<p class="list-group-item-text">
								*				<div class="checkbox">
								*					<label>
								*						<input type="checkbox">Finalizar
								*					</label>
								*				</div>
								*			</p>
								*		</a>			
								*----------------------------------------------------------------------------------------------------*/
				
				var str = "<a href=\"#\" class=\list-group-item\" data-id-tarea=\""+contadorTareas+"\">"+
								"<h4 class=\"list-group-item-heading\">"+$("#tareaNombre").val()+"</h4>"
								"<p class=\"list-group-item-text\"><div class=\"checkbox\"><label><input type=\"checkbox\">Finalizar</label></div></p></a>"
				
				
				$("#listaTarea").append(str);
				$("#tareaNombre").val('');
				contadorTareas++;
			}
		);
		
		$("#btnVaciar").click(
			 function(){
				 $("#listaTarea").empty();
			 }
		 );
		 
		 $('#listaTarea').on("click","a",
			function a() {
			
				

				navigator.notification.confirm(
					'¿Estás seguro que desea eliminar la tarea?',
					onConfirm,
					'Eliminar Tarea',
					'Aceptar,Cancelar'
				);
				
				function onConfirm(buttonIndex) {
					if(buttonIndex == 1 ){
						console.log($(listaTarea).attr('data-id-tarea'));
						var i = 1+$(listaTarea).index();
						console.log(i);
						$( "#listaTarea a:nth-child("+i+")" ).remove();
						contadorTareas--;
					}
				}
				
				
			}
		);
	}
};

app.initialize();