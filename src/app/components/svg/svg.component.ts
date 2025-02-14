import { Component, Input } from '@angular/core';
import { PlatformService } from '../../services/platform.service';
import { AngularSvgIconModule } from 'angular-svg-icon';

@Component({
  selector: 'app-svg',
  standalone: true,
  imports: [AngularSvgIconModule],
  templateUrl: './svg.component.html',
  styleUrl: './svg.component.scss'
})
export class SvgComponent {
  isClientSide: boolean = this.platformService.isClient();
  @Input() src: string = "";
  @Input() customClass: string = "";
  @Input() label: string = "Woqod";
  @Input() stretch: boolean = false;
  @Input() width: string = "90";
  @Input() height: string = "";  
  @Input() fill: string = "";
  @Input() stroke: string = "";
  @Input() viewBox: string = "";

  constructor(public platformService: PlatformService) { }

  ngOnInit(): void {
  }

}
