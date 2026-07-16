import { Component } from '@angular/core';
import { HeaderAlt } from "../../components/header/header-alt/header-alt";
import { Footer } from "../../components/footer/footer/footer";
import { ScrollAnimateDirective } from "../../directives/scroll-animate.directive";

@Component({
  selector: 'app-planos',
  imports: [HeaderAlt, Footer, ScrollAnimateDirective],
  templateUrl: './planos.html',
  styleUrl: './planos.css',
  standalone: true
})
export class Planos {
  private whatsappNumber = '5562984458858';

  // Gerador de links personalizados de WhatsApp
  getWhatsAppLink(planName: string): string {
    const text = encodeURIComponent(`Olá! Gostaria de saber mais e contratar o plano de implantação da Planno Store: Plano ${planName}.`);
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  }

  getHostingBudgetLink(): string {
    const text = encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para desenvolvimento e hospedagem de um site sob medida.`);
    return `https://wa.me/${this.whatsappNumber}?text=${text}`;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}
