## Description
React application to display frequency distribution of words found at <https://www.terriblytinytales.com/test.txt>

## Components
<details>
<summary>Index.js</summary>

- To create and render root

</details>
<details>
<summary>App.js</summary>

- Display home screen on initial render
- Handle fetch call on button click
- Update state to display chart screen after button click

</details>
<details>
<summary>Screens</summary>

- Home Screen
  - Display submit button
- Chart Screen
  - Display histogram based on frequency count of most occuring words
  - For smaller screen, display graph vertically
  - Check for smaller screens using custom hook (useWindowWidth)

</details>
<details>
<summary>Components</summary>

- Spinner
  - Loading spinner for when data is being fetched
- Chart
  - Rechart component and its styling
  - Responsive and interactive graph

</details>
<details>
<summary>Hooks</summary>

- useWindowWidth
  - Custom hook that is triggered on window resize
  - Returns if width of HTML is <720
  - Used to update freqency graph direction, to vertical in mobile view and horizontal in bigger screens

</details>
<details>
<summary>Helpers</summary>

- CountFreq
  - Clean the text, to remove all characters except alphanumeric values, @ and underscore
  - Remove extra spaces
  - Split the words based on single space, and convert to lowercase
  - Create a freq map to count ourracnce of each word
  - Sort the map based on values in descending order.
  - Pass values to formatFreq
- FormatFreq
  - Format the results to pass data to chart
  - Convert to array of objects, with each object having word and freq keys. 

</details>
<details>
<summary>Styling</summary>

- Tailwind CSS
  - Created custom class components
  - Extended theme for personalized styles
- Animation
  - Used CSS to animate background gradient

</details>

## Libraries used

- React
- Tailwind CSS
- Recharts
- Fetch API

