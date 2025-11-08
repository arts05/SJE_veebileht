# basic window
-----

<!DOCTYPE html> ## sets html version
<html>
    <head>
    Title, metadata, settings, non-visual content
    examples: charset, description, css/javascript-connection, browser-icon, scaling
    </head>

    <body>
    all visible content
    examples: header, nav, main, footer, script
    </body>

</html>



## possible file structure
<!DOCTYPE html>                   
<html lang="et">                    
	<head>
		<title></title>
		<meta>
		<link>
		<script></script>
	</head>
	<body>
		<header></header>
		<nav></nav>
		<main>
			<section></section>
			<article></article>
			<aside></aside>
			<div></div>
		</main>
		<footer></footer>
		<script></script>
	</body>
</html>






## clean copy:
<!DOCTYPE html>
<html>
    <head>

    </head>
    
    <body>

    </body>

</html>





-----
# special characters / formats
-----
Used to distinguish certain characters between text & code

## formats
<br>    line break (empty row)
<hr>    horizontal line

## characters
&lt;    "<" less than symbol
&gt;    ">" greater than symbol




-----
# Head section
-----
<title> text </title>
## rel - relationship between document and linked resource 
<link rel="icon" type="image/gif" href="media/images/favicon.gif">
<link rel="stylesheet" href="style.css">



-----
# Headings
-----
Headings have six sizes, in descending order
h1 is usually used once per page. Search engines use headings to analyze page structure.

<h1>heading1</h1>   # largest text (usually one per page)
<h2>heading2</h2>
<h3>heading3</h3>
<h4>heading4</h4>
<h5>heading5</h5>
<h6>heading6</h6>   # smallest text





-----
# Paragraphs (display text)
----

## regular (p)

regular paragraps (p) ignore all spacing. paragraph

all following examples are displayed as the first one.

<p>
paragraph 1 2 3
</p>

    <p>
paragraph 1     2   3
    </p>

<p>
    paragraph
        1
          2
         3
</p>

## preformatted (pre)

Preformatted paragraphs are spaced as-is, relative to the left-edge of the code
        <pre>
this will be displayed as-is
    1
        2
        </pre>





-----
# Anchors (URLs, navigation)
----

## URLs

<a href="https://ois2.ut.ee/#/courses"
    Use target _blank to open in new tab or window.
    Default value is target _self, which opens in current tab.

    target="_blank"
    title="Hover text">
    This text is displayed as a link
</a>

## Navigation
To change subpage (example: home > cart), use file path for href

Absolute file path
<a href="https://example.com/folder/page2.html">

Relative file path
<a href="page2.html">
<a href="/folder/page2.html">



To navigate within a single page, you can set ID to an element and set href to the ID

Set ID as header2
<h2 id="header2"> content </h2>
Refer to ID
<a href="#header2:>





-----
# Images
----
Images don't have built-in line break.
<br> can be used before image block
Alternative: style="display:block"


<img src="images/doggif.gif"
## Alt text is used if a picture cant be loaded or when using text-to-speech
alt="This is a gif of a dog" 
height="500">


## Image which is also wrapped into a hyperlink
<a href="test2.html">
<img src="images/dog.jpg"
alt="This is a picture of a dog"
height="500">
</a>





-----
# Audio
----
controls    add controls to play, pause, mute, etc
autoplay    instantly play when the page is loaded
muted       mute by default
loop        infinite loop for the audio file

type=""     for better browser compatibility.
            Browser will know the type without loading the file.

## If using multiple sources, others will be used as fallback.
    For single source, use <audio src="">

<audio controls autoplay muted loop>
    <source src="bobdylan-allalongthewatchtower.mp3" type="audio/mp3">
    <source src="bobdylan-allalongthewatchtower.wav" type="audio/wav">
</audio>





-----
# Video
----
## If using multiple sources, others will be used as fallback.
    For single source, use <audio src="">

<video
    width="500px"
    controls
    autoplay
    muted
    loop>
    <source src="bobdylan-watchtower.mp4" type="video/mp4">  
</video>





-----
# Text formatting
----

<p>This is normal text</p>
<p>This is <b>bold</b> text</p>
<p>This is <i>italic</i>text</p>
<p>This is <u>underlined</u> text</p>
<p>This is <del>deleted</del> text</p>
<p>This is <big>big</big> text</p>
<p>This is <small>small</small> text</p>
<p>This is <sub>subscript</sub> text</p>
<p>This is <sup>superscript</sup> text</p>
<p>This is <tt>monospaced</tt> text</p>
<p>This is <mark>highlighted</mark> text</p>
<p>This is <span style="color: red;">css</span> text</p>





-----
# Span and div
----

## span - inline container to group elements for styling
<p><span style="background-color: tomato;">This is a span paragraph</span></p>
    
## div - block container to group elements for styling
<p><div style="background-color: cyan;">This is a div paragraph</div></p>





-----
# Lists
----

## unordered list
Has bullet points. Nested lists have
<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <ul>
        <li>01</li>
        <li>02</li>
        <li>03</li>
    </ul>
</ul>

## ordered list

<ol>
    <li>a</li>
    <li>b</li>
    <li>c</li>
</ol>

## description list

<dt>item</dt>
<dd>description</dd>

<dt>item2</dt>
<dd>description2</dd>





-----
# Tables
----

<table border="1" style="background-color: black;">
    <tr align="center" style="background-color: white;">
        <th width="100">Monday</th>
        <th width="100">Tuesday</th>
        <th width="100">Wednesday</th>
        <th width="100">Thursday</th>
        <th width="100">Friday</th>
        <th width="100">Saturday</th>
        <th width="100">Sunday</th>
    </tr>
    <tr align="center" style="background-color: white;">
        <td width="100">9-19</td>
        <td width="100">9-19</td>
        <td width="100">9-19</td>
        <td width="100">9-19</td>
        <td width="100">9-17</td>
        <td width="100">Closed</td>
        <td width="100">Closed</td>
    </tr>

</table>





-----
# Buttons
----
button{
    cursor: pointer;    # change the cursor on hover
}

## button wrapped in an anchor

<a href="test2.html">
<button style="font-size: 25px;
            background-color: grey;
            color: orange;
            border-radius: 5px;">
    click me
</button>
</a>


## using javascript functions

<button onclick="function1()"
        style="font-size: 25px;
            background-color: grey;
            color: orange;
            border-radius: 5px;">
    click me
</button>

<script>
    function function1(){
            window.open("./test2.html", "_self");
    }
</script>





-----
# Forms
----
## form
args:
action="URL"    sends data to this location
method=""       GET (confidential info), POST (insensitive data)

enctype=""      set an encription type
                key-value pairs (default)       application/x-www-form-urlencoded
                for files or other large data   multipart/form-data
                simple text, no encoding        text/plain

## input        gets input from user
args:
type="text"     textbox
type="submit"   submit button
type="reset"    reset button
type="password" password textbox
type="email"    looks for email-specific characters
type="tel"      format for phone numbers
type="date"     format for dates, includes a calendar
type="number"   format for numbers, includes an arrow for increment/decrement
type="radio"    radio button. Set name="" for grouping
type="checkbox" checkbox
type="textarea" text area, args: rows, cols
type="file"     option to choose files. args: accept (file types)

required        can't submit without filling this

minlength=""    minimum length for input text
maxlength=""    maximum length for input text
min=""          maximum for number formats
max=""          minimum for number formats

placeholder=""  placeholder text for textbox
pattern=""      accepted pattern for input, for phone numbers it's "+[0-9]{3}-[0-9]{4}-[0-9]{4}"
value=""        value that's sent from radio button



## label        text to describe input
for="ID"        points to this ID. Always link 1 item to a label.

## select       dropdown menu
option          create an option for dropdown menu

## other
id="str"        unique id to point to
name="str:      non-unique, used when sending form data





-----
# Semantic elements (Header, Footer, etc)
----

These elements make the code more readable and more accessible to other programs.
Search engines use these to index and search pages.
Text-to-speech uses these to describe parts of the page


There are many semantic elements, most common are:

header      introductory content
nav         navigation bar, links
main        main content        (section, aside, article, div)
section     dependent content   (website specific content)
aside       side content        (content related to a section)
article     independent content
footer      closing content


Suggested structure for a page, using header, footer
<body>
    <header></header>
    <nav></nav>
    <main></main>
    <footer></footer>
</body>





-----
# Pagination (separate a document into numbered pages)
-----

## html part
Create a bunch of links and style them with css.
Back and forward could be done with javascript
(without javascript manually put in previous and next URLs)

<div class="pagination">
    <a href="">back</a>                    !!
    <a href="p1.html" class="active">1</a> !! switch these on every page
    <a href="p2.html">2</a>
    <a href="p3.html">3</a>
    <a href="">forward</a>                 !!



## css part
-- general styling
.pagination{
    css-properties
}

-- active menu page
.pagination a.active{
    css-properties
}

-- hovered (non-active)
.pagination a:hover:not(.active){
    css-properties
}





-----
# Dropdown menus
-----
Make some content with absolute position. Hide it unless hovered


# html part

<div class="dropdown">
    <button>Food</button>
    <div class="content">
        <a href="">Apple</a>
        <a href="">Orange</a>
        <a href="">Banana</a>
    </div>
</div>

<p> Content </p>

# css part
!!
.dropdown{
    display: inline-block;
}
!!
.dropdown button{
    cursor: pointer;
    optional properties: color, background-color, border, padding
}
!!
.dropdown a{
    display: block
    text-decoration: none
    optional properties: padding, color
}
!!
.dropdown .content{
    display: none;
    position: absolute;
    optional properties: min-width, background-color, box-shadow
}
!!
.dropdown:hover .content{
    display: block
}

.dropdown:hover button{
    optional properties: background-color
}

.dropdown a:hover{
    optional properties: background-color
}





-----
# Flexbox
-----
Flex is applied to the container to make layouts

## html

<div class="container">
        <div class="box" id="box1">1</div>
        <div class="box" id="box2">2</div>
        <div class="box" id="box3">3</div>
        <div class="box" id="box4">4</div>
</div>

## css - container properties

.container{
    display: flex;
    additional-properties
}

flex-direction              direction of item placement
args:   row                 all items will be in one row
        row-reverse
        column              all items will be in one column
        column-reverse

flex-wrap                   allows items to wrap to new lines
args:   nowrap              (default) all on one line
        wrap                wraps to the next line
        wrap-reverse        wraps in reverse order


flex-flow                   shorthand for flex-direction and flex-wrap
flex-flow: row wrap;



justify-content             Aligns items across the main axis 
                            !!  parallel to flex-direction

args:   flex-start          at the start
        flex-end            at the end
        center              centered
        space-between       equal gaps between
        space-around        area around is also included
        space-evenly        evenly spaced overall


align-items                 Aligns items across the cross axis:
                            !! crossed to the flex-direction

args:   stretch             stretches to full height (default)
        flex-start
        flex-end
        center
        baseline            aligns text baselines

align-content               aligns multiple rows (only if wrapping)
args:   flex-start
        flex-end
        center
        space-between
        space-around
        space-evenly
        stretch

gap / row-gap / column-gap  sets space between items (not outer edges)
gap: 10px;
row-gap: 10px;
column-gap: 10px;

## css - individual flex items properties
order: 2;               lower numbers appear first
align-self: flex-end    overrides align-items for a single element

flex-grow: 1;           how much an item expands to fill extra space
flex-shrink: 0;         how much an item shrinks when space is limited
flex-basis: 10px;       initial size before growing or shrinking

flex: 1 0 10px;         shorthand for grow, shrink, basis





-----
# 
-----
