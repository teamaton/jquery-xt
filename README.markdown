# Useful plugins for use with jQuery

## ColumnizeLists

This plugin aims at splitting HTML lists into two in browsers that don't support the necessary CSS 3 styles to do this without javascript.

### Split by item count

Given the following list:

    <ul>
        <li>This is the first list item.</li>
        <li>This is the second list item with a lot of text that should cover at least two lines.</li>
        <li>This is the third list item.</li>
        <li>This is the forth list item.</li>
        <li>This is the fifth list item.</li>
    </ul>

Calling <code>$('ul').columnizeLists()</code> will translate it into the following two lists:

    <ul style="float: left; width: ...px">
        <li>This is the first list item.</li>
        <li>This is the second list item with a lot of text that should cover at least two lines.</li>
        <li>This is the third list item.</li>
    </ul>
    <ul style="float: left; width: ...px">
        <li>This is the forth list item.</li>
        <li>This is the fifth list item.</li>
    </ul>

The width of the two **&lt;ul>** elements will be calculated dynamically from the layout of the immediate parent and the original lists, i.e. we respect all paddings, margins, and borders defined.

### Split by height

Calling <code>$('ul').columnizeLists({ useHeights: true })</code> instead will (in most cases) split the original list like this:

    <ul style="float: left; width: ...px">
        <li>This is the first list item.</li>
        <li>This is the second list item with a lot of text that should cover at least two lines.</li>
    </ul>
    <ul style="float: left; width: ...px">
        <li>This is the third list item.</li>
        <li>This is the forth list item.</li>
        <li>This is the fifth list item.</li>
    </ul>

That's because this way of splitting will (depending on your CSS styles for **ul** and **li**, of course) deliver a smaller total height for the two lists when shown next to each other.