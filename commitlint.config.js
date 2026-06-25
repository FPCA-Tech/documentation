module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      // Restrict commit types to only those relevant to a docs project
      'type-enum': [
        2,
        'always',
        ['feat', 'fix', 'docs', 'chore', 'style', 'refactor', 'perf', 'test']
      ],
      
      // Enforce that a scope is always provided (e.g., feat(hardware): ...)
      'scope-empty': [2, 'never'],
      
      // Define the specific scopes allowed for your documentation project
      'scope-enum': [
        2,
        'always',
        [
          'setup', 
          'hardware', 
          'network', 
          'policies', 
          'onboarding', 
          'api', 
          'dependencies'
        ]
      ],
      
      // Increase the subject line limit to 100 characters for more descriptive titles
      'header-max-length': [2, 'always', 100],
      
      // Enforce that the subject line does not end with a period
      'subject-full-stop': [2, 'never', '.'],
      
      // Enforce lowercase for the subject line
      'subject-case': [2, 'always', 'lower-case']
    }
  };