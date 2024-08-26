# Barcade Pub Quiz

Pub quizzes are a popular activity, and a pub quiz game allows an individual to enjoy trivia without needing to attend a social gathering, and offers the flexibility to play anytime, anywhere as well as the opportunity to improve trivia knowledge. The core purpose of the Barcade Pub Quiz website is to allow visitors to improve their general knowledge, as well as knowledge within specific categories, through an enjoyable, easy to use and flexible gaming experience.

The website includes a landing page with the title and introduction to the game. This page contains a button to access instructions for the game, as well as a ‘play’ button to play the game, which allows the user to play a 15-question round with multiple-choice questions across all categories. The page also includes a ‘select a category’ button, which allows the user to play a 15-question round with multiple-choice questions from the specific category. At the end of the round, the user will receive their final score.

The live link can be found here - [Barcade Pub Quiz](https://afcrandy.github.io/barcade-pub-quiz/)

![Responsive Mockup](/media/am-i-responsive-mockup.png)


## User Experience (UX)

### User Stories

First time visitor goals:
-	Play a pub quiz game to improve general knowledge 
-	Play a pub quiz game to improve knowledge within a specific category
-	Have the flexibility to take part in a pub quiz at any time and across different devices 
-	Play a pub quiz game with instructions which are easy to understand on a site which is easy to navigate

Returning visitor goals:
-	Improve knowledge in categories where I have gotten the most questions wrong based on my previous visit through playing these specific pub quiz categories within the game

Frequent visitor goals
-	Further improve knowledge through playing across all categories, targeting categories which still have the lowest scores 
-	Continue to overall general knowledge score through playing categories with weaker scores as well as stronger categories

## Design

### Colour Scheme

The website contains a consistent background image throughout, appearing as a classic arcade screen and utilizing deep purple tones. For simplicity only one off-white colour was used for text. The text colour is changed to green and red to denote the right and wrong answers respectively, as well as a blue when an answer is selected. The text colour was chosen to represent the colour that gaming text appears in classic arcade games, as this is a theme throughout the site. Blue is used to show that an answer has been selected, with green and red were used to indicate right and wrong answers as this is typical for trivia games, and to provide feedback and clarity.

-	I have used <span style="color: #fdf5e6">#fdf5e6</span> as the off-white colour for the website’s text over the background image 
-	I have used <span style="color: #228b22">#228b22</span> as the green text colour for correct quiz answers
-	I have used <span style="color: #b22222">#b22222</span> as the red text colour for incorrect quiz answers
-	I have used <span style="color: #4169e1">#4169e1</span> as the blue text colour when an answer has been selected

### Typography

dafont.com used to source the chosen fonts for the website. They were downloaded and stored in an appropriate assets/fonts directory

-	For the landing page, I have used the dafont.com font 04b_30 for the title of the game. This font is in the pixelated 8-bit style of game font which could be found in a classic arcade game and is in a rounded bubble style, evocative of fizzy drinks which might be found at a pub

![04b_30 Typeface](/media/typography-04b_30.png)

-	For rest of the text (including buttons) I used the dafont.com font Pixel Operator Mono 8 Bold. This font is consistent with the pixelated 8-bit classic arcade game style of the website, is like what can be found in classic arcade games and is cohesive with the title font

![PixelOperatorMono8Bold Typeface](/media/typography-pixel-operator.png)

### Imagery

An 8-bit classic arcade game style is used throughout to provide the feeling of playing a pub quiz on a classic arcade gaming console.

-	The background image is of a classic arcade console. The image is from Adobe Stock
![Background image of retro arcade console](/media/barcade_background-readme.jpg)

-	The image below the title is of a beer, as this is cohesive with the pub quiz theme of the game and in an 8-bit style. The image is from Vecteezy.
![8 Bit Beer image](/assets/images/beer-150x150.png)

-	The results page features a trophy and a champagne bottle in an 8-bit style to celebrate the final score and completion of the quiz round. The images are from Vecteezy.

![8 Bit Trophy](/assets/images/trophy-100x100.png) ![8 Bit Trophy](/assets/images/champagne-100x100.png)


## Features 

### Existing Features

The website is comprised of a single page, itself comprising a home screen, a question screen, a category selection screen and a results screen, a 404 error page and a 500 error page.

- __Favicon__
  - The 8-bit beer image as a favicon, responsively sized for different devices and uses
  ![Favicon in browser tab](/media/favicon.png)

- __Header__
  - Featured at the top of the page the header shows the name of the site, Barcade Pub Quiz at all times so users know what site they are on
  - The name of the site makes it clear that this is both a quiz and in a retro arcade style
  - The font is chosen to evoke the retro arcade game style
  - On the homepage the header is large taking up the top portion of the screen, but shrinks itself into the top-left for the other pages so as to give more space to the game elements when the user is playing

  The header on the homepage on mobile

  ![Header on Homepage on Mobile](/media/header.png)

  The header on the question page on mobile

  ![Header on Question page on Mobile](/media/header-shrunk.png)

- __Background image__
  - a background reminiscent of a retro arcade game machine screen is sourced

  ![Background image of retro arcade game](/media/barcade_background-readme.jpg)

- __Homepage image and welcome text__
  - Image evokes pubs and arcades because 8-bit

  ![Homepage image and text as landing and welcome](/media/homepage-image-and-text.png)

- __Instructions__
  - Are located on the landing page
  - A brief modal pops up to explain how to use the site upon clicking the 'How to play' button
  - These can be dismissed using the 'Close' button

  ![Instructions modal](/media/instructions.png)

- __Quick Play button__
  - This button allows users to play a 15-question multiple-choice round with questions across all categories
  - Users are taken straight into a game
  - Allows users to quickly access the game without taking the time to consider a specific category

- __Select a Category__
  - This is for users that want to target a specific subject which they can select from a set list here
  - A simple dropdown interface works well on all devices
  - Users have the option to return to the homepage if they decide they want to play with a mix of subjects through clicking the 'Home' button

  ![Category selector dropdown](/media/category-selector.png)

- __Question area__
  - This is the play area, it clearly lays out the multiple-choice question text and the answers
  - The score is shown in the top right corner
  - Answer choiceds are ordered alphabetically
  - There is a 'Home' button for users to easily exit the game if desired
  - There is a 'Next' button that becomes clickable once an answer has been selected; once an answer is selected the cursor becomes a pointer, when not clickable it becomes the default

  ![Question page](/media/question-screen.png)

- __Answer feedback__
  - When an answer is selected, that option is coloured blue to feedback to the user that they have selected an option

  ![Answer selected](/media/question-answered.png)

  - There is a 0.5s delay between this and the feedback being shown to the user to give them long enough to register that they have made a selection, but not so long that it looks like the site may be frozen or broken
  - After this delay the correct answer is indicated in green text (hopefully this is the answer the user selected)

  ![Correct answer selected and indicated](/media/answer-feedback-when-right.png)

  - If an incorrect answer is selected, the selected answer is changed to red text to indicate this while the correct answer turns green

  ![Incorrect answer was selected](/media/answer-feedback-when-wrong.png)

  - If the user selected the correct answer their score is incremented in the top-right corner

  ![Score incremented](/media/score-incremented.jpg)

-  __Results page__
  - Once the user has completed all 15 questions, the 'Next' button becomes a 'See your results' button
  - Clicking this brings you to a page where you can see your final score
  - There is champagne and a trophy image to celebrate the reveal of the final score
  - There are buttons to take the user back home, straight into another game of random questions across all categories or to the category selector screen

  ![Results page](/media/results-screen.png)

- __Footer__
  - A very basic footer so as not to distract from the game
  - Simply lets the user know who created this site

  ![Footer](/media/footer.png)

### Features left to Implement
- User memory functionality
  - This would allow users to create a username
  - To be remembered across multiple visits
  - To store high scores locally

- Implement different question types
  - Across the API I used and others that are available, it is possible to get more round types than just multiple choice
  - I would implement different types, e.g. image or sound, and allow for longer quiz types where there are multiple rounds each with a different subject or question type

- Allow users to select difficulty levels
  - The API I used offered the ability to select a difficulty level for the questions being retrieved
  - Users can progress through the levels of difficulty each time they return to the site
  - This allows the user to select the appropriate difficulty level for their understanding and build up their confidence over time


## Testing 

- I tested that this site works in several different browsers: Chrome, Firefox, Opera, Safari
- I confirmed that the site looks good at a range of different sizes and aspects using the DevTools device bar and by viewing the page on multiple devices
- I confirmed that the background remains clear on multiple device sizes and does not disappear off any edges

__Home screen__
- I confirmed that the homepage logo, image and welcome text resized and repositioned themselves as the viewport narrowed and/or shortened
- I tested that the instructions modal worked as expected in different browsers and at different resolutions without losing text or the close button

__Category selection screen__
- I tested that the category dropdown worked as expected and that accessing it from the results screen worked the same as if accessing it from the homepage

__Question screen__
I verified that the question screen worked, that is
- text was properly rendered at various resolutions
- answer buttons functioned correctly being clickable when none had been selected, and unclickable when an answer had been selected
- the 'Home' button worked correctly
- the 'Next' and 'See your results' buttons worked correctly; that they're not clickable until an answer has been selected
- the score was incremented correctly
- selecting an option styled it correctly
- correct and incorrect answers were indicated correctly

__Results screen__
- the final score is displayed correctly and consistently with the score calculated through the game
- that each of the buttons available on this screen work correctly

### Bugs

#### Solved Bugs

- Sizing the page for mobile pages
  - initially I had used `100vh` and `100vw` for the size of my page so it would always use all available space
  - I found that on my phone this interacted poorly with the dynamic UI of the browsers
  - after some research on W3S I discovered the `svh` unit that makes calculations assuming the smallest available space

- Question data being written to the question screen
  - initially I separated the API call and the call to writing the first question to the page entirely as I believe this to be best practice
  - however, this was regularly not working with the placeholder text not being overwritten
  - this turned out to be because the API call is an asynchronous function, the data wasn't being loaded into the `quiz` object in time
  - the page was being loaded while the question data was still undefined
  - by moving the call to write the first question into the API call function, it was able to know when that data had arrived and execute that function at that time
  - see below for a known bug that this solution has introduced

- Correct and incorrect answer styling not being applied correctly
  - I found that on occasion an answer I knew to be incorrect wasn't being styled as such
  - upon inspection, this was happening when one or more of the answer options had an extraneous space in its text
  - the API uses user-supplied questions, and sometimes these have additional spaces; these were getting stored in the `quiz` object as "Paris ", for example, but in the HTML as "Paris&nbsp;"
  - originally I was comparing the answer in the object with the HTML's `innerHTML` attribute
  - by changing to using `textContent` the HTML entity was replaced with the text character so that the comparison would work as expected

#### Known Bugs
- While collecting screenshots of the website on my mobile I encountered a question where the answer options were each about 150 words long. While the page still rendered and all text was visible and legible, the structure of the page was impacted as each option's button expanded to show the full text.
  - This comes from the fact that the questions available through the API are all user-supplied
  - As a result, some of the formatting can be a little erratic (see solved bug above)
  - Taking this project further, I would modify the question retrieval code so that it pulls more questions than needed, and filters out those that are too long to display without breaking the page structure

- The question screen sometimes loads before the questions data has been successfully retrieved from the API. I could have introduced a slight delay to the page loading to ensure enough time had passed, but I thought it better to leave that experience as part of the question answer feedback. Taking this project forward I would determine how to implement a callback function to the API call that would trigger the load of the question page

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fafcrandy.github.io%2Flon-dons%2F)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fafcrandy.github.io%2Flon-dons%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
- JavaScript
  - I tested my code using [JSHint](https://jshint.com/), receiving only the error "'async functions' is only available in ES8 (use 'esversion: 8').". This is not an issue with the code, rather with the validator outputting a warning
- Accessibility
  - I confirmed that the site is both performant and accessible by running it through Lighthouse in Chrome DevTools

  ![Lighthouse report](/media/barcade-pub-quiz-lighthouse-report.png)

## Deployment & Local Development 

### Deployment

The site was deployed to GitHub pages.

The steps to deploy are as follows: 
1. In the GitHub repository, navigate to the Settings tab 
2. From the source section drop-down menu, select the Master (or main) Branch and press 'save'
3. Once the correct branch has been selected, the page should be automatically refreshed with a detailed ribbon display to indicate the successful deployment

### Local Development

#### How to Fork

To fork the repository:
1. Go to the repository for the project
2. Click the 'Fork' button in the top right corner

#### How to Clone
1. In the GitHub repository click on the 'Code' button
2. Select which method you'd like (one of HTTPS, SSH or GitHub CLI) and copy the link shown
3. Open a terminal in the location you'd like to use for your cloned directory
4. Type `git clone` into the terminal and then paste the link from step 3
5. Press enter


## Credits

### Content

- Database used for providing questions was [The Trivia API](https://the-trivia-api.com/)
- Code for asynchronously retrieving question data via the aforementioned API was adapted from [The Quiz Arms project](https://github.com/kera-cudmore/TheQuizArms/tree/main)
- Resizing of images done using [PicResize](https://picresize.com/)
- Favicons of various sizes were generated using the beer image from Vecteezy, and processed using [Favicon.io](https://favicon.io/favicon-converter/)

### Media

- Title font created by author 04 and hosted at Dafont.com, called [04b_30](https://www.dafont.com/04b-30.font)
- Normal font created by Jayvee Enaguas and hosted at Dafont.com, called [Pixel Operator](https://www.dafont.com/pixel-operator.font), specifically the Mono8Bold
- The background image was purchased from Adobe Stock, designed by Tetsuo Buseteru ([link](https://stock.adobe.com/uk/images/retro-arcade-game-machine-screen-background-vector-illustration/220094882))
- The images of 8-bit style beer, champagne and trophy were sourced from [Vecteezy.com](vecteezy.com)
