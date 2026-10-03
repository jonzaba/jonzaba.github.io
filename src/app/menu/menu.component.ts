// menu.component.ts
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true, // Esto hace que sea standalone
  templateUrl: './menu.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  personas: any[] = [];

  constructor(
    private http: HttpClient,
    private location: Location,
    private router: Router
  ) {}

  volver(): void {
    if (window.history.state?.navigationId > 1) {
      this.location.back();
      return;
    }

    void this.router.navigateByUrl('/');
  }

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
