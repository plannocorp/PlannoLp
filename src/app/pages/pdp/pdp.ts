import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer/footer";
import { HeaderAlt } from "../../components/header/header-alt/header-alt";
import { ScrollAnimateDirective } from "../../directives/scroll-animate.directive";

@Component({
  selector: 'app-pdp',
  imports: [Footer, HeaderAlt, ScrollAnimateDirective],
  templateUrl: './pdp.html',
  styleUrl: './pdp.css',
  standalone: true,
})
export class Pdp {}
