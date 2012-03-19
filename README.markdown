# Useful plugins for use with jQuery

## ColumnizeLists

Given the following list:

<code>
<ul>
    <li>This is the first list item.</li>
    <li>This is the second list item with a lot of text that should cover at least two lines.</li>
    <li>This is the third list item.</li>
    <li>This is the forth list item.</li>
    <li>This is the fifth list item.</li>
</ul>
</code>

Calling *$('ul').columnizeLists()* will translate it into the following two lists:

<code>
<ul style="float: left; width: ...px">
    <li>This is the first list item.</li>
    <li>This is the second list item with a lot of text that should cover at least two lines.</li>
    <li>This is the third list item.</li>
</ul>
<ul style="float: left; width: ...px">
    <li>This is the forth list item.</li>
    <li>This is the fifth list item.</li>
</ul>
</code>

The width of the two <ul> elements will be calculated dynamically from the layout of the immediate parent and the original lists, i.e. we respect all paddings, margins, and borders defined.