// Test file for Programming Languages Explorer
// Students can run this to verify their changes work correctly

class LanguagesTester {
  constructor() {
    this.languages = [];
    this.testResults = [];
  }

  async loadLanguages() {
    try {
      const response = await fetch('data/languages.json');
      this.languages = await response.json();
      return true;
    } catch (error) {
      console.error('Error loading languages:', error);
      return false;
    }
  }

  runAllTests() {
    console.log('🧪 Running Languages Tests...\n');

    this.testJsonStructure();
    this.testRequiredFields();
    this.testDataTypes();
    this.testUniqueNames();
    this.testFeaturesArray();
    this.testYearRange();
    this.testTypeValues();

    this.displayResults();
  }

  testJsonStructure() {
    console.log('📋 Testing JSON structure...');

    if (!Array.isArray(this.languages)) {
      this.addResult('❌ Languages should be an array', false);
      return;
    }

    if (this.languages.length === 0) {
      this.addResult('❌ Languages array is empty', false);
      return;
    }

    this.addResult('✅ JSON structure is valid', true);
  }

  testRequiredFields() {
    console.log('🔍 Testing required fields...');

    const requiredFields = ['name', 'year', 'type', 'description', 'features'];

    for (let i = 0; i < this.languages.length; i++) {
      const lang = this.languages[i];
      const missingFields = requiredFields.filter(field => !(field in lang));

      if (missingFields.length > 0) {
        this.addResult(`❌ Language ${lang.name || i} missing fields: ${missingFields.join(', ')}`, false);
      } else {
        this.addResult(`✅ Language ${lang.name} has all required fields`, true);
      }
    }
  }

  testDataTypes() {
    console.log('🔢 Testing data types...');

    for (let i = 0; i < this.languages.length; i++) {
      const lang = this.languages[i];

      if (typeof lang.name !== 'string') {
        this.addResult(`❌ Language ${i}: name should be string`, false);
      }

      if (typeof lang.year !== 'number') {
        this.addResult(`❌ Language ${lang.name}: year should be number`, false);
      }

      if (typeof lang.type !== 'string') {
        this.addResult(`❌ Language ${lang.name}: type should be string`, false);
      }

      if (typeof lang.description !== 'string') {
        this.addResult(`❌ Language ${lang.name}: description should be string`, false);
      }

      if (!Array.isArray(lang.features)) {
        this.addResult(`❌ Language ${lang.name}: features should be array`, false);
      }
    }
  }

  testUniqueNames() {
    console.log('🏷️ Testing unique names...');

    const names = this.languages.map(lang => lang.name);
    const uniqueNames = [...new Set(names)];

    if (names.length !== uniqueNames.length) {
      this.addResult('❌ Duplicate language names found', false);
    } else {
      this.addResult('✅ All language names are unique', true);
    }
  }

  testFeaturesArray() {
    console.log('✨ Testing features arrays...');

    for (let i = 0; i < this.languages.length; i++) {
      const lang = this.languages[i];

      if (!Array.isArray(lang.features)) {
        this.addResult(`❌ Language ${lang.name}: features is not an array`, false);
        continue;
      }

      if (lang.features.length === 0) {
        this.addResult(`❌ Language ${lang.name}: features array is empty`, false);
        continue;
      }

      const invalidFeatures = lang.features.filter(feature => typeof feature !== 'string');
      if (invalidFeatures.length > 0) {
        this.addResult(`❌ Language ${lang.name}: features should be strings`, false);
      } else {
        this.addResult(`✅ Language ${lang.name}: features array is valid`, true);
      }
    }
  }

  testYearRange() {
    console.log('📅 Testing year range...');

    const currentYear = new Date().getFullYear();

    for (let i = 0; i < this.languages.length; i++) {
      const lang = this.languages[i];

      if (lang.year < 1950 || lang.year > currentYear) {
        this.addResult(`❌ Language ${lang.name}: year ${lang.year} seems invalid`, false);
      } else {
        this.addResult(`✅ Language ${lang.name}: year ${lang.year} is reasonable`, true);
      }
    }
  }

  testTypeValues() {
    console.log('🏷️ Testing type values...');

    const validTypes = ['Dynamic', 'Static', 'Functional', 'Systems', 'Scripting'];

    for (let i = 0; i < this.languages.length; i++) {
      const lang = this.languages[i];

      if (!validTypes.includes(lang.type)) {
        this.addResult(`❌ Language ${lang.name}: type "${lang.type}" not in valid types`, false);
      } else {
        this.addResult(`✅ Language ${lang.name}: type "${lang.type}" is valid`, true);
      }
    }
  }

  addResult(message, passed) {
    this.testResults.push({ message, passed });
  }

  displayResults() {
    console.log('\n📊 Test Results:');
    console.log('='.repeat(50));

    const passed = this.testResults.filter(result => result.passed).length;
    const total = this.testResults.length;

    this.testResults.forEach(result => {
      console.log(result.message);
    });

    console.log('='.repeat(50));
    console.log(`🎯 Passed: ${passed}/${total} tests`);

    if (passed === total) {
      console.log('🎉 All tests passed! Your changes look good.');
    } else {
      console.log('⚠️ Some tests failed. Please check your changes.');
    }
  }
}

// Run tests when page loads
document.addEventListener('DOMContentLoaded', async () => {
  const tester = new LanguagesTester();
  const loaded = await tester.loadLanguages();

  if (loaded) {
    tester.runAllTests();
  } else {
    console.log('❌ Could not load languages.json file');
  }
});

// Export for manual testing
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LanguagesTester;
} 