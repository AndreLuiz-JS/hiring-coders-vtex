const newsletterForm = document.querySelector("form#newsletterForm");
const storageEmails = JSON.parse(localStorage.getItem("newsletter") || "{}");

if (newsletterForm)
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const { target } = event;
    const name = target.querySelector("#name");
    const email = target.querySelector("#email");
    if (name && email) {
      const alreadyRegistered = !!storageEmails[email.value];
      storageEmails[email.value] = name.value;
      localStorage.setItem("newsletter", JSON.stringify(storageEmails));
      if (alreadyRegistered) alert(`Olá ${name.value}, seu email já estava cadastrado aqui conosco. Atualizamos a forma como gostaria de ser chamado. Obrigado por se cadastrar em nossa newsletter!`);
      else alert(`Olá ${name.value}, obrigado por se cadastrar em nossa newsletter! Em breve você ficará por dentro de todas as novidades em nosssa loja!`);
    }
  });
