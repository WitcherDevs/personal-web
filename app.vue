<template>
  <div
    class="min-h-screen transition-colors duration-300"
    :class="isDark ? 'bg-neutral-900' : 'bg-purple-50'"
  >
    <!-- Modern Navbar -->
    <nav
      class="fixed top-0 w-full z-50 backdrop-blur-md border-b transition-colors duration-300"
      :class="isDark ? 'bg-neutral-900/80 border-neutral-800' : 'bg-purple-100/80 border-purple-200'"
    >
      <div class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <NuxtLink to="#home" class="flex items-center space-x-3 group">
            <img
              src="~/assets/icon.png"
              alt="icon"
              class="w-12 h-12 transition-transform duration-300 group-hover:rotate-12"
            />
          </NuxtLink>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              :class="[
                'nav-link transition-all duration-300 hover:scale-110',
                isDark ? 'text-gray-100 hover:text-white' : 'text-gray-900 hover:text-black',
              ]"
              >Home</a
            >
            <a
              href="#about"
              :class="[
                'nav-link transition-all duration-300 hover:scale-110',
                isDark ? 'text-gray-100 hover:text-white' : 'text-gray-900 hover:text-black',
              ]"
              >About</a
            >
            <a
              href="#projects"
              :class="[
                'nav-link transition-all duration-300 hover:scale-110',
                isDark ? 'text-gray-100 hover:text-white' : 'text-gray-900 hover:text-black',
              ]"
              >Projects</a
            >
            <a
              href="#technologies"
              :class="[
                'nav-link transition-all duration-300 hover:scale-110',
                isDark ? 'text-gray-100 hover:text-white' : 'text-gray-900 hover:text-black',
              ]"
              >Technologies</a
            >
            <a
              href="#contact"
              :class="[
                'nav-link transition-all duration-300 hover:scale-110',
                isDark ? 'text-gray-100 hover:text-white' : 'text-gray-900 hover:text-black',
              ]"
              >Contact</a
            >

            <!-- Theme Toggle -->
            <button
              @click="toggleTheme"
              class="p-2 rounded-lg transition-colors duration-300"
              :class="
                isDark
                  ? 'bg-neutral-800 hover:bg-neutral-700 text-gray-100'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              "
            >
              <Icon v-if="isDark" name="mdi:weather-sunny" size="20" />
              <Icon v-else name="mdi:weather-night" size="20" />
            </button>
          </div>

          <!-- Mobile Menu Button -->
          <div class="flex items-center space-x-4 md:hidden">
            <button
              @click="toggleTheme"
              class="p-2 rounded-lg transition-colors duration-300"
              :class="
                isDark
                  ? 'bg-neutral-800 hover:bg-neutral-700 text-gray-100'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
              "
            >
              <Icon v-if="isDark" name="mdi:weather-sunny" size="20" />
              <Icon v-else name="mdi:weather-night" size="20" />
            </button>
            <button
              @click="mobileMenuOpen = !mobileMenuOpen"
              class="transition-colors duration-300"
              :class="isDark ? 'text-gray-100' : 'text-gray-900'"
            >
              <Icon name="mdi:menu" size="24" />
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        v-show="mobileMenuOpen"
        class="md:hidden border-t transition-colors duration-300"
        :class="isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-purple-100 border-purple-200'"
      >
        <div class="px-6 py-4 space-y-4">
          <a
            href="#home"
            @click="mobileMenuOpen = false"
            :class="['block nav-link', isDark ? 'text-gray-100' : 'text-gray-900']"
            >Home</a
          >
          <a
            href="#about"
            @click="mobileMenuOpen = false"
            :class="['block nav-link', isDark ? 'text-gray-100' : 'text-gray-900']"
            >About</a
          >
          <a
            href="#projects"
            @click="mobileMenuOpen = false"
            :class="['block nav-link', isDark ? 'text-gray-100' : 'text-gray-900']"
            >Projects</a
          >
          <a
            href="#technologies"
            @click="mobileMenuOpen = false"
            :class="['block nav-link', isDark ? 'text-gray-100' : 'text-gray-900']"
            >Technologies</a
          >
          <a
            href="#contact"
            @click="mobileMenuOpen = false"
            :class="['block nav-link', isDark ? 'text-gray-100' : 'text-gray-900']"
            >Contact</a
          >
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section
      id="home"
      class="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6"
    >
      <div
        class="absolute inset-0 transition-colors duration-300"
        :class="
          isDark
            ? 'bg-gradient-to-br from-purple-900/20 to-neutral-900'
            : 'bg-gradient-to-br from-purple-200/50 to-purple-50'
        "
      ></div>
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <div class="mb-8">
          <div class="relative inline-block">
            <div
              class="absolute inset-0 bg-purple-400 rounded-2xl transform rotate-6 animate-pulse"
            ></div>
            <div
              class="relative bg-gray-200 w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-2xl flex items-center justify-center transform -rotate-3"
            >
              <div
                class="bg-purple-300 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-xl flex items-center justify-center transform rotate-3"
              >
                <img
                  src="/photo.png"
                  alt="Çağrı"
                  class="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-full object-cover animate-profile-bounce"
                />
              </div>
            </div>
          </div>
        </div>

        <h1
          class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r transition-colors duration-300"
          :class="
            isDark
              ? 'from-gray-100 to-purple-400 bg-clip-text text-transparent'
              : 'from-purple-900 to-purple-600 bg-clip-text text-transparent'
          "
        >
          Hello, I'm Çağrı
        </h1>
        <p
          class="text-lg sm:text-xl md:text-2xl mb-8 max-w-3xl mx-auto transition-colors duration-300 px-4"
          :class="isDark ? 'text-gray-300' : 'text-gray-600'"
        >
          I'm 19 years old and have been interested in software development for 5 years. <br> <span class="text-purple-600 font-semibold italic">HR</span>
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center px-4">
          <a href="#about" class="btn-primary" v-intersect="'left'"> About Me </a>
          <a href="#contact" class="btn-secondary" v-intersect="'left'"> Contact Me </a>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        @click="scrollToAbout"
      >
        <Icon
          name="mdi:chevron-down"
          size="24"
          class="transition-colors duration-300"
          :class="isDark ? 'text-gray-400' : 'text-gray-500'"
        />
      </div>
    </section>

    <!-- About Section -->
    <section
      id="about"
      class="py-16 sm:py-20 transition-colors duration-300 px-4 sm:px-6"
      :class="isDark ? 'bg-neutral-800/50' : 'bg-purple-50'"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 sm:mb-16">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300"
            :class="isDark ? 'text-gray-100' : 'text-gray-900'"
          >
            About Me
          </h2>
          <div class="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div class="space-y-6">
            <p
              class="text-base sm:text-lg leading-relaxed transition-colors duration-300"
              :class="isDark ? 'text-gray-300' : 'text-gray-600'"
            >
              I have knowledge in many programming languages and continuously develop new projects
              to improve myself. I learn current technologies and develop projects to achieve my
              goals.
            </p>
            <p
              class="text-base sm:text-lg leading-relaxed transition-colors duration-300"
              :class="isDark ? 'text-gray-300' : 'text-gray-600'"
            >
              I have experience in web applications and blockchain technologies. I
              love contributing to open source projects and sharing with the community.
            </p>
            <div class="flex flex-wrap gap-3 sm:gap-4">
              <div
                class="px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                :class="isDark ? 'bg-neutral-700' : 'bg-purple-200'"
              >
                <span class="text-purple-600 font-semibold">5+</span>
                <span :class="isDark ? 'text-gray-300' : 'text-gray-600'">Years Experience</span>
              </div>
              <div
                class="px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                :class="isDark ? 'bg-neutral-700' : 'bg-purple-200'"
              >
                <span class="text-purple-600 font-semibold">100+</span>
                <span :class="isDark ? 'text-gray-300' : 'text-gray-600'">Projects</span>
              </div>
              <div
                class="px-3 sm:px-4 py-2 rounded-lg transition-colors duration-300 text-sm sm:text-base"
                :class="isDark ? 'bg-neutral-700' : 'bg-purple-200'"
              >
                <span class="text-purple-600 font-semibold">15+</span>
                <span :class="isDark ? 'text-gray-300' : 'text-gray-600'">Technologies</span>
              </div>
            </div>
          </div>

          <div class="relative">
            <div
              class="p-6 sm:p-8 rounded-2xl border transition-colors duration-300"
              :class="
                isDark
                  ? 'bg-gradient-to-br from-purple-900/20 to-neutral-700/20 border-neutral-600'
                  : 'bg-gradient-to-br from-purple-200/50 to-purple-50/50 border-purple-300'
              "
            >
              <h3
                class="text-xl sm:text-2xl font-bold mb-6 text-center transition-colors duration-300"
                :class="isDark ? 'text-gray-100' : 'text-gray-900'"
              >
                Quick Stats
              </h3>
              <div class="grid grid-cols-2 gap-3 sm:gap-4">
                <div
                  class="text-center p-3 sm:p-4 rounded-lg transition-colors duration-300"
                  :class="isDark ? 'bg-neutral-700' : 'bg-purple-200'"
                >
                  <div class="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">5+</div>
                  <div
                    class="text-xs sm:text-sm transition-colors duration-300"
                    :class="isDark ? 'text-gray-300' : 'text-gray-600'"
                  >
                    Years Experience
                  </div>
                </div>
                <div
                  class="text-center p-3 sm:p-4 rounded-lg transition-colors duration-300"
                  :class="isDark ? 'bg-neutral-700' : 'bg-gray-200'"
                >
                  <div class="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">100+</div>
                  <div
                    class="text-xs sm:text-sm transition-colors duration-300"
                    :class="isDark ? 'text-gray-300' : 'text-gray-600'"
                  >
                    Projects Completed
                  </div>
                </div>
                <div
                  class="text-center p-3 sm:p-4 rounded-lg transition-colors duration-300"
                  :class="isDark ? 'bg-neutral-700' : 'bg-gray-200'"
                >
                  <div class="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">15+</div>
                  <div
                    class="text-xs sm:text-sm transition-colors duration-300"
                    :class="isDark ? 'text-gray-300' : 'text-gray-600'"
                  >
                    Technologies
                  </div>
                </div>
                <div
                  class="text-center p-3 sm:p-4 rounded-lg transition-colors duration-300"
                  :class="isDark ? 'bg-neutral-700' : 'bg-gray-200'"
                >
                  <div class="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">20+</div>
                  <div
                    class="text-xs sm:text-sm transition-colors duration-300"
                    :class="isDark ? 'text-gray-300' : 'text-gray-600'"
                  >
                    Customers
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-16 sm:py-20 px-4 sm:px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 sm:mb-16">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300"
            :class="isDark ? 'text-gray-100' : 'text-gray-900'"
          >
            My Projects
          </h2>
          <div class="w-24 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div class="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div
            v-for="(project, index) in projects"
            :key="index"
            class="group rounded-xl p-4 sm:p-6 border transition-all duration-300 hover:transform hover:scale-105"
            :class="
              isDark
                ? 'bg-neutral-800 border-neutral-700 hover:border-purple-500'
                : 'bg-purple-50 border-purple-200 hover:border-purple-600 shadow-lg'
            "
            v-intersect="index % 2 === 0 ? 'right' : 'left'"
          >
            <div class="flex items-start space-x-3 sm:space-x-4">
              <div
                class="bg-purple-200 p-2 sm:p-3 rounded-lg group-hover:bg-purple-300 transition-colors flex-shrink-0"
              >
                <Icon name="ph:code" size="24" class="sm:w-8 sm:h-8 text-purple-900" />
              </div>
              <div class="flex-1 min-w-0">
                <h3
                  class="text-lg sm:text-xl font-bold mb-2 group-hover:text-purple-600 transition-colors transition-colors duration-300"
                  :class="isDark ? 'text-gray-100' : 'text-gray-900'"
                >
                  {{ project.name }}
                </h3>
                <p
                  class="mb-4 leading-relaxed text-sm sm:text-base transition-colors duration-300"
                  :class="isDark ? 'text-gray-300' : 'text-gray-600'"
                >
                  {{ project.description }}
                </p>
                <div v-if="project.link" class="flex items-center space-x-2">
                  <a
                    :href="project.link"
                    target="_blank"
                    class="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors text-sm sm:text-base"
                  >
                    <span>View Project</span>
                    <Icon name="mdi:open-in-new" size="16" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section
      id="technologies"
      class="py-16 sm:py-20 transition-colors duration-300 px-4 sm:px-6"
      :class="isDark ? 'bg-neutral-800/50' : 'bg-purple-50'"
    >
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 sm:mb-16">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300"
            :class="isDark ? 'text-gray-100' : 'text-gray-900'"
          >
            Technologies
          </h2>
          <div class="w-24 h-1 bg-purple-600 mx-auto"></div>
          <p
            class="text-base sm:text-lg mt-4 transition-colors duration-300"
            :class="isDark ? 'text-gray-300' : 'text-gray-600'"
          >
            Technologies and tools I use
          </p>
        </div>

        <div
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 sm:gap-6 lg:gap-8"
        >
          <div
            v-for="(tech, index) in technologies"
            :key="tech"
            class="group flex flex-col items-center space-y-2 p-3 sm:p-4 rounded-lg transition-all duration-300 hover:transform hover:scale-110"
            :class="isDark ? 'hover:bg-neutral-700' : 'hover:bg-purple-200'"
            v-intersect="index % 2 === 0 ? 'right' : 'left'"
          >
            <Icon
              :name="tech"
              size="32"
              class="sm:w-12 sm:h-12 lg:w-12 lg:h-12 group-hover:text-purple-600 transition-colors"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-16 sm:py-20 px-4 sm:px-6">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 sm:mb-16">
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300"
            :class="isDark ? 'text-gray-100' : 'text-gray-900'"
          >
            Contact
          </h2>
          <div class="w-24 h-1 bg-purple-600 mx-auto"></div>
          <p
            class="text-base sm:text-lg mt-4 transition-colors duration-300"
            :class="isDark ? 'text-gray-300' : 'text-gray-600'"
          >
            Get in touch with me
          </p>
        </div>

        <div class="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div
            v-for="(platform, index) in platforms"
            :key="platform.name"
            class="group rounded-xl p-6 sm:p-8 border transition-all duration-300 hover:transform hover:scale-105 text-center"
            :class="
              isDark
                ? 'bg-neutral-800 border-neutral-700 hover:border-purple-500'
                : 'bg-purple-50 border-purple-200 hover:border-purple-600 shadow-lg'
            "
            v-intersect="index % 2 === 0 ? 'right' : 'left'"
          >
            <div
              class="flex items-center justify-center bg-purple-200 p-3 sm:p-4 rounded-full w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 group-hover:bg-purple-300 transition-colors"
            >
              <Icon :name="platform.icon" size="32" class="sm:w-16 sm:h-16 text-purple-900" />
            </div>
            <h3
              class="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 transition-colors duration-300"
              :class="isDark ? 'text-gray-100' : 'text-gray-900'"
            >
              {{ platform.name }}
            </h3>
            <p
              class="text-base sm:text-lg transition-colors duration-300"
              :class="isDark ? 'text-gray-300' : 'text-gray-600'"
            >
              {{ platform.value }}
            </p>
            <div v-if="platform.name === 'Discord'" class="mt-3 sm:mt-4">
              <a
                href="https://discord.com/users/299955838368612353"
                target="_blank"
                class="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 transition-colors text-sm sm:text-base"
              >
                <span>Visit My Profile</span>
                <Icon name="mdi:open-in-new" size="16" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer
      class="border-t py-6 sm:py-8 transition-colors duration-300 px-4 sm:px-6"
      :class="isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-purple-50 border-purple-200'"
    >
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <div class="flex items-start space-x-3 mb-4 sm:mb-0">
            <div>💜</div>
            <span
              class="text-base sm:text-lg font-bold transition-colors duration-300"
              :class="isDark ? 'text-gray-100' : 'text-gray-900'"
              >RÂNÂ</span
            >
          </div>

          <div class="flex space-x-4 sm:space-x-6">
            <a
              href="https://www.linkedin.com/in/cagrihaktan/"
              target="_blank"
              class="transition-colors duration-300"
              :class="
                isDark ? 'text-gray-400 hover:text-white' : 'text-purple-600 hover:text-purple-700'
              "
            >
              <Icon name="mdi:linkedin" size="20" class="sm:w-6 sm:h-6" />
            </a>
            <a
              href="https://github.com/WitcherDevs"
              target="_blank"
              class="transition-colors duration-300"
              :class="
                isDark ? 'text-gray-400 hover:text-white' : 'text-purple-600 hover:text-purple-700'
              "
            >
              <Icon name="mdi:github-box" size="20" class="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, getCurrentInstance } from "vue";

const mobileMenuOpen = ref(false);
const isDark = ref(true); // Default dark theme

const projects = ref([
  {
    name: "Serendia Squad Frontend",
    description:
      "I developed the frontend of the Serendia Squad site as a volunteer and we are still developing and working to make it better. The purpose of the site is for people to share code/information and benefit from the shared code/information.",
    link: "https://serendiasquad.net",
  },
  {
    name: "Algorand Module",
    description:
      "I developed a module that can be used to interact with the Algorand blockchain in NodeJS projects. I developed this module to make it easier for developers to interact with the Algorand blockchain, but it is still under development and has many shortcomings.",
    link: "https://github.com/WitcherDevs/algorandjs",
  },
]);

const technologies = ref([
  "devicon:vuejs",
  "skill-icons:expressjs-dark",
  "logos:nodejs-icon",
  "vscode-icons:file-type-typescript-official",
  "logos:nuxt-icon",
  "simple-icons:fastify",
  "skill-icons:mongodb",
  "skill-icons:postgresql-dark",
  "skill-icons:svelte",
  "logos:javascript",
  "logos:prettier",
  "devicon:eslint",
  "skill-icons:tailwindcss-dark",
  "devicon:html5",
  "skill-icons:postman",
  "devicon:csharp",
  "skill-icons:python-dark",
  "logos:visual-studio-code",
  "logos:brave",
  "skill-icons:docker",
  "vscode-icons:file-type-git",
  "skill-icons:github-dark",
  "devicon:windows11-wordmark",
  "logos:npm-icon",
]);

const platforms = ref([
  {
    name: "LinkedIn",
    icon: "mdi:linkedin",
    value: "cagrihaktan",
  },
  {
    name: "E-Mail",
    icon: "ic:baseline-email",
    value: "contact@witcherdev.net",
  },
]);

// Theme toggle function
function toggleTheme() {
  isDark.value = !isDark.value;
  // Save to localStorage
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
}

// Load theme from localStorage
onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    isDark.value = savedTheme === "dark";
  }
});

// Intersection Observer ile animasyon
function useIntersect(el: HTMLElement, direction: string = "right") {
  el.classList.add("opacity-0");
  if (direction === "right") {
    el.classList.add("translate-x-16");
  } else if (direction === "left") {
    el.classList.add("-translate-x-16");
  }
  const observer = new window.IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          el.classList.remove("opacity-0", "translate-x-16", "-translate-x-16");
          el.classList.add("animate-fade-in-side");
          observer.disconnect();
        }
      });
    },
    { threshold: 0.2 }
  );
  observer.observe(el);
}

const vIntersect = {
  mounted(el: HTMLElement, binding: any) {
    useIntersect(el, binding.value);
  },
};

const instance = getCurrentInstance();
if (instance) {
  // @ts-ignore
  instance.appContext.app.directive("intersect", vIntersect);
}

// Smooth scrolling for navigation links
onMounted(() => {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href")!);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

function scrollToAbout() {
  const aboutSection = document.getElementById("about");
  if (aboutSection) {
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
</script>

<style scoped>
@keyframes fade-in-side {
  0% {
    opacity: 0;
    transform: translateX(var(--tw-translate-x));
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes profile-bounce {
  0%,
  90%,
  100% {
    transform: translateY(0);
  }
  95% {
    transform: translateY(-20px);
  }
}

.animate-fade-in-side {
  animation: fade-in-side 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
}

.animate-profile-bounce {
  animation: profile-bounce 10s infinite;
}

.nav-link {
  @apply transition-colors duration-200 font-medium;
}

.nav-link:hover {
  @apply text-white;
}

.btn-primary {
  @apply bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block;
}

.btn-secondary {
  @apply bg-transparent border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block;
}
</style>
