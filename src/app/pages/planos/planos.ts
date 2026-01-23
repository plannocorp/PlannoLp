import { Component } from '@angular/core';
import { HeaderAlt } from "../../components/header/header-alt/header-alt";
import { Footer } from "../../components/footer/footer/footer";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-planos',
  imports: [HeaderAlt, Footer],
  templateUrl: './planos.html',
  styleUrl: './planos.css',
})
export class Planos {
  //Animações
  public upObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-up');
        entry.target.classList.remove('hidden-up');
      } else {
        entry.target.classList.add('hidden-up');
        entry.target.classList.remove('show-up');
      }
    });
  });

  public leftToRightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-ltr');
        entry.target.classList.remove('hidden-ltr');
      } else {
        entry.target.classList.add('hidden-ltr');
        entry.target.classList.remove('show-ltr');
      }
    });
  });

  public rightToLeftObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show-rtl');
        entry.target.classList.remove('hidden-rtl');
      } else {
        entry.target.classList.add('hidden-rtl');
        entry.target.classList.remove('show-rtl');
      }
    });
  });

  public upElements!: NodeListOf<Element>;
  public leftToRightElements!: NodeListOf<Element>;
  public rightToLeftElements!: NodeListOf<Element>;

  ngOnInit() {
    this.upElements = document.querySelectorAll('.hidden-up');
    this.upElements.forEach((el) => {
      this.upObserver.observe(el);
    });

    this.leftToRightElements = document.querySelectorAll('.hidden-ltr');
    this.leftToRightElements.forEach((el) => {
      this.leftToRightObserver.observe(el);
    });

    this.rightToLeftElements = document.querySelectorAll('.hidden-rtl');
    this.rightToLeftElements.forEach((el) => {
      this.rightToLeftObserver.observe(el);
    });
  }

  // Estados para controlar qual plano está selecionado (mensal ou anual)
  isAnualBasico: boolean = false;
  isAnualIntermediario: boolean = false;
  isAnualEnterprise: boolean = false;

  // Links para os planos
  public planos = [{
    basico_mensal: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=3c483f05acd548f3b5defac5d61a7196',
    basico_anual: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=528eb00bec23483a87b86f68752ed999',
    intermediario_mensal: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=1f7472e62cf04a86bf1b79caa0274936',
    intermediario_anual: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=6efdc9eaab364c39a229be39fdca1679',
    enterprise_mensal: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=421b461f7f7b49a8ae008e5138efaae2',
    enterprise_anual: 'https://www.mercadopago.com.br/subscriptions/checkout?preapproval_plan_id=72a89ef814e4427aa5d5969b1e6046a3'
  }]

  // Métodos para alternar entre planos mensais e anuais
  togglePlanoBasico(): void {
    this.isAnualBasico = !this.isAnualBasico;
  }

  togglePlanoIntermediario(): void {
    this.isAnualIntermediario = !this.isAnualIntermediario;
  }

  togglePlanoEnterprise(): void {
    this.isAnualEnterprise = !this.isAnualEnterprise;
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