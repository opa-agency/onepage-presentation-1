<template>
  <Layout>
    <Article id="commit-suggestions" date="2023-04-06T00:00Z">
      <img src="/images/commit-suggestions.png" alt="Commit suggestions" class="mb-8 rounded-xl" />
      
      <h2>Commit message suggestions</h2>
      
      <p>
        In the latest release, I've added support for commit message and description suggestions via an integration with OpenAI. Commit looks at all of your changes, and feeds that into the machine with a bit of prompt-tuning to get back a commit message that does a surprisingly good job at describing the intent of your changes.
      </p>
      
      <p>
        It's also been a pretty helpful way to remind myself what the hell I was working on at the end of the day yesterday when I get back to my computer and realize I didn't commit any of my work.
      </p>
      
      <h3><SparkleIcon class="inline-block" /> Improvements</h3>
      
      <ul>
        <li>Added commit message and description suggestions powered by OpenAI</li>
        <li>Fixed race condition that could sometimes leave you in a broken rebase state</li>
        <li>Improved active project detection to try and ignore file changes triggered by the system instead of the user</li>
        <li>Fixed bug that sometimes reported the wrong number of changed files</li>
      </ul>
    </Article>

    <Article id="configuration-files" date="2023-03-17T00:00Z">
      <img src="/images/configuration-files.png" alt="Configuration files" class="mb-8 rounded-xl" />
      
      <h2>Project configuration files</h2>
      
      <p>
        I've added support for creating per-project <code>.commitrc</code> files that override your global settings for that particular project. Went with YAML for these because personally I'm sick of quoting keys in JSON all the time, or accidentally leaving in a trailing comma.
      </p>
      
      <h3><SparkleIcon class="inline-block" /> Improvements</h3>
      
      <ul>
        <li>Added per-project <code>.commitrc</code> configuration files</li>
        <li>Improved performance when working with projects with large binary files</li>
        <li>Fixed a bug that could cause Commit to crash when autocommitting after deleting a recently active branch</li>
      </ul>
    </Article>

    <Article id="dark-mode" date="2023-03-06T00:00Z">
      <img src="/images/dark-mode.png" alt="Dark mode" class="mb-8 rounded-xl" />
      
      <h2>Dark mode support</h2>
      
      <p>
        I released this thing last week hoping a couple of people would say "awesome job" and make me feel good about what I'd built but instead I just got a ton of people shaming me on X for being such a horrible person for only shipping a light UI.
      </p>
      
      <h3><SparkleIcon class="inline-block" /> Improvements</h3>
      
      <ul>
        <li>Added dark mode support</li>
        <li>Improved input field responsiveness when writing a commit message in a project with a large number of changed files</li>
        <li>Made keyboard shortcut for opening the Commit window customizable</li>
        <li>Deleted my X account</li>
      </ul>
    </Article>

    <Article id="first-release" date="2023-03-03T00:00Z">
      <img src="/images/first-release.png" alt="First release" class="mb-8 rounded-xl" />
      
      <h2>Commit v0.1.0</h2>
      
      <p>
        Commit is a command palette-style Git client you can pull up from anywhere with a keyboard shortcut that makes it really easy to commit your work. It uses the "last modified" timestamp of the files in all of your projects to automatically know which project you're in the middle of working on, so any time you pull up the UI it's already got the right project selected — you just have to type your commit message, hit <kbd>Cmd</kbd> + <kbd>Enter</kbd> and your changes are captured.
      </p>
      
      <p>
        I'd be lying if I really thought this was that useful but I was looking for an excuse to learn macOS development and here we are. It's open source at least so maybe you can find something interesting in the code even if the app itself is a total waste of hard drive space.
      </p>
    </Article>
  </Layout>
</template>

<script setup>
import Layout from './Layout.vue'
import Article from './Article.vue'
import SparkleIcon from './SparkleIcon.vue'
</script>
