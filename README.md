### Pricing page

- Pricing Page isnt implemented when I checked on desktop.
  -  I have tried to Implment a modern looking 3 tile Pricing  page
     -  Made a Single Component and resued for to display various pricing options 
     -  Added button to toggle between Monthly and  Annual plans
  -  Added FAQs under Pricing section, ( which is usual in pricing page)    
  -  Seperated content from logic, which adds to **maintainability** 
  -  Reffered to dribble for design inspiration 
  [link](https://dribbble.com/shots/18890939-Pricing-page-Untitled-UI)

#### table with dropdown

- Implemented a table to display data and button to toggle a dropdown.
- `ag-grid` pacakge doesnt allow this on their free plan and have to buy enterprise version to make it work.
- custom table would be simplier option here.
 
### Some of issues I indentified and rectifed in sangti landing page

1. FOUT ( Flash out of  Unstyled Text) happens in initial load
  - possible issues:
    -  font isnt preloaded 
    -  font is loaded futher down in `<head>` tag of html

2.  Text being displayed in two rows in navigation 
  - this is perceived to be not-so-Ideal in terms of UX, as it affects readability
  - a single line text is quick to scan for a new user who visits 
  - Possible Solution:
    - A have drop down in navigation, which also gives chance to add elaborate description
    - existing : 
  <img src='/assets/nav_old.png' /> 
    - new:
  <img src='/assets/nav_new.png' /> 

3. When navigating to new pages, entire Application reloads, which is both performance and UX problem
   - we can fix this by implementing **client side routing** using `react-router-dom` package 
  
  



####  please do review the code, to get an understanding about my approach on structuring the application/components
