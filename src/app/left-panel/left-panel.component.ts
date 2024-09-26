import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add CommonModule for *ngFor and *ngIf directives

@Component({
  selector: 'app-left-panel',
  standalone: true, // This allows the component to be a standalone component
  imports: [CommonModule], // Import CommonModule to use directives like *ngFor, *ngIf
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.scss'] // Correct 'styleUrl' to 'styleUrls' as it accepts an array
})
export class LeftPanelComponent {

  accordionItems = [
    {
      id: 'One',
      name: 'Citrix',
      description: `
      <ul class="custom-ul">
       <li>Corporate</li>
       <li>REG</li>
      </ul>
      `,
      color:`#E9E1FE`,
      image: '../../assets/icons/database.svg'
    },
    {
      id: 'Two',
      name: 'Control System',
      color:`#FEE0ED`,
      description: `
     <ul class="custom-ul">
       <li>Hook-Up & MTO</li>
       <li>Decal Report</li>
      </ul>
      `,
      image: '../../assets/icons/settings.svg'
    },
    {
      id: 'Three',
      name: 'Document Control Centre (DDC)',
      color:`#FFECD5`,
      description: `
      <ul class="custom-ul">
       <li>Hook-Up & MTO</li>
       <li>Decal Report</li>
      </ul>
      `,
            image: '../../assets/icons/file-text.svg'
    },
    {
      id: 'Four',
      name: 'Electrical',
      color:`#D5EDFF`,
      description: `
      <ul class="custom-ul">
       <li>Hook-Up & MTO</li>
       <li>Decal Report</li>
      </ul>
      `,
            image: '../../assets/icons/zap.svg'
    },
    {
      id: 'Five',
      name: 'ESA',
      color:`#DFF6EC`,
      description: `
      <ul class="custom-ul">
       <li>Hook-Up & MTO</li>
       <li>Decal Report</li>
      </ul>
      `,
            image: '../../assets/icons/gitlab.svg'
    },
    {
      id: 'Six',
      name: 'Expediting',
      color:'#ECEDFF',
      description: `
      <ul class="custom-ul">
       <li>Hook-Up & MTO</li>
       <li>Decal Report</li>
      </ul>
      `,
            image: '../../assets/icons/compass.svg'
    },
    {
      id: 'Seven',
      name: 'IT',
      color: '#FFF5D4',
      description: `
      <ul class="custom-ul">
       <li>Hook-Up & MTO</li>
       <li>Decal Report</li>
      </ul>
      `,
            image: '../../assets/icons/globe.svg'
    },
    {
      id: 'Eight',
      color:'#FFEEFB',
      name: 'Library',
      description: `
      <ul class="custom-ul">
       <li>Hook-Up & MTO</li>
       <li>Decal Report</li>
      </ul>
      `,
            image: '../../assets/icons/book.svg'
    },
    {
      id: 'Nine',
      color:'#E9E1FE',
      name: 'Piping',
      description: `
      <ul class="custom-ul">
       <li>Hook-Up & MTO</li>
       <li>Decal Report</li>
      </ul>
      `,
            image: '../../assets/icons/git-pull-request.svg'
    },
    {
      id: 'Ten',
      color:'#FEE0ED',
      name: 'Process',
      description: `
      <ul class="custom-ul">
       <li>Hook-Up & MTO</li>
       <li>Decal Report</li>
      </ul>
      `,
            image: '../../assets/icons/refresh-ccw.svg'
    },
    {
      id: 'Eleven',
      color:'#FFECD5',
      name: 'Project Controls',
      description: `
      <ul class="custom-ul">
       <li>Hook-Up & MTO</li>
       <li>Decal Report</li>
      </ul>
      `,
            image: '../../assets/icons/settings.svg'
    },
    {
      id: 'Twelve',
      name: 'Quality Management System',
      color:'#D5EDFF',
      description: `
      <ul class="custom-ul">
       <li>Hook-Up & MTO</li>
       <li>Decal Report</li>
      </ul>
      `,
            image: '../../assets/icons/crosshair.svg'
    },
    {
      id: 'Thirteen',
      color:'#DFF6EC',
      name: 'Training',
      description: `
      <ul class="custom-ul">
       <li>Hook-Up & MTO</li>
       <li>Decal Report</li>
      </ul>
      `,
            image: '../../assets/icons/target.svg'
    },
  ]}
