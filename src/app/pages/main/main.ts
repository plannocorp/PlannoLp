import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { Header } from "../../components/header/header/header";
import { Footer } from "../../components/footer/footer/footer";
import { RouterLink } from "@angular/router";
import { ScrollAnimateDirective } from "../../directives/scroll-animate.directive";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-main',
  imports: [FormsModule, Header, Footer, RouterLink, ScrollAnimateDirective],
  templateUrl: './main.html',
  styleUrl: './main.css',
  standalone: true
})
export class Main {
  form: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  private serviceID = 'service_nm4rw1d';
  private templateID = 'template_5p05re2';
  private publicKey = 'eZhAY_jiXKNHmifeS';

  public isSubmitting = false;
  public buttonText = 'Enviar';

  send(): void {
    if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
      alert("Todos os campos são obrigatórios!");
      return;
    }

    this.isSubmitting = true;
    this.buttonText = 'Enviando...';

    emailjs.send(this.serviceID, this.templateID, { ...this.form }, {
      publicKey: this.publicKey,
    })
      .then(() => {
        alert('Email enviado com sucesso!');
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      })
      .catch((error) => {
        alert('Erro ao enviar email. Tente novamente.');
        console.error("Erro no envio", error);
      })
      .finally(() => {
        this.isSubmitting = false;
        this.buttonText = 'Enviar';
      });
  }
}
