# Talent Hub

### Web app for effortless browsing for new workers

The idea is simple:

Candidates create their profiles consisting of their experience and wait for recruiters to reach out for them.

Employers or recruiters just put their requirements regarding technologies and get a list of candidates fulfilling them. Then they can view their CV's (in progress) or contact them through email.

## Tech stack
### React / JavaScript / Firestore / HTML / SCSS

# /context

Files containing functions for providing context the application with ingo such as:
 - AuthContext: information linked with authentication of user
 - CandidateContext: information linked with candidate's experience
 - AuthEmployer: information linked with employer's requirements

 # /components

 ## /CandidatePage or EmployerPage

Files using functions providing information by given context for updating database or searching for data in it.