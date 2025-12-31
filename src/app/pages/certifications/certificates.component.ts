import { Component } from '@angular/core';
import { Certificados } from '../../shared/interfaces/certficados.interface';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  certificados: Certificados[] = [
    {
      titulo: 'Gestão Financeira para Pizzarias',
      aluno: 'Gabriel Reis',
      cargaHoraria: 20,
      data: '19/12/2025'
    },]
}
