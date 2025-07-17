// Programming Languages Explorer - Main JavaScript File
// This file handles the dynamic loading and display of programming languages

class LanguagesExplorer {
  constructor() {
    this.languages = [];
    this.filteredLanguages = [];
    this.init();
  }

  async init() {
    await this.loadLanguages();
    this.setupEventListeners();
    this.displayLanguages();
    this.updateStats();
  }

  async loadLanguages() {
    try {
      const response = await fetch('data/languages.json');
      this.languages = await response.json();
      this.filteredLanguages = [...this.languages];
    } catch (error) {
      console.error('Error loading languages:', error);
      // Fallback data if file doesn't exist
      this.languages = [
        {
          name: "JavaScript",
          year: 1995,
          type: "Dynamic",
          description: "A high-level, interpreted programming language that is one of the core technologies of the World Wide Web.",
          features: ["Object-oriented", "Event-driven", "Functional programming", "Async/await"]
        },
        {
          name: "Python",
          year: 1991,
          type: "Dynamic",
          description: "A high-level, interpreted programming language known for its simplicity and readability.",
          features: ["Easy to learn", "Large standard library", "Cross-platform", "Multiple paradigms"]
        },
        {
          name: "Java",
          year: 1995,
          type: "Static",
          description: "A class-based, object-oriented programming language designed to have as few implementation dependencies as possible.",
          features: ["Platform independent", "Object-oriented", "Robust", "Secure"]
        }
      ];
      this.filteredLanguages = [...this.languages];
    }
  }

  setupEventListeners() {
    const searchInput = document.getElementById('searchInput');
    const filterBtn = document.getElementById('filterBtn');
    const addLanguageBtn = document.getElementById('addLanguageBtn');

    searchInput.addEventListener('input', (e) => {
      this.filterLanguages(e.target.value);
    });

    filterBtn.addEventListener('click', () => {
      this.showFilterModal();
    });

    addLanguageBtn.addEventListener('click', () => {
      this.showAddLanguageModal();
    });
  }

  filterLanguages(searchTerm) {
    this.filteredLanguages = this.languages.filter(lang =>
      lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lang.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lang.features.some(feature =>
        feature.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    this.displayLanguages();
  }

  displayLanguages() {
    const container = document.getElementById('languagesList');
    container.innerHTML = '';

    this.filteredLanguages.forEach(lang => {
      const card = this.createLanguageCard(lang);
      container.appendChild(card);
    });
  }

  createLanguageCard(lang) {
    const card = document.createElement('div');
    card.className = 'language-card';

    const featuresList = lang.features.map(feature => `<li>${feature}</li>`).join('');

    card.innerHTML = `
            <h3>${lang.name}</h3>
            <div class="year">Created in ${lang.year}</div>
            <span class="type">${lang.type}</span>
            <p class="description">${lang.description}</p>
            <ul class="features">
                ${featuresList}
            </ul>
        `;

    return card;
  }

  updateStats() {
    const totalLanguages = document.getElementById('totalLanguages');
    const popularType = document.getElementById('popularType');
    const avgYear = document.getElementById('avgYear');

    totalLanguages.textContent = this.languages.length;

    // Calculate most popular type
    const typeCount = {};
    this.languages.forEach(lang => {
      typeCount[lang.type] = (typeCount[lang.type] || 0) + 1;
    });
    const mostPopular = Object.entries(typeCount)
      .sort(([, a], [, b]) => b - a)[0];
    popularType.textContent = mostPopular ? mostPopular[0] : '-';

    // Calculate average year
    const avg = this.languages.reduce((sum, lang) => sum + lang.year, 0) / this.languages.length;
    avgYear.textContent = Math.round(avg);
  }

  showFilterModal() {
    const types = [...new Set(this.languages.map(lang => lang.type))];
    const filterType = prompt(`Select type to filter by:\n${types.join('\n')}`);

    if (filterType && types.includes(filterType)) {
      this.filteredLanguages = this.languages.filter(lang => lang.type === filterType);
      this.displayLanguages();
    }
  }

  showAddLanguageModal() {
    const name = prompt('Enter language name:');
    if (!name) return;

    const year = prompt('Enter creation year:');
    if (!year || isNaN(year)) return;

    const type = prompt('Enter language type (Dynamic/Static/Functional):');
    if (!type) return;

    const description = prompt('Enter language description:');
    if (!description) return;

    const features = prompt('Enter features (comma-separated):');
    if (!features) return;

    const newLanguage = {
      name: name.trim(),
      year: parseInt(year),
      type: type.trim(),
      description: description.trim(),
      features: features.split(',').map(f => f.trim())
    };

    this.languages.push(newLanguage);
    this.filteredLanguages = [...this.languages];
    this.displayLanguages();
    this.updateStats();
  }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new LanguagesExplorer();
}); 