import { Component } from '@angular/core';
import {TodoService} from '../../services/todo.service';
import { Lista } from '../../models/lista.model';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  listas: Lista[]=[];

  constructor(public _toDo: TodoService,
              private router: Router,
              private alertCtrl: AlertController) {
   this.listas = this._toDo.listas;
  }

  async agregarLista() {
    const alert =  await this.alertCtrl.create({
      header: 'Nueva Lista',
      inputs: [
        {
        name: 'titulo',
        type: 'text',
        placeholder: 'Nombre de la Lista',

      }

      ],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel',
        handler:()=>{
          console.log('cancelar');
        } 
      },
        {
          text: 'Crear',
          handler: (data) => {
            console.log(data);
            if (data.titulo.lenght === 0) {
              return ;
            }
            const listaId = this._toDo.crearLista(data.titulo);
            this.router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
          },
      }]
    });

   alert.present();

  }

}
