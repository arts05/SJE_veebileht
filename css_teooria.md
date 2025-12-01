# CSS application - Inline, Internal, External

Class   Non-unique name for css and javascript application
        One element can have multiple classes

id      unique name for any application.
        One ID per element.

## Inline
<p style="color: white; background-color: black;">

## Internal
Add a style block to <head>

<style>
    body{
        color: white;
        background-color: blue;
    }
    #ID{}
    .class{}
</style>

## External
Create a css style sheet and link it to the html page
There is no limit on ".css per .html"
Later applications will (almost) always overwrite the previous style

The contents of the stylesheet work the same as internal style sheets
<body>
<link rel="stylesheet" href="global.css">
<link rel="stylesheet" href="home.css">
</body>


-----
# CSS properties
-----


# font
font-family: "str", "str";      Font type. You can have multiple fallbacks. Can use APIs or files.
font-size: 1em;                 px or em (1em ~ 100%scale) 
font-weight: bold;              numeric (100-900) or: normal, bold, bolder, lighter
font-style: italic;             normal, italic, oblique



# borders
border: 1px solid red;          (width style color)
border-radius: 10px;            rounds border edges (default is rectangle)
border-top: 3px solid;          4 options: top, bottom, left, right


--separate properties from "border":

border-style: solid;            solid, none, dashed, dotted, double, groove, ridge, inset, outset
border-width: 3px;      
border-color: color;



# shadows
properties: horiz.offset, vert.offset, blur, color
can have multiple shadows, separated by comma


text-shadow: 1px 1px 1px red, -1px -1px -1px blue;
box-shadow: 3px 3px 5px green;



# margins, padding

You can see a diagram of margins in inspect element > styles
element > padding > border > margin >> other elements

Padding will have same settings except: auto and negative values

margin: 1px;                all directions
margin: 1px 2px;            vertical > horizontal
margin: 1px 2px 3px;        top > horizontal > bottom
margin: 1px 2px 3px 4px;    top > clockwise

margin-top: 5px;            one direction
margin-right: 3px;          
margin-bottom: 1px;
margin-left: 1px;

margin: auto;               effectively centers the element
margin-left: auto;          push as far right as possible

margin: 10%;                percentage of parent size
margin: -1px;               negative values
margin: 1em;                px, em, rem, cm, ...



# float
Lets other elements take space (float) around them
When resizing the window, it will adjust accordingly

display: flow-root;         doesn't allow floating children to go out of parent's borders
                            use this on the parent

float: top;
float: right;               the item will be on the left == other elements flow on the right
float: bottom;
float: left;



# overflow
sets behaviour when the content does not fit in the parent element

overflow: visible;          default value. Wi
overflow: hidden;           any overflow will be hidden, but can be interacted with (copy)
overflow: clip;             sets how far the content can overflow. use with clip margin
overflow-clip-margin: 10px;
overflow: scroll;           adds a scrollbar
overflow: auto;             adds a scrollbar if necessary



# display, visibility
specifies if/how an element is displayed

block-level - start on a new line, take up the full width available
inline - do not start on a new line, width is limited to what is needed

display: block;             start on a new line, take up all available (or set) space
                            will force height-width parameters if it doesn't work by default

display: inline;            won't start on a new line, only takes up space of the actual content
                            effectively removes empty space from height-width parameters

display: inline-block;      inline, but applied width-height will be applied properly

display: none;              invisible, doesnt take up any space

visibility: hidden;         invisible, but takes up space



# width, height

height: 10px;               sets the height of an element
width: 10px;                sets the width of an element

max-width: 10px;            !! overrides set width if necessary
min-height: 10px;           !!

width: auto;                default value
width: 50%                  takes up 50% of parent
height: 100vh               viewport height - 100% window height


box-sizing: border-box;     width/height includes content, padding, border
                            !! Not including margins
box-sizing: content-box;    (default value) width/height applies to content only



# positions



top: 10px;                  position from top
right: 10px;                position from right
bottom: 10px;               position from bottom
left: 10px;                 position from left

position: keyword;          sets the mode of position

--keywords:
relative                    relative to where it normally is
fixed                       positioned relative to the viewport (window)
absolute                    relative to its parent
sticky                      based on scroll position
static                      default position



# background images

background-image: url(str);     set a background image
args:   none                    default value
        url(str)                set from url

background-repeat: no-repeat;   does the background image repeat infinitely?
args:   repeat-x, repeat-y      only repeat on this axis
        repeat, no-repeat
        space                   give space between repetitions
        round                   stretches the picture

background-position: center;    set background position
args:   top, bottom, left, right
        center
        10%, 10px

background-attachment: fixed    does the picture move when scrolling?
args:   scroll                  (default value) moves when scrolling the window 
        fixed                   doesn't move when scrolling
        local                   only moves when scrolling parents contents



# Combinators - explains the relationshop between listed selectors

  descendant
> child
~ general sibling
+ adjacent sibling

All of these examples apply css properties to paragraphs:

#container p{}      all descendants 
#container > p{}    all children (direct descendants)
#container ~ p{}    all items with the same parent
#container + p{}    all adjacent items with the same parent



# Pseudo-classes (:) - modify behaviour based on state

button:hover{
    css-property: xxx;
}

:not(:class)    not operator for pseudo-classes


:link           unvisited link
:any-link       all links
:visited        visited link


:hover          element under the mouse
:active         element being activated (clicked)
:checked        selected checkbox or radio button


:focus          active element, ready to take input
:focus-visible  element with visible focus
:focus-within   element containing focused element


:nth-child()    n'th child of an element
                input numbers, odd, even, 3n, 3n+1



# Pseudo-elements (::) style a specific part of an element

#selector::el{
    css-properties
}


::first-letter
::first-line
::placeholder       input's placeholder
::selection         selected text or item (usually blue highlight)

::marker            list's marker (usually black or white dot)
::backdrop          something to do with the background??

could be used with content: "";
::before            adds styling before an element (ex: checkmark before a line)
::after             adds styling after an element



# Transformations

Properties can be combined
transform: properties;
transform: property1 property2;

Properties list:

translateX(100px)       Move x units to the right (can be negative value)
translateY(100px)       Move y units to the bottom (can be negative)

translate(x, y)         Shorthand


rotateX(45deg)          Rotate on the x-axis (90° hides)
rotateY(45deg)          Rotate on the y-axis (90° hides)
rotateZ(45deg)          Rotate on the z-axis ("regular" rotation)


scaleX(1)               1=100%
scaleY(1)
scale(x, y)             shorthand


skewX()                 väänab??
skewY()
skew(x, y)              shorthand



# Animations
Changes (any?) css properties over time

#item{
      animation-name: slideLeft;
      animation-duration: 1s;  
}

@keyframes slideLeft{
    from{transform: translateX(100px)}
    50%{}
    to{}   
}


## properties for keyframes
   
from    describes the start
x%      describes a specific point in time 
        (if used separately, the remaining time will be used to transform back)
to      describes the end state


## properties for #item:

animation-name                  set an animation to an object
animation-duration              set how long it takes from 0-100%
animation-delay                 time before starting the animation
animation-iteration-count       how many times to repeat the animation

animation-play-state            manual pause
args:   running
        paused

animation-direction             set behaviour for repetitions
args:   normal
        reverse
        alternate
        alternate-reverse

animation-fill-mode             which state to keep outside of animation
args:   none
        forwards
        backwards
        both

animation-timing-function
args:   ease
        linear
        ease-in
        ease-out
        ease-in-out
        cubic-bezier(x1,y1,x2,y2)
        steps(n, start|end)

