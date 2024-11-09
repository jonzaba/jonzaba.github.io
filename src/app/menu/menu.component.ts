// menu.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  standalone: true, // Esto hace que sea standalone
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  personas: any[] = [];

  constructor(private http: HttpClient) {}

  abrirBaseDatos() {
    // Este código abriría una base de datos SQLite en local usando un servicio.
    console.log("Intentando abrir base de datos en local...");
  }

  obtenerPersonas() {
    this.http.get<any[]>('http://localhost:8080/api/personas').subscribe(
      (data) => (this.personas = data),
      (error) => console.error('Error al obtener personas:', error)
    );
  }
}
