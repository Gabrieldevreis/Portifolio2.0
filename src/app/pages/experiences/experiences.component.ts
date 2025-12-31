import { Component } from '@angular/core';
import { Experiencia } from '../../shared/interfaces/experiences.interface';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.css',
})
export class ExperiencesComponent {
  experiencias: Experiencia[] = [
    {
      cargo: 'Desenvolvedor Front-end',
      empresa: 'Empresa X',
      periodo: '2023 - Atual',
      descricao:
        'Desenvolvimento de interfaces modernas e responsivas utilizando HTML, CSS, TypeScript e Angular, com foco em usabilidade e performance.',
      atividades: [
        'Criação de componentes reutilizáveis',
        'Integração com APIs REST',
        'Versionamento com Git',
      ],
    },
  ];
}
