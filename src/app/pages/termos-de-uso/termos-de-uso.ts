import { Component } from '@angular/core';
import { Footer } from "../../components/footer/footer/footer";
import { HeaderAlt } from "../../components/header/header-alt/header-alt";
import { ScrollAnimateDirective } from "../../directives/scroll-animate.directive";

@Component({
  selector: 'app-termos-de-uso',
  imports: [Footer, HeaderAlt, ScrollAnimateDirective],
  templateUrl: './termos-de-uso.html',
  styleUrl: './termos-de-uso.css',
  standalone: true,
})
export class TermosDeUso {}
