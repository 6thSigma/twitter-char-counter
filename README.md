twitter-char-counter
====================

Count the number of characters in a field and give warnings when a user gets near a limit (like Twitter!).

### Usage

Place the ID of the form you would like to count in the char-count.js file in place of '#YOUR-FORM-ID-HERE'. Place the following in your HTML and customize with CSS as you will:

    <div>Characters left: <span id="char-count">140</span></div>
    
### Options
You can edit the following in the char-count.js file:

'maxLen' is the maximum number of characters you want your form to have. Default is 140.

'warnLen' is the number of characters until the max is reached which will warn your user that the max is near. Default is 10.

Colors can be edited as well.

### License
MIT License

