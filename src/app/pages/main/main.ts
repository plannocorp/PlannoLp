import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Header } from "../../components/header/header/header";
import { Footer } from "../../components/footer/footer/footer";
import { RouterLink } from "@angular/router";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Component({
  selector: 'app-main',
  imports: [FormsModule, Header, Footer, RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.css',
  standalone: true  // ADICIONE ESTA LINHA
})
export class Main implements OnInit {
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

  // EmailJS

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
    this.isSubmitting = true;
    this.buttonText = 'Enviando...';

    if (!this.form.name || !this.form.email || !this.form.subject || !this.form.message) {
      alert("Todos os campos são obrigatórios!");
    }

    else {
      console.log(this.form);

      emailjs.send(this.serviceID, this.templateID, { ...this.form }, {
        publicKey: this.publicKey,
      })
        .then(() => {
          alert('Email enviado com sucesso!');
          console.log('Email enviado com sucesso!');

          this.form = {
            name: '',
            email: '',
            subject: '',
            message: ''
          }; // Limpa o formulário
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
}
