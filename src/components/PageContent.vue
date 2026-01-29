<template>
  <Layout>
    <Article id="commit-suggestions" date="2023-04-06T00:00Z">
      <img src="/images/commit-suggestions.png" alt="Commit suggestions" class="mb-8 rounded-xl" />
      
      <h2>Sugestii de mesaje commit</h2>
      
      <p>
        În ultima versiune, am adăugat suport pentru sugestii de mesaje și descrieri commit printr-o integrare cu OpenAI. Commit analizează toate modificările tale și le trimite către mașină cu puțină ajustare a promptului pentru a obține înapoi un mesaj commit care face o treabă surprinzător de bună în descrierea intenției modificărilor tale.
      </p>
      
      <p>
        A fost, de asemenea, o modalitate destul de utilă de a-mi aminti la ce naiba lucram la sfârșitul zilei de ieri când mă întorc la computer și îmi dau seama că nu am salvat nimic din munca mea.
      </p>
      
      <h3><SparkleIcon class="inline-block" /> Îmbunătățiri</h3>
      
      <ul>
        <li>Adăugate sugestii de mesaje și descrieri commit alimentate de OpenAI</li>
        <li>Corectată condiția de cursă care ar putea uneori să te lase într-o stare de rebase ruptă</li>
        <li>Îmbunătățită detectarea proiectului activ pentru a încerca să ignore modificările de fișiere declanșate de sistem în loc de utilizator</li>
        <li>Corectat bug care uneori raporta numărul greșit de fișiere modificate</li>
      </ul>
    </Article>

    <Article id="configuration-files" date="2023-03-17T00:00Z">
      <img src="/images/configuration-files.png" alt="Configuration files" class="mb-8 rounded-xl" />
      
      <h2>Fișiere de configurare proiect</h2>
      
      <p>
        Am adăugat suport pentru crearea de fișiere <code>.commitrc</code> per proiect care suprascriu setările tale globale pentru acel proiect particular. Am mers cu YAML pentru acestea pentru că personal sunt sătul să pun ghilimele la chei în JSON tot timpul sau să las accidental o virgulă la sfârșit.
      </p>
      
      <h3><SparkleIcon class="inline-block" /> Îmbunătățiri</h3>
      
      <ul>
        <li>Adăugate fișiere de configurare <code>.commitrc</code> per proiect</li>
        <li>Îmbunătățită performanța când lucrezi cu proiecte cu fișiere binare mari</li>
        <li>Corectat un bug care putea cauza blocarea Commit la auto-commit după ștergerea unei ramuri recent active</li>
      </ul>
    </Article>

    <Article id="dark-mode" date="2023-03-06T00:00Z">
      <img src="/images/dark-mode.png" alt="Dark mode" class="mb-8 rounded-xl" />
      
      <h2>Suport mod întunecat</h2>
      
      <p>
        Am lansat chestia asta săptămâna trecută sperând că câțiva oameni vor spune "treabă grozavă" și mă vor face să mă simt bine cu ceea ce am construit, dar în schimb am primit o grămadă de oameni care mă rușinau pe X pentru că sunt o persoană oribilă pentru că am lansat doar un UI luminos.
      </p>
      
      <h3><SparkleIcon class="inline-block" /> Îmbunătățiri</h3>
      
      <ul>
        <li>Adăugat suport mod întunecat</li>
        <li>Îmbunătățită reactivitatea câmpului de input când scrii un mesaj commit într-un proiect cu un număr mare de fișiere modificate</li>
        <li>Făcută personalizabilă comanda rapidă de la tastatură pentru deschiderea ferestrei Commit</li>
        <li>Șters contul meu de X</li>
      </ul>
    </Article>

    <Article id="first-release" date="2023-03-03T00:00Z">
      <img src="/images/first-release.png" alt="First release" class="mb-8 rounded-xl" />
      
      <h2>Commit v0.1.0</h2>
      
      <p>
        Commit este un client Git în stil paletă de comenzi pe care îl poți deschide de oriunde cu o comandă rapidă de la tastatură care face foarte ușor să-ți salvezi munca. Folosește marca de timp "ultima modificare" a fișierelor din toate proiectele tale pentru a ști automat la ce proiect lucrezi în momentul respectiv, astfel încât oricând deschizi UI-ul, are deja proiectul corect selectat — trebuie doar să scrii mesajul de commit, să apeși <kbd>Cmd</kbd> + <kbd>Enter</kbd> și modificările tale sunt capturate.
      </p>
      
      <p>
        Aș minți dacă aș crede cu adevărat că acest lucru este atât de util, dar căutam o scuză să învăț dezvoltare macOS și iată-ne aici. Este open source cel puțin, așa că poate găsești ceva interesant în cod chiar dacă aplicația în sine este o pierdere totală de spațiu pe hard disk.
      </p>
    </Article>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue'
import Article from './Article.vue'
import SparkleIcon from './SparkleIcon.vue'
</script>
